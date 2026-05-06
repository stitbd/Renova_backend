import express from "express";
import { validateRequest } from "../../utils/validateRequest";
import { createDoctorSpecializationSchema, updateDoctorSpecializationSchema } from "./doctor_specialization.validation";
import { doctorSpecializationController } from "./doctor_specialization.controller";

const router = express.Router();


router.post(
  "/specializations",
  validateRequest(createDoctorSpecializationSchema),
  doctorSpecializationController.createSpecialization
);

router.get("/specializations/all", doctorSpecializationController.getAllSpecializations);

router.patch(
  "/specializations/:id",
  validateRequest(updateDoctorSpecializationSchema),
  doctorSpecializationController.updateSpecialization
);

router.delete(
  "/specializations/:id",
  doctorSpecializationController.deleteSpecialization
);


export const doctorSpecializationRoutes = router;