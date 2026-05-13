import express from "express";
import { outletRoleController } from "./outlet_role.controller";
import catchAsync from "../../utils/catch_async";

const router = express.Router();

router.post("/create", catchAsync(outletRoleController.create));

router.get("/getAll/:outletId", catchAsync(outletRoleController.getAll));

router.get("/getSingle/:id", catchAsync(outletRoleController.getById));

router.patch("/update/:id", catchAsync(outletRoleController.update));

router.patch(
  "/assign-permissions/:id",
  catchAsync(outletRoleController.assignPermissions)
);

router.delete("/delete/:id", catchAsync(outletRoleController.delete));

export const outletRoleRoutes = router;