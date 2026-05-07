import bcrypt from "bcryptjs";
import { mainPrisma } from "../../../databases/prisma";
import { jwtHelpers } from "../../../utils/JWT";
import { env } from "../../../configs/env";
import { JwtPayload } from "jsonwebtoken";

const loginDoctor = async (mobileNumber: string, password: string) => {
    const doctor = await mainPrisma.doctor.findFirst({
        where: { mobile: mobileNumber },
        include: {
            specialization: true,
            outlet: true,
        },
    });
    // console.log("Doctor found:", doctor);
    if (!doctor) {
        throw new Error("Invalid mobileNumber or password");
    }
    if (doctor.status !== "ACTIVE") {
        throw new Error("Doctor account is inactive");
    }

    const isPasswordMatched = await bcrypt.compare(
        password,
        doctor.password
    );

    console.log("Password match result:", isPasswordMatched);

    if (!isPasswordMatched) {
        throw new Error("Invalid mobileNumber or password");
    }

    const accessToken = jwtHelpers.generateToken(
        {
            id: doctor.id,
            mobileNumber: doctor.mobile,
            role: "DOCTOR",
        },
        env.doctorAccessTokenSecret,
        env.doctorAccessTokenExpiresIn || "7d"
    );

    const refreshToken = jwtHelpers.generateToken(
        {
            id: doctor.id,
            mobileNumber: doctor.mobile,
            role: "DOCTOR",
        },
        env.doctorRefreshTokenSecret,
        env.doctorRefreshTokenExpiresIn || "30d"
    );

    return {
        accessToken,
        refreshToken,

        user: {
            id: doctor.id,
            fullName: doctor.fullName,
            email: doctor.email,
            mobileNumber: doctor.mobile,
            doctorCode: doctor.doctorCode,
            role: "DOCTOR",

            specialization: doctor.specialization,
            outlet: doctor.outlet,
        },
    };
};

const refreshDoctorToken = async (refreshToken: string) => {
    if (!refreshToken) {
        throw new Error("Refresh token not found");
    }

    // const decoded = jwt.verify(
    //     refreshToken,
    //     env.doctorRefreshTokenSecret
    // ) as JwtPayload;

    const decoded = jwtHelpers.verifyToken(
        refreshToken,
        env.doctorRefreshTokenSecret
    ) as JwtPayload;

    const doctor = await mainPrisma.doctor.findUnique({
        where: {
            id: decoded.id,
        },
    });

    if (!doctor) {
        throw new Error("Doctor not found");
    }

    if (doctor.status !== "ACTIVE") {
        throw new Error("Doctor account is inactive");
    }

    const accessToken = jwtHelpers.generateToken(
        {
            id: doctor.id,
            mobileNumber: doctor.mobile,
            role: "DOCTOR",
        },
        env.doctorAccessTokenSecret,
        env.doctorAccessTokenExpiresIn || "7d"
    );

    return {
        accessToken,
    };
};

export const doctorAuthService = {
    loginDoctor,
    refreshDoctorToken,
};