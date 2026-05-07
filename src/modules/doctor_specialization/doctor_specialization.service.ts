
import { doctorSpecializationRepository } from "./doctor_specialization.repository";
import { CreateDoctorSpecializationInput, UpdateDoctorSpecializationInput } from "./doctor_specialization.type";


export const doctorSpecializationService = {

  async createSpecialization(data: CreateDoctorSpecializationInput) {
    const exists = await doctorSpecializationRepository.findSpecializationByName(data.name);

    if (exists) {
      throw new Error("Specialization already exists");
    }



    return doctorSpecializationRepository.createSpecialization({
      name: data.name,
      status: data.status as "ACTIVE" | "INACTIVE",
    
    });
  },

  async getAllSpecializations() {
    return doctorSpecializationRepository.findAllSpecializations();
  },

  async getSpecializationById(id: string) {
    const specialization = await doctorSpecializationRepository.findSpecializationById(id);

    if (!specialization) {
      throw new Error("Specialization not found");
    }

    return specialization;
  },

  async updateSpecialization(
    id: string,
    data: UpdateDoctorSpecializationInput
  ) {
    await this.getSpecializationById(id);

    if (data.name) {
      const exists = await doctorSpecializationRepository.findSpecializationByName(data.name);

      if (exists && exists.id !== id) {
        throw new Error("Specialization already exists");
      }
    }

    return doctorSpecializationRepository.updateSpecialization(id, {
      name: data.name,
      status: data.status as "ACTIVE" | "INACTIVE",
    });
  },

  async deleteSpecialization(id: string) {
    await this.getSpecializationById(id);

    return doctorSpecializationRepository.deleteSpecialization(id);
  },

}