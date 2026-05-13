import bcrypt from "bcrypt";
import { env } from "../../configs/env";
import { mainPrisma } from "../../databases/prisma";
import { Prisma } from "../../generated/main-client";
import { outletRepository } from "./outlet.repository";
import { CreateOutletInput, UpdateOutletInput } from "./outlet.types";

export const outletService = {
    async create(data: CreateOutletInput) {
        const outletEmailExists = await outletRepository.findByEmail(data.email);

        if (outletEmailExists) {
            throw new Error("Outlet already exists with this email");
        }

        const outletUserEmailExists = await outletRepository.findOutletUserByEmail(
            data.email
        );

        if (outletUserEmailExists) {
            throw new Error("Outlet user already exists with this email");
        }

        const outletUserPhoneExists = await outletRepository.findOutletUserByPhone(
            data.contactNumber
        );

        if (outletUserPhoneExists) {
            throw new Error("Outlet user already exists with this phone number");
        }

        const subdomainExists = await outletRepository.findBySubdomain(
            data.subdomain
        );

        if (subdomainExists) {
            throw new Error("Outlet already exists with this subdomain");
        }

        const lastOutlet = await outletRepository.findLastOutlet();

        let outletCode = "OUT_0001";

        if (lastOutlet?.outletCode) {
            const lastNumber = Number(lastOutlet.outletCode.split("_")[1]);

            if (!Number.isNaN(lastNumber)) {
                outletCode = `OUT_${String(lastNumber + 1).padStart(4, "0")}`;
            }
        }

        const hashedPassword = await bcrypt.hash(
            data.password,
            Number(env.bcrypt_salt_rounds)
        );

        return mainPrisma.$transaction(async (tx) => {
            const outlet = await tx.outlet.create({
                data: {
                    outletCode,
                    outletName: data.outletName,
                    subdomain: data.subdomain,
                    division: data.division,
                    district: data.district,
                    area: data.area,
                    address: data.address,
                    contactNumber: data.contactNumber,
                    email: data.email,
                    password: hashedPassword,
                    latitude:
                        data.latitude !== undefined
                            ? new Prisma.Decimal(data.latitude)
                            : undefined,
                    longitude:
                        data.longitude !== undefined
                            ? new Prisma.Decimal(data.longitude)
                            : undefined,
                    status: data.status,
                },
            });

            const outletUser = await tx.outletUser.create({
                data: {
                    outletId: outlet.id,
                    name: outlet.outletName,
                    email: outlet.email,
                    phone: outlet.contactNumber,
                    password: hashedPassword,
                    isOwner: true,
                    isActive: true,
                },
            });

            const adminRole = await tx.outletRole.create({
                data: {
                    outletId: outlet.id,
                    name: "Admin",
                },
            });

            await tx.outletUserRole.create({
                data: {
                    outletUserId: outletUser.id,
                    roleId: adminRole.id,
                },
            });

            return {
                outlet,
                outletUser: {
                    id: outletUser.id,
                    name: outletUser.name,
                    email: outletUser.email,
                    phone: outletUser.phone,
                    isOwner: outletUser.isOwner,
                    isActive: outletUser.isActive,
                    outletId: outletUser.outletId,
                    createdAt: outletUser.createdAt,
                    updatedAt: outletUser.updatedAt,
                },
                role: adminRole,
            };
        });
    },

    async getAll() {
        return outletRepository.findAll();
    },

    async getById(id: string) {
        const outlet = await outletRepository.findById(id);

        if (!outlet) {
            throw new Error("Outlet not found");
        }

        return outlet;
    },

    async update(id: string, data: UpdateOutletInput) {
        await this.getById(id);

        if (data.email) {
            const emailExists = await outletRepository.findByEmail(data.email);

            if (emailExists && emailExists.id !== id) {
                throw new Error("Outlet already exists with this email");
            }

            const outletUserEmailExists = await outletRepository.findOutletUserByEmail(
                data.email
            );

            if (outletUserEmailExists && outletUserEmailExists.outletId !== id) {
                throw new Error("Outlet user already exists with this email");
            }
        }

        if (data.contactNumber) {
            const outletUserPhoneExists = await outletRepository.findOutletUserByPhone(
                data.contactNumber
            );

            if (outletUserPhoneExists && outletUserPhoneExists.outletId !== id) {
                throw new Error("Outlet user already exists with this phone number");
            }
        }

        if (data.subdomain) {
            const subdomainExists = await outletRepository.findBySubdomain(
                data.subdomain
            );

            if (subdomainExists && subdomainExists.id !== id) {
                throw new Error("Outlet already exists with this subdomain");
            }
        }

        return mainPrisma.$transaction(async (tx) => {
            const updatedOutlet = await tx.outlet.update({
                where: { id },
                data: {
                    outletName: data.outletName,
                    subdomain: data.subdomain,
                    division: data.division,
                    district: data.district,
                    area: data.area,
                    address: data.address,
                    contactNumber: data.contactNumber,
                    email: data.email,
                    latitude:
                        data.latitude !== undefined
                            ? new Prisma.Decimal(data.latitude)
                            : undefined,
                    longitude:
                        data.longitude !== undefined
                            ? new Prisma.Decimal(data.longitude)
                            : undefined,
                    status: data.status,
                },
            });

            await tx.outletUser.updateMany({
                where: {
                    outletId: id,
                    isOwner: true,
                },
                data: {
                    name: data.outletName,
                    email: data.email,
                    phone: data.contactNumber,
                },
            });

            return updatedOutlet;
        });
    },

    async delete(id: string) {
        await this.getById(id);

        return outletRepository.delete(id);
    },
};