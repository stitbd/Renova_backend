import { z } from "zod";

export const createPatientSchema = z.object({
  referenceName: z.string().optional(),

  fullName: z.string().min(2, "Full name is required"),
  mobileNumber: z.string().min(10, "Mobile number is required"),
  email: z.string().email().optional(),
   password: z.string().min(6, "Password must be at least 6 characters"),

  dateOfBirth: z.string().optional(),
  age: z.number().int().positive().optional(),

  bloodGroup: z.string().optional(),
  gender: z.string().optional(),
  address: z.string().optional(),

  emergencyContact: z.string().optional(),

  status: z.enum(["ACTIVE", "INACTIVE", "PENDING"]).optional(),

  outletId: z.string().uuid().optional(),
});

export const updatePatientSchema = createPatientSchema.partial();