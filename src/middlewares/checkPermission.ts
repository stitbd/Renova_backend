import { NextFunction, Request, Response } from "express";
import { mainPrisma } from "../databases/prisma";
import { AppError } from "../utils/app_error";

type PermissionMode = "ALL" | "ANY";

const hasRequiredPermissions = (
    userPermissions: string[],
    requiredPermissions: string[],
    mode: PermissionMode
) => {
    if (mode === "ANY") {
        return requiredPermissions.some((permission) =>
            userPermissions.includes(permission)
        );
    }

    return requiredPermissions.every((permission) =>
        userPermissions.includes(permission)
    );
};

const checkPermission = (
    requiredPermissions: string[],
    mode: PermissionMode = "ALL"
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.user;

            if (!user) {
                throw new AppError("Unauthorized!", 401);
            }

            if (!requiredPermissions.length) {
                return next();
            }

            if (user.userType === "SUPER_ADMIN") {
                const superAdmin = await mainPrisma.superAdmins.findUnique({
                    where: { id: user.id },
                    select: {
                        id: true,
                        isActive: true,
                        userRoles: {
                            select: {
                                role: {
                                    select: {
                                        rolePermissions: {
                                            select: {
                                                permission: {
                                                    select: {
                                                        key: true,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });

                if (!superAdmin || !superAdmin.isActive) {
                    throw new AppError("Super admin account not found or inactive!", 403);
                }

                const permissions = [
                    ...new Set(
                        superAdmin.userRoles.flatMap((userRole) =>
                            userRole.role.rolePermissions.map(
                                (rolePermission) => rolePermission.permission.key
                            )
                        )
                    ),
                ];

                const allowed = hasRequiredPermissions(
                    permissions,
                    requiredPermissions,
                    mode
                );

                if (!allowed) {
                    throw new AppError("Forbidden! You do not have permission.", 403);
                }

                return next();
            }

            if (user.userType === "OUTLET_USER") {
                const outletUser = await mainPrisma.outletUser.findUnique({
                    where: { id: user.id },
                    select: {
                        id: true,
                        outletId: true,
                        isOwner: true,
                        isActive: true,
                        outlet: {
                            select: {
                                status: true,
                            },
                        },
                        userRoles: {
                            select: {
                                role: {
                                    select: {
                                        rolePermissions: {
                                            select: {
                                                permission: {
                                                    select: {
                                                        key: true,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });

                if (!outletUser || !outletUser.isActive) {
                    throw new AppError("Outlet user account not found or inactive!", 403);
                }

                if (outletUser.outlet.status !== "ACTIVE") {
                    throw new AppError("Outlet account is inactive!", 403);
                }

                if (outletUser.isOwner) {
                    return next();
                }

                const permissions = [
                    ...new Set(
                        outletUser.userRoles.flatMap((userRole) =>
                            userRole.role.rolePermissions.map(
                                (rolePermission) => rolePermission.permission.key
                            )
                        )
                    ),
                ];

                const allowed = hasRequiredPermissions(
                    permissions,
                    requiredPermissions,
                    mode
                );

                if (!allowed) {
                    throw new AppError("Forbidden! You do not have permission.", 403);
                }

                return next();
            }

            throw new AppError("Forbidden! Permission denied.", 403);
        } catch (error) {
            next(error);
        }
    };
};

export default checkPermission;