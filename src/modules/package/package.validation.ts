import { z } from "zod";

export const createPackageValidationSchema = z.object({
  packageName: z.string().min(2),
  subtitle: z.string().optional(),
  badgeText: z.string().optional(),

  discountedPrice: z.coerce.number().positive(),

  testIds: z.array(z.string().uuid()).min(1, "At least one test is required"),

  isActive: z.boolean().optional(),
});

export const updatePackageValidationSchema = z.object({
  packageName: z.string().min(2).optional(),
  subtitle: z.string().optional(),
  badgeText: z.string().optional(),
  discountedPrice: z.coerce.number().positive().optional(),
  testIds: z.array(z.string().uuid()).min(1).optional(),
  isActive: z.boolean().optional(),
});

export type CreatePackageInput = z.infer<typeof createPackageValidationSchema>;
export type UpdatePackageInput = z.infer<typeof updatePackageValidationSchema>;