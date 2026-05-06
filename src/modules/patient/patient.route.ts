import { Router } from "express";
import { patientController } from "./patient.controller";

const router = Router();

router.post("/register", patientController.create);
router.get("/getAll", patientController.getAll);
router.get("/getSingle/:id", patientController.getById);
router.patch("/update/:id", patientController.update);

router.patch("/status/:id", patientController.patientStatusUpdate);
router.delete("/delete/:id", patientController.deletePatient);

export const patientRoutes = router;