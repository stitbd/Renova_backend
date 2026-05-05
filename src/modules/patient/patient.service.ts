import { mainPrisma } from "../../databases/prisma";
import { CreatePatientInput } from "./patient.types";
import bcrypt from "bcryptjs";

export const patientService = {
    async create(data: CreatePatientInput) {
        // check duplicate
        // console.log('patient payload', data);
        const exists = await mainPrisma.patient.findUnique({
            where: { mobileNumber: data.mobileNumber },
        });

        if (exists) {
            throw new Error("Patient already exists with this mobile number");
        }

        return mainPrisma.patient.create({
            data: {
                ...data,
                dateOfBirth: data.dateOfBirth
                    ? new Date(data.dateOfBirth)
                    : undefined,
            },
        });
    },

    async getAll() {
        return mainPrisma.patient.findMany({
            orderBy: { createdAt: "desc" },
        });
    },

    async getById(id: string) {
        const patient = await mainPrisma.patient.findUnique({
            where: { id },
        });

        if (!patient) throw new Error("Patient not found");

        return patient;
    },

    async update(id: string, data: Partial<CreatePatientInput>) {
        await this.getById(id);

        return mainPrisma.patient.update({
            where: { id },
            data: {
                ...data,
                dateOfBirth: data.dateOfBirth
                    ? new Date(data.dateOfBirth)
                    : undefined,
            },
        });
    },

    async delete(id: string) {
        await this.getById(id);

        return mainPrisma.patient.delete({
            where: { id },
        });
    },
};