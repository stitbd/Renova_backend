import { env } from "../../configs/env";
import { PatientStatus } from "../../generated/main-client";
import { patientRepository } from "./patient.repository";
import { CreatePatientInput } from "./patient.types";
import bcrypt from "bcryptjs";

export const patientService = {
  async create(data: CreatePatientInput) {
    const exists = await patientRepository.findByMobileNumber(
      data.mobileNumber
    );

    if (exists) {
      throw new Error("Patient already exists with this mobile number");
    }

    if (data.email) {
      const emailExists = await patientRepository.findByEmail(data.email);

      if (emailExists) {
        throw new Error("Patient already exists with this email");
      }
    }
    const hashedPassword = await bcrypt.hash(
      data.password,
      env.bcrypt_salt_rounds
    );

    const lastPatient = await patientRepository.findLastPatient();
    let patientCode = "PAT_0001";
    if (lastPatient && lastPatient.patientCode) {
      const lastNumber = parseInt(lastPatient.patientCode.split("_")[1]);
      patientCode = `PAT_${String(lastNumber + 1).padStart(4, "0")}`;
    }

    console.log("Generated patientCode:", patientCode);
    return patientRepository.create({
      referenceName: data.referenceName,
      patientCode: patientCode,
      fullName: data.fullName,
      mobileNumber: data.mobileNumber,
      email: data.email,
      password: hashedPassword,

      dateOfBirth: data.dateOfBirth
        ? new Date(data.dateOfBirth)
        : undefined,

      age: data.age,
      nationality: data.nationality,
      bloodGroup: data.bloodGroup,
      gender: data.gender,
      address: data.address,
      emergencyContact: data.emergencyContact,
      status: data.status as PatientStatus,

      outlet: data.outletId
        ? {
          connect: {
            id: data.outletId,
          },
        }
        : undefined,
    });
  },

  async getAll() {
    return patientRepository.findAll();
  },

  async getById(id: string) {
    const patient = await patientRepository.findById(id);

    if (!patient) {
      throw new Error("Patient not found");
    }

    return patient;
  },

  async update(id: string, data: Partial<CreatePatientInput>) {
    await this.getById(id);

    if (data.mobileNumber) {
      const exists = await patientRepository.findByMobileNumber(
        data.mobileNumber
      );

      if (exists && exists.id !== id) {
        throw new Error("Patient already exists with this mobile number");
      }
    }

    if (data.email) {
      const emailExists = await patientRepository.findByEmailExceptId(
        data.email,
        id
      );

      if (emailExists) {
        throw new Error("Patient already exists with this email");
      }
    }

    return patientRepository.update(id, {
      referenceName: data.referenceName,
      fullName: data.fullName,
      mobileNumber: data.mobileNumber,
      email: data.email,
      dateOfBirth: data.dateOfBirth
        ? new Date(data.dateOfBirth)
        : undefined,

      age: data.age,
      bloodGroup: data.bloodGroup,
      gender: data.gender,
      address: data.address,
      emergencyContact: data.emergencyContact,
      status: data.status as PatientStatus,

      outlet: data.outletId
        ? {
          connect: {
            id: data.outletId,
          },
        }
        : undefined,
    });
  },

  async deletePatient(id: string) {
    await this.getById(id);

    return patientRepository.delete(id);
  },

  async patientStatusUpdate(
    id: string,
    status: PatientStatus
  ) {
    await this.getById(id);

    return patientRepository.updateStatus(id, status);
  },
};