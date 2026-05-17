import { Prisma } from "../../generated/appointment-client";
import { appointmentPrisma, mainPrisma } from "../../databases/prisma";

import {
    buildDhakaDateTime,
    generateAppointmentCode,
    getDayName,
    getDhakaDateString,
    getDhakaTimeString,
    GetDoctorSlotsPayload,
    isTimeOverlapping,
    isValidDateString,
    minutesToTime,
    SlotResponse,
    timeToMinutes,
    validateStatusTransition,
} from "./appointment.utils";
import { AppError } from "../../utils/app_error";

type AuthUser = {
    id: string;
    userType: "PATIENT" | "DOCTOR" | "OUTLET_USER" | "SUPER_ADMIN";
    outletId?: string;

};

type CreateAppointmentPayload = {
    doctorId: string;
    appointmentDate: string;
    startTime: string;
    endTime: string;
    type: "IN_PERSON" | "ONLINE";
    reason?: string;
};




const createAppointment = async (
    payload: CreateAppointmentPayload,
    authUser: AuthUser
) => {
    if (authUser.userType !== "PATIENT") {
        throw new AppError("Only patients can create appointments", 403);
    }

    const patientId = authUser.id;

    const appointmentDate = buildDhakaDateTime(payload.appointmentDate, "00:00");
    const startTime = buildDhakaDateTime(payload.appointmentDate, payload.startTime);
    const endTime = buildDhakaDateTime(payload.appointmentDate, payload.endTime);

    if (startTime >= endTime) {
        throw new AppError("Start time must be before end time", 400);
    }

    if (startTime.getTime() < Date.now()) {
        throw new AppError("Cannot book appointment in the past", 400);
    }

    const doctor = await mainPrisma.doctor.findUnique({
        where: { id: payload.doctorId },
        include: {
            schedules: true,
            unavailableDates: true,
        },
    });

    if (!doctor || doctor.status !== "ACTIVE") {
        throw new AppError("Doctor is not available", 404);
    }

    const patient = await mainPrisma.patient.findUnique({
        where: { id: patientId },
    });

    if (!patient || !patient.isActive || patient.status !== "ACTIVE") {
        throw new AppError("Patient account is inactive", 403);
    }

    const dayName = getDayName(startTime);

    const schedule = doctor.schedules.find(
        (item) => item.dayName.toUpperCase() === dayName && item.status === "ACTIVE"
    );

    if (!schedule) {
        throw new AppError("Doctor has no active schedule on this day", 400);
    }

    const requestedStartMinutes = timeToMinutes(payload.startTime);
    const requestedEndMinutes = timeToMinutes(payload.endTime);

    const scheduleStartMinutes = timeToMinutes(schedule.startTime);
    const scheduleEndMinutes = timeToMinutes(schedule.endTime);

    if (
        requestedStartMinutes < scheduleStartMinutes ||
        requestedEndMinutes > scheduleEndMinutes
    ) {
        throw new AppError("Requested time is outside doctor's schedule", 400);
    }

    const requestedDuration = requestedEndMinutes - requestedStartMinutes;

    if (requestedDuration !== schedule.slotDuration) {
        throw new AppError(
            `Appointment duration must be ${schedule.slotDuration} minutes`,
            400
        );
    }

    const unavailableDate = doctor.unavailableDates.find((item) => {
        const sameDate = getDhakaDateString(item.unavailableDate) === payload.appointmentDate;

        if (!sameDate) return false;

        if (!item.startTime || !item.endTime) return true;

        return isTimeOverlapping(
            requestedStartMinutes,
            requestedEndMinutes,
            timeToMinutes(item.startTime),
            timeToMinutes(item.endTime)
        );
    });

    if (unavailableDate) {
        throw new AppError("Doctor is unavailable during this time", 400);
    }

    try {
        return await appointmentPrisma.$transaction(async (tx) => {
            const createdAppointment = await tx.appointment.create({
                data: {
                    appointmentCode: generateAppointmentCode(),
                    doctorId: doctor.id,
                    patientId,
                    outletId: doctor.outletId || null,
                    appointmentDate,
                    startTime,
                    endTime,
                    type: payload.type,
                    reason: payload.reason,
                    consultationFee: doctor.consultationFee,
                    status: "PENDING",
                    paymentStatus: "UNPAID",
                },
            });

            await tx.appointmentSlotLock.create({
                data: {
                    doctorId: doctor.id,
                    startTime,
                    appointmentId: createdAppointment.id,
                },
            });

            await tx.appointmentStatusLog.create({
                data: {
                    appointmentId: createdAppointment.id,
                    previousStatus: null,
                    newStatus: "PENDING",
                    changedById: patientId,
                    changedByRole: "PATIENT",
                    note: "Appointment created",
                },
            });

            return createdAppointment;
        });
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            throw new AppError("This slot is already booked", 409);
        }

        throw error;
    }
};
const getMyAppointments = async (authUser: AuthUser) => {
    const where =
        authUser.userType === "PATIENT"
            ? { patientId: authUser.id }
            : authUser.userType === "DOCTOR"
                ? { doctorId: authUser.id }
                : authUser.userType === "OUTLET_USER"
                    ? { outletId: authUser.outletId }
                    : {};

    return appointmentPrisma.appointment.findMany({
        where,
        orderBy: {
            startTime: "desc",
        },
        include: {
            payment: true,
            statusLogs: true,
        },
    });
};

