import { Request, Response } from "express";
import { outletUserService } from "./outlet_user.service";
import {
    assignOutletUserRolesValidationSchema,
    createOutletUserValidationSchema,
    updateOutletUserValidationSchema,
} from "./outlet_user.validation";

export const outletUserController = {
    async create(req: Request, res: Response) {
        const validatedData = createOutletUserValidationSchema.parse(req.body);

        const result = await outletUserService.create(validatedData);

        res.status(201).json({
            success: true,
            message: "Outlet user created successfully",
            data: result,
        });
    },

    async getAll(req: Request, res: Response) {
        const result = await outletUserService.getAll( req.params.outletId as string);

        res.status(200).json({
            success: true,
            message: "Outlet users retrieved successfully",
            data: result,
        });
    },

    async getById(req: Request, res: Response) {
        const result = await outletUserService.getById(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Outlet user retrieved successfully",
            data: result,
        });
    },

    async update(req: Request, res: Response) {
        const validatedData = updateOutletUserValidationSchema.parse(req.body);

        const result = await outletUserService.update(
            req.params.id as string,
            validatedData
        );

        res.status(200).json({
            success: true,
            message: "Outlet user updated successfully",
            data: result,
        });
    },

    async assignRoles(req: Request, res: Response) {
        const validatedData = assignOutletUserRolesValidationSchema.parse(req.body);

        const result = await outletUserService.assignRoles(
            req.params.id as string,
            validatedData
        );

        res.status(200).json({
            success: true,
            message: "Outlet user roles assigned successfully",
            data: result,
        });
    },

    async updateStatus(req: Request, res: Response) {
        const result = await outletUserService.updateStatus(
            req.params.id as string,
            req.body.isActive
        );

        res.status(200).json({
            success: true,
            message: "Outlet user status updated successfully",
            data: result,
        });
    },

    async delete(req: Request, res: Response) {
        await outletUserService.delete(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Outlet user deleted successfully",
            data: null,
        });
    },
};