import { Request, Response } from "express";
import { outletRoleService } from "./outlet_role.service";
import {
  assignOutletPermissionsValidationSchema,
  createOutletRoleValidationSchema,
  updateOutletRoleValidationSchema,
} from "./outlet_role.validation";

export const outletRoleController = {
  async create(req: Request, res: Response) {
    const validatedData = createOutletRoleValidationSchema.parse(req.body);

    const result = await outletRoleService.create(validatedData);

    res.status(201).json({
      success: true,
      message: "Outlet role created successfully",
      data: result,
    });
  },

  async getAll(req: Request, res: Response) {
    const result = await outletRoleService.getAll(
      req.params.outletId as string
    );

    res.status(200).json({
      success: true,
      message: "Outlet roles retrieved successfully",
      data: result,
    });
  },

  async getById(req: Request, res: Response) {
    const result = await outletRoleService.getById(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Outlet role retrieved successfully",
      data: result,
    });
  },

  async update(req: Request, res: Response) {
    const validatedData = updateOutletRoleValidationSchema.parse(req.body);

    const result = await outletRoleService.update(
      req.params.id as string,
      validatedData
    );

    res.status(200).json({
      success: true,
      message: "Outlet role updated successfully",
      data: result,
    });
  },

  async assignPermissions(req: Request, res: Response) {
    const validatedData = assignOutletPermissionsValidationSchema.parse(
      req.body
    );

    const result = await outletRoleService.assignPermissions(
      req.params.id as string,
      validatedData
    );

    res.status(200).json({
      success: true,
      message: "Outlet role permissions assigned successfully",
      data: result,
    });
  },

  async delete(req: Request, res: Response) {
    await outletRoleService.delete(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Outlet role deleted successfully",
      data: null,
    });
  },
};