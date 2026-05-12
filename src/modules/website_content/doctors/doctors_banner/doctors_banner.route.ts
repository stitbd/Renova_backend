import express from "express";
import { DoctorBannerController } from "./doctors_banner.controller";


const router = express.Router();

router.post(
  "/create",
  DoctorBannerController.createDoctorBanner
);

router.get(
  "/get",
  DoctorBannerController.getDoctorBanner
);

router.patch(
  "/update/:id",
  DoctorBannerController.updateDoctorBanner
);

router.delete(
  "/delete/:id",
  DoctorBannerController.deleteDoctorBanner
);

export const DoctorBannerRoutes = router;