import { Request, Response } from "express";
import { outletService } from "./outlet.service";
import {
    createOutletValidationSchema,
    updateOutletValidationSchema,
} from "./outlet.validation";

export const outletController = {
    async create(req: Request, res: Response) {
        const validatedData = createOutletValidationSchema.parse(req.body);

        const result = await outletService.create(validatedData);

        res.status(201).json({
            success: true,
            message: "Outlet created successfully",
            data: result,
        });
    },

    async getAll(req: Request, res: Response) {
        const result = await outletService.getAll();

        res.status(200).json({
            success: true,
            message: "Outlets retrieved successfully",
            data: result,
        });
    },

    async getById(req: Request, res: Response) {
        const result = await outletService.getById(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Outlet retrieved successfully",
            data: result,
        });
    },

    async update(req: Request, res: Response) {
        const validatedData = updateOutletValidationSchema.parse(req.body);

        const result = await outletService.update(
            req.params.id as string,
            validatedData
        );

        res.status(200).json({
            success: true,
            message: "Outlet updated successfully",
            data: result,
        });
    },

    async delete(req: Request, res: Response) {
        await outletService.delete(req.params.id as string);

        res.status(200).json({
            success: true,
            message: "Outlet deleted successfully",
            data: null,
        });
    },
};