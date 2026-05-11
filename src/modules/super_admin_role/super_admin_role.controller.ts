import { Request, Response } from "express";
import { superAdminRoleService } from "./super_admin_role.service";
import {
    assignSuperAdminRolePermissionsValidationSchema,
    createSuperAdminRoleValidationSchema,
    updateSuperAdminRoleValidationSchema,
} from "./super_admin_role.validation";

export const superAdminRoleController = {
    async create(req: Request, res: Response) {
        const validatedData = createSuperAdminRoleValidationSchema.parse(req.body);

        const result = await superAdminRoleService.create(validatedData);

        res.status(201).json({
            success: true,
            message: "Super admin role created successfully",
            data: result,
        });
    },

    async getAll(req: Request, res: Response) {
        const result = await superAdminRoleService.getAll();

        res.status(200).json({
            success: true,
            message: "Super admin roles retrieved successfully",
            data: result,
        });
    },

    async getById(req: Request, res: Response) {
        const result = await superAdminRoleService.getById(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Super admin role retrieved successfully",
            data: result,
        });
    },

    async update(req: Request, res: Response) {
        const validatedData = updateSuperAdminRoleValidationSchema.parse(req.body);

        const result = await superAdminRoleService.update(
            req.params.id as string,
            validatedData
        );

        res.status(200).json({
            success: true,
            message: "Super admin role updated successfully",
            data: result,
        });
    },

    async assignPermissions(req: Request, res: Response) {
        const validatedData =
            assignSuperAdminRolePermissionsValidationSchema.parse(req.body);

        const result = await superAdminRoleService.assignPermissions(
            req.params.id as string,
            validatedData
        );

        res.status(200).json({
            success: true,
            message: "Super admin role permissions assigned successfully",
            data: result,
        });
    },

    async delete(req: Request, res: Response) {
        await superAdminRoleService.delete(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Super admin role deleted successfully",
            data: null,
        });
    },
};