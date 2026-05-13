import { z } from "zod";

export const createOutletValidationSchema = z.object({
  outletName: z.string().min(2, "Outlet name is required"),
  subdomain: z
    .string()
    .min(2, "Subdomain is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Subdomain must contain lowercase letters, numbers, and hyphens"
    ),

  division: z.string().min(1, "Division is required"),
  district: z.string().min(1, "District is required"),
  area: z.string().min(1, "Area is required"),
  address: z.string().min(1, "Address is required"),
  contactNumber: z.string().min(6, "Contact number is required"),

  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),

  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),

  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
});

export const updateOutletValidationSchema =
  createOutletValidationSchema.partial().omit({
    password: true,
  });