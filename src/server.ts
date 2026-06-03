import http from "http";
import app from "./app";
import { env } from "./configs/env";
import {
  appointmentPrisma,
  ecommercePrisma,
  mainPrisma,
} from "./databases/prisma";
import { initSocket } from "./socket/initSocket";

let server: http.Server;

const connectDatabases = async () => {
  await mainPrisma.$connect();
  await ecommercePrisma.$connect();
  await appointmentPrisma.$connect();

  console.log("All MySQL databases connected successfully");
};

const disconnectDatabases = async () => {
  await Promise.allSettled([
    mainPrisma.$disconnect(),
    ecommercePrisma.$disconnect(),
    appointmentPrisma.$disconnect(),
  ]);
};

const startServer = async () => {
  try {
    await connectDatabases();

    server = http.createServer(app);

    initSocket(server);

    server.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
      console.log(`Socket.IO running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);

    await disconnectDatabases();

    process.exit(1);
  }
};

const gracefulShutdown = async (signal: string) => {
  console.log(`${signal} received. Shutting down gracefully...`);

  if (server) {
    server.close(async () => {
      await disconnectDatabases();
      console.log("Server closed successfully");
      process.exit(0);
    });
  } else {
    await disconnectDatabases();
    process.exit(0);
  }
};

startServer();

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

process.on("unhandledRejection", async (reason) => {
  console.error("Unhandled Rejection:", reason);
  await gracefulShutdown("UNHANDLED_REJECTION");
});

process.on("uncaughtException", async (error) => {
  console.error("Uncaught Exception:", error);
  await gracefulShutdown("UNCAUGHT_EXCEPTION");
});