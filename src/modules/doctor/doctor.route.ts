import express from "express";
import { doctorController } from "./doctor.controller";
import {
  createDoctorSchema,
  updateDoctorOnlineStatusSchema,
  updateDoctorSchema,

  updateDoctorStatusSchema,
} from "./doctor.validation";
import { validateRequest } from "../../utils/validateRequest";

const router = express.Router();

router.post("/create", validateRequest(createDoctorSchema), doctorController.create);

router.get("/all", doctorController.getAll);
router.get("/getSingle/:id", doctorController.getById);

router.patch("/update/:id", validateRequest(updateDoctorSchema), doctorController.update);

router.patch(
  "/update/:id/doctor-status",
  validateRequest(updateDoctorStatusSchema),
  doctorController.updateStatus
);

router.patch(
  "/update/:id/online-status",
  validateRequest(updateDoctorOnlineStatusSchema),
  doctorController.updateOnlineStatus
);

router.delete("/delete/:id", doctorController.delete);

export const doctorRoutes = router;