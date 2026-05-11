import bcrypt from "bcryptjs";
import { mainPrisma } from "../../databases/prisma";
import { env } from "../../configs/env";
import { superAdminRepository } from "./super_admin.repository";
import {
    AssignSuperAdminRolesInput,
    CreateSuperAdminInput,
    UpdateSuperAdminInput,
} from "./super_admin.types";

export const superAdminService = {
    async create(data: CreateSuperAdminInput) {
        const emailExists = await superAdminRepository.findByEmail(data.email);

        if (emailExists) {
            throw new Error("Super admin already exists with this email");
        }

        if (data.roleIds?.length) {
            const roles = await superAdminRepository.findRolesByIds(data.roleIds);

            if (roles.length !== data.roleIds.length) {
                throw new Error("One or more roles are invalid");
            }
        }

        const hashedPassword = await bcrypt.hash(
            data.password,
            env.bcrypt_salt_rounds
        );

        return mainPrisma.$transaction(async (tx) => {
            const superAdmin = await tx.superAdmins.create({
                data: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    password: hashedPassword,
                    isActive: data.isActive ?? true,
                },
            });

            if (data.roleIds?.length) {
                await tx.superAdminUserRole.createMany({
                    data: data.roleIds.map((roleId) => ({
                        superAdminId: superAdmin.id,
                        roleId,
                    })),
                    skipDuplicates: true,
                });
            }

            return tx.superAdmins.findUnique({
                where: { id: superAdmin.id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    isActive: true,
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
                },
            });
        });
    },

    async getAll() {
        return superAdminRepository.findAll();
    },

    async getById(id: string) {
        const user = await superAdminRepository.findById(id);

        if (!user) {
            throw new Error("Super admin not found");
        }

        return user;
    },

    async update(id: string, data: UpdateSuperAdminInput) {
        await this.getById(id);

        if (data.email) {
            const emailExists = await superAdminRepository.findByEmail(data.email);

            if (emailExists && emailExists.id !== id) {
                throw new Error("Super admin already exists with this email");
            }
        }

        return superAdminRepository.update(id, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            isActive: data.isActive,
        });
    },

    async assignRoles(id: string, data: AssignSuperAdminRolesInput) {
        await this.getById(id);

        const roles = await superAdminRepository.findRolesByIds(data.roleIds);

        if (roles.length !== data.roleIds.length) {
            throw new Error("One or more roles are invalid");
        }

        return mainPrisma.$transaction(async (tx) => {
            await tx.superAdminUserRole.deleteMany({
                where: {
                    superAdminId: id,
                },
            });

            await tx.superAdminUserRole.createMany({
                data: data.roleIds.map((roleId) => ({
                    superAdminId: id,
                    roleId,
                })),
                skipDuplicates: true,
            });

            return tx.superAdmins.findUnique({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    isActive: true,
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
                },
            });
        });
    },

    async updateStatus(id: string, isActive: boolean) {
        await this.getById(id);

        return superAdminRepository.update(id, {
            isActive,
        });
    },

    async delete(id: string) {
        await this.getById(id);

        return superAdminRepository.delete(id);
    },
};