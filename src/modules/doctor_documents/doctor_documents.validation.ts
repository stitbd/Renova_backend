import { z } from "zod";

export const createDoctorDocumentSchema = z.object({
  doctorId: z.string().uuid("Invalid doctor id"),
  documentType: z.enum(["LICENSE", "CERTIFICATE", "DEGREE", "NID", "OTHER"]),
  fileUrl: z.string().url("Invalid file url"),
  verificationStatus: z.enum(["PENDING", "VERIFIED", "REJECTED"]).optional(),
});

export const updateDoctorDocumentSchema =
  createDoctorDocumentSchema.partial();

export const updateDoctorDocumentVerificationSchema = z.object({
  verificationStatus: z.enum(["PENDING", "VERIFIED", "REJECTED"]),
});
