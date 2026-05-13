import { Request, Response } from "express";
import { ShopBannerService } from "./shopBanner.service";

const createShopBanner = async (req: Request, res: Response) => {
  const result = await ShopBannerService.createShopBanner(req.body);

  res.status(201).json({
    success: true,
    message: "Shop banner created successfully",
    data: result,
  });
};

const getShopBanner = async (req: Request, res: Response) => {
  const result = await ShopBannerService.getShopBanner();

  res.status(200).json({
    success: true,
    message: "Shop banner retrieved successfully",
    data: result,
  });
};

const updateShopBanner = async (req: Request, res: Response) => {
  const result = await ShopBannerService.updateShopBanner(
    req.params.id as string,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Shop banner updated successfully",
    data: result,
  });
};

const deleteShopBanner = async (req: Request, res: Response) => {
  await ShopBannerService.deleteShopBanner(req.params.id as string);

  res.status(200).json({
    success: true,
    message: "Shop banner deleted successfully",
  });
};

export const ShopBannerController = {
  createShopBanner,
  getShopBanner,
  updateShopBanner,
  deleteShopBanner,
};