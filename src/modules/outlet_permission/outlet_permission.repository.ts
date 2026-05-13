import { Prisma } from "../../generated/main-client";
import { mainPrisma } from "../../databases/prisma";

export const outletPermissionRepository = {
    create(data: Prisma.OutletPermissionCreateInput) {
        return mainPrisma.outletPermission.create({
            data,
        });
    },

    findAll() {
        return mainPrisma.outletPermission.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    },

    findById(id: string) {
        return mainPrisma.outletPermission.findUnique({
            where: {
                id,
            },
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
        return mainPrisma.outletPermission.findUnique({
            where: {
                key,
            },
        });
    },

    update(id: string, data: Prisma.OutletPermissionUpdateInput) {
        return mainPrisma.outletPermission.update({
            where: {
                id,
            },
            data,
        });
    },

    delete(id: string) {
        return mainPrisma.outletPermission.delete({
            where: {
                id,
            },
        });
    },
};