import { Request, Response } from "express";
import { PackageService } from "./package.service";

const createPackage = async (req: Request, res: Response) => {
  const result = await PackageService.createPackage(req.body);

  res.status(201).json({
    success: true,
    message: "Package created successfully",
    data: result,
  });
};

const getAllPackages = async (_req: Request, res: Response) => {
  const result = await PackageService.getAllPackages();

  res.status(200).json({
    success: true,
    message: "Packages retrieved successfully",
    data: result,
  });
};

const getPackageById = async (req: Request, res: Response) => {
  const result = await PackageService.getPackageById(req.params.id as string);

  res.status(200).json({
    success: true,
    message: "Package retrieved successfully",
    data: result,
  });
};

const updatePackage = async (req: Request, res: Response) => {
  const result = await PackageService.updatePackage(req.params.id as string, req.body);

  res.status(200).json({
    success: true,
    message: "Package updated successfully",
    data: result,
  });
};

const deletePackage = async (req: Request, res: Response) => {
  await PackageService.deletePackage(req.params.id as string);

  res.status(200).json({
    success: true,
    message: "Package deleted successfully",
  });
};

export const PackageController = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};