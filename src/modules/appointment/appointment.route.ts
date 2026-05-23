import express from "express";
import auth from "../../middlewares/auth";
import checkPermissionForAdmin from "../../middlewares/checkPermissionForAdmin";
import { appointmentController } from "./appointment.controller";
import {
  cancelAppointmentValidationSchema,
  createAppointmentValidationSchema,
} from "./appointment.validation";
import { validateRequest } from "../../utils/validateRequest";

const router = express.Router();

router.post(
  "/create",
  auth("PATIENT"),
  validateRequest(createAppointmentValidationSchema),
  appointmentController.createAppointment
);

router.get(
  "/my",
  auth("PATIENT", "DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  appointmentController.getMyAppointments
);



router.patch(
  "/cancel/:id",
  auth("PATIENT", "DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  validateRequest(cancelAppointmentValidationSchema),
  appointmentController.cancelAppointment
);

router.patch(
  "/confirm/:id",
  auth("DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  checkPermissionForAdmin(["appointment.confirm"]),
  appointmentController.confirmAppointment
);

router.patch(
  "/complete/:id",
  auth("DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  checkPermissionForAdmin(["appointment.complete"]),
  appointmentController.completeAppointment
);

router.patch(
  "/no-show/:id",
  auth("DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  checkPermissionForAdmin(["appointment.no_show"]),
  appointmentController.markNoShow
);


router.get(
  "/getAvailableSlots/:doctorId",
  auth("PATIENT", "DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  appointmentController.getDoctorSlots
);

export const appointmentRoutes = router;