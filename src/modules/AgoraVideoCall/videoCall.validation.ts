import { z } from "zod";

export const startCallValidationSchema = z.object({
  receiverId: z.string().uuid(),
  appointmentId: z.string().uuid().optional(),
  callType: z.enum(["AUDIO", "VIDEO"]).default("VIDEO"),
});

export const callIdValidationSchema = z.object({
  callId: z.string().uuid(),
});