import { Request, Response } from "express";
import { HomeBannerService } from "./banner.service";

const createHomeBanner = async (req: Request, res: Response) => {
  const result = await HomeBannerService.createHomeBanner(req.body);

  res.status(201).json({
    success: true,
    message: "Home banner created successfully",
    data: result,
  });
};

const getHomeBanner = async (req: Request, res: Response) => {
  const result = await HomeBannerService.getHomeBanner();

  res.status(200).json({
    success: true,
    message: "Home banner retrieved successfully",
    data: result,
  });
};

const updateHomeBanner = async (req: Request, res: Response) => {
  const result = await HomeBannerService.updateHomeBanner(
    req.params.id as string,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Home banner updated successfully",
    data: result,
  });
};

const deleteHomeBanner = async (req: Request, res: Response) => {

  await HomeBannerService.deleteHomeBanner(req.params.id as string);  
  
  
    res.status(200).json({
      success: true,
      message: "Home banner deleted successfully",
    });
};

export const HomeBannerController = {
  createHomeBanner,
  getHomeBanner,
  updateHomeBanner,
  deleteHomeBanner
};