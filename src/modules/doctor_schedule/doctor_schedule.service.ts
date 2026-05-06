import { ScheduleStatus } from "../../generated/main-client";
import { doctorService } from "../doctor/doctor.service";
import { doctorScheduleRepository } from "./doctor_schedule.repository";
import { CreateDoctorScheduleInput, UpdateDoctorScheduleInput } from "./doctor_schedule.types";


export const doctorScheduleService = {

    async createSchedule(data: CreateDoctorScheduleInput) {
        await doctorService.getById(data.doctorId);

        return doctorScheduleRepository.createSchedule({
            dayName: data.dayName,
            startTime: data.startTime,
            endTime: data.endTime,
            slotDuration: data.slotDuration,
            status: data.status,

            doctor: {
                connect: {
                    id: data.doctorId,
                },
            },
        });
    },

    async getSchedulesByDoctorId(doctorId: string) {
        await doctorService.getById(doctorId);

        return doctorScheduleRepository.findSchedulesByDoctorId(doctorId);
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