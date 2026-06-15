import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../utils/validateRequest";
import { chatController } from "./chat.controller";
import { sendMessageValidationSchema } from "./chat.validation";
import { createUploader } from "../../utils/cloudinary";

const router = express.Router();

const chatFileUploader = createUploader("renova/chat-files");

router.post(
  "/send",
  auth("PATIENT", "DOCTOR"),
  chatFileUploader.single("file"),
  chatController.sendMessage
);

router.get(
    "/conversations",
    auth("PATIENT", "DOCTOR"),
    chatController.getMyConversations
);

router.get(
  "/conversation-by-participant",
  auth("PATIENT", "DOCTOR"),
  chatController.getConversationByParticipant
);

router.get(
    "/conversations/:conversationId/messages",
    auth("PATIENT", "DOCTOR"),
    chatController.getMessages
);

router.patch(
    "/messages/:messageId/seen",
    auth("PATIENT", "DOCTOR"),
    chatController.markSeen
);

export const chatRoutes = router;