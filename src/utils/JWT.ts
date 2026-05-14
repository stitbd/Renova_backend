import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

const generateToken = (payload: object, secret: Secret, expiresIn: string) => {
    const token = jwt.sign(payload, secret, {
        algorithm: 'HS256',
        expiresIn: expiresIn,
    } as SignOptions);

    return token;
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
    return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
    generateToken,
    verifyToken,
};

export type JwtPayloadType = {
  id: string;
  phone?: string;
  userType: "SUPER_ADMIN" | "OUTLET_USER" | "DOCTOR" | "PATIENT";
  outletId?: string;
  isOwner?: boolean;
  roles?: string[];
  permissions?: string[];
};

export type JwtTokenType = string | JwtPayloadType | null;