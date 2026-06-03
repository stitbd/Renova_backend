// src/modules/videoCall/videoCall.validation.ts

import { z } from "zod";

export const startCallValidationSchema = z.object({
    receiverId: z.string().uuid(),
    appointmentId: z.string().uuid().optional(),
});

export const callIdValidationSchema = z.object({
    callId: z.string().uuid(),
});