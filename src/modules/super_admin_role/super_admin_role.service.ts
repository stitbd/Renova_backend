import { mainPrisma } from "../../databases/prisma";
import { RoleOwnerType } from "../../generated/main-client";
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
                throw new Error("One or more permissions are invalid");
            }
        }

        return mainPrisma.$transaction(async (tx) => {
            const role = await tx.role.create({
                data: {
                    name: data.name,
                    ownerType: RoleOwnerType.SUPER_ADMIN,
                },
            });

            if (data.permissionIds?.length) {
                await tx.rolePermission.createMany({
                    data: data.permissionIds.map((permissionId) => ({
                        roleId: role.id,
                        permissionId,
                    })),
                    skipDuplicates: true,
                });
            }

            return tx.role.findUnique({
                where: { id: role.id },
                include: {
                    rolePermissions: {
                        include: {
                            permission: true,
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
            throw new Error("One or more permissions are invalid");
        }

        return mainPrisma.$transaction(async (tx) => {
            await tx.rolePermission.deleteMany({
                where: {
                    roleId: id,
                },
            });

            await tx.rolePermission.createMany({
                data: data.permissionIds.map((permissionId) => ({
                    roleId: id,
                    permissionId,
                })),
                skipDuplicates: true,
            });

            return tx.role.findUnique({
                where: { id },
                include: {
                    rolePermissions: {
                        include: {
                            permission: true,
                        },
                    },
                },
            });
        });
    },

    async delete(id: string) {
        const role = await this.getById(id);

        if (role.superAdminUserRoles.length > 0) {
            throw new Error("Cannot delete role assigned to super admins");
        }

        return superAdminRoleRepository.delete(id);
    },
};