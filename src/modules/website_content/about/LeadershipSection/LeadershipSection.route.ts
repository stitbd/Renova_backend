import express from "express";
import { LeadershipSectionController } from "./LeadershipSection.controller";


const router = express.Router();

router.post(
  "/create",
  LeadershipSectionController.createLeadershipSection
);

router.get(
  "/get",
  LeadershipSectionController.getLeadershipSection
);

router.patch(
  "/update/:id",
  LeadershipSectionController.updateLeadershipSection
);

router.delete(
  "/delete/:id",
  LeadershipSectionController.deleteLeadershipSection
);

export const LeadershipSectionRoutes = router;