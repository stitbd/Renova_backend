import { Request, Response } from "express";
import { superAdminPermissionService } from "./super_admin_permission.service";
import {
  createSuperAdminPermissionValidationSchema,
  updateSuperAdminPermissionValidationSchema,
} from "./super_admin_permission.validation";

export const superAdminPermissionController = {
  async create(req: Request, res: Response) {
    const validatedData =
      createSuperAdminPermissionValidationSchema.parse(req.body);

    const result = await superAdminPermissionService.create(validatedData);

    res.status(201).json({
      success: true,
      message: "Super admin permission created successfully",
      data: result,
    });
  },

  async getAll(req: Request, res: Response) {
    const result = await superAdminPermissionService.getAll();

    res.status(200).json({
      success: true,
      message: "Super admin permissions retrieved successfully",
      data: result,
    });
  },

  async getById(req: Request, res: Response) {
    const result = await superAdminPermissionService.getById(
      req.params.id as string
    );

    res.status(200).json({
      success: true,
      message: "Super admin permission retrieved successfully",
      data: result,
    });
  },

  async update(req: Request, res: Response) {
    const validatedData =
      updateSuperAdminPermissionValidationSchema.parse(req.body);

    const result = await superAdminPermissionService.update(
      req.params.id as string,
      validatedData
    );

    res.status(200).json({
      success: true,
      message: "Super admin permission updated successfully",
      data: result,
    });
  },

  async delete(req: Request, res: Response) {
    await superAdminPermissionService.delete(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Super admin permission deleted successfully",
      data: null,
    });
  },
};