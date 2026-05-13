import { z } from "zod";
import {
  createOutletPermissionValidationSchema,
  updateOutletPermissionValidationSchema,
} from "./outlet_permission.validation";

export type CreateOutletPermissionInput = z.infer<
  typeof createOutletPermissionValidationSchema
>;

export type UpdateOutletPermissionInput = z.infer<
  typeof updateOutletPermissionValidationSchema
>;
