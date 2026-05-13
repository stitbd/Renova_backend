import { mainPrisma } from "../../databases/prisma";
import { Prisma } from "../../generated/main-client";

const outletUserSelect = {
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
};

export const outletUserRepository = {
    create(data: Prisma.OutletUserCreateInput) {
        return mainPrisma.outletUser.create({
            data,
            select: outletUserSelect,
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
            select: outletUserSelect,
        });
    },

    findById(id: string) {
        return mainPrisma.outletUser.findUnique({
            where: { id },
            select: outletUserSelect,
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

    findByPhone(phone: string) {
        return mainPrisma.outletUser.findFirst({
            where: {
                phone,
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

    findRolesByIds(roleIds: string[], outletId: string) {
        return mainPrisma.outletRole.findMany({
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
            select: outletUserSelect,
        });
    },

    delete(id: string) {
        return mainPrisma.outletUser.delete({
            where: { id },
        });
    },
};