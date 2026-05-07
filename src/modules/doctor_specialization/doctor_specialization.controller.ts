import { Request, Response } from "express";
import manageResponse from "../../utils/manage_response";
import { doctorSpecializationService } from "./doctor_specialization.service";

export const doctorSpecializationController = {

  async createSpecialization(req: Request, res: Response) {
    const result = await doctorSpecializationService.createSpecialization(req.body);

    manageResponse(res, {
      success: true,
      statusCode: 201,
      message: "Doctor specialization created successfully",
      data: result,
    });
  },

  async getAllSpecializations(req: Request, res: Response) {
    const result = await doctorSpecializationService.getAllSpecializations();

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor specializations retrieved successfully",
      data: result,
    });
  },

  async updateSpecialization(req: Request, res: Response) {
    const result = await doctorSpecializationService.updateSpecialization(
      req.params.id as string,
      req.body
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor specialization updated successfully",
      data: result,
    });
  },

  async deleteSpecialization(req: Request, res: Response) {
    await doctorSpecializationService.deleteSpecialization(req.params.id as string);

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor specialization deleted successfully",
    });
  },

 
};