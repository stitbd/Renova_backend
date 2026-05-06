import { Request, Response } from "express";
import { doctorService } from "./doctor.service";
import manageResponse from "../../utils/manage_response";

export const doctorController = {
  async create(req: Request, res: Response) {
    const result = await doctorService.create(req.body);

    manageResponse(res, {
      success: true,
      statusCode: 201,
      message: "Doctor created successfully",
      data: result,
    });
  },

  async getAll(req: Request, res: Response) {
    const result = await doctorService.getAll();

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctors retrieved successfully",
      data: result,
    });
  },

  async getById(req: Request, res: Response) {
    const result = await doctorService.getById(req.params.id as string);

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor retrieved successfully",
      data: result,
    });
  },

  async update(req: Request, res: Response) {
    const result = await doctorService.update(
      req.params.id as string,
      req.body
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor updated successfully",
      data: result,
    });
  },

  async delete(req: Request, res: Response) {
    await doctorService.delete(req.params.id as string);

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor deleted successfully",
    });
  },

  async updateStatus(req: Request, res: Response) {
    const result = await doctorService.updateStatus(
      req.params.id as string,
      req.body.status
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor status updated successfully",
      data: result,
    });
  },

  async updateOnlineStatus(req: Request, res: Response) {
    const result = await doctorService.updateOnlineStatus(
      req.params.id as string,
      req.body.onlineStatus
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor online status updated successfully",
      data: result,
    });
  },
};