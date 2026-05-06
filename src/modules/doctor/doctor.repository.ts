import { mainPrisma } from "../../databases/prisma";
import {
  DoctorOnlineStatus,
  DoctorStatus,
  Prisma,
} from "../../generated/main-client";

export const doctorRepository = {
  create(data: Prisma.DoctorCreateInput) {
    return mainPrisma.doctor.create({
      data,
      include: {
        specialization: true,
        document: true,
        schedule: true,
        outlet: true,
      },
    });
  },
  findAll() {
    return mainPrisma.doctor.findMany({
      include: {
        specialization: true,
        document: true,
        schedule: true,
        outlet: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  findById(id: string) {
    return mainPrisma.doctor.findUnique({
      where: { id },
      include: {
        specialization: true,
        document: true,
        schedule: true,
        outlet: true,
      },
    });
  },

  findByEmail(email: string) {
    return mainPrisma.doctor.findFirst({
      where: { email },
    });
  },

  findByMobile(mobile: string) {
    return mainPrisma.doctor.findFirst({
      where: { mobile },
    });
  },

  findByBMDCNumber(bmdcNumber: string) {
    return mainPrisma.doctor.findUnique({
      where: { bmdcNumber },
    });
  },

  findByDoctorCode(doctorCode: string) {
    return mainPrisma.doctor.findUnique({
      where: { doctorCode },
    });
  },

  findLastDoctor() {
    return mainPrisma.doctor.findFirst({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        doctorCode: true,
      },
    });
  },

  update(id: string, data: Prisma.DoctorUpdateInput) {
    return mainPrisma.doctor.update({
      where: { id },
      data,
      include: {
        specialization: true,
        document: true,
        schedule: true,
        outlet: true,
      },
    });
  },

  delete(id: string) {
    return mainPrisma.doctor.delete({
      where: { id },
    });
  },

  updateStatus(id: string, status: DoctorStatus) {
    return mainPrisma.doctor.update({
      where: { id },
      data: { status },
    });
  },

  updateOnlineStatus(id: string, onlineStatus: DoctorOnlineStatus) {
    return mainPrisma.doctor.update({
      where: { id },
      data: { onlineStatus },
    });
  },
};