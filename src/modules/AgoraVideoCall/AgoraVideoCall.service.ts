// src/modules/videoCall/videoCall.service.ts

import { v4 as uuidv4 } from "uuid";
import { appointmentPrisma, mainPrisma } from "../../databases/prisma";
import { AppError } from "../../utils/app_error";
import { generateAgoraToken, generateAgoraUid } from "../../utils/agoraToken";
import { getIo } from "../../socket/initSocket";
import { AuthUser } from "../../middlewares/auth";
import { getOrCreateConversation } from "../chat/chat.service";

type StartCallPayload = {
    receiverId: string;
    appointmentId?: string;
    callType?: "AUDIO" | "VIDEO";
};

const getUserBasicInfo = async (userId: string) => {
    const [doctor, patient, outletUser, superAdmin] = await Promise.all([
        mainPrisma.doctor.findUnique({
            where: { id: userId },
            select: { id: true, fullName: true },
        }),
        mainPrisma.patient.findUnique({
            where: { id: userId },
            select: { id: true, fullName: true },
        }),
        mainPrisma.outletUser.findUnique({
            where: { id: userId },
            select: { id: true, name: true },
        }),
        mainPrisma.superAdmins.findUnique({
            where: { id: userId },
            select: { id: true, name: true },
        }),
    ]);

    if (doctor) return { id: doctor.id, name: doctor.fullName };
    if (patient) return { id: patient.id, name: patient.fullName };
    if (outletUser) return { id: outletUser.id, name: outletUser.name };
    if (superAdmin) return { id: superAdmin.id, name: superAdmin.name };

    return null;

};
const createCallHistoryMessage = async ({
  callerId,
  receiverId,
  appointmentId,
  callType,
  status,
}: {
  callerId: string;
  receiverId: string;
  appointmentId?: string | null;
  callType: "AUDIO" | "VIDEO";
  status: "MISSED" | "REJECTED" | "ENDED";
}) => {
  const conversation = await getOrCreateConversation(callerId, receiverId);

  const messageText =
    status === "MISSED"
      ? `Missed ${callType.toLowerCase()} call`
      : status === "REJECTED"
        ? `${callType.toLowerCase()} call declined`
        : `${callType.toLowerCase()} call ended`;

  const message = await appointmentPrisma.chatMessage.create({
    data: {
      conversationId: conversation.id,
      senderId: callerId,
      receiverId,
      appointmentId: appointmentId || undefined,
      type: "CALL" as any,
      message: messageText,
    },
  });

  await appointmentPrisma.chatConversation.update({
    where: { id: conversation.id },
    data: { updatedAt: new Date() },
  });

  const response = {
    ...message,
    conversationId: conversation.id,
    callType,
    callStatus: status,
  };

  getIo().to(callerId).emit("receive_message", response);
  getIo().to(receiverId).emit("receive_message", response);

  return response;
};


const startCall = async (payload: StartCallPayload, authUser: AuthUser) => {
    const callerId = authUser.id;
    const receiverId = payload.receiverId;

    if (callerId === receiverId) {
        throw new AppError("Caller and receiver cannot be same", 400);
    }

    const receiver = await getUserBasicInfo(receiverId);

    if (!receiver) {
        throw new AppError("Receiver not found", 404);
    }

    const caller = await getUserBasicInfo(callerId);

    const callId = uuidv4();
    const channelName = `renova_${callId}`;

    const callerUid = generateAgoraUid();
    const callerToken = generateAgoraToken(channelName, callerUid);

    const callType = payload.callType || "VIDEO";

    const call = await appointmentPrisma.videoCall.create({
        data: {
            callId,
            channelName,
            appointmentId: payload.appointmentId || null,
            callerId,
            receiverId,
            callerUid,
            callType,
            status: "RINGING",
        },
    });

    getIo().to(receiverId).emit(
        callType === "AUDIO" ? "incoming_audio_call" : "incoming_video_call",
        {
            callId: call.callId,
            channelName: call.channelName,
            appointmentId: call.appointmentId,
            callerId,
            callerName: caller?.name || "Unknown",
            callType,
        }
    );


    // for missed call 

    const CALL_TIMEOUT_MS = 31_000;

setTimeout(async () => {
  const latestCall = await appointmentPrisma.videoCall.findUnique({
    where: { callId: call.callId },
  });

  if (!latestCall || latestCall.status !== "RINGING") return;

  await appointmentPrisma.videoCall.update({
    where: { callId: call.callId },
    data: {
      status: "MISSED",
      endedAt: new Date(),
    },
  });

  await createCallHistoryMessage({
    callerId: latestCall.callerId,
    receiverId: latestCall.receiverId,
    appointmentId: latestCall.appointmentId,
    callType: latestCall.callType,
    status: "MISSED",
  });

  [latestCall.callerId, latestCall.receiverId].forEach((userId) => {
    getIo().to(userId).emit(
      latestCall.callType === "AUDIO"
        ? "audio_call_missed"
        : "video_call_missed",
      {
        callId: latestCall.callId,
        channelName: latestCall.channelName,
        callType: latestCall.callType,
      }
    );
  });
}, CALL_TIMEOUT_MS);



    return {
        callId: call.callId,
        channelName: call.channelName,
        callType,
        appId: process.env.AGORA_APP_ID,
        token: callerToken,
        uid: callerUid,
    };
};

