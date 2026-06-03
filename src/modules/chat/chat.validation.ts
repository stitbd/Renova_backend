import { z } from "zod";

export const sendMessageValidationSchema = z
    .object({
        receiverId: z.string().uuid(),
        appointmentId: z.string().uuid().optional(),
        message: z.string().max(5000).optional(),
        fileUrl: z.string().url().optional(),
        fileName: z.string().max(255).optional(),
    })
    .refine((data) => data.message || data.fileUrl, {
        message: "Message or fileUrl is required",
        path: ["message"],
    });