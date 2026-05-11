import { mainPrisma } from "../../databases/prisma";
import { Prisma, RoleOwnerType } from "../../generated/main-client";

export const superAdminRepository = {
    create(data: Prisma.SuperAdminsCreateInput) {
        return mainPrisma.superAdmins.create({
            data,
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isActive: true,
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
                createdAt: true,
                updatedAt: true,
            },
        });
    },

    findAll() {
        return mainPrisma.superAdmins.findMany({
            orderBy: {
                createdAt: "desc",
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isActive: true,
                userRoles: {
                    include: {
                        role: true,
                    },
                },
                createdAt: true,
                updatedAt: true,
            },
        });
    },

    findById(id: string) {
        return mainPrisma.superAdmins.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isActive: true,
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
                createdAt: true,
                updatedAt: true,
            },
        });
    },

    findByEmail(email: string) {
        return mainPrisma.superAdmins.findUnique({
            where: { email },

        });
    },

    findRolesByIds(roleIds: string[]) {
        return mainPrisma.role.findMany({
            where: {
                id: {
                    in: roleIds,
                },
                ownerType: RoleOwnerType.SUPER_ADMIN,
            },
        });
    },

    update(id: string, data: Prisma.SuperAdminsUpdateInput) {
        return mainPrisma.superAdmins.update({
            where: { id },
            data,
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    },

    delete(id: string) {
        return mainPrisma.superAdmins.delete({
            where: { id },
        });
    },
};