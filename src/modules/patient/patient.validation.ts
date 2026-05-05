import { z } from "zod";

export const createPatientSchema = z.object({
  fullName: z.string().min(2),
  mobileNumber: z.string().min(10),
  email: z.string().email().optional(),
  dateOfBirth: z.string().optional(),
  age: z.number().optional(),
  bloodGroup: z.string().optional(),
  gender: z.string().optional(),
  address: z.string().optional(),
  diagnosticAccountId: z.string().uuid().optional(),
});

export const updatePatientSchema = createPatientSchema.partial();