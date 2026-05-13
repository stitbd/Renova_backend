import { z } from "zod";
import {
  createSuperAdminPermissionValidationSchema,
  updateSuperAdminPermissionValidationSchema,
} from "./super_admin_permission.validation";

export type CreateSuperAdminPermissionInput = z.infer<
  typeof createSuperAdminPermissionValidationSchema
>;

export type UpdateSuperAdminPermissionInput = z.infer<
  typeof updateSuperAdminPermissionValidationSchema
>;