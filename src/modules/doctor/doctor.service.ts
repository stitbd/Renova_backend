import { env } from "../../configs/env";
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
import bcrypt from "bcryptjs";

export const doctorService = {
  async create(data: CreateDoctorInput) {
    // console.log('data', data);
    const emailExists = await doctorRepository.findByEmail(data.email);
    // console.log("emailExists", emailExists);

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

    if (!data.specializationId && !data.specializationName) {
      throw new Error("Either Specialization ID or Specialization Name is required");
    }

    // Handle specialization - ensure reuse of existing specialization
    let specializationConnect: any;
    if (data.specializationId) {
      specializationConnect = {
        connect: {
          id: data.specializationId,
        },
      };
    } else if (data.specializationName) {
      // Check if specialization already exists by name
      const existingSpecialization = await doctorRepository.findSpecializationByName(data.specializationName);
      if (existingSpecialization) {
        specializationConnect = {
          connect: {
            id: existingSpecialization.id,
          },
        };
      } else {
        // Create new specialization if it doesn't exist
        specializationConnect = {
          create: {
            name: data.specializationName,
          },
        };
      }
    }

    const lastDoctor = await doctorRepository.findLastDoctor();

    let doctorCode = "DOC_0001";

    if (lastDoctor?.doctorCode) {
      const lastNumber = parseInt(lastDoctor.doctorCode.split("_")[1]);
      const nextNumber = lastNumber + 1;
      doctorCode = `DOC_${String(nextNumber).padStart(4, "0")}`;
    }

    const hashedPassword = await bcrypt.hash(data.password, env.bcrypt_salt_rounds);

    const res = await doctorRepository.create({
      doctorCode,
      fullName: data.fullName,
      mobile: data.mobile,
      email: data.email,
      password: hashedPassword,
      bmdcNumber: data.bmdcNumber,
      subSpecialization: data.subSpecialization,
      qualification: data.qualification,
      experienceYears: data.experienceYears,
      currentDesignation: data.currentDesignation,
      consultationFee: data.consultationFee,
      status: data.status,
      onlineStatus: data.onlineStatus,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth
        ? new Date(data.dateOfBirth)
        : undefined,
      nationality: data.nationality,
      bloodGroup: data.bloodGroup,

      outlet: data.outletId
        ? {
          connect: {
            id: data.outletId,
          },
        }
        : undefined,

      specialization: specializationConnect,


      schedules: data.schedules
        ? {
          create: data.schedules.map((schedule) => ({
            dayName: schedule.dayName,
            startTime: schedule.startTime,
            endTime: schedule.endTime,
            slotDuration: schedule.slotDuration,
            status: schedule.status,
          })),
        }
        : undefined,
      documents: data.documents && data.documents.length > 0
        ? {
            create: data.documents.map((doc) => ({
              fileUrl: doc.fileUrl!,
              documentType: doc.documentType,
              verificationStatus: doc.verificationStatus,
            })),
          }
        : undefined,
    });
    console.log("create doctor ", res);
    return res;
  }
  ,

async getAll(filters: {
  gender?: string;
  specializationId?: string;
  outletId?: string;
  status?: string;
  page?: number;
  limit?: number;
}) {
  const { 
    gender, 
    specializationId, 
    outletId, 
    status,
    page = 1,
    limit = 10 
  } = filters;

  // Build filters object for repository
  const queryFilters: any = {
    status: status || 'ACTIVE',
  };

  if (gender) queryFilters.gender = gender.toUpperCase();
  if (specializationId) queryFilters.specializationId = specializationId;
  if (outletId) queryFilters.outletId = outletId;


  const skip = (page - 1) * limit;
  const take = limit;

  // Assuming your repository supports filtering + pagination
  // If not, update your DoctorRepository accordingly (see note below)
  const result = await doctorRepository.findAll({
    where: queryFilters,
    include: {
      specialization: true,
      outlet: true,
      documents: true,
      schedules: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    skip,
    take,
  });

  // For total count - you may need to add findCount or use findAll with count
  const total = await doctorRepository.count?.({ where: queryFilters }) 
    || (await doctorRepository.findAll({ where: queryFilters })).length; // fallback

  return {
    data: result,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
},

  async getById(id: string) {
    const doctor = await doctorRepository.findById(id);

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    return doctor;
  },

  getDoctorListBySpecializationName(specializationName: string) {
    return doctorRepository.findDoctorsBySpecializationName(specializationName);
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

    // Handle specialization - ensure reuse of existing specialization
    let specializationConnect: any;
    if (data.specializationId) {
      specializationConnect = {
        connect: {
          id: data.specializationId,
        },
      };
    } else if (data.specializationName) {
      // Check if specialization already exists by name
      const existingSpecialization = await doctorRepository.findSpecializationByName(data.specializationName);
      if (existingSpecialization) {
        specializationConnect = {
          connect: {
            id: existingSpecialization.id,
          },
        };
      } else {
        // Create new specialization if it doesn't exist
        specializationConnect = {
          create: {
            name: data.specializationName,
          },
        };
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
      gender: data.gender,
      dateOfBirth: data.dateOfBirth
        ? new Date(data.dateOfBirth)
        : undefined,
      nationality: data.nationality,
      bloodGroup: data.bloodGroup,

      outlet: data.outletId
        ? {
          connect: {
            id: data.outletId,
          },
        }
        : undefined,


        specialization: specializationConnect,

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