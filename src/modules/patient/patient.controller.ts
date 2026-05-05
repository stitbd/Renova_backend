import { Request, Response, NextFunction } from "express";
import { patientService } from "./patient.service";
import { createPatientSchema, updatePatientSchema } from "./patient.validation";

export const patientController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
           
            const validated = createPatientSchema.parse(req.body);


            const result = await patientService.create(validated);

            res.status(201).json({
                success: true,
                message: "Patient created successfully",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    },

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await patientService.getAll();

            res.json({
                success: true,
                data: result,
            });
        } catch (error) {
            next(error);
        }
    },

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await patientService.getById(req.params.id as string);

            res.json({
                success: true,
                data: result,
            });
        } catch (error) {
            next(error);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const validated = updatePatientSchema.parse(req.body);

            const result = await patientService.update(
                req.params.id as string,
                validated
            );

            res.json({
                success: true,
                message: "Patient updated",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await patientService.delete(req.params.id as string);

            res.json({
                success: true,
                message: "Patient deleted",
            });
        } catch (error) {
            next(error);
        }
    },
};