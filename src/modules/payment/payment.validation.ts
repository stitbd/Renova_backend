import { z } from "zod";

export const initiatePaymentValidationSchema = z.object({
  appointmentId: z.string().uuid(),
});