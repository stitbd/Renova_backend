import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { mainPrisma } from "../../../databases/prisma";
import { jwtHelpers } from "../../../utils/JWT";
import { env } from "../../../configs/env";

const loginPatient = async (mobileNumber: string, password: string) => {
    const patient = await mainPrisma.patient.findUnique({
        where: { mobileNumber },
    });
    // console.log("Patient found:", patient);

    if (!patient) {
        throw new Error("Invalid mobile number or password");
    }

    if (!patient.isActive || patient.status !== "ACTIVE") {
        throw new Error("Patient account is inactive");
    }

    const isPasswordMatched = await bcrypt.compare(password, patient.password);

    if (!isPasswordMatched) {
        throw new Error("Invalid mobile number or password");
    }

    const accessToken = jwtHelpers.generateToken(
        {
            id: patient.id,
            mobileNumber: patient.mobileNumber,
            role: "PATIENT",
        }, env.patientAccessTokenSecret, env.patientAccessTokenExpiresIn || "7d"
    );

    const refreshToken = jwtHelpers.generateToken(
        {
            id: patient.id,
            mobileNumber: patient.mobileNumber,
            role: "PATIENT",
        }, env.patientRefreshTokenSecret, env.patientRefreshTokenExpiresIn || "30d"
    );


    

    return {
        accessToken,
        refreshToken,
        user: {
            id: patient.id,
            fullName: patient.fullName,
            mobileNumber: patient.mobileNumber,
            email: patient.email || null,
            role: "PATIENT",
        },
    };
};

const refreshPatientToken = async (refreshToken: string) => {
    if (!refreshToken) {
        throw new Error("Refresh token not found");
    }

    const decoded = jwtHelpers.verifyToken(
        refreshToken,
        env.patientRefreshTokenSecret
    ) as jwt.JwtPayload;

    const patient = await mainPrisma.patient.findUnique({
        where: {
            id: decoded.id,
        },
    });

    if (!patient) {
        throw new Error("Patient not found");
    }

    if (!patient.isActive || patient.status !== "ACTIVE") {
        throw new Error("Patient account is inactive");
    }

    const accessToken = jwtHelpers.generateToken(
        {
            id: patient.id,
            mobileNumber: patient.mobileNumber,
            role: "PATIENT",
        },
        env.patientAccessTokenSecret,
        env.patientAccessTokenExpiresIn || "7d"
    );

    return {
        accessToken,
    };
};

export const patientAuthService = {
    loginPatient,
    refreshPatientToken
};