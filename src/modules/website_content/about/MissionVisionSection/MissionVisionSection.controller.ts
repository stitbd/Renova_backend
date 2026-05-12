import { Request, Response } from "express";
import { MissionVisionSectionService } from "./MissionVisionSection.service";


const createMissionVisionSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await MissionVisionSectionService.createMissionVisionSection(
      req.body
    );

  res.status(201).json({
    success: true,
    message:
      "Mission & Vision section created successfully",
    data: result,
  });
};

const getMissionVisionSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await MissionVisionSectionService.getMissionVisionSection();

  res.status(200).json({
    success: true,
    message:
      "Mission & Vision section retrieved successfully",
    data: result,
  });
};

const updateMissionVisionSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await MissionVisionSectionService.updateMissionVisionSection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message:
      "Mission & Vision section updated successfully",
    data: result,
  });
};

const deleteMissionVisionSection = async (
  req: Request,
  res: Response
) => {
  await MissionVisionSectionService.deleteMissionVisionSection(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message:
      "Mission & Vision section deleted successfully",
  });
};

export const MissionVisionSectionController = {
  createMissionVisionSection,
  getMissionVisionSection,
  updateMissionVisionSection,
  deleteMissionVisionSection,
};