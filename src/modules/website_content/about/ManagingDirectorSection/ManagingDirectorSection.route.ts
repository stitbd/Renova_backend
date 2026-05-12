import express from "express";
import { ManagingDirectorSectionController } from "./ManagingDirectorSection.controller";


const router = express.Router();

router.post(
  "/create",
  ManagingDirectorSectionController.createManagingDirectorSection
);

router.get(
  "/get",
  ManagingDirectorSectionController.getManagingDirectorSection
);

router.patch(
  "/update/:id",
  ManagingDirectorSectionController.updateManagingDirectorSection
);

router.delete(
  "/delete/:id",
  ManagingDirectorSectionController.deleteManagingDirectorSection
);

export const ManagingDirectorSectionRoutes = router;