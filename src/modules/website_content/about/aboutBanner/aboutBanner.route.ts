import express from "express";
import { AboutBannerController } from "./aboutBanner.controller";

const router = express.Router();

router.post(
  "/create",
  AboutBannerController.createAboutBanner
);

router.get(
  "/get",
  AboutBannerController.getAboutBanner
);

router.patch(
  "/update/:id",
  AboutBannerController.updateAboutBanner
);
router.delete(
  "/delete/:id",
  AboutBannerController.deleteAboutBanner
);

export const AboutBannerRoutes = router;