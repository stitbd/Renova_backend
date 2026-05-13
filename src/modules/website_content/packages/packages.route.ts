import express from "express";
import { PackageBannerController } from "./packages.controller";


const router = express.Router();

router.post(
  "/create",
  PackageBannerController.createPackageBanner
);

router.get(
  "/get",
  PackageBannerController.getPackageBanner
);

router.patch(
  "/update/:id",
  PackageBannerController.updatePackageBanner
);

router.delete(
  "/delete/:id",
  PackageBannerController.deletePackageBanner
);

export const PackageBannerRoutes = router;