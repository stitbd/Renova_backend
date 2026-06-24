import { appointmentPrisma, mainPrisma } from "../../databases/prisma";
import { AuthUser } from "../../middlewares/auth";
import { AppError } from "../../utils/app_error";
import { generatePrescriptionCode } from "./prescription.utils";

type MedicinePayload = {
  medicineName: string;
  dosage?: string;
  frequency?: string;
  duration?: string;
  instruction?: string;
};

type TestPayload = {
  testName: string;
  instruction?: string;
};

type CreatePrescriptionPayload = {
  appointmentId: string;
  chiefComplaint?: string;
  diagnosis?: string;
  advice?: string;
  followUpDate?: string;
  medicines?: MedicinePayload[];
  tests?: TestPayload[];
};

const createPrescription = async (
  payload: CreatePrescriptionPayload,
  authUser: AuthUser
) => {
  if (authUser.userType !== "DOCTOR") {
    throw new AppError("Only doctors can create prescriptions", 403);
  }

  const appointment = await appointmentPrisma.appointment.findUnique({
    where: {
      id: payload.appointmentId,
    },
  });

  if (!appointment) {
    throw new AppError("Appointment not found", 404);
  }

  if (appointment.doctorId !== authUser.id) {
    throw new AppError("You are not allowed to prescribe for this appointment", 403);
  }

  if (appointment.status !== "CONFIRMED" && appointment.status !== "COMPLETED") {
    throw new AppError(
      "Prescription can only be created for confirmed or completed appointments",
      400
    );
  }

  const existingPrescription =
    await appointmentPrisma.prescription.findUnique({
      where: {
        appointmentId: payload.appointmentId,
      },
    });

  if (existingPrescription) {
    throw new AppError("Prescription already exists for this appointment", 409);
  }

  return appointmentPrisma.$transaction(async (tx) => {
    const prescription = await tx.prescription.create({
      data: {
        prescriptionCode: generatePrescriptionCode(),

        appointmentId: appointment.id,
        doctorId: appointment.doctorId,
        patientId: appointment.patientId,

        chiefComplaint: payload.chiefComplaint,
        diagnosis: payload.diagnosis,
        advice: payload.advice,
        followUpDate: payload.followUpDate
          ? new Date(payload.followUpDate)
          : null,

        medicines: {
          create: payload.medicines?.map((medicine) => ({
            medicineName: medicine.medicineName,
            dosage: medicine.dosage,
            frequency: medicine.frequency,
            duration: medicine.duration,
            instruction: medicine.instruction,
          })),
        },

        tests: {
          create: payload.tests?.map((test) => ({
            testName: test.testName,
            instruction: test.instruction,
          })),
        },
      },
      include: {
        medicines: true,
        tests: true,
        appointment: true,
      },
    });

    // if (appointment.status === "CONFIRMED") {

    //   await tx.appointment.update({
    //     where: {
    //       id: appointment.id,
    //     },
    //     data: {
    //       status: "COMPLETED",
    //       completedAt: new Date(),
    //     },
    //   });

    //   await tx.appointmentStatusLog.create({
    //     data: {
    //       appointmentId: appointment.id,
    //       previousStatus: "CONFIRMED",
    //       newStatus: "COMPLETED",
    //       changedById: authUser.id,
    //       changedByRole: authUser.userType,
    //       note: "Appointment completed after prescription creation",
    //     },
    //   });
    // }

    return prescription;
  });
};

const getMyPrescriptions = async (authUser: AuthUser) => {
  const where =
    authUser.userType === "PATIENT"
      ? { patientId: authUser.id }
      : authUser.userType === "DOCTOR"
        ? { doctorId: authUser.id }
        : {};

  const prescriptions = await appointmentPrisma.prescription.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      medicines: true,
      tests: true,
      appointment: true,
    },
  });

  const doctorIds = [...new Set(prescriptions.map((item) => item.doctorId))];
  const patientIds = [...new Set(prescriptions.map((item) => item.patientId))];

  const [doctors, patients] = await Promise.all([
    mainPrisma.doctor.findMany({
      where: {
        id: {
          in: doctorIds,
        },
      },
      select: {
        id: true,
        fullName: true,
        qualification: true,
        currentDesignation: true,
        specialization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    }),

    mainPrisma.patient.findMany({
      where: {
        id: {
          in: patientIds,
        },
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        mobileNumber: true,
        gender: true,
        dateOfBirth: true,
      },
    }),
  ]);

  const doctorMap = new Map(doctors.map((doctor) => [doctor.id, doctor]));
  const patientMap = new Map(patients.map((patient) => [patient.id, patient]));

  return prescriptions.map((prescription) => ({
    ...prescription,
    doctor: doctorMap.get(prescription.doctorId) || null,
    patient: patientMap.get(prescription.patientId) || null,
  }));
};

