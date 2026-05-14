import { Request, Response } from "express";

import { authService } from "./auth.service";

import { authConfig } from "./auth.constants";
import { env } from "../../configs/env";

export const authController = {
  async login(req: Request, res: Response) {
    const result =
      await authService.login(req.body);

    res.cookie(
      result.refreshCookieName,
      result.refreshToken,
      {
        httpOnly: true,
        secure: env.nodeEnv === "production",
        sameSite:
          env.nodeEnv === "production"
            ? "none"
            : "lax",

        maxAge:
          1000 * 60 * 60 * 24 * 30,
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        accessToken:
          result.accessToken,
        user: result.user,
      },
    });
  },

  async refreshToken(
    req: Request,
    res: Response
  ) {
    const { userType }: { userType: keyof typeof authConfig } = req.body;

    const cookieName =
      authConfig[userType]
        .refreshCookieName;

    const refreshToken =
      req.cookies?.[cookieName];

    const result =
      await authService.refreshToken(
        refreshToken,
      );

    res.status(200).json({
      success: true,
      message:
        "Access token generated successfully",
      data: result,
    });
  },
};