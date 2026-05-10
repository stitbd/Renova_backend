import { z } from "zod";
import {
  createOutletUserValidationSchema,
  updateOutletUserValidationSchema,
  assignOutletUserRolesValidationSchema,
} from "./outlet_user.validation";

export type CreateOutletUserInput = z.infer<
  typeof createOutletUserValidationSchema
>;

export type UpdateOutletUserInput = z.infer<
  typeof updateOutletUserValidationSchema
>;

export type AssignOutletUserRolesInput = z.infer<
  typeof assignOutletUserRolesValidationSchema
>;