const getSinglePrescription = async (
  prescriptionId: string,
  authUser: AuthUser
) => {
  const prescription = await appointmentPrisma.prescription.findUnique({
    where: {
      id: prescriptionId,
    },
    include: {
      medicines: true,
      tests: true,
      appointment: true,
    },
  });

  if (!prescription) {
    throw new AppError("Prescription not found", 404);
  }

  const isAllowed =
    authUser.userType === "SUPER_ADMIN" ||
    prescription.doctorId === authUser.id ||
    prescription.patientId === authUser.id;

  if (!isAllowed) {
    throw new AppError("You are not allowed to view this prescription", 403);
  }

  const [doctor, patient] = await Promise.all([
    mainPrisma.doctor.findUnique({
      where: {
        id: prescription.doctorId,
      },
      select: {
        id: true,
        fullName: true,
        qualification: true,
        currentDesignation: true,
        bmdcNumber: true,
        specialization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    }),

    mainPrisma.patient.findUnique({
      where: {
        id: prescription.patientId,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        mobileNumber: true,
        gender: true,
        dateOfBirth: true,
        bloodGroup: true,
      },
    }),
  ]);

  return {
    ...prescription,
    doctor,
    patient,
  };
};

const updatePrescription = async (
  prescriptionId: string,
  payload: Partial<CreatePrescriptionPayload>,
  authUser: AuthUser
) => {
  const prescription = await appointmentPrisma.prescription.findUnique({
    where: {
      id: prescriptionId,
    },
    include: {
      appointment: true,
    },
  });

  if (!prescription) {
    throw new AppError("Prescription not found", 404);
  }

  if (authUser.userType !== "DOCTOR" || prescription.doctorId !== authUser.id) {
    throw new AppError("You are not allowed to update this prescription", 403);
  }

  return appointmentPrisma.$transaction(async (tx) => {
    await tx.prescriptionMedicine.deleteMany({
      where: {
        prescriptionId,
      },
    });

    await tx.prescriptionTest.deleteMany({
      where: {
        prescriptionId,
      },
    });

    return tx.prescription.update({
      where: {
        id: prescriptionId,
      },
      data: {
        chiefComplaint: payload.chiefComplaint,
        diagnosis: payload.diagnosis,
        advice: payload.advice,
        followUpDate: payload.followUpDate
          ? new Date(payload.followUpDate)
          : undefined,

        medicines: {
          create: payload.medicines?.map((medicine) => ({
            medicineName: medicine.medicineName,
            dosage: medicine.dosage,
            frequency: medicine.frequency,
            duration: medicine.duration,
            instruction: medicine.instruction,
          })),
        },

        tests: {
          create: payload.tests?.map((test) => ({
            testName: test.testName,
            instruction: test.instruction,
          })),
        },
      },
      include: {
        medicines: true,
        tests: true,
        appointment: true,
      },
    });
  });
};

const getPrescriptionByAppointment = async (
  appointmentId: string,
  authUser: AuthUser
) => {
  const prescription = await appointmentPrisma.prescription.findUnique({
    where: {
      appointmentId,
    },
    include: {
      medicines: true,
      tests: true,
      appointment: true,
    },
  });

  if (!prescription) {
    throw new AppError("Prescription not found for this appointment", 404);
  }

  const isAllowed =
    authUser.userType === "SUPER_ADMIN" ||
    prescription.doctorId === authUser.id ||
    prescription.patientId === authUser.id;

  if (!isAllowed) {
    throw new AppError("You are not allowed to view this prescription", 403);
  }

  return prescription;
};



export const prescriptionService = {
  createPrescription,
  getMyPrescriptions,
  getSinglePrescription,
  updatePrescription,

    getPrescriptionByAppointment
};