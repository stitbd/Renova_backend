import { z } from "zod";
import {
  createSuperAdminValidationSchema,
  updateSuperAdminValidationSchema,
  assignSuperAdminRolesValidationSchema,
} from "./super_admin.validation";

export type CreateSuperAdminInput = z.infer<
  typeof createSuperAdminValidationSchema
>;

export type UpdateSuperAdminInput = z.infer<
  typeof updateSuperAdminValidationSchema
>;

export type AssignSuperAdminRolesInput = z.infer<
  typeof assignSuperAdminRolesValidationSchema
>;