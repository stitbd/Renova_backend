import { z } from "zod";
import {
  createOutletValidationSchema,
  updateOutletValidationSchema,
} from "./outlet.validation";

export type CreateOutletInput = z.infer<typeof createOutletValidationSchema>;

export type UpdateOutletInput = z.infer<typeof updateOutletValidationSchema>;