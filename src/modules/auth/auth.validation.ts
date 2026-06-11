import { z } from "zod";

export const loginValidationSchema = z.object({
  phone: z.string().min(6, "Phone number is required"),
  password: z.string().min(6, "Password is required"),
  userType: z.enum(["PATIENT", "DOCTOR", "OUTLET_USER", "SUPER_ADMIN"]),
});

export const changePasswordValidationSchema = z.object({
  oldPassword: z.string().min(6, "Old password is required"),
  newPassword: z.string().min(6, "New password must be at least 6 characters"),
});