const cancelAppointment = async (
    appointmentId: string,
    authUser: AuthUser,
    cancellationReason: string
) => {
    const appointment = await appointmentPrisma.appointment.findUnique({
        where: {
            id: appointmentId,
        },
    });

    if (!appointment) {
        throw new AppError("Appointment not found", 404,);
    }

    if (!validateStatusTransition(appointment.status, "CANCELLED")) {
        throw new AppError("Cannot cancel " + appointment.status + " appointment", 400,);
    }

    if (authUser.userType === "PATIENT" && appointment.patientId !== authUser.id) {
        throw new AppError("You are not allowed to cancel this appointment", 403,);
    }

    if (authUser.userType === "DOCTOR" && appointment.doctorId !== authUser.id) {
        throw new AppError("You are not allowed to cancel this appointment", 403,);
    }

    if (
        authUser.userType === "OUTLET_USER" &&
        appointment.outletId !== authUser.outletId
    ) {
        throw new AppError("You are not allowed to cancel this appointment", 403,);
    }

    return appointmentPrisma.$transaction(async (tx) => {
        const updated = await tx.appointment.update({
            where: {
                id: appointmentId,
            },
            data: {
                status: "CANCELLED",
                cancelledBy: authUser.userType,
                cancelledAt: new Date(),
                cancellationReason,
            },
        });

        await tx.appointmentSlotLock.deleteMany({
            where: {
                appointmentId,
            },
        });

        await tx.appointmentStatusLog.create({
            data: {
                appointmentId,
                previousStatus: appointment.status,
                newStatus: "CANCELLED",
                changedById: authUser.id,
                changedByRole: authUser.userType,
                note: cancellationReason,
            },
        });

        return updated;
    });
};

const updateAppointmentStatus = async (
    appointmentId: string,
    nextStatus: "CONFIRMED" | "COMPLETED" | "NO_SHOW",
    authUser: AuthUser
) => {
    const appointment = await appointmentPrisma.appointment.findUnique({
        where: {
            id: appointmentId,
        },
    });

    if (!appointment) {
        throw new AppError("Appointment not found", 404,);
    }

    if (!validateStatusTransition(appointment.status, nextStatus)) {
        throw new AppError(

            `Cannot change appointment from ${appointment.status} to ${nextStatus}`, 404,
        );
    }

    const data: Record<string, unknown> = {
        status: nextStatus,
    };

    if (nextStatus === "CONFIRMED") data.confirmedAt = new Date();
    if (nextStatus === "COMPLETED") data.completedAt = new Date();

    return appointmentPrisma.$transaction(async (tx) => {
        const updated = await tx.appointment.update({
            where: {
                id: appointmentId,
            },
            data,
        });

        await tx.appointmentStatusLog.create({
            data: {
                appointmentId,
                previousStatus: appointment.status,
                newStatus: nextStatus,
                changedById: authUser.id,
                changedByRole: authUser.userType,
            },
        });

        return updated;
    });

};


