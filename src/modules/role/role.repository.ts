import { Prisma } from "../../generated/main-client";
import { mainPrisma } from "../../databases/prisma";

export const roleRepository = {
    create(data: Prisma.RoleCreateInput) {
        return mainPrisma.role.create({
            data,
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });
    },

    findAll(outletId: string) {
        return mainPrisma.role.findMany({
            where: {
                outletId,
            },
            orderBy: {
                createdAt: "desc",
            },

            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });
    },

    findById(id: string) {
        return mainPrisma.role.findUnique({
            where: { id },

            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },

                outletUserRoles: {
                    include: {
                        outletUser: true,
                    },
                },
            },
        });
    },

    findByNameAndOutlet(
        name: string,
        outletId: string
    ) {
        return mainPrisma.role.findFirst({
            where: {
                name,
                outletId,
            },
        });
    },

    findOutletById(outletId: string) {
        return mainPrisma.outlet.findUnique({
            where: {
                id: outletId,
            },
        });
    },

    findPermissionsByIds(permissionIds: string[]) {
        return mainPrisma.permission.findMany({
            where: {
                id: {
                    in: permissionIds,
                },
            },
        });
    },

    update(id: string, data: Prisma.RoleUpdateInput) {
        return mainPrisma.role.update({
            where: { id },
            data,
        });
    },

    delete(id: string) {
        return mainPrisma.role.delete({
            where: { id },
        });
    },
};