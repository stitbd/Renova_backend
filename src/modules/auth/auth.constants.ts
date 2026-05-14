import { env } from "../../configs/env";
import { UserType } from "./auth.types";

export const authConfig = {
  [UserType.SUPER_ADMIN]: {
    refreshCookieName: "superAdminRefreshToken",
  },

  [UserType.OUTLET_USER]: {
    refreshCookieName: "outletUserRefreshToken",
  },

  [UserType.DOCTOR]: {
    refreshCookieName: "doctorRefreshToken",
  },

  [UserType.PATIENT]: {
    refreshCookieName: "patientRefreshToken",
  },
};

export const jwtConfig = {
  accessSecret: env.jwtAccessSecret,
  refreshSecret: env.jwtRefreshSecret,

  accessExpiresIn:
    env.jwtAccessExpiresIn || "7d",

  refreshExpiresIn:
    env.jwtRefreshExpiresIn || "30d",
};