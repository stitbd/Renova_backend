import { NextFunction, Request, Response } from "express";
import { mainPrisma } from "../databases/prisma";

const checkPermission = (...requiredPermissions: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.user;

            if (!user) {
                throw new Error("Unauthorized!");
            }

            // owner/admin can access everything
            if (user.isOwner === true) {
                return next();
            }

            if (!requiredPermissions.length) {
                return next();
            }

            if (user.role !== "OUTLET_USER") {
                throw new Error("Forbidden! Permission denied.");
            }

            const outletUser = await mainPrisma.outletUser.findUnique({
                where: {
                    id: user.id,
                },
                include: {
                    userRoles: {
                        include: {
                            role: {
                                include: {
                                    rolePermissions: {
                                        include: {
                                            permission: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });

            if (!outletUser || !outletUser.isActive) {
                throw new Error("Outlet user account not found or inactive!");
            }

            const userPermissions = outletUser.userRoles.flatMap((userRole) =>
                userRole.role.rolePermissions.map(
                    (rolePermission) => rolePermission.permission.key
                )
            );

            const hasPermission = requiredPermissions.every((permission) =>
                userPermissions.includes(permission)
            );

            if (!hasPermission) {
                throw new Error("Forbidden! You do not have permission.");
            }

            next();
        } catch (err) {
            next(err);
        }
    };
};

export default checkPermission;