import { z } from "zod";

export const createOutletValidationSchema = z.object({
  outletName: z.string().min(2),
  subdomain: z
    .string()
    .min(2)
    .regex(/^[a-z0-9-]+$/, "Subdomain must contain lowercase letters, numbers, and hyphens"),

  division: z.string().min(1),
  district: z.string().min(1),
  area: z.string().min(1),
  address: z.string().min(1),
  contactNumber: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(6),

  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),

  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
});

export const updateOutletValidationSchema =
  createOutletValidationSchema.partial();