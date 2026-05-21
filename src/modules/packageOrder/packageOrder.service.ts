import { appointmentPrisma, mainPrisma } from "../../databases/prisma";
import { AppError } from "../../utils/app_error";
import { AuthUser } from "../../middlewares/auth";
import {
    generatePackageOrderCode,
    generatePackageTransactionId,
} from "./packageOrder.utils";

import { env } from "../../configs/env";
import { sslcommerzService } from "../../utils/sslcommerz.service";

type CreatePackageOrderPayload = {
    packageId: string;
    paymentMethod: "SSLCOMMERZ" | "CASH" | "MANUAL";
    notes?: string;
};

const createPackageOrder = async (
    payload: CreatePackageOrderPayload,
    authUser: AuthUser
) => {
    if (authUser.userType !== "PATIENT") {
        throw new AppError("Only patients can buy packages", 403);
    }

    const patient = await mainPrisma.patient.findUnique({
        where: { id: authUser.id },
        select: {
            id: true,
            outletId: true,
            isActive: true,
            status: true,
        },
    });

    if (!patient || !patient.isActive || patient.status !== "ACTIVE") {
        throw new AppError("Patient account is inactive", 403);
    }

    const diagnosticPackage = await mainPrisma.diagnosticPackage.findUnique({
        where: { id: payload.packageId },
        include: {
            packageTests: {
                include: {
                    test: true,
                },
            },
        },
    });

    if (!diagnosticPackage || !diagnosticPackage.isActive) {
        throw new AppError("Package not found or inactive", 404);
    }

    if (!diagnosticPackage.packageTests.length) {
        throw new AppError("Package has no diagnostic tests", 400);
    }

    return appointmentPrisma.$transaction(async (tx) => {
        const order = await tx.packageOrder.create({
            data: {
                orderCode: generatePackageOrderCode(),   

                patientId: authUser.id,
                outletId: patient.outletId || null,

                packageId: diagnosticPackage.id,
                packageName: diagnosticPackage.packageName,
                subtitle: diagnosticPackage.subtitle,
                totalPrice: diagnosticPackage.totalPrice,
                discountedPrice: diagnosticPackage.discountedPrice,

                status: "PENDING",
                paymentStatus: "UNPAID",
                paymentMethod: payload.paymentMethod,
                notes: payload.notes,

                items: {
                    create: diagnosticPackage.packageTests.map((item) => ({
                        testId: item.test.id,
                        testName: item.test.name,
                        testCode: item.test.code,
                        price: item.test.price,
                    })),
                },
            },
        });

        const payment = await tx.packagePayment.create({
            data: {
                orderId: order.id,
                amount: diagnosticPackage.discountedPrice,
                currency: "BDT",
                status: "UNPAID",
                method: payload.paymentMethod,
                transactionId: generatePackageTransactionId(),
            },
        });

        return {
            order,
            payment,
        };
    });
};

const getMyPackageOrders = async (authUser: AuthUser) => {
    const where =
        authUser.userType === "PATIENT"
            ? { patientId: authUser.id }
            : authUser.userType === "OUTLET_USER"
                ? { outletId: authUser.outletId }
                : {};

    return appointmentPrisma.packageOrder.findMany({
        where,
        orderBy: {
            createdAt: "desc",
        },
        include: {
            items: true,
            payment: true,
        },
    });
};

const initiatePackagePayment = async (orderId: string, authUser: AuthUser) => {
    const order = await appointmentPrisma.packageOrder.findUnique({
        where: { id: orderId },
        include: {
            payment: true,
        },
    });

    if (!order) {
        throw new AppError("Package order not found", 404);
    }

    if (authUser.userType === "PATIENT" && order.patientId !== authUser.id) {
        throw new AppError("You are not allowed to pay for this package order", 403);
    }

    if (order.status === "CANCELLED") {
        throw new AppError("Cannot pay for cancelled package order", 400);
    }

    if (order.paymentStatus === "PAID") {
        throw new AppError("Package order is already paid", 400);
    }

    if (!order.payment) {
        throw new AppError("Payment record not found", 404);
    }

    if (order.payment.method === "CASH") {
        throw new AppError(
            "This order uses CASH payment. Please pay directly at the outlet counter.",
            400
        );
    }

    if (order.payment.method !== "SSLCOMMERZ") {
        throw new AppError(
            "This order is not configured for online payment.",
            400
        );
    }

    const amount = Number(order.payment.amount);

    if (amount <= 0) {
        throw new AppError("Invalid payment amount", 400);
    }

    const patient = await mainPrisma.patient.findUnique({
        where: { id: order.patientId },
        select: {
            fullName: true,
            email: true,
            mobileNumber: true,
            address: true,
        },
    });

    if (!patient) {
        throw new AppError("Patient not found", 404);
    }

    const sslResponse = await sslcommerzService.initPayment({
        totalAmount: amount,
        transactionId: order.payment.transactionId,

        customerName: patient.fullName,
        customerEmail: patient.email,
        customerPhone: patient.mobileNumber,
        customerAddress: patient.address,

        productName: order.packageName,
        productCategory: "Diagnostic Package",

        successUrl: `${env.backendUrl}/api/v1/package-orders/packagePayments/success`,
        failUrl: `${env.backendUrl}/api/v1/package-orders/packagePayments/fail`,
        cancelUrl: `${env.backendUrl}/api/v1/package-orders/packagePayments/cancel`,
        ipnUrl: `${env.backendUrl}/api/v1/package-orders/packagePayments/ipn`,
    });

    await appointmentPrisma.packagePayment.update({
        where: { id: order.payment.id },
        data: {
            gatewayResponse: sslResponse,
        },
    });


    return {
        paymentUrl: sslResponse.GatewayPageURL,
        transactionId: order.payment.transactionId,
    };
};

