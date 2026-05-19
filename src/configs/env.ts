import dotenv from "dotenv";

dotenv.config();

const requiredEnv = [
  "PORT",
  "MAIN_DATABASE_URL",
  "ECOMMERCE_DATABASE_URL",
  "APPOINTMENT_DATABASE_URL",
  "BCRYPT_SALT_ROUNDS",
  "JWT_ACCESS_SECRET",
  "JWT_REFRESH_SECRET",
  "JWT_ACCESS_EXPIRES_IN",
  "JWT_REFRESH_EXPIRES_IN",
  "SSLCOMMERZ_STORE_ID", "SSLCOMMERZ_STORE_PASSWORD", "SSLCOMMERZ_IS_LIVE", "BACKEND_URL", "FRONTEND_URL"
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const env = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV || "development",

  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  

  bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS),
  sslcommerzStoreId: process.env.SSLCOMMERZ_STORE_ID,
  sslcommerzStorePassword: process.env.SSLCOMMERZ_STORE_PASSWORD,
  sslcommerzIsLive: process.env.SSLCOMMERZ_IS_LIVE,
  backendUrl: process.env.BACKEND_URL,
  frontendUrl: process.env.FRONTEND_URL

};