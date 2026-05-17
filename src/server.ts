import app from "./app";
import { env } from "./configs/env";

import {
  appointmentPrisma,
  ecommercePrisma,
  mainPrisma,
} from "./databases/prisma";

const startServer = async () => {
  try {
    await mainPrisma.$connect();
    await ecommercePrisma.$connect();
    await appointmentPrisma.$connect();

    console.log("All MySQL databases connected successfully");

    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);

    await mainPrisma.$disconnect();
    await ecommercePrisma.$disconnect();
    await appointmentPrisma.$disconnect();

    process.exit(1);
  }
};

startServer();

process.on("SIGINT", async () => {
  await mainPrisma.$disconnect();
  await ecommercePrisma.$disconnect();
  await appointmentPrisma.$disconnect();
  process.exit(0);
});

