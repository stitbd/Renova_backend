import { mainPrisma } from "../../databases/prisma";
import { superAdminRoleRepository } from "./super_admin_role.repository";
import {
    AssignSuperAdminRolePermissionsInput,
    CreateSuperAdminRoleInput,
    UpdateSuperAdminRoleInput,
} from "./super_admin_role.types";

export const superAdminRoleService = {
    async create(data: CreateSuperAdminRoleInput) {
        const roleExists = await superAdminRoleRepository.findByName(data.name);

        if (roleExists) {
            throw new Error("Super admin role already exists with this name");
        }

        if (data.permissionIds?.length) {
            const permissions = await superAdminRoleRepository.findPermissionsByIds(
                data.permissionIds
            );

            if (permissions.length !== data.permissionIds.length) {
                throw new Error("One or more super admin permissions are invalid");
            }
        }

        return mainPrisma.$transaction(async (tx) => {
            const role = await tx.superAdminRole.create({
                data: {
                    name: data.name,
                },
            });

            if (data.permissionIds?.length) {
                await tx.superAdminRolePermission.createMany({
                    data: data.permissionIds.map((permissionId) => ({
                        roleId: role.id,
                        permissionId,
                    })),
                    skipDuplicates: true,
                });
            }

            return tx.superAdminRole.findUnique({
                where: {
                    id: role.id,
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
        });
    },

    async getAll() {
        return superAdminRoleRepository.findAll();
    },

    async getById(id: string) {
        const role = await superAdminRoleRepository.findById(id);

        if (!role) {
            throw new Error("Super admin role not found");
        }

        return role;
    },

    async update(id: string, data: UpdateSuperAdminRoleInput) {
        await this.getById(id);

        if (data.name) {
            const roleExists = await superAdminRoleRepository.findByName(data.name);

            if (roleExists && roleExists.id !== id) {
                throw new Error("Super admin role already exists with this name");
            }
        }

        return superAdminRoleRepository.update(id, {
            name: data.name,
        });
    },

    async assignPermissions(
        id: string,
        data: AssignSuperAdminRolePermissionsInput
    ) {
        await this.getById(id);

        const permissions = await superAdminRoleRepository.findPermissionsByIds(
            data.permissionIds
        );

        if (permissions.length !== data.permissionIds.length) {
            throw new Error("One or more super admin permissions are invalid");
        }

        return mainPrisma.$transaction(async (tx) => {
            await tx.superAdminRolePermission.deleteMany({
                where: {
                    roleId: id,
                },
            });

            await tx.superAdminRolePermission.createMany({
                data: data.permissionIds.map((permissionId) => ({
                    roleId: id,
                    permissionId,
                })),
                skipDuplicates: true,
            });

            return tx.superAdminRole.findUnique({
                where: {
                    id,
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
        });
    },

    async delete(id: string) {
        const role = await this.getById(id);

        if (role.userRoles.length > 0) {
            throw new Error("Cannot delete role assigned to super admins");
        }

        return superAdminRoleRepository.delete(id);
    },
};