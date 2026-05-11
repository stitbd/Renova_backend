import { z } from "zod";

export const createSuperAdminRoleValidationSchema = z.object({
  name: z.string().min(2, "Role name is required"),
  permissionIds: z.array(z.string()).optional(),
});

export const updateSuperAdminRoleValidationSchema =
  createSuperAdminRoleValidationSchema.partial().omit({
    permissionIds: true,
  });

export const assignSuperAdminRolePermissionsValidationSchema = z.object({
  permissionIds: z.array(z.string()).min(1, "At least one permission is required"),
});