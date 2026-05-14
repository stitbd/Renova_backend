import { NextFunction, Request, Response } from "express";
import { mainPrisma } from "../databases/prisma";

const checkPermission = (...requiredPermissions: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.user;

            if (!user) {
                throw new Error("Unauthorized!");
            }

            if (!requiredPermissions.length) {
                return next();
            }

            if (user.userType === "SUPER_ADMIN") {
                const superAdmin = await mainPrisma.superAdmins.findUnique({
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

                if (!superAdmin || !superAdmin.isActive) {
                    throw new Error("Super admin account not found or inactive!");
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

                const hasPermission = requiredPermissions.every((permission) =>
                    permissions.includes(permission)
                );

                if (!hasPermission) {
                    throw new Error("Forbidden! You do not have permission.");
                }

                return next();
            }

            if (user.userType === "OUTLET_USER") {
                const outletUser = await mainPrisma.outletUser.findUnique({
                    where: {
                        id: user.id,
                    },
                    include: {
                        outlet: true,
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

                if (outletUser.outlet.status !== "ACTIVE") {
                    throw new Error("Outlet account is inactive!");
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

                const hasPermission = requiredPermissions.every((permission) =>
                    permissions.includes(permission)
                );

                if (!hasPermission) {
                    throw new Error("Forbidden! You do not have permission.");
                }

                return next();
            }

            throw new Error("Forbidden! Permission denied.");
        } catch (err) {
            next(err);
        }
    };
};

export default checkPermission;