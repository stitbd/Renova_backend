import { mainPrisma } from "../../databases/prisma";
import {
    DoctorOnlineStatus,
    DoctorStatus,
    Prisma,
    ScheduleStatus,
    VerificationStatus,
} from "../../generated/main-client";

export const doctorSpecializationRepository = {

    createSpecialization(data: Prisma.DoctorSpecializationCreateInput) {
        return mainPrisma.doctorSpecialization.create({
            data,
        });
    },

    findAllSpecializations() {
        return mainPrisma.doctorSpecialization.findMany({
            orderBy: {
                name: "asc",
            },
        });
    },

    findSpecializationById(id: string) {
        return mainPrisma.doctorSpecialization.findUnique({
            where: { id },
        });
    },

    findSpecializationByName(name: string) {
        return mainPrisma.doctorSpecialization.findUnique({
            where: { name },
        });
    },

    updateSpecialization(id: string, data: Prisma.DoctorSpecializationUpdateInput) {
        return mainPrisma.doctorSpecialization.update({
            where: { id },
            data,
        });
    },

    deleteSpecialization(id: string) {
        return mainPrisma.doctorSpecialization.delete({
            where: { id },
        });
    },

};