import { mainPrisma } from "../../databases/prisma";

import { RoleOwnerType } from "../../generated/main-client";

import { roleRepository } from "./role.repository";

import {
    AssignPermissionsInput,
    CreateRoleInput,
    UpdateRoleInput,
} from "./role.types";

export const roleService = {
    async create(data: CreateRoleInput) {
        const outlet = await roleRepository.findOutletById(
            data.outletId
        );

        if (!outlet) {
            throw new Error("Outlet not found");
        }

        const roleExists =
            await roleRepository.findByNameAndOutlet(
                data.name,
                data.outletId
            );

        if (roleExists) {
            throw new Error(
                "Role already exists in this outlet"
            );
        }

        if (data.permissionIds?.length) {
            const permissions =
                await roleRepository.findPermissionsByIds(
                    data.permissionIds
                );

            if (
                permissions.length !==
                data.permissionIds.length
            ) {
                throw new Error(
                    "One or more permissions are invalid"
                );
            }
        }

        return mainPrisma.$transaction(async (tx) => {
            const role = await tx.role.create({
                data: {
                    name: data.name,
                    ownerType: RoleOwnerType.OUTLET,

                    outlet: {
                        connect: {
                            id: data.outletId,
                        },
                    },
                },
            });

            if (data.permissionIds?.length) {
                await tx.rolePermission.createMany({
                    data: data.permissionIds.map(
                        (permissionId) => ({
                            roleId: role.id,
                            permissionId,
                        })
                    ),

                    skipDuplicates: true,
                });
            }

            return tx.role.findUnique({
                where: {
                    id: role.id,
                },

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

    async getAll( outletId: string ) {
        return roleRepository.findAll( outletId );
    },

    async getById(id: string) {
        const role = await roleRepository.findById(id);

        if (!role) {
            throw new Error("Role not found");
        }

        return role;
    },

    async update(id: string, data: UpdateRoleInput) {
        await this.getById(id);

        return roleRepository.update(id, {
            name: data.name,
        });
    },

    async assignPermissions(
        id: string,
        data: AssignPermissionsInput
    ) {
        await this.getById(id);

        const permissions =
            await roleRepository.findPermissionsByIds(
                data.permissionIds
            );

        if (
            permissions.length !==
            data.permissionIds.length
        ) {
            throw new Error(
                "One or more permissions are invalid"
            );
        }

        return mainPrisma.$transaction(async (tx) => {
            await tx.rolePermission.deleteMany({
                where: {
                    roleId: id,
                },
            });

            await tx.rolePermission.createMany({
                data: data.permissionIds.map(
                    (permissionId) => ({
                        roleId: id,
                        permissionId,
                    })
                ),

                skipDuplicates: true,
            });

            return tx.role.findUnique({
                where: {
                    id,
                },

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
        await this.getById(id);

        return roleRepository.delete(id);
    },
};