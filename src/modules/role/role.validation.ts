import { z } from "zod";

export const createRoleValidationSchema = z.object({
  outletId: z.string().min(1, "Outlet ID is required"),

  name: z.string().min(2, "Role name is required"),

  permissionIds: z.array(z.string()).optional(),
});

export const updateRoleValidationSchema =
  createRoleValidationSchema
    .partial()
    .omit({
      outletId: true,
      permissionIds: true,
    });

export const assignPermissionsValidationSchema = z.object({
  permissionIds: z.array(z.string()).min(1),
});