import { z } from "zod";

export const loginValidationSchema = z.object({
  phone: z.string().min(6, "Phone number is required"),
  password: z.string().min(6, "Password is required"),
  userType: z.enum(["PATIENT", "DOCTOR", "OUTLET_USER", "SUPER_ADMIN"]),
});