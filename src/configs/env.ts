import dotenv from "dotenv";

dotenv.config();

const requiredEnv = [
  "PORT",
  "MAIN_DATABASE_URL",
  "ECOMMERCE_DATABASE_URL",
  "APPOINTMENT_DATABASE_URL",
  "BCRYPT_SALT_ROUNDS",
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const env = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV || "development",
  patientAccessTokenSecret: process.env.PATIENT_ACCESS_JWT_SECRET as string,
  patientAccessTokenExpiresIn: process.env.PATIENT_ACCESS_JWT_EXPIRES_IN || "7d",
  patientRefreshTokenSecret: process.env.PATIENT_REFRESH_JWT_SECRET as string,
  patientRefreshTokenExpiresIn: process.env.PATIENT_REFRESH_JWT_EXPIRES_IN || "30d",
  doctorAccessTokenSecret: process.env.DOCTOR_ACCESS_JWT_SECRET as string,
  doctorAccessTokenExpiresIn: process.env.DOCTOR_ACCESS_JWT_EXPIRES_IN || "7d",
  doctorRefreshTokenSecret: process.env.DOCTOR_REFRESH_JWT_SECRET as string,
  doctorRefreshTokenExpiresIn: process.env.DOCTOR_REFRESH_JWT_EXPIRES_IN || "30d",
  outletUserAccessTokenSecret: process.env.OUTLET_USER_ACCESS_JWT_SECRET as string,
  outletUserAccessTokenExpiresIn: process.env.OUTLET_USER_ACCESS_JWT_EXPIRES_IN || "7d",
  outletUserRefreshTokenSecret: process.env.OUTLET_USER_REFRESH_JWT_SECRET as string,
  outletUserRefreshTokenExpiresIn: process.env.OUTLET_USER_REFRESH_JWT_EXPIRES_IN || "30d",
  bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS),
};