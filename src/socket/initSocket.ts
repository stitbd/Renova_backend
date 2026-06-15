// src/socket/initSocket.ts

import { Server } from "socket.io";
import { env } from "../configs/env";
import { jwtHelpers } from "../utils/JWT";

export const onlineUsers = new Map<string, Set<string>>();
    const typingUsers = new Map<string, string>();


let io: Server;

const getOnlineUserIds = () => {
  return Array.from(onlineUsers.keys());
};

export const initSocket = (server: any) => {
  io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000", "http://localhost:5173"],
      credentials: true,
    },
  });

  io.use((socket, next) => {
    try {
      const rawToken =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.authorization;

      const token =
        typeof rawToken === "string" && rawToken.startsWith("Bearer ")
          ? rawToken.split(" ")[1]
          : rawToken;

      if (!token) {
        return next(new Error("Unauthorized"));
      }

      const user = jwtHelpers.verifyToken(token, env.jwtAccessSecret as string);

      socket.data.user = user;
      next();
    } catch {
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", (socket) => {
    const user = socket.data.user;
    const userId = user.id || user.userId;

    if (!userId) {
      socket.disconnect(true);
      return;
    }

    socket.join(userId);

    const existingSockets = onlineUsers.get(userId) || new Set<string>();
    existingSockets.add(socket.id);
    onlineUsers.set(userId, existingSockets);

    io.emit("user_online", {
      userId,
      online: true,
      onlineUserIds: getOnlineUserIds(),
    });

    socket.emit("online_users", {
      onlineUserIds: getOnlineUserIds(),
    });

socket.on("typing_start", ({ receiverId }) => {
  if (!receiverId) return;

  typingUsers.set(userId, receiverId);

  io.to(receiverId).emit("typing_start", {
    userId,
  });
});

socket.on("typing_stop", ({ receiverId }) => {
  if (!receiverId) return;

  typingUsers.delete(userId);

  io.to(receiverId).emit("typing_stop", {
    userId,
  });
});
    

    socket.on("disconnect", () => {
      const userSockets = onlineUsers.get(userId);

      if (userSockets) {
        userSockets.delete(socket.id);

        if (userSockets.size === 0) {
          onlineUsers.delete(userId);

          io.emit("user_offline", {
            userId,
            online: false,
            lastSeen: new Date().toISOString(),
            onlineUserIds: getOnlineUserIds(),
          });
        } else {
          onlineUsers.set(userId, userSockets);
        }
      }

      const typingReceiverId = typingUsers.get(userId);

if (typingReceiverId) {
  io.to(typingReceiverId).emit("typing_stop", {
    userId,
  });

  typingUsers.delete(userId);
}

      console.log("Socket disconnected:", socket.id);
    });
  });

  return io;
};

export const getIo = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }

  return io;
};