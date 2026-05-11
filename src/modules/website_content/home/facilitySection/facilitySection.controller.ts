import { Request, Response } from "express";
import { FacilitySectionService } from "./facilitySection.service";

const createFacilitySection = async (
  req: Request,
  res: Response
) => {
  const result =
    await FacilitySectionService.createFacilitySection(
      req.body
    );

  res.status(201).json({
    success: true,
    message: "Facility section created successfully",
    data: result,
  });
};

const getFacilitySection = async (
  req: Request,
  res: Response
) => {
  const result =
    await FacilitySectionService.getFacilitySection();

  res.status(200).json({
    success: true,
    message: "Facility section retrieved successfully",
    data: result,
  });
};

const updateFacilitySection = async (
  req: Request,
  res: Response
) => {
  const result =
    await FacilitySectionService.updateFacilitySection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Facility section updated successfully",
    data: result,
  });
};

export const FacilitySectionController = {
  createFacilitySection,
  getFacilitySection,
  updateFacilitySection,
};