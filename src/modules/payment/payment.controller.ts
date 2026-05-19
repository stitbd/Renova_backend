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
    await paymentService.handleSslcommerzSuccess(req.body);

    // return res.redirect(`${env.frontendUrl}/payment/success`);
    return res.json({message : "Payment successfull "})
});

const sslcommerzFail = catchAsync(async (req: Request, res: Response) => {
    await paymentService.handleSslcommerzFailOrCancel(req.body, "FAILED");

    return res.redirect(`${env.frontendUrl}/payment/fail`);
});

const sslcommerzCancel = catchAsync(async (req: Request, res: Response) => {
    await paymentService.handleSslcommerzFailOrCancel(req.body, "CANCELLED");

    return res.redirect(`${env.frontendUrl}/payment/cancel`);
});



const sslcommerzIpn = catchAsync(async (req: Request, res: Response) => {
    await paymentService.handleSslcommerzSuccess(req.body);

    return res.status(200).json({
        success: true,
        message: "IPN processed successfully",
    });
});

export const paymentController = {
    initiateAppointmentPayment,
    sslcommerzSuccess,
    sslcommerzFail,
    sslcommerzCancel,
    sslcommerzIpn,
};




