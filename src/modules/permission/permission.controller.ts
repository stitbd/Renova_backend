import { Request, Response } from "express";

import { permissionService } from "./permission.service";

import {
    createPermissionValidationSchema,
    updatePermissionValidationSchema,
} from "./permission.validation";

export const permissionController = {
    async create(req: Request, res: Response) {
        const validatedData =
            createPermissionValidationSchema.parse(
                req.body
            );

        const result =
            await permissionService.create(
                validatedData
            );

        res.status(201).json({
            success: true,
            message:
                "Permission created successfully",
            data: result,
        });
    },

    async getAll(req: Request, res: Response) {
        const result =
            await permissionService.getAll();

        res.status(200).json({
            success: true,
            message:
                "Permissions retrieved successfully",
            data: result,
        });
    },

    async getById(req: Request, res: Response) {
        const result =
            await permissionService.getById(
                req.params.id as string
            );

        res.status(200).json({
            success: true,
            message:
                "Permission retrieved successfully",
            data: result,
        });
    },

    async update(req: Request, res: Response) {
        const validatedData =
            updatePermissionValidationSchema.parse(
                req.body
            );

        const result =
            await permissionService.update(
                req.params.id as string,
                validatedData
            );

        res.status(200).json({
            success: true,
            message:
                "Permission updated successfully",
            data: result,
        });
    },

    async delete(req: Request, res: Response) {
        await permissionService.delete(
            req.params.id as string
        );

        res.status(200).json({
            success: true,
            message:
                "Permission deleted successfully",
            data: null,
        });
    },
};