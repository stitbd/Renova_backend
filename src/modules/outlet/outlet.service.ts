import { env } from "../../configs/env";
import { mainPrisma } from "../../databases/prisma";
import { Prisma, RoleOwnerType } from "../../generated/main-client";
import { outletRepository } from "./outlet.repository";
import { CreateOutletInput, UpdateOutletInput } from "./outlet.types";
import bcrypt from "bcrypt";

export const outletService = {
    async create(data: CreateOutletInput) {
        const outletEmailExists = await mainPrisma.outlet.findUnique({
            where: {
                email: data.email,
            },
        });

        if (outletEmailExists) {
            throw new Error("Outlet already exists with this email");
        }

        const outletUserEmailExists = await mainPrisma.outletUser.findFirst({
            where: {
                email: data.email,
            },
        });

        if (outletUserEmailExists) {
            throw new Error("Outlet user already exists with this email");
        }

        const subdomainExists = await mainPrisma.outlet.findUnique({
            where: {
                subdomain: data.subdomain,
            },
        });

        if (subdomainExists) {
            throw new Error("Outlet already exists with this subdomain");
        }

        const lastOutlet = await mainPrisma.outlet.findFirst({
            orderBy: {
                createdAt: "desc",
            },
            select: {
                outletCode: true,
            },
        });

        let outletCode = "OUT_0001";

        if (lastOutlet?.outletCode) {
            const lastNumber = parseInt(lastOutlet.outletCode.split("_")[1]);
            const nextNumber = lastNumber + 1;

            outletCode = `OUT_${String(nextNumber).padStart(4, "0")}`;
        }

        const hashedPassword = await bcrypt.hash(
            data.password,
            env.bcrypt_salt_rounds
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

            const adminRole = await tx.role.create({
                data: {
                    name: "Admin",
                    ownerType: RoleOwnerType.OUTLET,
                    outletId: outlet.id,
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
                outletUser,
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
        }

        if (data.subdomain) {
            const subdomainExists = await outletRepository.findBySubdomain(data.subdomain);

            if (subdomainExists && subdomainExists.id !== id) {
                throw new Error("Outlet already exists with this subdomain");
            }
        }

        return outletRepository.update(id, {
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
        });
    },

    async delete(id: string) {
        await this.getById(id);
        return outletRepository.delete(id);
    },
};