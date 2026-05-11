import express from "express";
import { AppointmentSectionController } from "./appointmentSection.controller";

const router = express.Router();

router.post(
    "/create",
    AppointmentSectionController.createAppointmentSection
);

router.get(
    "/get",
    AppointmentSectionController.getAppointmentSection
);

router.patch(
    "/update/:id",
    AppointmentSectionController.updateAppointmentSection
);

export const AppointmentSectionRoutes = router;