const getDoctorSlots = async ({ doctorId, date }: GetDoctorSlotsPayload) => {
    if (!date) {
        throw new AppError("date query is required. Example: ?date=2026-05-25", 400);
    }

    if (!isValidDateString(date)) {
        throw new AppError("Invalid date format. Use YYYY-MM-DD", 400);
    }

    const selectedDate = buildDhakaDateTime(date, "00:00");

    const doctor = await mainPrisma.doctor.findUnique({
        where: { id: doctorId },
        include: {
            schedules: true,
            unavailableDates: true,
        },
    });

    if (!doctor || doctor.status !== "ACTIVE") {
        throw new AppError("Doctor not found or inactive", 404);
    }

    const dayName = getDayName(selectedDate);

    const schedule = doctor.schedules.find(
        (item) => item.dayName.toUpperCase() === dayName && item.status === "ACTIVE"
    );

    if (!schedule) {
        return {
            doctorId,
            date,
            dayName,
            schedule: null,
            slots: [],
        };
    }

    const scheduleStart = timeToMinutes(schedule.startTime);
    const scheduleEnd = timeToMinutes(schedule.endTime);

    const dayStart = buildDhakaDateTime(date, "00:00");
    const nextDay = new Date(dayStart);
    nextDay.setUTCDate(nextDay.getUTCDate() + 1);

    const bookedAppointments = await appointmentPrisma.appointment.findMany({
        where: {
            doctorId,
            status: {
                in: ["PENDING", "CONFIRMED"],
            },
            startTime: {
                gte: dayStart,
                lt: nextDay,
            },
        },
        select: {
            id: true,
            startTime: true,
        },
    });

    const bookedMap = new Map<string, string>();

    for (const appointment of bookedAppointments) {
        bookedMap.set(getDhakaTimeString(appointment.startTime), appointment.id);
    }

    const unavailableForDate = doctor.unavailableDates.filter((item) => {
        return getDhakaDateString(item.unavailableDate) === date;
    });

    const slots: SlotResponse[] = [];

    for (
        let start = scheduleStart;
        start + schedule.slotDuration <= scheduleEnd;
        start += schedule.slotDuration
    ) {
        const end = start + schedule.slotDuration;

        const startLabel = minutesToTime(start);
        const endLabel = minutesToTime(end);

        const slotStartDate = buildDhakaDateTime(date, startLabel);
        const slotEndDate = buildDhakaDateTime(date, endLabel);

        const bookedAppointmentId = bookedMap.get(startLabel) || null;

        const unavailableBlock = unavailableForDate.find((item) => {
            if (!item.startTime || !item.endTime) {
                return true;
            }

            return isTimeOverlapping(
                start,
                end,
                timeToMinutes(item.startTime),
                timeToMinutes(item.endTime)
            );
        });

        const isPast = slotStartDate.getTime() < Date.now();
        const isBooked = Boolean(bookedAppointmentId);
        const isUnavailable = Boolean(unavailableBlock);

        let disabledReason: SlotResponse["disabledReason"] = null;

        if (isPast) disabledReason = "PAST_SLOT";
        else if (isBooked) disabledReason = "BOOKED";
        else if (isUnavailable) disabledReason = "DOCTOR_UNAVAILABLE";

        slots.push({
            startTime: slotStartDate.toISOString(),
            endTime: slotEndDate.toISOString(),
            startLabel,
            endLabel,
            isAvailable: !isPast && !isBooked && !isUnavailable,
            isBooked,
            isUnavailable,
            disabledReason,
            appointmentId: bookedAppointmentId,
        });
    }

    return {
        doctorId,
        date,
        dayName,
        schedule: {
            startTime: schedule.startTime,
            endTime: schedule.endTime,
            slotDuration: schedule.slotDuration,
        },
        slots,
    };
};


export const appointmentService = {
    createAppointment,
    getMyAppointments,
    cancelAppointment,
    updateAppointmentStatus,
    getDoctorSlots

};