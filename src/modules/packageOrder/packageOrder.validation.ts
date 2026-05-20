import { z } from "zod";

export const createPackageOrderValidationSchema = z.object({
  packageId: z.string().uuid(),
  paymentMethod: z.enum(["SSLCOMMERZ", "CASH", "MANUAL"]).default("SSLCOMMERZ"),
  notes: z.string().max(2000).optional(),
});

export const initiatePackagePaymentValidationSchema = z.object({
  orderId: z.string().uuid(),
});

export const markPackageOrderPaidValidationSchema = z.object({
  note: z.string().max(2000).optional(),
});