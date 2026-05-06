import { z } from "zod";

export const createDoctorSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  mobile: z.string().optional(),
  email: z.string().email("Invalid email address"),
  bmdcNumber: z.string().optional(),
  subSpecialization: z.string().optional(),
  qualification: z.string().optional(),
  experienceYears: z.number().int().min(0).optional(),
  currentDesignation: z.string().optional(),
  consultationFee: z.number().min(0).optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
  onlineStatus: z.enum(["ONLINE", "OFFLINE"]).optional(),
  specializationId: z.string(),
  scheduleId: z.string(),
  documentId: z.string().optional(),
});

export const updateDoctorSchema = createDoctorSchema.partial();

export const updateDoctorStatusSchema = z.object({
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

export const updateDoctorOnlineStatusSchema = z.object({
  onlineStatus: z.enum(["ONLINE", "OFFLINE"]),
});
