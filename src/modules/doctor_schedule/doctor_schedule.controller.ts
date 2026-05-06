import { Request, Response } from "express";

import manageResponse from "../../utils/manage_response";
import { doctorScheduleService } from "./doctor_schedule.service";

export const doctorScheduleController = {

  async createSchedule(req: Request, res: Response) {
    const result = await doctorScheduleService.createSchedule(req.body);

    manageResponse(res, {
      success: true,
      statusCode: 201,
      message: "Doctor schedule created successfully",
      data: result,
    });
  },

  async getSchedulesByDoctorId(req: Request, res: Response) {
    const result = await doctorScheduleService.getSchedulesByDoctorId(
      req.params.doctorId as string
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor schedules retrieved successfully",
      data: result,
    });
  },

  async updateSchedule(req: Request, res: Response) {
    const result = await doctorScheduleService.updateSchedule(
      req.params.id as string,
      req.body
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor schedule updated successfully",
      data: result,
    });
  },

  async updateScheduleStatus(req: Request, res: Response) {
    const result = await doctorScheduleService.updateScheduleStatus(
      req.params.id as string,
      req.body.status
    );

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor schedule status updated successfully",
      data: result,
    });
  },

  async deleteSchedule(req: Request, res: Response) {
    await doctorScheduleService.deleteSchedule(req.params.id as string);

    manageResponse(res, {
      success: true,
      statusCode: 200,
      message: "Doctor schedule deleted successfully",
    });
  },
};