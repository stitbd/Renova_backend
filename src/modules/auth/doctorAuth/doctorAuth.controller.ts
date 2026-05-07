import { Request, Response } from "express";
import { doctorAuthService } from "./doctorAuth.service";
import { env } from "../../../configs/env";
import manageResponse from "../../../utils/manage_response";

const loginDoctor = async (req: Request, res: Response) => {
    const { mobileNumber, password } = req.body;

    console.log("Login request received with mobileNumber:", mobileNumber);

    const result = await doctorAuthService.loginDoctor(
        mobileNumber,
        password
    );

    res.cookie("doctorRefreshToken", result.refreshToken, {
        httpOnly: true,
        secure: env.nodeEnv === "production",
        sameSite: env.nodeEnv === "production" ? "none" : "lax",
        maxAge: 1000 * 60 * 60 * 24 * 30,
    });

    manageResponse(res, {
        success: true,
        statusCode: 200,
        message: "Doctor logged in successfully",
        data: {
            accessToken: result.accessToken,
            user: result.user,
        },
    });

};

const refreshDoctorToken = async (req: Request, res: Response) => {
    const refreshToken = req.cookies?.doctorRefreshToken;

    const result = await doctorAuthService.refreshDoctorToken(refreshToken);

    res.status(200).json({
        success: true,
        message: "Access token generated successfully",
        data: result,
    });
};



export const doctorAuthController = {
    loginDoctor,
    refreshDoctorToken,
};