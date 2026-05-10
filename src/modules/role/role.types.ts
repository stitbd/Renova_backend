import { z } from "zod";

import {
  createRoleValidationSchema,
  updateRoleValidationSchema,
  assignPermissionsValidationSchema,
} from "./role.validation";

export type CreateRoleInput = z.infer<
  typeof createRoleValidationSchema
>;

export type UpdateRoleInput = z.infer<
  typeof updateRoleValidationSchema
>;

export type AssignPermissionsInput = z.infer<
  typeof assignPermissionsValidationSchema
>;