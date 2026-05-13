import { z } from "zod";
import {
  createOutletRoleValidationSchema,
  updateOutletRoleValidationSchema,
  assignOutletPermissionsValidationSchema,
} from "./outlet_role.validation";

export type CreateOutletRoleInput = z.infer<
  typeof createOutletRoleValidationSchema
>;

export type UpdateOutletRoleInput = z.infer<
  typeof updateOutletRoleValidationSchema
>;

export type AssignOutletPermissionsInput = z.infer<
  typeof assignOutletPermissionsValidationSchema
>;