import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../utils/validateRequest";
import { paymentController } from "./payment.controller";
import { initiatePaymentValidationSchema } from "./payment.validation";

const router = express.Router();

router.post(
    "/appointment/initiate",
    auth("PATIENT"),
    validateRequest(initiatePaymentValidationSchema),
    paymentController.initiateAppointmentPayment
);

router.post("/sslcommerz/success", paymentController.sslcommerzSuccess);
router.post("/sslcommerz/fail", paymentController.sslcommerzFail);
router.post("/sslcommerz/cancel", paymentController.sslcommerzCancel);
router.post("/sslcommerz/ipn", paymentController.sslcommerzIpn);

export const paymentRoutes = router;