// src/modules/videoCall/videoCall.controller.ts

import { Request, Response } from "express";
import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import { AuthUser } from "../../middlewares/auth";
import { videoCallService } from "./AgoraVideoCall.service";

const startCall = catchAsync(async (req: Request, res: Response) => {
  const result = await videoCallService.startCall(
    req.body,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 201,
    success: true,
    message: "Call started successfully",
    data: result,
  });
});

const acceptCall = catchAsync(async (req: Request, res: Response) => {
  const result = await videoCallService.acceptCall(
    req.body.callId,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Call accepted successfully",
    data: result,
  });
});

const rejectCall = catchAsync(async (req: Request, res: Response) => {
  const result = await videoCallService.rejectCall(
    req.body.callId,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Call rejected successfully",
    data: result,
  });
});

const endCall = catchAsync(async (req: Request, res: Response) => {
  const result = await videoCallService.endCall(
    req.body.callId,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 200,
    success: true,
    message: "Call ended successfully",
    data: result,
  });
});

export const videoCallController = {
  startCall,
  acceptCall,
  rejectCall,
  endCall,
};