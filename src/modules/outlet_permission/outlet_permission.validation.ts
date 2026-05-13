import { z } from "zod";

export const createOutletPermissionValidationSchema = z.object({
  key: z
    .string()
    .min(2, "Permission key is required")
    .regex(/^[a-z0-9:_-]+$/, "Permission key format is invalid"),

  module: z.string().min(2, "Module is required"),

  description: z.string().optional(),
});

export const updateOutletPermissionValidationSchema =
  createOutletPermissionValidationSchema.partial();