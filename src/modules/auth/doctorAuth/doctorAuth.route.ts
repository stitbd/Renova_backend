import express from "express";
import { doctorAuthController } from "./doctorAuth.controller";

const router = express.Router();

router.post("/login", doctorAuthController.loginDoctor);
router.post("/refresh-token", doctorAuthController.refreshDoctorToken);

export const doctorAuthRoutes = router;