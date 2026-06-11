import express from "express";

import { authController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../utils/validateRequest";
import { changePasswordValidationSchema } from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  authController.login
);

router.post(
  "/refresh-token",
  authController.refreshToken
);

router.post(
  "/change-password",
  auth(),
  validateRequest(changePasswordValidationSchema),
  authController.changePassword
);

export const authRoutes = router;