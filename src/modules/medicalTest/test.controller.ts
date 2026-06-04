import { Request, Response } from "express";
import { TestService } from "./test.service";

const createTest = async (req: Request, res: Response) => {
  const result = await TestService.createTest(req.body);

  res.status(201).json({
    success: true,
    message: "Test created successfully",
    data: result,
  });
};

const getAllTests = async (_req: Request, res: Response) => {
  const result = await TestService.getAllTests();

  res.status(200).json({
    success: true,
    message: "Tests retrieved successfully",
    data: result,
  });
};

const getTestById = async (req: Request, res: Response) => {
  const result = await TestService.getTestById(req.params.id as string);

  res.status(200).json({
    success: true,
    message: "Test retrieved successfully",
    data: result,
  });
};

const updateTest = async (req: Request, res: Response) => {
  const result = await TestService.updateTest(req.params.id as string, req.body);

  res.status(200).json({
    success: true,
    message: "Test updated successfully",
    data: result,
  });
};

const deleteTest = async (req: Request, res: Response) => {
  await TestService.deleteTest(req.params.id as string);

  res.status(200).json({
    success: true,
    message: "Test deactivated successfully",
  });
};

export const TestController = {
  createTest,
  getAllTests,
  getTestById,
  updateTest,
  deleteTest,
};