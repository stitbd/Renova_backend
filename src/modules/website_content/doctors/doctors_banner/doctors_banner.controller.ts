import { Request, Response } from "express";
import { DoctorBannerService } from "./doctors_banner.service";

const createDoctorBanner = async (
  req: Request,
  res: Response
) => {
  const result =
    await DoctorBannerService.createDoctorBanner(
      req.body
    );

  res.status(201).json({
    success: true,
    message: "Doctor banner created successfully",
    data: result,
  });
};

const getDoctorBanner = async (
  req: Request,
  res: Response
) => {
  const result =
    await DoctorBannerService.getDoctorBanner();

  res.status(200).json({
    success: true,
    message: "Doctor banner retrieved successfully",
    data: result,
  });
};

const updateDoctorBanner = async (
  req: Request,
  res: Response
) => {
  const result =
    await DoctorBannerService.updateDoctorBanner(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Doctor banner updated successfully",
    data: result,
  });
};

const deleteDoctorBanner = async (
  req: Request,
  res: Response
) => {
  await DoctorBannerService.deleteDoctorBanner(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message: "Doctor banner deleted successfully",
  });
};

export const DoctorBannerController = {
  createDoctorBanner,
  getDoctorBanner,
  updateDoctorBanner,
  deleteDoctorBanner,
};