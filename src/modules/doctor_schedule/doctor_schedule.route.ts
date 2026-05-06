import express from "express";

import { validateRequest } from "../../utils/validateRequest";
import { createDoctorScheduleSchema, updateDoctorScheduleSchema, updateDoctorScheduleStatusSchema } from "./doctor_schedule.validation";
import { doctorScheduleController } from "./doctor_schedule.controller";

const router = express.Router();


router.post(
  "/create",
  validateRequest(createDoctorScheduleSchema),
  doctorScheduleController.createSchedule
);


router.patch(
  "/update/:id",
  validateRequest(updateDoctorScheduleSchema),
  doctorScheduleController.updateSchedule
);

router.patch(
  "/update/:id/status",
  validateRequest(updateDoctorScheduleStatusSchema),
  doctorScheduleController.updateScheduleStatus
);

router.delete(
  "/delete/:id",
  doctorScheduleController.deleteSchedule
);

export const doctorScheduleRoutes = router;