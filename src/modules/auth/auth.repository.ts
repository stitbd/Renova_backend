import { mainPrisma } from "../../databases/prisma";
import { UserType } from "./auth.types";


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

    async findUserById(id: string, userType: UserType) {
  switch (userType) {
    case UserType.SUPER_ADMIN:
      return mainPrisma.superAdmins.findUnique({ where: { id } });

    case UserType.OUTLET_USER:
      return mainPrisma.outletUser.findUnique({ where: { id } });

    case UserType.DOCTOR:
      return mainPrisma.doctor.findUnique({ where: { id } });

    case UserType.PATIENT:
      return mainPrisma.patient.findUnique({ where: { id } });

    default:
      return null;
  }
},

async updatePassword(id: string, userType: UserType, hashedPassword: string) {
  switch (userType) {
    case UserType.SUPER_ADMIN:
      return mainPrisma.superAdmins.update({
        where: { id },
        data: { password: hashedPassword },
      });

    case UserType.OUTLET_USER:
      return mainPrisma.outletUser.update({
        where: { id },
        data: { password: hashedPassword },
      });

    case UserType.DOCTOR:
      return mainPrisma.doctor.update({
        where: { id },
        data: { password: hashedPassword },
      });

    case UserType.PATIENT:
      return mainPrisma.patient.update({
        where: { id },
        data: { password: hashedPassword },
      });

    default:
      throw new Error("Invalid user type");
  }
},

};