import { permissionRepository } from "./permission.repository";

import {
    CreatePermissionInput,
    UpdatePermissionInput,
} from "./permission.types";

export const permissionService = {
    async create(data: CreatePermissionInput) {
        const permissionExists =
            await permissionRepository.findByKey(
                data.key
            );

        if (permissionExists) {
            throw new Error(
                "Permission already exists with this key"
            );
        }

        return permissionRepository.create({
            key: data.key,
            module: data.module,
            description: data.description,
        });
    },

    async getAll() {
        return permissionRepository.findAll();
    },

    async getById(id: string) {
        const permission =
            await permissionRepository.findById(id);

        if (!permission) {
            throw new Error("Permission not found");
        }

        return permission;
    },

    async update(
        id: string,
        data: UpdatePermissionInput
    ) {
        await this.getById(id);

        if (data.key) {
            const permissionExists =
                await permissionRepository.findByKey(
                    data.key
                );

            if (
                permissionExists &&
                permissionExists.id !== id
            ) {
                throw new Error(
                    "Permission already exists with this key"
                );
            }
        }

        return permissionRepository.update(id, {
            key: data.key,
            module: data.module,
            description: data.description,
        });
    },

    async delete(id: string) {
        await this.getById(id);

        return permissionRepository.delete(id);
    },
};