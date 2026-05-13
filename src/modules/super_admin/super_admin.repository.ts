import { mainPrisma } from "../../databases/prisma";
import { Prisma } from "../../generated/main-client";

const superAdminSelect = {
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
};

export const superAdminRepository = {
    create(data: Prisma.SuperAdminsCreateInput) {
        return mainPrisma.superAdmins.create({
            data,
            select: superAdminSelect,
        });
    },

    findAll() {
        return mainPrisma.superAdmins.findMany({
            orderBy: {
                createdAt: "desc",
            },
            select: superAdminSelect,
        });
    },

    findById(id: string) {
        return mainPrisma.superAdmins.findUnique({
            where: { id },
            select: superAdminSelect,
        });
    },

    findByEmail(email: string) {
        return mainPrisma.superAdmins.findUnique({
            where: { email },
        });
    },

    findByPhone(phone: string) {
        return mainPrisma.superAdmins.findUnique({
            where: { phone },
        });
    },

    findRolesByIds(roleIds: string[]) {
        return mainPrisma.superAdminRole.findMany({
            where: {
                id: {
                    in: roleIds,
                },
            },
        });
    },

    update(id: string, data: Prisma.SuperAdminsUpdateInput) {
        return mainPrisma.superAdmins.update({
            where: { id },
            data,
            select: superAdminSelect,
        });
    },

    delete(id: string) {
        return mainPrisma.superAdmins.delete({
            where: { id },
        });
    },
};