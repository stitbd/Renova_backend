import { Request, Response } from "express";
import { LeadershipSectionService } from "./LeadershipSection.service";


const createLeadershipSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await LeadershipSectionService.createLeadershipSection(
      req.body
    );

  res.status(201).json({
    success: true,
    message:
      "Leadership section created successfully",
    data: result,
  });
};

const getLeadershipSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await LeadershipSectionService.getLeadershipSection();

  res.status(200).json({
    success: true,
    message:
      "Leadership section retrieved successfully",
    data: result,
  });
};

const updateLeadershipSection = async (
  req: Request,
  res: Response
) => {
  const result =
    await LeadershipSectionService.updateLeadershipSection(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message:
      "Leadership section updated successfully",
    data: result,
  });
};

const deleteLeadershipSection = async (
  req: Request,
  res: Response
) => {
  await LeadershipSectionService.deleteLeadershipSection(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message:
      "Leadership section deleted successfully",
  });
};

export const LeadershipSectionController = {
  createLeadershipSection,
  getLeadershipSection,
  updateLeadershipSection,
  deleteLeadershipSection,
};