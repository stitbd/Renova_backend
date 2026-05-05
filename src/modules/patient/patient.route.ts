import { Router } from "express";
import { patientController } from "./patient.controller";

const router = Router();

router.post("/register", patientController.create);
router.get("/getAll", patientController.getAll);
router.get("/get/:id", patientController.getById);
router.patch("/update/:id", patientController.update);
router.delete("/delete/:id", patientController.delete);

export const patientRoutes = router;