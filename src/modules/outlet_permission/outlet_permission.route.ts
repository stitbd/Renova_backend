import express from "express";
import { outletPermissionController } from "./outlet_permission.controller";
import catchAsync from "../../utils/catch_async";

const router = express.Router();

router.post("/create", catchAsync(outletPermissionController.create));
router.get("/getAll", catchAsync(outletPermissionController.getAll));
router.get("/getSingle/:id", catchAsync(outletPermissionController.getById));
router.patch("/update/:id", catchAsync(outletPermissionController.update));
router.delete("/delete/:id", catchAsync(outletPermissionController.delete));

export const outletPermissionRoutes = router;