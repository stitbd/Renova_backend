// src/middlewares/checkPermissionForAdmin.ts

import { NextFunction, Request, Response } from "express";
import checkPermission from "./checkPermission";

const checkPermissionForAdmin = (permissions: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userType = req.user?.userType;

    if (userType === "DOCTOR" || userType === "PATIENT") {
      return next();
    }

    return checkPermission(permissions)(req, res, next);
  };
};

export default checkPermissionForAdmin;