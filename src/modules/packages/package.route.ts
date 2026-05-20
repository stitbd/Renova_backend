import express from "express";
import { PackageController } from "./package.controller";
import {
  createPackageValidationSchema,
  updatePackageValidationSchema,
} from "./package.validation";
import catchAsync from "../../utils/catch_async";
import { validateRequest } from "../../utils/validateRequest";

const router = express.Router();

router.post(
  "/create",
  validateRequest(createPackageValidationSchema),
  catchAsync(PackageController.createPackage)
);

router.get("/getAll", catchAsync(PackageController.getAllPackages));

router.get("/getSingle/:id", catchAsync(PackageController.getPackageById));

router.patch(
  "/update/:id",
  validateRequest(updatePackageValidationSchema),
  catchAsync(PackageController.updatePackage)
);

router.delete("/delete/:id", catchAsync(PackageController.deletePackage));

export const PackageRoutes = router;