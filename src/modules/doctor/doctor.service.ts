import {
  DoctorOnlineStatus,
  DoctorStatus,
  ScheduleStatus,
  VerificationStatus,
} from "../../generated/main-client";
import { doctorRepository } from "./doctor.repository";
import {
  CreateDoctorInput,
  UpdateDoctorInput,
} from "./doctor.types";

export const doctorService = {
  async create(data: CreateDoctorInput) {
    const emailExists = await doctorRepository.findByEmail(data.email);

    if (emailExists) {
      throw new Error("Doctor already exists with this email");
    }

    if (data.mobile) {
      const mobileExists = await doctorRepository.findByMobile(data.mobile);

      if (mobileExists) {
        throw new Error("Doctor already exists with this mobile number");
      }
    }

    if (data.bmdcNumber) {
      const bmdcExists = await doctorRepository.findByBMDCNumber(data.bmdcNumber);

      if (bmdcExists) {
        throw new Error("Doctor already exists with this BMDC number");
      }
    }

    if (data.doctorCode) {
      const codeExists = await doctorRepository.findByDoctorCode(data.doctorCode);

      if (codeExists) {
        throw new Error("Doctor already exists with this doctor code");
      }
    }

      // AUTO DOCTOR CODE GENERATION
  const lastDoctor = await doctorRepository.findLastDoctor();

  let doctorCode = "DOC_0001";

  if (lastDoctor?.doctorCode) {
    const lastNumber = parseInt(
      lastDoctor.doctorCode.split("_")[1]
    );

    const nextNumber = lastNumber + 1;

    doctorCode = `DOC_${String(nextNumber).padStart(4, "0")}`;
  }

    return doctorRepository.create({
      doctorCode: doctorCode,
      fullName: data.fullName,
      mobile: data.mobile,
      email: data.email,
      bmdcNumber: data.bmdcNumber,
      subSpecialization: data.subSpecialization,
      qualification: data.qualification,
      experienceYears: data.experienceYears,
      currentDesignation: data.currentDesignation,
      consultationFee: data.consultationFee,
      status: data.status,
      onlineStatus: data.onlineStatus,

      outlet: data.outletId
        ? {
          connect: {
            id: data.outletId,
          },
        }
        : undefined,
    });
  }
  ,

  async getAll() {
    return doctorRepository.findAll();
  },

  async getById(id: string) {
    const doctor = await doctorRepository.findById(id);

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    return doctor;
  },

  async update(id: string, data: UpdateDoctorInput) {
    await this.getById(id);

    if (data.email) {
      const emailExists = await doctorRepository.findByEmail(data.email);

      if (emailExists && emailExists.id !== id) {
        throw new Error("Doctor already exists with this email");
      }
    }

    if (data.bmdcNumber) {
      const bmdcExists = await doctorRepository.findByBMDCNumber(data.bmdcNumber);

      if (bmdcExists && bmdcExists.id !== id) {
        throw new Error("Doctor already exists with this BMDC number");
      }
    }

    if (data.doctorCode) {
      const codeExists = await doctorRepository.findByDoctorCode(data.doctorCode);

      if (codeExists && codeExists.id !== id) {
        throw new Error("Doctor already exists with this doctor code");
      }
    }

    return doctorRepository.update(id, {
      doctorCode: data.doctorCode,
      fullName: data.fullName,
      mobile: data.mobile,
      email: data.email,
      bmdcNumber: data.bmdcNumber,
      subSpecialization: data.subSpecialization,
      qualification: data.qualification,
      experienceYears: data.experienceYears,
      currentDesignation: data.currentDesignation,
      consultationFee: data.consultationFee,
      status: data.status,
      onlineStatus: data.onlineStatus,

      outlet: data.outletId
        ? {
          connect: {
            id: data.outletId,
          },
        }
        : undefined,
    });
  },

  async delete(id: string) {
    await this.getById(id);

    return doctorRepository.delete(id);
  },

  async updateStatus(id: string, status: DoctorStatus) {
    await this.getById(id);

    return doctorRepository.updateStatus(id, status);
  },

  async updateOnlineStatus(id: string, onlineStatus: DoctorOnlineStatus) {
    await this.getById(id);

    return doctorRepository.updateOnlineStatus(id, onlineStatus);
  },
};