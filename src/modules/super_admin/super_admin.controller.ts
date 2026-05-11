import { Request, Response } from "express";
import { superAdminService } from "./super_admin.service";
import {
    assignSuperAdminRolesValidationSchema,
    createSuperAdminValidationSchema,
    updateSuperAdminValidationSchema,
} from "./super_admin.validation";

export const superAdminController = {
    async create(req: Request, res: Response) {
        const validatedData = createSuperAdminValidationSchema.parse(req.body);
        const result = await superAdminService.create(validatedData);

        res.status(201).json({
            success: true,
            message: "Super admin created successfully",
            data: result,
        });
    },

    async getAll(req: Request, res: Response) {
        const result = await superAdminService.getAll();

        res.status(200).json({
            success: true,
            message: "Super admins retrieved successfully",
            data: result,
        });
    },

    async getById(req: Request, res: Response) {
        const result = await superAdminService.getById(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Super admin retrieved successfully",
            data: result,
        });
    },

    async update(req: Request, res: Response) {
        const validatedData = updateSuperAdminValidationSchema.parse(req.body);

        const result = await superAdminService.update(
            req.params.id as string,
            validatedData
        );

        res.status(200).json({
            success: true,
            message: "Super admin updated successfully",
            data: result,
        });
    },

    async assignRoles(req: Request, res: Response) {
        const validatedData = assignSuperAdminRolesValidationSchema.parse(req.body);

        const result = await superAdminService.assignRoles(
            req.params.id as string,
            validatedData
        );

        res.status(200).json({
            success: true,
            message: "Super admin roles assigned successfully",
            data: result,
        });
    },

    async updateStatus(req: Request, res: Response) {
        const result = await superAdminService.updateStatus(
            req.params.id as string,
            req.body.isActive
        );

        res.status(200).json({
            success: true,
            message: "Super admin status updated successfully",
            data: result,
        });
    },

    async delete(req: Request, res: Response) {
        await superAdminService.delete(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Super admin deleted successfully",
            data: null,
        });
    },
};