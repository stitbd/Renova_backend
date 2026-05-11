import express from "express";
import { DoctorSectionController } from "./doctorSection.controller";

const router = express.Router();

router.post(
    "/create",
    DoctorSectionController.createDoctorSection
);

router.get(
    "/get",
    DoctorSectionController.getDoctorSection
);

router.patch(
    "/update/:id",
    DoctorSectionController.updateDoctorSection
);

export const DoctorSectionRoutes = router;