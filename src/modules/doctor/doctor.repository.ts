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
        documents: true,
        schedules: true,
        outlet: true,
      },
    });
  },

  async findAll(options: any = {}) {
    return mainPrisma.doctor.findMany(options);   // or your current implementation
  }
  ,
  async count(options: any = {}) {
    return mainPrisma.doctor.count({ where: options.where });
  },

  findById(id: string) {
    return mainPrisma.doctor.findUnique({
      where: { id },
      include: {
        specialization: true,
        documents: true,
        schedules: true,
        outlet: true,
      },
    });
  },

  findDoctorsBySpecializationName(specializationName: string) {
    return mainPrisma.doctor.findMany({
      where: {
        specialization: {
          name: specializationName,
        },
      },
      include: {
        specialization: true,
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
        documents: true,
        schedules: true,
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

  findSpecializationByName(name: string) {
    return mainPrisma.doctorSpecialization.findUnique({
      where: { name },
    });
  },
};