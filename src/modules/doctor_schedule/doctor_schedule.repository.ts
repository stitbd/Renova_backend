import { mainPrisma } from "../../databases/prisma";
import {
  Prisma,
  ScheduleStatus,
} from "../../generated/main-client";

export const doctorScheduleRepository = {
  createSchedule(data: Prisma.DoctorScheduleCreateInput) {
    return mainPrisma.doctorSchedule.create({
      data,
      include: {
        doctor: true,
      },
    });
  },

  findScheduleById(id: string) {
    return mainPrisma.doctorSchedule.findUnique({
      where: { id },
      include: {
        doctor: true,
      },
    });
  },

  findSchedulesByDoctorId(doctorId: string) {
    return mainPrisma.doctorSchedule.findMany({
      where: { doctorId },
      orderBy: {
        dayName: "asc",
      },
    });
  },

  updateSchedule(id: string, data: Prisma.DoctorScheduleUpdateInput) {
    return mainPrisma.doctorSchedule.update({
      where: { id },
      data,
    });
  },

  updateScheduleStatus(id: string, status: ScheduleStatus) {
    return mainPrisma.doctorSchedule.update({
      where: { id },
      data: {
        status,
      },
    });
  },

  deleteSchedule(id: string) {
    return mainPrisma.doctorSchedule.delete({
      where: { id },
    });
  },
};