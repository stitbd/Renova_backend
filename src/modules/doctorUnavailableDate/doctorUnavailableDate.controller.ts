import { Request, Response } from "express";
import { doctorUnavailableDateService } from "./doctorUnavailableDate.service";
import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorUnavailableDateService.create(req.body, req.user!);

  manageResponse(res, {
    statusCode: 201,
    success: true,
    message: "Doctor unavailable date created successfully",
    data: result,
  });
});

const getByDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorUnavailableDateService.getByDoctor(
    req.params.doctorId as string,
    req.user!
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctor unavailable dates retrieved successfully",
    data: result,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorUnavailableDateService.update(
    req.params.id as string,
    req.body,
    req.user!
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctor unavailable date updated successfully",
    data: result,
  });
});

const remove = catchAsync(async (req: Request, res: Response) => {
  await doctorUnavailableDateService.remove(req.params.id as string, req.user!);

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctor unavailable date deleted successfully",
    data: null,
  });
});

export const doctorUnavailableDateController = {
  create,
  getByDoctor,
  update,
  remove,
};