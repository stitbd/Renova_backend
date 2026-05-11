import express from "express";
import { superAdminController } from "./super_admin.controller";
import catchAsync from "../../utils/catch_async";

const router = express.Router();

router.post("/create", catchAsync(superAdminController.create));
router.get("/getAll", catchAsync(superAdminController.getAll));
router.get("/getSingle/:id", catchAsync(superAdminController.getById));
router.patch("/update/:id", catchAsync(superAdminController.update));
router.patch("/assign-roles/:id", catchAsync(superAdminController.assignRoles));
router.patch("/update-status/:id", catchAsync(superAdminController.updateStatus));
router.delete("/delete/:id", catchAsync(superAdminController.delete));

export const superAdminRoutes = router;