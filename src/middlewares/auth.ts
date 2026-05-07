import { NextFunction, Request, Response } from "express";

import { env } from "../configs/env";
import { mainPrisma } from "../databases/prisma";
import { jwtHelpers, JwtPayloadType } from "../utils/JWT";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw new Error("You are not authorize!!");
      }

      let verifiedUser: JwtPayloadType | null = null;

      // verify patient token
      try {
        verifiedUser = jwtHelpers.verifyToken(
          token,
          env.patientAccessTokenSecret as string
        ) as JwtPayloadType;
      } catch (error) { }

      // verify doctor token
      if (!verifiedUser) {
        try {
          verifiedUser = jwtHelpers.verifyToken(
            token,
            env.doctorAccessTokenSecret as string
          ) as JwtPayloadType;
        } catch (error) { }
      }

      if (!verifiedUser) {
        throw new Error("Invalid token!");
      }

      let isUserExist = null;

      // check patient
      if (verifiedUser.role === "PATIENT") {
        isUserExist = await mainPrisma.patient.findUnique({
          where: {
            id: verifiedUser.id,
          },
        });

        if (!isUserExist) {
          throw new Error("Patient account not found!");
        }
      }

      // check doctor
      if (verifiedUser.role === "DOCTOR") {
        isUserExist = await mainPrisma.doctor.findUnique({
          where: {
            id: verifiedUser.id,
          },
        });

        if (!isUserExist) {
          throw new Error("Doctor account not found!");
        }
      }

      req.user = verifiedUser;

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;