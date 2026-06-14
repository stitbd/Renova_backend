import { appointmentPrisma, mainPrisma } from "../../databases/prisma";
import { AuthUser } from "../../middlewares/auth";
import { getIo } from "../../socket/initSocket";
import { AppError } from "../../utils/app_error";

type SendMessagePayload = {
    receiverId: string;
    appointmentId?: string;
    message?: string;
    fileUrl?: string;
    fileName?: string;
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

    if (doctor) return { id: doctor.id, name: doctor.fullName, userType: "DOCTOR" };
    if (patient) return { id: patient.id, name: patient.fullName, userType: "PATIENT" };
    if (outletUser) return { id: outletUser.id, name: outletUser.name, userType: "OUTLET_USER" };
    if (superAdmin) return { id: superAdmin.id, name: superAdmin.name, userType: "SUPER_ADMIN" };

    return null;
};

const getConversationParticipants = (senderId: string, receiverId: string) => {
    return [senderId, receiverId].sort();
};

export const getOrCreateConversation = async (
  senderId: string,
  receiverId: string
) => {
  const [participantOneId, participantTwoId] = getConversationParticipants(
    senderId,
    receiverId
  );

  const existing = await appointmentPrisma.chatConversation.findFirst({
    where: {
      participantOneId,
      participantTwoId,
    },
  });

  if (existing) return existing;

  return appointmentPrisma.chatConversation.create({
    data: {
      participantOneId,
      participantTwoId,
    },
  });
};

const sendMessage = async (payload: SendMessagePayload, authUser: AuthUser) => {
    if (payload.receiverId === authUser.id) {
        throw new AppError("Receiver cannot be same as sender", 400);
    }

    if (!payload.message && !payload.fileUrl) {
        throw new AppError("Message or file is required", 400);
    }

    const receiver = await getUserBasicInfo(payload.receiverId);

    if (!receiver) {
        throw new AppError("Receiver not found", 404);
    }

    if (payload.appointmentId) {
        const appointment = await appointmentPrisma.appointment.findUnique({
            where: { id: payload.appointmentId },
            select: {
                id: true,
                doctorId: true,
                patientId: true,
            },
        });

        if (!appointment) {
            throw new AppError("Appointment not found", 404);
        }

        const isParticipant =
            appointment.doctorId === authUser.id ||
            appointment.patientId === authUser.id ||
            appointment.doctorId === payload.receiverId ||
            appointment.patientId === payload.receiverId;

        if (!isParticipant) {
            throw new AppError("You are not allowed to chat in this appointment", 403);
        }
    }

    const conversation = await getOrCreateConversation(
        authUser.id,
        payload.receiverId,
    );

    const createdMessage = await appointmentPrisma.chatMessage.create({
        data: {
            conversationId: conversation.id,
            senderId: authUser.id,
            receiverId: payload.receiverId,
            type: payload.fileUrl ? "FILE" : "TEXT",
            message: payload.message,
            fileUrl: payload.fileUrl,
            fileName: payload.fileName,
        },
    });

    await appointmentPrisma.chatConversation.update({
        where: { id: conversation.id },
        data: { updatedAt: new Date() },
    });

const sender = await getUserBasicInfo(authUser.id);

const response = {
  ...createdMessage,
  conversationId: conversation.id,
  sender,
  receiver,
};

getIo().to(payload.receiverId).emit("receive_message", response);
getIo().to(authUser.id).emit("message_sent", response);

    return response;
};

const getMyConversations = async (authUser: AuthUser) => {
    const conversations = await appointmentPrisma.chatConversation.findMany({
        where: {
            OR: [
                { participantOneId: authUser.id },
                { participantTwoId: authUser.id },
            ],
        },
        orderBy: {
            updatedAt: "desc",
        },
        include: {
            messages: {
                orderBy: {
                    createdAt: "desc",
                },
                take: 1,
            },
        },
    });

    const participantIds = [
        ...new Set(
            conversations.flatMap((conversation) => [
                conversation.participantOneId,
                conversation.participantTwoId,
            ])
        ),
    ].filter((id) => id !== authUser.id);

    const users = await Promise.all(
        participantIds.map(async (id) => getUserBasicInfo(id))
    );

    const userMap = new Map(
        users.filter(Boolean).map((user) => [user!.id, user])
    );

    return conversations.map((conversation) => {
        const otherUserId =
            conversation.participantOneId === authUser.id
                ? conversation.participantTwoId
                : conversation.participantOneId;

        return {
            ...conversation,
            otherUser: userMap.get(otherUserId) || null,
            lastMessage: conversation.messages[0] || null,
        };
    });
};

