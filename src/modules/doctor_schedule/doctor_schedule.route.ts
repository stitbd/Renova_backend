import express from "express";

import { validateRequest } from "../../utils/validateRequest";
import { createDoctorScheduleSchema, updateDoctorScheduleSchema, updateDoctorScheduleStatusSchema } from "./doctor_schedule.validation";
import { doctorScheduleController } from "./doctor_schedule.controller";

const router = express.Router();


router.post(
  "/schedules",
  validateRequest(createDoctorScheduleSchema),
  doctorScheduleController.createSchedule
);

router.get(
  "/:doctorId/schedules",
  doctorScheduleController.getSchedulesByDoctorId
);

router.patch(
  "/schedules/:id",
  validateRequest(updateDoctorScheduleSchema),
  doctorScheduleController.updateSchedule
);

router.patch(
  "/schedules/:id/status",
  validateRequest(updateDoctorScheduleStatusSchema),
  doctorScheduleController.updateScheduleStatus
);

router.delete(
  "/schedules/:id",
  doctorScheduleController.deleteSchedule
);

export const doctorScheduleRoutes = router;