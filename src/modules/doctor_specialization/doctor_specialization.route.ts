import express from "express";
import { validateRequest } from "../../utils/validateRequest";
import { createDoctorSpecializationSchema, updateDoctorSpecializationSchema } from "./doctor_specialization.validation";
import { doctorSpecializationController } from "./doctor_specialization.controller";

const router = express.Router();


router.post(
  "/create",
  validateRequest(createDoctorSpecializationSchema),
  doctorSpecializationController.createSpecialization
);

router.get("/getAll", doctorSpecializationController.getAllSpecializations);

router.patch(
  "/update/:id",
  validateRequest(updateDoctorSpecializationSchema),
  doctorSpecializationController.updateSpecialization
);

router.delete(
  "/delete/:id",
  doctorSpecializationController.deleteSpecialization
);


export const doctorSpecializationRoutes = router;