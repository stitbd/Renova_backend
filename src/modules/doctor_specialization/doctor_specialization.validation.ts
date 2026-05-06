import z from "zod";

export const createDoctorSpecializationSchema = z.object({
  name: z.string().min(2, "Specialization name is required"),

  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
});

export const updateDoctorSpecializationSchema =
  createDoctorSpecializationSchema.partial();