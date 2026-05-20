import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../utils/validateRequest";
import { packageOrderController } from "./packageOrder.controller";
import {
    createPackageOrderValidationSchema,
    initiatePackagePaymentValidationSchema,
    markPackageOrderPaidValidationSchema,
} from "./packageOrder.validation";

const router = express.Router();

router.post(
    "/create",
    auth("PATIENT"),
    validateRequest(createPackageOrderValidationSchema),
    packageOrderController.createPackageOrder
);

router.get(
    "/my",
    auth("PATIENT", "OUTLET_USER", "SUPER_ADMIN"),
    packageOrderController.getMyPackageOrders
);

router.post(
    "/packagePayments/initiate",
    auth("PATIENT"),
    validateRequest(initiatePackagePaymentValidationSchema),
    packageOrderController.initiatePackagePayment
);

router.patch(
    "/offline-paid/:orderId",
    auth("OUTLET_USER", "SUPER_ADMIN"),
    validateRequest(markPackageOrderPaidValidationSchema),
    packageOrderController.markOfflinePaid
);

router.post("/packagePayments/success", packageOrderController.sslcommerzSuccess);
router.post("/packagePayments/fail", packageOrderController.sslcommerzFail);
router.post("/packagePayments/cancel", packageOrderController.sslcommerzCancel);
router.post("/packagePayments/ipn", packageOrderController.sslcommerzIpn);

export const packageOrderRoutes = router;