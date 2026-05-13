import { z } from "zod";

export const createOutletRoleValidationSchema = z.object({
  outletId: z.string().min(1, "Outlet ID is required"),
  name: z.string().min(2, "Role name is required"),
  permissionIds: z.array(z.string()).optional(),
});

export const updateOutletRoleValidationSchema =
  createOutletRoleValidationSchema.partial().omit({
    outletId: true,
    permissionIds: true,
  });

export const assignOutletPermissionsValidationSchema = z.object({
  permissionIds: z.array(z.string()).min(1, "At least one permission is required"),
});