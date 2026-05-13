import { mainPrisma } from "../../databases/prisma";


export const authRepository = {
    async findSuperAdminByPhone(phone: string) {
        return mainPrisma.superAdmins.findFirst({
            where: { phone },
            include: {
                userRoles: {
                    include: {
                        role: {
                            include: {
                                rolePermissions: {
                                    include: {
                                        permission: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    },

    async findOutletUserByPhone(phone: string) {
        return mainPrisma.outletUser.findFirst({
            where: { phone },
            include: {
                outlet: true,
                userRoles: {
                    include: {
                        role: {
                            include: {
                                rolePermissions: {
                                    include: {
                                        permission: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    },

    async findDoctorByPhone(phone: string) {
        return mainPrisma.doctor.findFirst({
            where: {
                mobile: phone,
            },
            include: {
                specialization: true,
                outlet: true,
            },
        });
    },

    async findPatientByPhone(phone: string) {
        return mainPrisma.patient.findUnique({
            where: {
                mobileNumber: phone,
            },
        });
    },
};