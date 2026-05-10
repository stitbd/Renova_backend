import { z } from "zod";

import {
    createPermissionValidationSchema,
    updatePermissionValidationSchema,
} from "./permission.validation";

export type CreatePermissionInput = z.infer<
    typeof createPermissionValidationSchema
>;

export type UpdatePermissionInput = z.infer<
    typeof updatePermissionValidationSchema
>;