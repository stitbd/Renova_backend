// src/socket/initSocket.ts

import { Server } from "socket.io";
import { env } from "../configs/env";
import { jwtHelpers } from "../utils/JWT";


let io: Server;

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

    socket.join(userId);

    socket.on("disconnect", () => {
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