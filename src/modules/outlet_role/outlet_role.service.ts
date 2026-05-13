import { mainPrisma } from "../../databases/prisma";
import { outletRoleRepository } from "./outlet_role.repository";
import {
    AssignOutletPermissionsInput,
    CreateOutletRoleInput,
    UpdateOutletRoleInput,
} from "./outlet_role.types";

export const outletRoleService = {
    async create(data: CreateOutletRoleInput) {
        const outlet = await outletRoleRepository.findOutletById(data.outletId);

        if (!outlet) {
            throw new Error("Outlet not found");
        }

        const roleExists = await outletRoleRepository.findByNameAndOutlet(
            data.name,
            data.outletId
        );

        if (roleExists) {
            throw new Error("Outlet role already exists in this outlet");
        }

        if (data.permissionIds?.length) {
            const permissions = await outletRoleRepository.findPermissionsByIds(
                data.permissionIds
            );

            if (permissions.length !== data.permissionIds.length) {
                throw new Error("One or more outlet permissions are invalid");
            }
        }

        return mainPrisma.$transaction(async (tx) => {
            const role = await tx.outletRole.create({
                data: {
                    outlet: {
                        connect: {
                            id: data.outletId,
                        },
                    },
                    name: data.name,
                },
            });

            if (data.permissionIds?.length) {
                await tx.outletRolePermission.createMany({
                    data: data.permissionIds.map((permissionId) => ({
                        roleId: role.id,
                        permissionId,
                    })),
                    skipDuplicates: true,
                });
            }

            return tx.outletRole.findUnique({
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
                            outletUser: true,
                        },
                    },
                },
            });
        });
    },

    async getAll(outletId: string) {
        const outlet = await outletRoleRepository.findOutletById(outletId);

        if (!outlet) {
            throw new Error("Outlet not found");
        }

        return outletRoleRepository.findAll(outletId);
    },

    async getById(id: string) {
        const role = await outletRoleRepository.findById(id);

        if (!role) {
            throw new Error("Outlet role not found");
        }

        return role;
    },

    async update(id: string, data: UpdateOutletRoleInput) {
        const role = await this.getById(id);

        if (data.name && data.name !== role.name) {
            const roleExists = await outletRoleRepository.findByNameAndOutlet(
                data.name,
                role.outletId
            );

            if (roleExists && roleExists.id !== id) {
                throw new Error("Outlet role already exists in this outlet");
            }
        }

        return outletRoleRepository.update(id, {
            name: data.name,
        });
    },

    async assignPermissions(id: string, data: AssignOutletPermissionsInput) {
        await this.getById(id);

        const permissions = await outletRoleRepository.findPermissionsByIds(
            data.permissionIds
        );

        if (permissions.length !== data.permissionIds.length) {
            throw new Error("One or more outlet permissions are invalid");
        }

        return mainPrisma.$transaction(async (tx) => {
            await tx.outletRolePermission.deleteMany({
                where: {
                    roleId: id,
                },
            });

            await tx.outletRolePermission.createMany({
                data: data.permissionIds.map((permissionId) => ({
                    roleId: id,
                    permissionId,
                })),
                skipDuplicates: true,
            });

            return tx.outletRole.findUnique({
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
                            outletUser: true,
                        },
                    },
                },
            });
        });
    },

    async delete(id: string) {
        const role = await this.getById(id);

        if (role.userRoles.length > 0) {
            throw new Error("Cannot delete role assigned to outlet users");
        }

        return outletRoleRepository.delete(id);
    },
};