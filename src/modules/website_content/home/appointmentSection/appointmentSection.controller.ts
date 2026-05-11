import { Request, Response } from "express";
import { AppointmentSectionService } from "./appointmentSection.service";

const createAppointmentSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await AppointmentSectionService.createAppointmentSection(
      req.body
    );

  res.status(201).json({
    success: true,
    message: "Appointment section created successfully",
    data: result,
  });
};

const getAppointmentSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await AppointmentSectionService.getAppointmentSection();

  res.status(200).json({
    success: true,
    message: "Appointment section retrieved successfully",
    data: result,
  });
};

const updateAppointmentSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await AppointmentSectionService.updateAppointmentSection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Appointment section updated successfully",
    data: result,
  });
};

export const AppointmentSectionController = {
  createAppointmentSection,
  getAppointmentSection,
  updateAppointmentSection,
};