import express from "express";
import { superAdminRoleController } from "./super_admin_role.controller";
import catchAsync from "../../utils/catch_async";

const router = express.Router();

router.post("/create", catchAsync(superAdminRoleController.create));
router.get("/getAll", catchAsync(superAdminRoleController.getAll));
router.get("/getSingle/:id", catchAsync(superAdminRoleController.getById));
router.patch("/update/:id", catchAsync(superAdminRoleController.update));
router.patch(
    "/assignPermissions/:id",
    catchAsync(superAdminRoleController.assignPermissions)
);
router.delete("/delete/:id", catchAsync(superAdminRoleController.delete));

export const superAdminRoleRoutes = router;