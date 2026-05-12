import express from "express";
import { MissionVisionSectionController } from "./MissionVisionSection.controller";


const router = express.Router();

router.post(
  "/create",
  MissionVisionSectionController
  .createMissionVisionSection
);

router.get(
  "/get",
  MissionVisionSectionController.getMissionVisionSection
);

router.patch(
  "/update/:id",
  MissionVisionSectionController.updateMissionVisionSection
);

router.delete(
  "/delete/:id",
  MissionVisionSectionController.deleteMissionVisionSection
);

export const MissionVisionSectionRoutes = router;