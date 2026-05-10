import { Request, Response } from "express";
import { loginValidationSchema } from "./outlet_user_auth.validation";
import { outletAuthService } from "./outlet_user_auth.service";



export const outletAuthController = {
    async login(req: Request, res: Response) {
        const validatedData =
            loginValidationSchema.parse(req.body);

        const result =
            await outletAuthService.login(
                validatedData
            );

        res.cookie(
            "refreshToken",
            result.refreshToken,
            {
                httpOnly: true,
                secure: false,
            }
        );

        res.status(200).json({
            success: true,
            message:
                "Outlet user login successful",

            data: {
                accessToken: result.accessToken,
                user: result.user,
            },
        });
    },

    async refreshToken(
        req: Request,
        res: Response
    ) {
        const refreshToken =
            req.cookies.refreshToken;

        const result =
            await outletAuthService.refreshToken(
                refreshToken
            );

        res.status(200).json({
            success: true,
            message:
                "Access token generated successfully",

            data: result,
        });
    },
};