import { Request, Response } from "express";

import { roleService } from "./role.service";

import {
    assignPermissionsValidationSchema,
    createRoleValidationSchema,
    updateRoleValidationSchema,
} from "./role.validation";

export const roleController = {
    async create(req: Request, res: Response) {
        const validatedData =
            createRoleValidationSchema.parse(req.body);

        const result =
            await roleService.create(validatedData);

        res.status(201).json({
            success: true,
            message: "Role created successfully",
            data: result,
        });
    },

    async getAll(req: Request, res: Response) {
        const result = await roleService.getAll( req.params.outletId as string );

        res.status(200).json({
            success: true,
            message: "Roles retrieved successfully",
            data: result,
        });
    },

    async getById(req: Request, res: Response) {
        const result = await roleService.getById(
            req.params.id as string
        );

        res.status(200).json({
            success: true,
            message: "Role retrieved successfully",
            data: result,
        });
    },

    async update(req: Request, res: Response) {
        const validatedData =
            updateRoleValidationSchema.parse(req.body);

        const result = await roleService.update(
            req.params.id as string,
            validatedData
        );

        res.status(200).json({
            success: true,
            message: "Role updated successfully",
            data: result,
        });
    },

    async assignPermissions(
        req: Request,
        res: Response
    ) {
        const validatedData =
            assignPermissionsValidationSchema.parse(
                req.body
            );

        const result =
            await roleService.assignPermissions(
                req.params.id as string,
                validatedData
            );

        res.status(200).json({
            success: true,
            message:
                "Role permissions assigned successfully",
            data: result,
        });
    },

    async delete(req: Request, res: Response) {
        await roleService.delete(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Role deleted successfully",
            data: null,
        });
    },
};