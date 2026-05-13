import { outletPermissionRepository } from "./outlet_permission.repository";
import { CreateOutletPermissionInput, UpdateOutletPermissionInput } from "./outlet_permission.types";


export const outletPermissionService = {
    async create(data: CreateOutletPermissionInput) {
        const permissionExists = await outletPermissionRepository.findByKey(
            data.key
        );

        if (permissionExists) {
            throw new Error("Outlet permission already exists with this key");
        }

        return outletPermissionRepository.create({
            key: data.key,
            module: data.module,
            description: data.description,
        });
    },

    async getAll() {
        return outletPermissionRepository.findAll();
    },

    async getById(id: string) {
        const permission = await outletPermissionRepository.findById(id);

        if (!permission) {
            throw new Error("Outlet permission not found");
        }

        return permission;
    },

    async update(id: string, data: UpdateOutletPermissionInput) {
        await this.getById(id);

        if (data.key) {
            const permissionExists = await outletPermissionRepository.findByKey(
                data.key
            );

            if (permissionExists && permissionExists.id !== id) {
                throw new Error("Outlet permission already exists with this key");
            }
        }

        return outletPermissionRepository.update(id, {
            key: data.key,
            module: data.module,
            description: data.description,
        });
    },

    async delete(id: string) {
        await this.getById(id);

        return outletPermissionRepository.delete(id);
    },
};