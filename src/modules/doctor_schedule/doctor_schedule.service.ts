import { ScheduleStatus } from "../../generated/main-client";
import { doctorScheduleRepository } from "./doctor_schedule.repository";
import { CreateDoctorScheduleInput, UpdateDoctorScheduleInput } from "./doctor_schedule.types";


export const doctorScheduleService = {

    async createSchedule(data: CreateDoctorScheduleInput) {

        return doctorScheduleRepository.createSchedule({
            dayName: data.dayName,
            startTime: data.startTime,
            endTime: data.endTime,
            slotDuration: data.slotDuration,
            status: data.status,
        });
    },


    async getScheduleById(id: string) {
        const schedule = await doctorScheduleRepository.findScheduleById(id);

        if (!schedule) {
            throw new Error("Doctor schedule not found");
        }

        return schedule;
    },

    async updateSchedule(id: string, data: UpdateDoctorScheduleInput) {
        await this.getScheduleById(id);

        return doctorScheduleRepository.updateSchedule(id, {
            dayName: data.dayName,
            startTime: data.startTime,
            endTime: data.endTime,
            slotDuration: data.slotDuration,
            status: data.status,
        });
    },

    async updateScheduleStatus(id: string, status: ScheduleStatus) {
        await this.getScheduleById(id);

        return doctorScheduleRepository.updateScheduleStatus(id, status);
    },

    async deleteSchedule(id: string) {
        await this.getScheduleById(id);

        return doctorScheduleRepository.deleteSchedule(id);
    },
};