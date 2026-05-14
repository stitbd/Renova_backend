import { NextFunction, Request, Response } from "express";

import { env } from "../configs/env";
import { mainPrisma } from "../databases/prisma";
import { jwtHelpers, JwtPayloadType } from "../utils/JWT";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.startsWith("Bearer ")
        ? req.headers.authorization.split(" ")[1]
        : null;

      if (!token) {
        throw new Error("You are not authorized!");
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        env.jwtAccessSecret as string
      ) as JwtPayloadType & {
        userType: "SUPER_ADMIN" | "OUTLET_USER" | "DOCTOR" | "PATIENT";
      };

      if (!verifiedUser?.id || !verifiedUser?.userType) {
        throw new Error("Invalid token!");
      }

      let user = null;

      switch (verifiedUser.userType) {
        case "SUPER_ADMIN":
          user = await mainPrisma.superAdmins.findUnique({
            where: { id: verifiedUser.id },
          });

          if (!user || !user.isActive) {
            throw new Error("Super admin account not found or inactive!");
          }

          break;

        case "OUTLET_USER":
          user = await mainPrisma.outletUser.findUnique({
            where: { id: verifiedUser.id },
            include: {
              outlet: true,
            },
          });

          if (!user || !user.isActive) {
            throw new Error("Outlet user account not found or inactive!");
          }

          if (user.outlet?.status !== "ACTIVE") {
            throw new Error("Outlet account is inactive!");
          }

          break;

        case "DOCTOR":
          user = await mainPrisma.doctor.findUnique({
            where: { id: verifiedUser.id },
          });

          if (!user || user.status !== "ACTIVE") {
            throw new Error("Doctor account not found or inactive!");
          }

          break;

        case "PATIENT":
          user = await mainPrisma.patient.findUnique({
            where: { id: verifiedUser.id },
          });

          if (!user || !user.isActive || user.status !== "ACTIVE") {
            throw new Error("Patient account not found or inactive!");
          }

          break;

        default:
          throw new Error("Invalid user type!");
      }

      req.user = verifiedUser;

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;