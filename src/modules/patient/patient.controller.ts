import { Request, Response, NextFunction } from "express";
import { patientService } from "./patient.service";
import { createPatientSchema, updatePatientSchema } from "./patient.validation";
import manageResponse from "../../utils/manage_response";

export const patientController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {

            const validated = createPatientSchema.parse(req.body);


            const result = await patientService.create(validated);

            manageResponse(res, {
                success: true,
                message: "Patient created successfully",
                data: result,
                statusCode: 200
            });
        } catch (error) {
            next(error);
        }
    },

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await patientService.getAll();

            manageResponse(res, {
                success: true,
                data: result,
                message: "Patients retrieved successfully",
                statusCode: 200
            });
        } catch (error) {
            next(error);
        }
    },

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await patientService.getById(req.params.id as string);

            manageResponse(res, {
                success: true,
                data: result,
                message: "Patient retrieved successfully",
                statusCode: 200
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

            manageResponse(res, {
                success: true,
                message: "Patient updated",
                data: result,
                statusCode: 200
            });
        } catch (error) {
            next(error);
        }
    },

    async deletePatient(req: Request, res: Response, next: NextFunction) {
        try {
            await patientService.deletePatient(req.params.id as string);
            manageResponse(res, {
                success: true,
                message: "Patient deleted",
                statusCode: 200
            });
        } catch (error) {
            next(error);
        }
    },

    async patientStatusUpdate(req: Request, res: Response, next: NextFunction) {
        try {
            const { status } = req.body;
            const result = await patientService.patientStatusUpdate(
                req.params.id as string,
                status
            );

            manageResponse(res, {
                success: true,
                message: "Patient status updated",
                data: result,
                statusCode: 200
            });
        } catch (error) {
            next(error);
        }
    },
};
