import { appointmentPrisma, mainPrisma } from "../../databases/prisma";
import { AppError } from "../../utils/app_error";
import { AuthUser } from "../../middlewares/auth";
import { env } from "../../configs/env";
import { sslcommerzService } from "../../utils/sslcommerz.service";

const initiateAppointmentPayment = async (
  appointmentId: string,
  authUser: AuthUser
) => {
  const appointment = await appointmentPrisma.appointment.findUnique({
    where: { id: appointmentId },
    include: {
      payment: true,
    },
  });

  if (!appointment) {
    throw new AppError("Appointment not found", 404);
  }

  if (authUser.userType === "PATIENT" && appointment.patientId !== authUser.id) {
    throw new AppError("You are not allowed to pay for this appointment", 403);
  }

  if (appointment.status === "CANCELLED") {
    throw new AppError("Cannot pay for cancelled appointment", 400);
  }

  if (appointment.paymentStatus === "PAID") {
    throw new AppError("Appointment is already paid", 400);
  }

  if (!appointment.payment) {
    throw new AppError("Payment record not found for this appointment", 404);
  }

  const patient = await mainPrisma.patient.findUnique({
    where: { id: appointment.patientId },
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

  const amount = Number(appointment.payment.amount);

  if (amount <= 0) {
    throw new AppError("Invalid payment amount", 400);
  }

  const sslResponse = await sslcommerzService.initPayment({
    totalAmount: amount,
    transactionId: appointment.payment.transactionId,

    customerName: patient.fullName,
    customerEmail: patient.email,
    customerPhone: patient.mobileNumber,
    customerAddress: patient.address,

    productName: `Appointment ${appointment.appointmentCode}`,
    productCategory: "Appointment",

    successUrl: `${env.backendUrl}/api/v1/payments/sslcommerz/success`,
    failUrl: `${env.backendUrl}/api/v1/payments/sslcommerz/fail`,
    cancelUrl: `${env.backendUrl}/api/v1/payments/sslcommerz/cancel`,
    ipnUrl: `${env.backendUrl}/api/v1/payments/sslcommerz/ipn`,
  });

  await appointmentPrisma.appointmentPayment.update({
    where: {
      id: appointment.payment.id,
    },
    data: {
      gatewayResponse: sslResponse,
    },
  });

  return {
    paymentUrl: sslResponse.GatewayPageURL,
    transactionId: appointment.payment.transactionId,
  };
};

const handleSslcommerzSuccess = async (payload: any) => {
  const transactionId = payload.tran_id;
  const validationId = payload.val_id;

  if (!transactionId || !validationId) {
    throw new AppError("Invalid SSLCommerz success payload", 400);
  }

  const validationResponse = await sslcommerzService.validatePayment(validationId);

  const isValid =
    validationResponse.status === "VALID" ||
    validationResponse.status === "VALIDATED";

  console.log("validate response ", validationResponse);

  if (!isValid) {
    throw new AppError("SSLCommerz payment validation failed", 400);
  }

  const payment = await appointmentPrisma.appointmentPayment.findUnique({
    where: {
      transactionId,
    },
    include: {
      appointment: true,
    },
  });

  if (!payment) {
    throw new AppError("Payment record not found", 404);
  }

  if (payment.status === "PAID") {
    return {
      message: "Payment already processed",
      appointmentId: payment.appointmentId,
    };
  }

  const paidAmount = Number(validationResponse.amount);
  const expectedAmount = Number(payment.amount);

  if (paidAmount !== expectedAmount) {
    throw new AppError("Payment amount mismatch", 400);
  }

  return appointmentPrisma.$transaction(async (tx) => {
    const updatedPayment = await tx.appointmentPayment.update({
      where: {
        id: payment.id,
      },
      data: {
        status: "PAID",
        validationId,
        bankTransactionId: validationResponse.bank_tran_id || null,
        paymentMethod: validationResponse.card_issuer || null,
        cardType: validationResponse.card_type || null,
        gatewayResponse: validationResponse,
        paidAt: new Date(),
      },
    });

    const updatedAppointment = await tx.appointment.update({
      where: {
        id: payment.appointmentId,
      },
      data: {
        paymentStatus: "PAID",
        status: "CONFIRMED",
        confirmedAt: new Date(),
      },
    });

    await tx.appointmentStatusLog.create({
      data: {
        appointmentId: payment.appointmentId,
        previousStatus: payment.appointment.status,
        newStatus: "CONFIRMED",
        changedById: payment.appointment.patientId,
        changedByRole: "PATIENT",
        note: "Payment completed via SSLCommerz",
      },
    });


    console.log('udpatecd payment', updatedPayment)
    console.log('udpatecd updatedAppointment', updatedAppointment)





    return {
      payment: updatedPayment,
      appointment: updatedAppointment,
    };
  });
};

const handleSslcommerzFailOrCancel = async (
  payload: any,
  status: "FAILED" | "CANCELLED"
) => {
  const transactionId = payload.tran_id;

  if (!transactionId) {
    throw new AppError("Invalid SSLCommerz payload", 400);
  }

  const payment = await appointmentPrisma.appointmentPayment.findUnique({
    where: {
      transactionId,
    },
  });

  if (!payment) {
    throw new AppError("Payment record not found", 404);
  }

  if (payment.status === "PAID") {
    return {
      message: "Payment already paid. Ignoring fail/cancel callback.",
    };
  }

  await appointmentPrisma.appointmentPayment.update({
    where: {
      id: payment.id,
    },
    data: {
      status: "FAILED",
      gatewayResponse: payload,
    },
  });

  await appointmentPrisma.appointment.update({
    where: {
      id: payment.appointmentId,
    },
    data: {
      paymentStatus: "FAILED",
    },
  });

  return {
    message: `Payment ${status.toLowerCase()} handled successfully`,
  };
};

export const paymentService = {
  initiateAppointmentPayment,
  handleSslcommerzSuccess,
  handleSslcommerzFailOrCancel,
};