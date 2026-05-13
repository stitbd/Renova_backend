import bcrypt from "bcryptjs";
import { JwtPayload } from "jsonwebtoken";

import { authRepository } from "./auth.repository";
import { LoginInput, UserType } from "./auth.types";
import { authConfig } from "./auth.constants";
import { jwtHelpers } from "../../utils/JWT";



const login = async (data: LoginInput) => {
    const { phone, password, userType } = data;

    let user: any = null;

    switch (userType) {
        case UserType.SUPER_ADMIN:
            user =
                await authRepository.findSuperAdminByPhone(
                    phone
                );
            break;

        case UserType.OUTLET_USER:
            user =
                await authRepository.findOutletUserByPhone(
                    phone
                );
            break;

        case UserType.DOCTOR:
            user =
                await authRepository.findDoctorByPhone(
                    phone
                );
            break;

        case UserType.PATIENT:
            user =
                await authRepository.findPatientByPhone(
                    phone
                );
            break;

        default:
            throw new Error("Invalid user type");
    }

    if (!user) {
        throw new Error("Invalid credentials");
    }

    // ===== status checking =====

    if (userType === UserType.DOCTOR) {
        if (user.status !== "ACTIVE") {
            throw new Error("Doctor account inactive");
        }
    }

    if (userType === UserType.PATIENT) {
        if (
            !user.isActive ||
            user.status !== "ACTIVE"
        ) {
            throw new Error("Patient account inactive");
        }
    }

    if (userType === UserType.OUTLET_USER) {
        if (!user.isActive) {
            throw new Error("Outlet user inactive");
        }
    }

    if (userType === UserType.SUPER_ADMIN) {
        if (!user.isActive) {
            throw new Error("Super admin inactive");
        }
    }

    // ===== password check =====

    const isPasswordMatched =
        await bcrypt.compare(
            password,
            user.password
        );

    if (!isPasswordMatched) {
        throw new Error("Invalid credentials");
    }

    // ===== permissions =====

    let permissions: string[] = [];

    if (
        userType === UserType.OUTLET_USER ||
        userType === UserType.SUPER_ADMIN
    ) {
        permissions =
            user.userRoles.flatMap((userRole: any) =>
                userRole.role.rolePermissions.map(
                    (rp: any) => rp.permission.key
                )
            );
    }

    // ===== payload =====

    const payload = {
        id: user.id,
        phone,
        role: userType,
        permissions,
    };

    const config = authConfig[userType];

    const accessToken = jwtHelpers.generateToken(
        payload,
        config.accessSecret,
        config.accessExpiresIn
    );

    const refreshToken = jwtHelpers.generateToken(
        payload,
        config.refreshSecret,
        config.refreshExpiresIn
    );

    return {
        accessToken,
        refreshToken,
        refreshCookieName:
            config.refreshCookieName,

        user: {
            id: user.id,
            role: userType,

            ...(user.fullName && {
                fullName: user.fullName,
            }),

            ...(user.name && {
                name: user.name,
            }),

            ...(user.email && {
                email: user.email,
            }),

            permissions,
        },
    };
};

const refreshToken = async (
    token: string,
    userType: UserType
) => {
    if (!token) {
        throw new Error(
            "Refresh token is required"
        );
    }

    const config = authConfig[userType];

    const decoded = jwtHelpers.verifyToken(
        token,
        config.refreshSecret
    ) as JwtPayload;

    const payload = {
        id: decoded.id,
        phone: decoded.phone,
        role: decoded.role,
        permissions:
            decoded.permissions || [],
    };

    const accessToken =
        jwtHelpers.generateToken(
            payload,
            config.accessSecret,
            config.accessExpiresIn
        );

    return {
        accessToken,
    };
};

export const authService = {
    login,
    refreshToken,
};