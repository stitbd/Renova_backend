import express from "express";
import { CareerSectionController } from "./careerSection.controller";

const router = express.Router();

router.post(
  "/create",
  CareerSectionController.createCareerSection
);

router.get(
  "/get",
  CareerSectionController.getCareerSection
);

router.patch(
  "/update/:id",
  CareerSectionController.updateCareerSection
);

router.delete(
  "/delete/:id",
  CareerSectionController.deleteCareerSection
);

export const CareerSectionRoutes = router;