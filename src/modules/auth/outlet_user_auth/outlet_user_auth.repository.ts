import { mainPrisma } from "../../../databases/prisma";

export const outletAuthRepository = {
  findOutletUserByPhone(phone: string) {
    return mainPrisma.outletUser.findFirst({
      where: {
        phone,
      },

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
};