const acceptCall = async (callId: string, authUser: AuthUser) => {
    const call = await appointmentPrisma.videoCall.findUnique({
        where: { callId },
    });

    if (!call) {
        throw new AppError("Call not found", 404);
    }

    if (call.receiverId !== authUser.id) {
        throw new AppError("You are not allowed to accept this call", 403);
    }

    if (call.status !== "RINGING") {
        throw new AppError("Call already handled", 400);
    }

    const receiverUid = generateAgoraUid();
    const receiverToken = generateAgoraToken(call.channelName, receiverUid);

    const updatedCall = await appointmentPrisma.videoCall.update({
        where: { callId },
        data: {
            status: "ACCEPTED",
            receiverUid,
            startedAt: new Date(),
        },
    });

    getIo().to(call.callerId).emit(
        call.callType === "AUDIO" ? "audio_call_accepted" : "video_call_accepted",
        {
            callId,
            channelName: call.channelName,
            callType: call.callType,
        }
    );

    return {
        callId: updatedCall.callId,
        channelName: updatedCall.channelName,
        callType: updatedCall.callType,
        appId: process.env.AGORA_APP_ID,
        token: receiverToken,
        uid: receiverUid,
    };
};

const rejectCall = async (callId: string, authUser: AuthUser) => {
    const call = await appointmentPrisma.videoCall.findUnique({
        where: { callId },
    });

    if (!call) {
        throw new AppError("Call not found", 404);
    }

    if (call.receiverId !== authUser.id) {
        throw new AppError("You are not allowed to reject this call", 403);
    }

    if (call.status !== "RINGING") {
        throw new AppError("Call already handled", 400);
    }

    await appointmentPrisma.videoCall.update({
        where: { callId },
        data: {
            status: "REJECTED",
            endedAt: new Date(),
        },
    });


        await createCallHistoryMessage({
  callerId: call.callerId,
  receiverId: call.receiverId,
  appointmentId: call.appointmentId,
  callType: call.callType,
  status: "REJECTED",
});

    getIo().to(call.callerId).emit(
        call.callType === "AUDIO" ? "audio_call_rejected" : "video_call_rejected",
        {
            callId,
            receiverId: authUser.id,
            callType: call.callType,
        }
    );



    return null;
};



const endCall = async (callId: string, authUser: AuthUser) => {
  const call = await appointmentPrisma.videoCall.findUnique({
    where: { callId },
  });

  if (!call) {
    throw new AppError("Call not found", 404);
  }

  const isParticipant =
    call.callerId === authUser.id || call.receiverId === authUser.id;

  if (!isParticipant) {
    throw new AppError("You are not allowed to end this call", 403);
  }

  if (["ENDED", "MISSED", "REJECTED"].includes(call.status)) {
    return null;
  }

  const finalStatus =
    call.status === "RINGING" ? "MISSED" : "ENDED";

  await appointmentPrisma.videoCall.update({
    where: { callId },
    data: {
      status: finalStatus,
      endedAt: new Date(),
    },
  });

  await createCallHistoryMessage({
    callerId: call.callerId,
    receiverId: call.receiverId,
    appointmentId: call.appointmentId,
    callType: call.callType,
    status: finalStatus,
  });

  [call.callerId, call.receiverId].forEach((userId) => {
    getIo().to(userId).emit(
      finalStatus === "MISSED"
        ? call.callType === "AUDIO"
          ? "audio_call_missed"
          : "video_call_missed"
        : call.callType === "AUDIO"
          ? "audio_call_ended"
          : "video_call_ended",
      {
        callId,
        channelName: call.channelName,
        callType: call.callType,
      }
    );
  });

  return null;
};

export const videoCallService = {
    startCall,
    acceptCall,
    rejectCall,
    endCall,
};