import { Request, Response } from "express";
import { DoctorSectionService } from "./doctorSection.service";

const createDoctorSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await DoctorSectionService.createDoctorSection(req.body);

  res.status(201).json({
    success: true,
    message: "Doctor section created successfully",
    data: result,
  });
};

const getDoctorSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await DoctorSectionService.getDoctorSection();

  res.status(200).json({
    success: true,
    message: "Doctor section retrieved successfully",
    data: result,
  });
};

const updateDoctorSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await DoctorSectionService.updateDoctorSection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Doctor section updated successfully",
    data: result,
  });
};

export const DoctorSectionController = {
  createDoctorSection,
  getDoctorSection,
  updateDoctorSection,
};