import { Request, Response } from "express";
import { PackageBannerService } from "./packages.service";

const createPackageBanner = async (
  req: Request,
  res: Response
) => {
  const result =
    await PackageBannerService.createPackageBanner(
      req.body
    );

  res.status(201).json({
    success: true,
    message: "Package banner created successfully",
    data: result,
  });
};

const getPackageBanner = async (
  req: Request,
  res: Response
) => {
  const result =
    await PackageBannerService.getPackageBanner();

  res.status(200).json({
    success: true,
    message: "Package banner retrieved successfully",
    data: result,
  });
};

const updatePackageBanner = async (
  req: Request,
  res: Response
) => {
  const result =
    await PackageBannerService.updatePackageBanner(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Package banner updated successfully",
    data: result,
  });
};

const deletePackageBanner = async (
  req: Request,
  res: Response
) => {
  await PackageBannerService.deletePackageBanner(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message: "Package banner deleted successfully",
  });
};

export const PackageBannerController = {
  createPackageBanner,
  getPackageBanner,
  updatePackageBanner,
  deletePackageBanner,
};