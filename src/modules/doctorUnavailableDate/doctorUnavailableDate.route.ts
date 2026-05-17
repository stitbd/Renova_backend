// src/modules/doctorUnavailableDate/doctorUnavailableDate.route.ts

import express from "express";
import auth from "../../middlewares/auth";
import checkPermissionForAdmin from "../../middlewares/checkPermissionForAdmin";
import { validateRequest } from "../../utils/validateRequest";

import { createDoctorUnavailableDateValidationSchema, updateDoctorUnavailableDateValidationSchema } from "./doctorUnavailableDate.validation";
import { doctorUnavailableDateController } from "./doctorUnavailableDate.controller";


const router = express.Router();

router.post(
  "/create",
  auth("DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  checkPermissionForAdmin(["doctor_unavailable_date.create"]),
  validateRequest(createDoctorUnavailableDateValidationSchema),
  doctorUnavailableDateController.create
);

router.get(
  "/getByDoctor/:doctorId",
  auth("DOCTOR", "OUTLET_USER", "SUPER_ADMIN", "PATIENT"),
  doctorUnavailableDateController.getByDoctor
);

router.patch(
  "/update/:id",
  auth("DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  checkPermissionForAdmin(["doctor_unavailable_date.update"]),
  validateRequest(updateDoctorUnavailableDateValidationSchema),
  doctorUnavailableDateController.update
);

router.delete(
  "/delete/:id",
  auth("DOCTOR", "OUTLET_USER", "SUPER_ADMIN"),
  checkPermissionForAdmin(["doctor_unavailable_date.delete"]),
  doctorUnavailableDateController.remove
);

export const doctorUnavailableDateRoutes = router;