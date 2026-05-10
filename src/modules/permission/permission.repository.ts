import { Prisma } from "../../generated/main-client";
import { mainPrisma } from "../../databases/prisma";

export const permissionRepository = {
    create(data: Prisma.PermissionCreateInput) {
        return mainPrisma.permission.create({
            data,
        });
    },

    findAll() {
        return mainPrisma.permission.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    },

    findById(id: string) {
        return mainPrisma.permission.findUnique({
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
        return mainPrisma.permission.findUnique({
            where: {
                key,
            },
        });
    },

    update(
        id: string,
        data: Prisma.PermissionUpdateInput
    ) {
        return mainPrisma.permission.update({
            where: {
                id,
            },

            data,
        });
    },

    delete(id: string) {
        return mainPrisma.permission.delete({
            where: {
                id,
            },
        });
    },
};