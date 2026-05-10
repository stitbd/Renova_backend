import bcrypt from "bcryptjs";
import { LoginInput } from "./outlet_user_auth.types";
import { outletAuthRepository } from "./outlet_user_auth.repository";
import { jwtHelpers } from "../../../utils/JWT";
import { env } from "../../../configs/env";

export const outletAuthService = {
  async login(data: LoginInput) {

    const user =
      await outletAuthRepository.findOutletUserByPhone(
        data.phone
      );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    if (!user.isActive) {
      throw new Error("Account is inactive");
    }

    const isPasswordMatched =
      await bcrypt.compare(
        data.password,
        user.password
      );

    if (!isPasswordMatched) {
      throw new Error("Invalid credentials");
    }

    const permissions =
      user.userRoles.flatMap((userRole) =>
        userRole.role.rolePermissions.map(
          (rolePermission) =>
            rolePermission.permission.key
        )
      );

    const payload = {
      id: user.id,

      phone: user.phone,

      role: "OUTLET_USER",

      outletId: user.outletId,

      isOwner: user.isOwner,

      permissions,
    };

    const accessToken =
      jwtHelpers.generateToken(
        payload,
        env.outletUserAccessTokenSecret,
        env.outletUserAccessTokenExpiresIn
      );

    const refreshToken =
      jwtHelpers.generateToken(
        payload,
        env.outletUserRefreshTokenSecret,
        env.outletUserRefreshTokenExpiresIn
      );

    return {
      accessToken,
      refreshToken,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isOwner: user.isOwner,
        outletId: user.outletId,
        permissions,
      },
    };
  },

  async refreshToken(token: string) {

    if (!token) {
      throw new Error("Refresh token is required");
    }

    const verifiedUser =
      jwtHelpers.verifyToken(
        token,
        env.outletUserRefreshTokenSecret
      );

    const user =
      await outletAuthRepository.findOutletUserByPhone(
        verifiedUser.phone
      );

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.isActive) {
      throw new Error("Account is inactive");
    }

    const permissions =
      user.userRoles.flatMap((userRole) =>
        userRole.role.rolePermissions.map(
          (rolePermission) =>
            rolePermission.permission.key
        )
      );

    const payload = {
      id: user.id,

      phone: user.phone,

      role: "OUTLET_USER",

      outletId: user.outletId,

      isOwner: user.isOwner,

      permissions,
    };

    const accessToken =
      jwtHelpers.generateToken(
        payload,
        env.outletUserAccessTokenSecret,
        env.outletUserAccessTokenExpiresIn
      );

    return {
      accessToken,
    };
  },
};