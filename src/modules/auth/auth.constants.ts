import { env } from "../../configs/env";
import { UserType } from "./auth.types";


export const authConfig = {
  [UserType.SUPER_ADMIN]: {
    accessSecret: env.superAdminAccessTokenSecret,
    refreshSecret: env.superAdminRefreshTokenSecret,
    accessExpiresIn:
      env.superAdminAccessTokenExpiresIn || "7d",
    refreshExpiresIn:
      env.superAdminRefreshTokenExpiresIn || "30d",
    refreshCookieName: "superAdminRefreshToken",
  },

  [UserType.OUTLET_USER]: {
    accessSecret: env.outletUserAccessTokenSecret,
    refreshSecret: env.outletUserRefreshTokenSecret,
    accessExpiresIn:
      env.outletUserAccessTokenExpiresIn || "7d",
    refreshExpiresIn:
      env.outletUserRefreshTokenExpiresIn || "30d",
    refreshCookieName: "outletUserRefreshToken",
  },

  [UserType.DOCTOR]: {
    accessSecret: env.doctorAccessTokenSecret,
    refreshSecret: env.doctorRefreshTokenSecret,
    accessExpiresIn:
      env.doctorAccessTokenExpiresIn || "7d",
    refreshExpiresIn:
      env.doctorRefreshTokenExpiresIn || "30d",
    refreshCookieName: "doctorRefreshToken",
  },

  [UserType.PATIENT]: {
    accessSecret: env.patientAccessTokenSecret,
    refreshSecret: env.patientRefreshTokenSecret,
    accessExpiresIn:
      env.patientAccessTokenExpiresIn || "7d",
    refreshExpiresIn:
      env.patientRefreshTokenExpiresIn || "30d",
    refreshCookieName: "patientRefreshToken",
  },
};