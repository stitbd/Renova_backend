import { z } from "zod";

export const createOutletUserValidationSchema = z.object({
  outletId: z.string().min(1, "Outlet ID is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  roleIds: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
});

export const updateOutletUserValidationSchema =
  createOutletUserValidationSchema
    .partial()
    .omit({
      outletId: true,
      password: true,
      roleIds: true,
    });

export const assignOutletUserRolesValidationSchema = z.object({
  roleIds: z.array(z.string()).min(1, "At least one role is required"),
});