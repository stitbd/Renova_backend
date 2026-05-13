import { Prisma } from "../../generated/main-client";
import { mainPrisma } from "../../databases/prisma";

export const outletRoleRepository = {
    create(data: Prisma.OutletRoleCreateInput) {
        return mainPrisma.outletRole.create({
            data,
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
                userRoles: {
                    include: {
                        outletUser: true,
                    },
                },
            },
        });
    },

    findAll(outletId: string) {
        return mainPrisma.outletRole.findMany({
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
                userRoles: {
                    include: {
                        outletUser: true,
                    },
                },
            },
        });
    },

    findById(id: string) {
        return mainPrisma.outletRole.findUnique({
            where: { id },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
                userRoles: {
                    include: {
                        outletUser: true,
                    },
                },
            },
        });
    },

    findByNameAndOutlet(name: string, outletId: string) {
        return mainPrisma.outletRole.findFirst({
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
        return mainPrisma.outletPermission.findMany({
            where: {
                id: {
                    in: permissionIds,
                },
            },
        });
    },

    update(id: string, data: Prisma.OutletRoleUpdateInput) {
        return mainPrisma.outletRole.update({
            where: { id },
            data,
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
                userRoles: {
                    include: {
                        outletUser: true,
                    },
                },
            },
        });
    },

    delete(id: string) {
        return mainPrisma.outletRole.delete({
            where: { id },
        });
    },
};