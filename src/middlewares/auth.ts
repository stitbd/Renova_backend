import { NextFunction, Request, Response } from "express";
import { env } from "../configs/env";
import { mainPrisma } from "../databases/prisma";
import { jwtHelpers, JwtPayloadType } from "../utils/JWT";
import { AppError } from "../utils/app_error";

export type UserType = "SUPER_ADMIN" | "OUTLET_USER" | "DOCTOR" | "PATIENT";

export type AuthUser = JwtPayloadType & {
  id: string;
  userType: UserType;
  outletId?: string | null;
  isOwner?: boolean;
};

const auth = (...allowedUserTypes: UserType[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.startsWith("Bearer ")
        ? req.headers.authorization.split(" ")[1]
        : null;

      if (!token) {
        throw new AppError("You are not authorized!", 401);
      }

      const decoded: AuthUser = jwtHelpers.verifyToken(
        token,
        env.jwtAccessSecret as string
      ) as AuthUser;

      if (!decoded?.id || !decoded?.userType) {
        throw new AppError("Invalid token!", 401);
      }

      if (
        allowedUserTypes.length > 0 &&
        !allowedUserTypes.includes(decoded.userType)
      ) {
        throw new AppError(
          "Forbidden! You are not allowed to access this route.",
          403
        );
      }

      switch (decoded.userType) {
        case "SUPER_ADMIN": {
          const user = await mainPrisma.superAdmins.findUnique({
            where: { id: decoded.id },
            select: {
              id: true,
              isActive: true,
            },
          });

          if (!user || !user.isActive) {
            throw new AppError("Super admin account not found or inactive!", 403);
          }

          break;
        }

        case "OUTLET_USER": {
          const user = await mainPrisma.outletUser.findUnique({
            where: { id: decoded.id },
            select: {
              id: true,
              outletId: true,
              isOwner: true,
              isActive: true,
              outlet: {
                select: {
                  id: true,
                  status: true,
                },
              },
            },
          });

          if (!user || !user.isActive) {
            throw new AppError("Outlet user account not found or inactive!", 403);
          }

          if (!user.outlet || user.outlet.status !== "ACTIVE") {
            throw new AppError("Outlet account is inactive!", 403);
          }

          decoded.outletId = user.outletId ? user.outletId : undefined;
          decoded.isOwner = user.isOwner;

          break;
        }

        case "DOCTOR": {
          const user = await mainPrisma.doctor.findUnique({
            where: { id: decoded.id },
            select: {
              id: true,
              outletId: true,
              status: true,
            },
          });

          if (!user || user.status !== "ACTIVE") {
            throw new AppError("Doctor account not found or inactive!", 403);
          }

          decoded.outletId = user.outletId ? user.outletId : undefined;

          break;
        }

        case "PATIENT": {
          const user = await mainPrisma.patient.findUnique({
            where: { id: decoded.id },
            select: {
              id: true,
              outletId: true,
              isActive: true,
              status: true,
            },
          });

          if (!user || !user.isActive || user.status !== "ACTIVE") {
            throw new AppError("Patient account not found or inactive!", 403);
          }

          decoded.outletId = user.outletId ? user.outletId : undefined;

          break;
        }

        default:
          throw new AppError("Invalid user type!", 401);
      }

      req.user = decoded;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;