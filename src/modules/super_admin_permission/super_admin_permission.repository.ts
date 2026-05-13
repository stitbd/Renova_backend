import { Prisma } from "../../generated/main-client";
import { mainPrisma } from "../../databases/prisma";

export const superAdminPermissionRepository = {
  create(data: Prisma.SuperAdminPermissionCreateInput) {
    return mainPrisma.superAdminPermission.create({
      data,
    });
  },

  findAll() {
    return mainPrisma.superAdminPermission.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  findById(id: string) {
    return mainPrisma.superAdminPermission.findUnique({
      where: { id },
      include: {
        rolePermissions: {
          include: {
            role: true,
          },
        },
      },
    });
  },

  findByKey(key: string) {
    return mainPrisma.superAdminPermission.findUnique({
      where: { key },
    });
  },

  update(id: string, data: Prisma.SuperAdminPermissionUpdateInput) {
    return mainPrisma.superAdminPermission.update({
      where: { id },
      data,
    });
  },

  delete(id: string) {
    return mainPrisma.superAdminPermission.delete({
      where: { id },
    });
  },
};