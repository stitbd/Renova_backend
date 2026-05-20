import { Request, Response } from "express";
import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import { AuthUser } from "../../middlewares/auth";
import { env } from "../../configs/env";
import { packageOrderService } from "./packageOrder.service";

const createPackageOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await packageOrderService.createPackageOrder(
    req.body,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 201,
    success: true,
    message: "Package order created successfully",
    data: result,
  });
});

const getMyPackageOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await packageOrderService.getMyPackageOrders(
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Package orders retrieved successfully",
    data: result,
  });
});

const initiatePackagePayment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await packageOrderService.initiatePackagePayment(
      req.body.orderId,
      req.user as AuthUser
    );

    manageResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package payment initiated successfully",
      data: result,
    });
  }
);

const sslcommerzSuccess = catchAsync(async (req: Request, res: Response) => {
  await packageOrderService.handleSslcommerzSuccess(req.body);

  // return res.redirect(`${env.frontendUrl}/payment/success`);
  return res.json({ message :" package order payment successfull"})
});

const sslcommerzFail = catchAsync(async (req: Request, res: Response) => {
  await packageOrderService.handleSslcommerzFailOrCancel(req.body);

  // return res.redirect(`${env.frontendUrl}/payment/fail`);
    return res.json({ message :" package order payment fail"})

});

const sslcommerzCancel = catchAsync(async (req: Request, res: Response) => {
  await packageOrderService.handleSslcommerzFailOrCancel(req.body);

  return res.redirect(`${env.frontendUrl}/payment/cancel`);
});

const sslcommerzIpn = catchAsync(async (req: Request, res: Response) => {
  await packageOrderService.handleSslcommerzSuccess(req.body);

  return res.status(200).json({
    success: true,
    message: "Package payment IPN processed successfully",
  });
});

const markOfflinePaid = catchAsync(async (req: Request, res: Response) => {
  const result = await packageOrderService.markOfflinePaid(
    req.params.orderId as string,
    req.user as AuthUser,
    req.body.note
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Package offline payment marked as paid successfully",
    data: result,
  });
});

export const packageOrderController = {
  createPackageOrder,
  getMyPackageOrders,
  initiatePackagePayment,
  sslcommerzSuccess,
  sslcommerzFail,
  sslcommerzCancel,
  sslcommerzIpn,
  markOfflinePaid,
};