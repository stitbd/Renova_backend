import { mainPrisma } from "../../databases/prisma";
import { Prisma, RoleOwnerType } from "../../generated/main-client";

export const superAdminRoleRepository = {
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

    findAll() {
        return mainPrisma.role.findMany({
            where: {
                ownerType: RoleOwnerType.SUPER_ADMIN,
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
        return mainPrisma.role.findFirst({
            where: {
                id,
                ownerType: RoleOwnerType.SUPER_ADMIN,
            },
            include: {
                rolePermissions: {
                    include: {
                        permission: true,
                    },
                },
                superAdminUserRoles: {
                    include: {
                        superAdmin: true,
                    },
                },
            },
        });
    },

    findByName(name: string) {
        return mainPrisma.role.findFirst({
            where: {
                name,
                ownerType: RoleOwnerType.SUPER_ADMIN,
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