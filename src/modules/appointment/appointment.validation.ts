import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const createAppointmentValidationSchema = z.object({
  doctorId: z.string().uuid(),
  appointmentDate: z.string().regex(dateRegex, "Date must be YYYY-MM-DD"),
  startTime: z.string().regex(timeRegex, "Time must be HH:mm"),
  endTime: z.string().regex(timeRegex, "Time must be HH:mm"),
  type: z.enum(["IN_PERSON", "ONLINE"]).default("IN_PERSON"),
  reason: z.string().max(2000).optional(),
});

export const cancelAppointmentValidationSchema = z.object({
  cancellationReason: z.string().min(2).max(2000),
});