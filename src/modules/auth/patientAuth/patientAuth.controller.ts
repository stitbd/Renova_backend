import { Request, Response } from "express";
import { patientAuthService } from "./patientAuth.service";
import { env } from "../../../configs/env";
import manageResponse from "../../../utils/manage_response";

const loginPatient = async (req: Request, res: Response) => {
    const { mobileNumber, password } = req.body;

    const result = await patientAuthService.loginPatient(
        mobileNumber,
        password
    );

    res.cookie("patientRefreshToken", result.refreshToken, {
        httpOnly: true,
        secure: env.nodeEnv === "production",
        sameSite: env.nodeEnv === "production" ? "none" : "lax",
        maxAge: 1000 * 60 * 60 * 24 * 30,
    });

    manageResponse(res, {
        success: true,
        statusCode: 200,
        message: "Patient logged in successfully",
        data: {
            accessToken: result.accessToken,
            user: result.user,
        },
    });
};
const refreshPatientToken = async (req: Request, res: Response) => {
    const refreshToken = req.cookies?.patientRefreshToken;

    const result = await patientAuthService.refreshPatientToken(
        refreshToken
    );

    res.status(200).json({
        success: true,
        message: "Access token generated successfully",
        data: result,
    });
};

export const patientAuthController = {
    loginPatient,
    refreshPatientToken
};