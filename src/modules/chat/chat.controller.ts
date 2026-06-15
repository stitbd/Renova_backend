import { Request, Response } from "express";
import { AuthUser } from "../../middlewares/auth";
import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import { chatService } from "./chat.service";

const sendMessage = catchAsync(async (req: Request, res: Response) => {
  const file = req.file as Express.Multer.File | undefined;

  const payload = {
    receiverId: req.body.receiverId,
    appointmentId: req.body.appointmentId || undefined,
    message: req.body.message || undefined,
    fileUrl: file?.path || undefined,
    fileName: file?.originalname || undefined,
  };

  const result = await chatService.sendMessage(
    payload,
    req.user as AuthUser
  );

  manageResponse(res, {
    statusCode: 201,
    success: true,
    message: "Message sent successfully",
    data: result,
  });
});


const getMyConversations = catchAsync(async (req: Request, res: Response) => {
    const result = await chatService.getMyConversations(req.user as AuthUser);

    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Conversations retrieved successfully",
        data: result,
    });
});

const getMessages = catchAsync(async (req: Request, res: Response) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 20);

    const result = await chatService.getMessages(
        req.params.conversationId as string,
        req.user as AuthUser,
        page,
        limit
    );

    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Messages retrieved successfully",
        data: result,
    });
});

const markSeen = catchAsync(async (req: Request, res: Response) => {
    const result = await chatService.markSeen(
        req.params.messageId as string,
        req.user as AuthUser
    );

    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Message marked as seen successfully",
        data: result,
    });
});
const getConversationByParticipant = catchAsync(
  async (req: Request, res: Response) => {
    const receiverId = req.query.receiverId as string;
    const appointmentId = req.query.appointmentId as string | undefined;

    const result = await chatService.getConversationByParticipant(
      req.user as AuthUser,
      receiverId,
      appointmentId
    );

    manageResponse(res, {
      statusCode: 200,
      success: true,
      message: "Conversation retrieved successfully",
      data: result,
    });
  }
);

export const chatController = {
    sendMessage,
    getMyConversations,
    getMessages,
    markSeen,
    getConversationByParticipant
};