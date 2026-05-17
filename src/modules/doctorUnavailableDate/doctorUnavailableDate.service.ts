import { mainPrisma } from "../../databases/prisma";
import { AppError } from "../../utils/app_error";
import { AuthUser } from "../../middlewares/auth";

type CreateDoctorUnavailableDatePayload = {
  doctorId?: string;
  unavailableDate: string;
  startTime?: string;
  endTime?: string;
  reason?: string;
};

type UpdateDoctorUnavailableDatePayload =
  Partial<CreateDoctorUnavailableDatePayload>;

const buildDhakaDateOnly = (date: string): Date => {
  return new Date(`${date}T00:00:00+06:00`);
};

const getDhakaDateString = (date: Date): string => {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

const timeToMinutes = (time: string): number => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};

const validateTimeRange = (startTime?: string | null, endTime?: string | null) => {
  if ((startTime && !endTime) || (!startTime && endTime)) {
    throw new AppError("Both startTime and endTime are required together", 400);
  }

  if (startTime && endTime && timeToMinutes(startTime) >= timeToMinutes(endTime)) {
    throw new AppError("startTime must be before endTime", 400);
  }
};

const checkDoctorAccess = async (doctorId: string, authUser: AuthUser) => {
  const doctor = await mainPrisma.doctor.findUnique({
    where: { id: doctorId },
    select: {
      id: true,
      outletId: true,
      status: true,
    },
  });

  if (!doctor || doctor.status !== "ACTIVE") {
    throw new AppError("Doctor not found or inactive", 404);
  }

  if (authUser.userType === "DOCTOR" && authUser.id !== doctor.id) {
    throw new AppError(
      "You are not allowed to manage this doctor's unavailable dates",
      403
    );
  }

  if (
    authUser.userType === "OUTLET_USER" &&
    authUser.outletId !== doctor.outletId
  ) {
    throw new AppError(
      "You are not allowed to manage this doctor's unavailable dates",
      403
    );
  }

  return doctor;
};

const create = async (
  payload: CreateDoctorUnavailableDatePayload,
  authUser: AuthUser
) => {
  const doctorId =
    authUser.userType === "DOCTOR" ? authUser.id : payload.doctorId;

  if (!doctorId) {
    throw new AppError("doctorId is required", 400);
  }

  validateTimeRange(payload.startTime, payload.endTime);

  await checkDoctorAccess(doctorId, authUser);

  const unavailableDate = buildDhakaDateOnly(payload.unavailableDate);

  const existing = await mainPrisma.doctorUnavailableDate.findFirst({
    where: {
      doctorId,
      unavailableDate,
      startTime: payload.startTime ?? null,
      endTime: payload.endTime ?? null,
    },
  });

  if (existing) {
    throw new AppError("Unavailable date already exists for this time", 409);
  }

  return mainPrisma.doctorUnavailableDate.create({
    data: {
      doctorId,
      unavailableDate,
      startTime: payload.startTime ?? null,
      endTime: payload.endTime ?? null,
      reason: payload.reason,
    },
  });
};

const getByDoctor = async (doctorId: string, authUser: AuthUser) => {
  await checkDoctorAccess(doctorId, authUser);

  const result = await mainPrisma.doctorUnavailableDate.findMany({
    where: { doctorId },
    orderBy: [{ unavailableDate: "asc" }, { startTime: "asc" }],
  });

  return result.map((item) => ({
    ...item,
    unavailableDateLabel: getDhakaDateString(item.unavailableDate),
  }));
};

const update = async (
  id: string,
  payload: UpdateDoctorUnavailableDatePayload,
  authUser: AuthUser
) => {
  const unavailableDateRecord =
    await mainPrisma.doctorUnavailableDate.findUnique({
      where: { id },
    });

  if (!unavailableDateRecord) {
    throw new AppError("Unavailable date not found", 404);
  }

  await checkDoctorAccess(unavailableDateRecord.doctorId, authUser);

  const nextStartTime =
    payload.startTime !== undefined
      ? payload.startTime
      : unavailableDateRecord.startTime;

  const nextEndTime =
    payload.endTime !== undefined ? payload.endTime : unavailableDateRecord.endTime;

  validateTimeRange(nextStartTime, nextEndTime);

  const nextUnavailableDate = payload.unavailableDate
    ? buildDhakaDateOnly(payload.unavailableDate)
    : unavailableDateRecord.unavailableDate;

  const duplicate = await mainPrisma.doctorUnavailableDate.findFirst({
    where: {
      id: {
        not: id,
      },
      doctorId: unavailableDateRecord.doctorId,
      unavailableDate: nextUnavailableDate,
      startTime: nextStartTime ?? null,
      endTime: nextEndTime ?? null,
    },
  });

  if (duplicate) {
    throw new AppError("Unavailable date already exists for this time", 409);
  }

  return mainPrisma.doctorUnavailableDate.update({
    where: { id },
    data: {
      unavailableDate: payload.unavailableDate
        ? nextUnavailableDate
        : undefined,
      startTime: payload.startTime !== undefined ? payload.startTime : undefined,
      endTime: payload.endTime !== undefined ? payload.endTime : undefined,
      reason: payload.reason !== undefined ? payload.reason : undefined,
    },
  });
};

const remove = async (id: string, authUser: AuthUser) => {
  const unavailableDateRecord =
    await mainPrisma.doctorUnavailableDate.findUnique({
      where: { id },
    });

  if (!unavailableDateRecord) {
    throw new AppError("Unavailable date not found", 404);
  }

  await checkDoctorAccess(unavailableDateRecord.doctorId, authUser);

  await mainPrisma.doctorUnavailableDate.delete({
    where: { id },
  });

  return null;
};

export const doctorUnavailableDateService = {
  create,
  getByDoctor,
  update,
  remove,
};