import express from "express";
import { superAdminPermissionController } from "./super_admin_permission.controller";
import catchAsync from "../../utils/catch_async";

const router = express.Router();

router.post("/create", catchAsync(superAdminPermissionController.create));
router.get("/getAll", catchAsync(superAdminPermissionController.getAll));
router.get(
    "/getSingle/:id",
    catchAsync(superAdminPermissionController.getById)
);
router.patch("/update/:id", catchAsync(superAdminPermissionController.update));
router.delete("/delete/:id", catchAsync(superAdminPermissionController.delete));

export const superAdminPermissionRoutes = router;