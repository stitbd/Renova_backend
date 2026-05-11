import { Request, Response } from "express";
import { ServiceSectionService } from "./serviceSection.service";

const createServiceSection = async (req: Request, res: Response) => {
  const result = await ServiceSectionService.createServiceSection(req.body);

  res.status(201).json({
    success: true,
    message: "Service section created successfully",
    data: result,
  });
};

const getServiceSection = async (req: Request, res: Response) => {
  const result = await ServiceSectionService.getServiceSection();

  res.status(200).json({
    success: true,
    message: "Service section retrieved successfully",
    data: result,
  });
};

const updateServiceSection = async (req: Request, res: Response) => {
  const result = await ServiceSectionService.updateServiceSection(
    req.params.id as string,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Service section updated successfully",
    data: result,
  });
};



export const ServiceSectionController = {
  createServiceSection,
  getServiceSection,
  updateServiceSection,
};