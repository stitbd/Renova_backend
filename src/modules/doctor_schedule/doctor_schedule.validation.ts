import { z } from "zod";


export const createDoctorScheduleSchema = z.object({
  doctorId: z.string().uuid("Invalid doctor id"),
  dayName: z.string().min(2, "Day name is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  slotDuration: z.number().int().positive(),
  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
});

export const updateDoctorScheduleSchema =
  createDoctorScheduleSchema.partial();

export const updateDoctorScheduleStatusSchema = z.object({
  status: z.enum(["ACTIVE", "INACTIVE"]),
});