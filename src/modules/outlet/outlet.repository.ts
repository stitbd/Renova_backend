import { mainPrisma } from "../../databases/prisma";
import { Prisma } from "../../generated/main-client";

export const outletRepository = {
    create(data: Prisma.outletCreateInput) {
        return mainPrisma.outlet.create({
            data,
            include: {
                users: true,
                outletRoles: {
                    include: {
                        rolePermissions: {
                            include: {
                                permission: true,
                            },
                        },
                    },
                },
            },
        });
    },

    findAll() {
        return mainPrisma.outlet.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                users: true,
                outletRoles: true,
            },
        });
    },

    findById(id: string) {
        return mainPrisma.outlet.findUnique({
            where: { id },
            include: {
                users: true,
                outletRoles: {
                    include: {
                        rolePermissions: {
                            include: {
                                permission: true,
                            },
                        },
                    },
                },
                patients: true,
                doctors: true,
            },
        });
    },

    findLastOutlet() {
        return mainPrisma.outlet.findFirst({
            orderBy: {
                createdAt: "desc",
            },
            select: {
                outletCode: true,
            },
        });
    },

    findByEmail(email: string) {
        return mainPrisma.outlet.findUnique({
            where: { email },
        });
    },

    findOutletUserByEmail(email: string) {
        return mainPrisma.outletUser.findFirst({
            where: { email },
        });
    },

    findOutletUserByPhone(phone: string) {
        return mainPrisma.outletUser.findFirst({
            where: { phone },
        });
    },

    findBySubdomain(subdomain: string) {
        return mainPrisma.outlet.findUnique({
            where: { subdomain },
        });
    },

    update(id: string, data: Prisma.outletUpdateInput) {
        return mainPrisma.outlet.update({
            where: { id },
            data,
            include: {
                users: true,
                outletRoles: true,
            },
        });
    },

    delete(id: string) {
        return mainPrisma.outlet.delete({
            where: { id },
        });
    },
};