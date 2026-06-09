import { Request, Response } from "express";
import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import { paymentService } from "./payment.service";
import { AuthUser } from "../../middlewares/auth";
import { env } from "../../configs/env";

const initiateAppointmentPayment = catchAsync(
    async (req: Request, res: Response) => {
        const result = await paymentService.initiateAppointmentPayment(
            req.body.appointmentId,
            req.user as AuthUser
        );

        manageResponse(res, {
            statusCode: 200,
            success: true,
            message: "Payment initiated successfully",
            data: result,
        });
    }
);

const sslcommerzSuccess = catchAsync(async (req: Request, res: Response) => {
  const result : any =   await paymentService.handleSslcommerzSuccess(req.body);

  console.log("SSLCommerz Success Result appointment:", result?.payment?.appointmentId);

    return res.redirect(`${env.frontendUrl}/appointment/payment/success?paymentId=${result?.payment?.id}`);

});

const sslcommerzFail = catchAsync(async (req: Request, res: Response) => {
    await paymentService.handleSslcommerzFailOrCancel(req.body, "FAILED");

    return res.redirect(`${env.frontendUrl}/appointment?payment=fail`);
});

const sslcommerzCancel = catchAsync(async (req: Request, res: Response) => {
    await paymentService.handleSslcommerzFailOrCancel(req.body, "CANCELLED");

    return res.redirect(`${env.frontendUrl}/appointment?payment=cancel`);
});



const sslcommerzIpn = catchAsync(async (req: Request, res: Response) => {
    await paymentService.handleSslcommerzSuccess(req.body);

    return res.status(200).json({
        success: true,
        message: "IPN processed successfully",
    });
});

const getSinglePayment = catchAsync(async (req: Request, res: Response) => {
  const paymentId = req.params.paymentId;
  const payment = await paymentService.getSinglePayment(paymentId as string);

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Payment retrieved successfully",
    data: payment,
  });
});

export const paymentController = {
    initiateAppointmentPayment,
    sslcommerzSuccess,
    sslcommerzFail,
    sslcommerzCancel,
    sslcommerzIpn,
    getSinglePayment
};




