import { Request, Response } from "express";
import { AuthUser } from "../../middlewares/auth";
import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import { prescriptionService } from "./prescription.service";

const createPrescription = catchAsync(async (req: Request, res: Response) => {
  const result = await prescriptionService.createPrescription(
    req.body,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 201,
    success: true,
    message: "Prescription created successfully",
    data: result,
  });
});

const getMyPrescriptions = catchAsync(async (req: Request, res: Response) => {
  const result = await prescriptionService.getMyPrescriptions(
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Prescriptions retrieved successfully",
    data: result,
  });
});

const getSinglePrescription = catchAsync(async (req: Request, res: Response) => {
  const result = await prescriptionService.getSinglePrescription(
    req.params.id as string,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Prescription retrieved successfully",
    data: result,
  });
});

const updatePrescription = catchAsync(async (req: Request, res: Response) => {
  const result = await prescriptionService.updatePrescription(
    req.params.id as string,
    req.body,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Prescription updated successfully",
    data: result,
  });
});


const getPrescriptionByAppointment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await prescriptionService.getPrescriptionByAppointment(
      req.params.appointmentId as string,
      req.user as AuthUser
    );

    manageResponse(res, {
      statusCode: 200,
      success: true,
      message: "Prescription retrieved by appointment successfully",
      data: result,
    });
  }
);


export const prescriptionController = {
  createPrescription,
  getMyPrescriptions,
  getSinglePrescription,
  updatePrescription,

    getPrescriptionByAppointment,
};