import { mainPrisma } from "../../databases/prisma";
import { PatientStatus, Prisma } from "../../generated/main-client";

export const patientRepository = {
  create(data: Prisma.PatientCreateInput) {
    return mainPrisma.patient.create({
      data,
    });
  },

  findByMobileNumber(mobileNumber: string) {
    return mainPrisma.patient.findUnique({
      where: {
        mobileNumber,
      },
    });
  },

  findByEmail(email: string) {
    return mainPrisma.patient.findFirst({
      where: {
        email,
      },
    });
  },

  findByEmailExceptId(email: string, id: string) {
    return mainPrisma.patient.findFirst({
      where: {
        email,
        NOT: {
          id,
        },
      },
    });
  },

  findById(id: string) {
    return mainPrisma.patient.findUnique({
      where: { id },
      include: {
        outlet: true,
      },
    });
  },

  findAll() {
    return mainPrisma.patient.findMany({
      include: {
        outlet: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  update(id: string, data: Prisma.PatientUpdateInput) {
    return mainPrisma.patient.update({
      where: { id },
      data,
    });
  },

  delete(id: string) {
    return mainPrisma.patient.delete({
      where: { id },
    });
  },

  updateStatus(id: string, status: PatientStatus) {
    return mainPrisma.patient.update({
      where: { id },
      data: {
        status,
      },
    });
  },
};