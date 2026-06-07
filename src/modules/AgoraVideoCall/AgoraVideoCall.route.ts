// src/modules/videoCall/videoCall.route.ts

import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../utils/validateRequest";
import {
    callIdValidationSchema,
    startCallValidationSchema,
} from "./videoCall.validation";
import { videoCallController } from "./AgoraVideoCall.controller";

const router = express.Router();

router.post("/start", auth("PATIENT", "DOCTOR"), validateRequest(startCallValidationSchema), videoCallController.startCall);
router.post("/accept", auth("PATIENT", "DOCTOR"), validateRequest(callIdValidationSchema), videoCallController.acceptCall);
router.post("/reject", auth("PATIENT", "DOCTOR"), validateRequest(callIdValidationSchema), videoCallController.rejectCall);
router.post("/end", auth("PATIENT", "DOCTOR"), validateRequest(callIdValidationSchema), videoCallController.endCall);

export const videoCallRoutes = router;