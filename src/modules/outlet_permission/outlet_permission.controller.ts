import { Request, Response } from "express";
import { outletPermissionService } from "./outlet_permission.service";
import {
  createOutletPermissionValidationSchema,
  updateOutletPermissionValidationSchema,
} from "./outlet_permission.validation";

export const outletPermissionController = {
  async create(req: Request, res: Response) {
    const validatedData = createOutletPermissionValidationSchema.parse(req.body);

    const result = await outletPermissionService.create(validatedData);

    res.status(201).json({
      success: true,
      message: "Outlet permission created successfully",
      data: result,
    });
  },

  async getAll(req: Request, res: Response) {
    const result = await outletPermissionService.getAll();

    res.status(200).json({
      success: true,
      message: "Outlet permissions retrieved successfully",
      data: result,
    });
  },

  async getById(req: Request, res: Response) {
    const result = await outletPermissionService.getById(
      req.params.id as string
    );

    res.status(200).json({
      success: true,
      message: "Outlet permission retrieved successfully",
      data: result,
    });
  },

  async update(req: Request, res: Response) {
    const validatedData = updateOutletPermissionValidationSchema.parse(req.body);

    const result = await outletPermissionService.update(
      req.params.id as string,
      validatedData
    );

    res.status(200).json({
      success: true,
      message: "Outlet permission updated successfully",
      data: result,
    });
  },

  async delete(req: Request, res: Response) {
    await outletPermissionService.delete(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Outlet permission deleted successfully",
      data: null,
    });
  },
};