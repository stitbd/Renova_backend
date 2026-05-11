import express from "express";
import { FacilitySectionController } from "./facilitySection.controller";

const router = express.Router();

router.post(
  "/create",
  FacilitySectionController.createFacilitySection
);

router.get(
  "/get",
  FacilitySectionController.getFacilitySection
);

router.patch(
  "/update/:id",
  FacilitySectionController.updateFacilitySection
);

export const FacilitySectionRoutes = router;