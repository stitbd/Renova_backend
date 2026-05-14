import bcrypt from "bcryptjs";
import { JwtPayload } from "jsonwebtoken";

import { authRepository } from "./auth.repository";
import { LoginInput, UserType } from "./auth.types";
import { authConfig, jwtConfig } from "./auth.constants";
import { jwtHelpers } from "../../utils/JWT";

const getRoles = (user: any, userType: UserType): string[] => {
    if (
        userType !== UserType.OUTLET_USER &&
        userType !== UserType.SUPER_ADMIN
    ) {
        return [];
    }

    return user.userRoles.map((userRole: any) => userRole.role.name);
};

const getPermissions = (user: any, userType: UserType): string[] => {
    if (
        userType !== UserType.OUTLET_USER &&
        userType !== UserType.SUPER_ADMIN
    ) {
        return [];
    }

    return [
        ...new Set<string>(
            user.userRoles.flatMap((userRole: any): string[] =>
                userRole.role.rolePermissions.map(
                    (rolePermission: any) => rolePermission.permission.key as string
                )
            )
        ),
    ];
};

const login = async (data: LoginInput) => {
    const { phone, password, userType } = data;

    let user: any = null;

    switch (userType) {
        case UserType.SUPER_ADMIN:
            user = await authRepository.findSuperAdminByPhone(phone);
            break;

        case UserType.OUTLET_USER:
            user = await authRepository.findOutletUserByPhone(phone);
            break;

        case UserType.DOCTOR:
            user = await authRepository.findDoctorByPhone(phone);
            break;

        case UserType.PATIENT:
            user = await authRepository.findPatientByPhone(phone);
            break;

        default:
            throw new Error("Invalid user type");
    }

    if (!user) {
        throw new Error("Invalid credentials");
    }

    if (userType === UserType.DOCTOR && user.status !== "ACTIVE") {
        throw new Error("Doctor account inactive");
    }

    if (
        userType === UserType.PATIENT &&
        (!user.isActive || user.status !== "ACTIVE")
    ) {
        throw new Error("Patient account inactive");
    }

    if (userType === UserType.OUTLET_USER) {
        if (!user.isActive) {
            throw new Error("Outlet user inactive");
        }

        if (user.outlet?.status !== "ACTIVE") {
            throw new Error("Outlet account inactive");
        }
    }

    if (userType === UserType.SUPER_ADMIN && !user.isActive) {
        throw new Error("Super admin inactive");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        throw new Error("Invalid credentials");
    }

    const roles = getRoles(user, userType);
    const permissions = getPermissions(user, userType);

    const payload = {
        id: user.id,
        phone,
        userType,
        roles,
        permissions,

        ...(userType === UserType.OUTLET_USER && {
            outletId: user.outletId,
            isOwner: user.isOwner,
        }),

        ...(userType === UserType.DOCTOR && {
            outletId: user.outletId,
        }),

        ...(userType === UserType.PATIENT && {
            outletId: user.outletId,
        }),
    };

    const accessToken = jwtHelpers.generateToken(
        payload,
        jwtConfig.accessSecret as string,
        jwtConfig.accessExpiresIn
    );

    const refreshToken = jwtHelpers.generateToken(
        payload,
        jwtConfig.refreshSecret as string,
        jwtConfig.refreshExpiresIn
    );

    return {
        accessToken,
        refreshToken,
        refreshCookieName: authConfig[userType].refreshCookieName,

        user: {
            id: user.id,
            userType,

            ...(user.fullName && { fullName: user.fullName }),
            ...(user.name && { name: user.name }),
            ...(user.email && { email: user.email }),
            ...(user.mobileNumber && { phone: user.mobileNumber }),
            ...(user.mobile && { phone: user.mobile }),
            ...(user.phone && { phone: user.phone }),

            ...(userType === UserType.OUTLET_USER && {
                outletId: user.outletId,
                isOwner: user.isOwner,
                outlet: user.outlet,
            }),

            ...(userType === UserType.DOCTOR && {
                outletId: user.outletId,
                doctorCode: user.doctorCode,
                specialization: user.specialization,
                outlet: user.outlet,
            }),

            ...(userType === UserType.PATIENT && {
                outletId: user.outletId,
            }),

            roles,
            permissions,
        },
    };
};

const generateAccessTokenFromRefreshToken = async (token: string) => {
    if (!token) {
        throw new Error("Refresh token is required");
    }

    const decoded = jwtHelpers.verifyToken(
        token,
        jwtConfig.refreshSecret as string
    ) as JwtPayload;

    const payload = {
        id: decoded.id,
        phone: decoded.phone,
        userType: decoded.userType,
        roles: decoded.roles || [],
        permissions: decoded.permissions || [],

        ...(decoded.outletId && {
            outletId: decoded.outletId,
        }),

        ...(decoded.isOwner !== undefined && {
            isOwner: decoded.isOwner,
        }),
    };

    const accessToken = jwtHelpers.generateToken(
        payload,
        jwtConfig.accessSecret as string,
        jwtConfig.accessExpiresIn 
    );

    return {
        accessToken,
    };
};

export const authService = {
    login,
    refreshToken: generateAccessTokenFromRefreshToken,
};