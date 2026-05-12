import { mainPrisma } from "../../databases/prisma";
import { Prisma } from "../../generated/main-client";

export const outletUserRepository = {
    create(data: Prisma.OutletUserCreateInput) {
        return mainPrisma.outletUser.create({
            data,
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isOwner: true,
                isActive: true,
                outlet: true,
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

    findAll(outletId: string) {
        return mainPrisma.outletUser.findMany({
            where: {
                outletId,
            },
            orderBy: {
                createdAt: "desc",
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isOwner: true,
                isActive: true,
                outlet: true,
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
        return mainPrisma.outletUser.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isOwner: true,
                isActive: true,
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
                createdAt: true,
                updatedAt: true,
            },
        });
    },

    findByEmailAndOutlet(email: string, outletId: string) {
        return mainPrisma.outletUser.findUnique({
            where: {
                email_outletId: {
                    email,
                    outletId,
                },
            },
        });
    },

    findOutletById(outletId: string) {
        return mainPrisma.outlet.findUnique({
            where: { id: outletId },
        });
    },

    findRolesByIds(roleIds: string[], outletId: string) {
        return mainPrisma.role.findMany({
            where: {
                id: {
                    in: roleIds,
                },
                outletId,
            },
        });
    },

    update(id: string, data: Prisma.OutletUserUpdateInput) {
        return mainPrisma.outletUser.update({
            where: { id },
            data,
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                isOwner: true,
                isActive: true,
                outlet: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    },

    delete(id: string) {
        return mainPrisma.outletUser.delete({
            where: { id },
        });
    },
};