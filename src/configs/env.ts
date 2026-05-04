import dotenv from "dotenv";

dotenv.config();

const requiredEnv = [
  "PORT",
  "MAIN_DATABASE_URL",
  "ECOMMERCE_DATABASE_URL",
  "APPOINTMENT_DATABASE_URL",
  "JWT_SECRET",
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const env = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
};