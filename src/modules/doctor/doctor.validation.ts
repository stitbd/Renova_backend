import { z } from "zod";

export const createDoctorSchema = z.object({
  fullName: z.string().min(2),
  mobile: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
  bmdcNumber: z.string().optional(),

  subSpecialization: z.string().optional(),
  qualification: z.string().optional(),
  experienceYears: z.coerce.number().int().min(0).optional(),
  currentDesignation: z.string().optional(),
  consultationFee: z.coerce.number().min(0).optional(),

  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
  onlineStatus: z.enum(["ONLINE", "OFFLINE"]).optional(),

  gender: z.string().optional(),
  dateOfBirth: z.string().optional(),
  nationality: z.string().optional(),
  bloodGroup: z.string().optional(),

  specializationId: z.string().optional(),
  specializationName: z.string().optional(),

  schedules: z
    .array(
      z.object({
        dayName: z.string(),
        startTime: z.string(),
        endTime: z.string(),
        slotDuration: z.coerce.number().int().positive(),
        status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
      })
    )
    .optional(),
});

export const updateDoctorSchema = createDoctorSchema.partial();

export const updateDoctorStatusSchema = z.object({
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

export const updateDoctorOnlineStatusSchema = z.object({
  onlineStatus: z.enum(["ONLINE", "OFFLINE"]),
});
