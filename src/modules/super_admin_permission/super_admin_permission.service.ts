import { superAdminPermissionRepository } from "./super_admin_permission.repository";
import {
    CreateSuperAdminPermissionInput,
    UpdateSuperAdminPermissionInput,
} from "./super_admin_permission.types";

export const superAdminPermissionService = {
    async create(data: CreateSuperAdminPermissionInput) {
        const permissionExists = await superAdminPermissionRepository.findByKey(
            data.key
        );

        if (permissionExists) {
            throw new Error("Super admin permission already exists with this key");
        }

        return superAdminPermissionRepository.create({
            key: data.key,
            module: data.module,
            description: data.description,
        });
    },

    async getAll() {
        return superAdminPermissionRepository.findAll();
    },

    async getById(id: string) {
        const permission = await superAdminPermissionRepository.findById(id);

        if (!permission) {
            throw new Error("Super admin permission not found");
        }

        return permission;
    },

    async update(id: string, data: UpdateSuperAdminPermissionInput) {
        await this.getById(id);

        if (data.key) {
            const permissionExists = await superAdminPermissionRepository.findByKey(
                data.key
            );

            if (permissionExists && permissionExists.id !== id) {
                throw new Error("Super admin permission already exists with this key");
            }
        }

        return superAdminPermissionRepository.update(id, {
            key: data.key,
            module: data.module,
            description: data.description,
        });
    },

    async delete(id: string) {
        await this.getById(id);

        return superAdminPermissionRepository.delete(id);
    },
};