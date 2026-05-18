import { z } from "zod";

export const createTestValidationSchema = z.object({
  name: z.string().min(2),
  code: z.string().optional(),
  price: z.coerce.number().positive(),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const updateTestValidationSchema = createTestValidationSchema.partial();

export type CreateTestInput = z.infer<typeof createTestValidationSchema>;
export type UpdateTestInput = z.infer<typeof updateTestValidationSchema>;