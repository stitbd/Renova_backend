import { Request, Response } from "express";
import { ProductSectionService } from "./productSection.service";

const createProductSection = async (req: Request, res: Response) => {
  const result = await ProductSectionService.createProductSection(req.body);

  res.status(201).json({
    success: true,
    message: "Product section created successfully",
    data: result,
  });
};

const getProductSection = async (req: Request, res: Response) => {
  const result = await ProductSectionService.getProductSection();

  res.status(200).json({
    success: true,
    message: "Product section retrieved successfully",
    data: result,
  });
};

const updateProductSection = async (req: Request, res: Response) => {
  const result = await ProductSectionService.updateProductSection(
    req.params.id as string,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Product section updated successfully",
    data: result,
  });
};

export const ProductSectionController = {
  createProductSection,
  getProductSection,
  updateProductSection,
};