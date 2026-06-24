import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../utils/validateRequest";
import { prescriptionController } from "./prescription.controller";
import {
  createPrescriptionValidationSchema,
  updatePrescriptionValidationSchema,
} from "./prescription.validation";

const router = express.Router();

router.post(
  "/create",
  auth("DOCTOR"),
  validateRequest(createPrescriptionValidationSchema),
  prescriptionController.createPrescription
);

router.get(
  "/my",
  auth("PATIENT", "DOCTOR", "SUPER_ADMIN"),
  prescriptionController.getMyPrescriptions
);



router.get(
  "/appointment/:appointmentId",
  auth("PATIENT", "DOCTOR", "SUPER_ADMIN"),
  prescriptionController.getPrescriptionByAppointment
);


router.get(
  "/:id",
  auth("PATIENT", "DOCTOR", "SUPER_ADMIN"),
  prescriptionController.getSinglePrescription
);

router.patch(
  "/:id",
  auth("DOCTOR"),
  validateRequest(updatePrescriptionValidationSchema),
  prescriptionController.updatePrescription
);



export const prescriptionRoutes = router;