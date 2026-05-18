import { Request, Response } from "express";
import { appointmentService } from "./appointment.service";
import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import { AuthUser } from "../../middlewares/auth";

const createAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await appointmentService.createAppointment(req.body, req.user as AuthUser);

    manageResponse(res, {
        statusCode: 201,
        success: true,
        message: "Appointment created successfully",
        data: result,
    });
});

const getMyAppointments = catchAsync(async (req: Request, res: Response) => {
    const result = await appointmentService.getMyAppointments(req.user as AuthUser);

    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointments retrieved successfully",
        data: result,
    });
});

const cancelAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await appointmentService.cancelAppointment(
        req.params.id as string,
        req.user as AuthUser,
        req.body.cancellationReason
    );

    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment cancelled successfully",
        data: result,
    });
});

const confirmAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await appointmentService.updateAppointmentStatus(
        req.params.id as string,
        "CONFIRMED",
        req.user as AuthUser
    );

    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment confirmed successfully",
        data: result,
    });
});

const completeAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await appointmentService.updateAppointmentStatus(
        req.params.id as string,
        "COMPLETED",
        req.user as AuthUser
    );

    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment completed successfully",
        data: result,
    });
});

const markNoShow = catchAsync(async (req: Request, res: Response) => {
    const result = await appointmentService.updateAppointmentStatus(
        req.params.id as string,
        "NO_SHOW",
        req.user as AuthUser
    );

    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment marked as no-show successfully",
        data: result,
    });
});


const getDoctorSlots = catchAsync(async (req: Request, res: Response) => {
  const result = await appointmentService.getDoctorSlots({
    doctorId: req.params.doctorId as string,
    date: req.query.date as string,
  });

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctor slots retrieved successfully",
    data: result,
  });
});

export const appointmentController = {
    createAppointment,
    getMyAppointments,
    cancelAppointment,
    confirmAppointment,
    completeAppointment,
    markNoShow,
    getDoctorSlots
};