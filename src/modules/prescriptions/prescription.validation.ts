import { z } from "zod";

const medicineSchema = z.object({
  medicineName: z.string().min(1, "Medicine name is required"),
  dosage: z.string().optional(),
  frequency: z.string().optional(),
  duration: z.string().optional(),
  instruction: z.string().optional(),
});

const testSchema = z.object({
  testName: z.string().min(1, "Test name is required"),
  instruction: z.string().optional(),
});

export const createPrescriptionValidationSchema = z.object({
  appointmentId: z.string().uuid(),

  chiefComplaint: z.string().optional(),
  diagnosis: z.string().optional(),
  advice: z.string().optional(),
  followUpDate: z.string().optional(),

  medicines: z.array(medicineSchema).optional(),
  tests: z.array(testSchema).optional(),
});

export const updatePrescriptionValidationSchema = z.object({
  chiefComplaint: z.string().optional(),
  diagnosis: z.string().optional(),
  advice: z.string().optional(),
  followUpDate: z.string().optional(),

  medicines: z.array(medicineSchema).optional(),
  tests: z.array(testSchema).optional(),
});