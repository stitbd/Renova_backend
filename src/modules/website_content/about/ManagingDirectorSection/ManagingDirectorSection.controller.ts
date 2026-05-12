import { Request, Response } from "express";
import { ManagingDirectorSectionService } from "./ManagingDirectorSection.service";


const createManagingDirectorSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await ManagingDirectorSectionService.createManagingDirectorSection(
      req.body
    );

  res.status(201).json({
    success: true,
    message:
      "Managing director section created successfully",
    data: result,
  });
};

const getManagingDirectorSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await ManagingDirectorSectionService.getManagingDirectorSection();

  res.status(200).json({
    success: true,
    message:
      "Managing director section retrieved successfully",
    data: result,
  });
};

const updateManagingDirectorSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await ManagingDirectorSectionService.updateManagingDirectorSection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message:
      "Managing director section updated successfully",
    data: result,
  });
};

const deleteManagingDirectorSection = async (
  req: Request,
  res: Response
) => {
  await ManagingDirectorSectionService.deleteManagingDirectorSection(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message:
      "Managing director section deleted successfully",
  });
};

export const ManagingDirectorSectionController = {
  createManagingDirectorSection,
  getManagingDirectorSection,
  updateManagingDirectorSection,
  deleteManagingDirectorSection,
};