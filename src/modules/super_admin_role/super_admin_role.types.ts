import { z } from "zod";
import {
  createSuperAdminRoleValidationSchema,
  updateSuperAdminRoleValidationSchema,
  assignSuperAdminRolePermissionsValidationSchema,
} from "./super_admin_role.validation";

export type CreateSuperAdminRoleInput = z.infer<
  typeof createSuperAdminRoleValidationSchema
>;

export type UpdateSuperAdminRoleInput = z.infer<
  typeof updateSuperAdminRoleValidationSchema
>;

export type AssignSuperAdminRolePermissionsInput = z.infer<
  typeof assignSuperAdminRolePermissionsValidationSchema
>;