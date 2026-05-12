import { Request, Response } from "express";
import { CareerSectionService } from "./careerSection.service";

const createCareerSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await CareerSectionService.createCareerSection(
      req.body
    );

  res.status(201).json({
    success: true,
    message: "Career section created successfully",
    data: result,
  });
};

const getCareerSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await CareerSectionService.getCareerSection();

  res.status(200).json({
    success: true,
    message: "Career section retrieved successfully",
    data: result,
  });
};

const updateCareerSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await CareerSectionService.updateCareerSection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Career section updated successfully",
    data: result,
  });
};

const deleteCareerSection = async (
  req: Request,
  res: Response
) => {
  await CareerSectionService.deleteCareerSection(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message: "Career section deleted successfully",
  });
};

export const CareerSectionController = {
  createCareerSection,
  getCareerSection,
  updateCareerSection,
  deleteCareerSection,
};