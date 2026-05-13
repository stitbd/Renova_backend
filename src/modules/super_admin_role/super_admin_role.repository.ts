import { Prisma } from "../../generated/main-client";
import { mainPrisma } from "../../databases/prisma";

export const superAdminRoleRepository = {
    create(data: Prisma.SuperAdminRoleCreateInput) {
        return mainPrisma.superAdminRole.create({
            data,
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
                userRoles: {
                    include: {
                        superAdmin: true,
                    },
                },
            },
        });
    },

    findAll() {
        return mainPrisma.superAdminRole.findMany({
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
                        superAdmin: true,
                    },
                },
            },
        });
    },

    findById(id: string) {
        return mainPrisma.superAdminRole.findUnique({
            where: { id },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
                userRoles: {
                    include: {
                        superAdmin: true,
                    },
                },
            },
        });
    },

    findByName(name: string) {
        return mainPrisma.superAdminRole.findUnique({
            where: { name },
        });
    },

    findPermissionsByIds(permissionIds: string[]) {
        return mainPrisma.superAdminPermission.findMany({
            where: {
                id: {
                    in: permissionIds,
                },
            },
        });
    },

    update(id: string, data: Prisma.SuperAdminRoleUpdateInput) {
        return mainPrisma.superAdminRole.update({
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
                        superAdmin: true,
                    },
                },
            },
        });
    },

    delete(id: string) {
        return mainPrisma.superAdminRole.delete({
            where: { id },
        });
    },
};