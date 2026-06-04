// src/modules/videoCall/videoCall.service.ts

import { v4 as uuidv4 } from "uuid";
import { appointmentPrisma, mainPrisma } from "../../databases/prisma";
import { AppError } from "../../utils/app_error";
import { generateAgoraToken, generateAgoraUid } from "../../utils/agoraToken";
import { getIo } from "../../socket/initSocket";
import { AuthUser } from "../../middlewares/auth";

type StartCallPayload = {
    receiverId: string;
    appointmentId?: string;
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

    const call = await appointmentPrisma.videoCall.create({
        data: {
            callId,
            channelName,
            appointmentId: payload.appointmentId || null,
            callerId,
            receiverId,
            callerUid,
            status: "RINGING",
        },
    });

    getIo().to(receiverId).emit("incoming_call", {
        callId: call.callId,
        channelName: call.channelName,
        appointmentId: call.appointmentId,
        callerId,
        callerName: caller?.name || "Unknown",
    });

    return {
        callId: call.callId,
        channelName: call.channelName,
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

    getIo().to(call.callerId).emit("call_accepted", {
        callId,
        channelName: call.channelName,
    });

    return {
        callId: updatedCall.callId,
        channelName: updatedCall.channelName,
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

    getIo().to(call.callerId).emit("call_rejected", {
        callId,
        receiverId: authUser.id,
    });

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

    await appointmentPrisma.videoCall.update({
        where: { callId },
        data: {
            status: "ENDED",
            endedAt: new Date(),
        },
    });

    [call.callerId, call.receiverId].forEach((userId) => {
        getIo().to(userId).emit("call_ended", {
            callId,
            channelName: call.channelName,
        });
    });

    return null;
};

export const videoCallService = {
    startCall,
    acceptCall,
    rejectCall,
    endCall,
};