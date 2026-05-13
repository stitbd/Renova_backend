import bcrypt from "bcryptjs";
import { mainPrisma } from "../../databases/prisma";
import { env } from "../../configs/env";
import { outletUserRepository } from "./outlet_user.repository";
import {
    AssignOutletUserRolesInput,
    CreateOutletUserInput,
    UpdateOutletUserInput,
} from "./outlet_user.types";

export const outletUserService = {
    async create(data: CreateOutletUserInput) {
        const outlet = await outletUserRepository.findOutletById(data.outletId);

        if (!outlet) {
            throw new Error("Outlet not found");
        }

        const emailExists = await outletUserRepository.findByEmailAndOutlet(
            data.email,
            data.outletId
        );

        if (emailExists) {
            throw new Error("Outlet user already exists with this email in this outlet");
        }

        if (data.phone) {
            const phoneExists = await outletUserRepository.findByPhone(data.phone);

            if (phoneExists) {
                throw new Error("Outlet user already exists with this phone number");
            }
        }

        if (data.roleIds?.length) {
            const roles = await outletUserRepository.findRolesByIds(
                data.roleIds,
                data.outletId
            );

            if (roles.length !== data.roleIds.length) {
                throw new Error("One or more roles are invalid for this outlet");
            }
        }

        const hashedPassword = await bcrypt.hash(
            data.password,
            Number(env.bcrypt_salt_rounds)
        );

        return mainPrisma.$transaction(async (tx) => {
            const outletUser = await tx.outletUser.create({
                data: {
                    outletId: data.outletId,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    password: hashedPassword,
                    isOwner: false,
                    isActive: data.isActive ?? true,
                },
            });

            if (data.roleIds?.length) {
                await tx.outletUserRole.createMany({
                    data: data.roleIds.map((roleId) => ({
                        outletUserId: outletUser.id,
                        roleId,
                    })),
                    skipDuplicates: true,
                });
            }

            return tx.outletUser.findUnique({
                where: {
                    id: outletUser.id,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    isOwner: true,
                    isActive: true,
                    outlet: true,
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

    async getAll(outletId: string) {
        const outlet = await outletUserRepository.findOutletById(outletId);

        if (!outlet) {
            throw new Error("Outlet not found");
        }

        return outletUserRepository.findAll(outletId);
    },

    async getById(id: string) {
        const user = await outletUserRepository.findById(id);

        if (!user) {
            throw new Error("Outlet user not found");
        }

        return user;
    },

    async update(id: string, data: UpdateOutletUserInput) {
        const existingUser = await this.getById(id);

        if (existingUser.isOwner) {
            throw new Error("Owner user cannot be updated from this API");
        }

        if (data.email) {
            const emailExists = await outletUserRepository.findByEmailAndOutlet(
                data.email,
                existingUser.outlet.id
            );

            if (emailExists && emailExists.id !== id) {
                throw new Error("Outlet user already exists with this email in this outlet");
            }
        }

        if (data.phone) {
            const phoneExists = await outletUserRepository.findByPhone(data.phone);

            if (phoneExists && phoneExists.id !== id) {
                throw new Error("Outlet user already exists with this phone number");
            }
        }

        return outletUserRepository.update(id, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            isActive: data.isActive,
        });
    },

    async assignRoles(id: string, data: AssignOutletUserRolesInput) {
        const existingUser = await this.getById(id);

        if (existingUser.isOwner) {
            throw new Error("Owner user roles cannot be changed from this API");
        }

        const roles = await outletUserRepository.findRolesByIds(
            data.roleIds,
            existingUser.outlet.id
        );

        if (roles.length !== data.roleIds.length) {
            throw new Error("One or more roles are invalid for this outlet");
        }

        return mainPrisma.$transaction(async (tx) => {
            await tx.outletUserRole.deleteMany({
                where: {
                    outletUserId: id,
                },
            });

            await tx.outletUserRole.createMany({
                data: data.roleIds.map((roleId) => ({
                    outletUserId: id,
                    roleId,
                })),
                skipDuplicates: true,
            });

            return tx.outletUser.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    isOwner: true,
                    isActive: true,
                    outlet: true,
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
        const existingUser = await this.getById(id);

        if (existingUser.isOwner) {
            throw new Error("Owner user status cannot be changed from this API");
        }

        return outletUserRepository.update(id, {
            isActive,
        });
    },

    async delete(id: string) {
        const existingUser = await this.getById(id);

        if (existingUser.isOwner) {
            throw new Error("Owner user cannot be deleted from this API");
        }

        return outletUserRepository.delete(id);
    },
};