const handleSslcommerzSuccess = async (payload: any) => {
    const transactionId = payload.tran_id;
    const validationId = payload.val_id;

    if (!transactionId || !validationId) {
        throw new AppError("Invalid SSLCommerz payload", 400);
    }

    const validationResponse =
        await sslcommerzService.validatePayment(validationId);

    const isValid =
        validationResponse.status === "VALID" ||
        validationResponse.status === "VALIDATED";

    if (!isValid) {
        throw new AppError("SSLCommerz payment validation failed", 400);
    }

    const payment = await appointmentPrisma.packagePayment.findUnique({
        where: { transactionId },
        include: {
            order: true,
        },
    });

    if (!payment) {
        throw new AppError("Package payment not found", 404);
    }

    if (payment.status === "PAID") {
        return {
            message: "Payment already processed",
            orderId: payment.orderId,
        };
    }

    const expectedAmount = Number(payment.amount);
    const paidAmount = Number(validationResponse.amount);

    if (expectedAmount !== paidAmount) {
        throw new AppError("Payment amount mismatch", 400);
    }

    return appointmentPrisma.$transaction(async (tx) => {
        const updatedPayment = await tx.packagePayment.update({
            where: { id: payment.id },
            data: {
                status: "PAID",
                validationId,
                bankTransactionId: validationResponse.bank_tran_id || null,
                paymentMethodName: validationResponse.card_issuer || null,
                cardType: validationResponse.card_type || null,
                gatewayResponse: validationResponse,
                paidAt: new Date(),
            },
        });

        const updatedOrder = await tx.packageOrder.update({
            where: { id: payment.orderId },
            data: {
                status: "CONFIRMED",
                paymentStatus: "PAID",
                paymentMethod: "SSLCOMMERZ",
            },
        });

        console.log('package payment ', updatedPayment)
        console.log('update order ', updatedOrder);
        return {
            payment: updatedPayment,
            order: updatedOrder,
        };
    });
};

const handleSslcommerzFailOrCancel = async (payload: any) => {
    const transactionId = payload.tran_id;

    if (!transactionId) {
        throw new AppError("Invalid SSLCommerz payload", 400);
    }

    const payment = await appointmentPrisma.packagePayment.findUnique({
        where: { transactionId },
    });

    if (!payment) {
        throw new AppError("Package payment not found", 404);
    }

    if (payment.status === "PAID") {
        return {
            message: "Payment already paid. Ignoring callback.",
        };
    }

    await appointmentPrisma.packagePayment.update({
        where: { id: payment.id },
        data: {
            status: "FAILED",
            gatewayResponse: payload,
        },
    });

    await appointmentPrisma.packageOrder.update({
        where: { id: payment.orderId },
        data: {
            paymentStatus: "FAILED",
        },
    });

    return {
        message: "Payment failed/cancelled handled successfully",
    };
};

const markOfflinePaid = async (
    orderId: string,
    authUser: AuthUser,
    note?: string
) => {
    if (
        authUser.userType !== "OUTLET_USER" &&
        authUser.userType !== "SUPER_ADMIN"
    ) {
        throw new AppError("Only outlet user or super admin can mark offline paid", 403);
    }

    const order = await appointmentPrisma.packageOrder.findUnique({
        where: { id: orderId },
        include: {
            payment: true,
        },
    });

    if (!order) {
        throw new AppError("Package order not found", 404);
    }

    // if (
    //     authUser.userType === "OUTLET_USER" &&
    //     order.outletId !== authUser.outletId
    // ) {
    //     throw new AppError("You are not allowed to update this order", 403);
    // }

    if (!order.payment) {
        throw new AppError("Payment record not found", 404);
    }

    if (order.paymentStatus === "PAID") {
        throw new AppError("Package order is already paid", 400);
    }

    return appointmentPrisma.$transaction(async (tx) => {
        const updatedPayment = await tx.packagePayment.update({
            where: { id: order.payment!.id },
            data: {
                status: "PAID",
                method: "CASH",
                paidAt: new Date(),
                gatewayResponse: {
                    note: note || "Offline payment received",
                    markedBy: authUser.id,
                    markedByType: authUser.userType,
                },
            },
        });

        const updatedOrder = await tx.packageOrder.update({
            where: { id: orderId },
            data: {
                status: "CONFIRMED",
                paymentStatus: "PAID",
                paymentMethod: "CASH",
            },
        });

        return {
            payment: updatedPayment,
            order: updatedOrder,
        };
    });
};

export const packageOrderService = {
    createPackageOrder,
    getMyPackageOrders,
    initiatePackagePayment,
    handleSslcommerzSuccess,
    handleSslcommerzFailOrCancel,
    markOfflinePaid,
};
