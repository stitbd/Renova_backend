import express from "express";
import { patientAuthController } from "./patientAuth.controller";

const router = express.Router();

router.post("/login", patientAuthController.loginPatient);

router.post(
    "/refresh-token",
    patientAuthController.refreshPatientToken
);



export const patientAuthRoutes = router;