const getMessages = async (
    conversationId: string,
    authUser: AuthUser,
    page = 1,
    limit = 20
) => {
    const conversation = await appointmentPrisma.chatConversation.findUnique({
        where: { id: conversationId },
    });

    if (!conversation) {
        throw new AppError("Conversation not found", 404);
    }

    const isParticipant =
        conversation.participantOneId === authUser.id ||
        conversation.participantTwoId === authUser.id;

    if (!isParticipant) {
        throw new AppError("You are not allowed to view this conversation", 403);
    }

    const skip = (page - 1) * limit;

    const [messages, total] = await Promise.all([
        appointmentPrisma.chatMessage.findMany({
            where: { conversationId },
            orderBy: { createdAt: "desc" },
            skip,
            take: limit,
        }),
        appointmentPrisma.chatMessage.count({
            where: { conversationId },
        }),
    ]);

    return {
        meta: {
            page,
            limit,
            total,
            totalPage: Math.ceil(total / limit),
        },
        data: messages.reverse(),
    };
};

const markSeen = async (messageId: string, authUser: AuthUser) => {
    const message = await appointmentPrisma.chatMessage.findUnique({
        where: { id: messageId },
    });

    if (!message) {
        throw new AppError("Message not found", 404);
    }

    if (message.receiverId !== authUser.id) {
        throw new AppError("You are not allowed to mark this message as seen", 403);
    }

    const updatedMessage = await appointmentPrisma.chatMessage.update({
        where: { id: messageId },
        data: {
            seenAt: new Date(),
        },
    });

    getIo().to(message.senderId).emit("message_seen", {
        messageId,
        conversationId: message.conversationId,
        seenAt: updatedMessage.seenAt,
    });

    return updatedMessage;
};

const getConversationByParticipant = async (
  authUser: AuthUser,
  receiverId: string,
  appointmentId?: string
) => {
  if (!receiverId) {
    throw new AppError("Receiver ID is required", 400);
  }

  if (receiverId === authUser.id) {
    throw new AppError("Receiver cannot be same as sender", 400);
  }

  const receiver = await getUserBasicInfo(receiverId);

  if (!receiver) {
    throw new AppError("Receiver not found", 404);
  }

  if (appointmentId) {
    const appointment = await appointmentPrisma.appointment.findUnique({
      where: { id: appointmentId },
      select: {
        id: true,
        doctorId: true,
        patientId: true,
        patientName: true,
        patientPhone: true,
        patientGender: true,
        reason: true,
        startTime: true,
        appointmentDate: true,
      },
    });

    if (!appointment) {
      throw new AppError("Appointment not found", 404);
    }

    const isParticipant =
      appointment.doctorId === authUser.id ||
      appointment.patientId === authUser.id;

    const isReceiverParticipant =
      appointment.doctorId === receiverId ||
      appointment.patientId === receiverId;

    if (!isParticipant || !isReceiverParticipant) {
      throw new AppError("You are not allowed to access this conversation", 403);
    }
  }

  const [participantOneId, participantTwoId] = getConversationParticipants(
    authUser.id,
    receiverId
  );

  const conversation = await appointmentPrisma.chatConversation.findFirst({
    where: {
      participantOneId,
      participantTwoId,
    },
    include: {
      messages: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  return {
    conversation,
    otherUser: receiver,
    lastMessage: conversation?.messages?.[0] || null,
    appointmentId: appointmentId || null,
    receiverId,
  };
};


export const chatService = {
    sendMessage,
    getMyConversations,
    getMessages,
    markSeen,
    getConversationByParticipant
};