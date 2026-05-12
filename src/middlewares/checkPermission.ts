import { NextFunction, Request, Response } from "express";
import { mainPrisma } from "../databases/prisma";

const checkPermission = (...requiredPermissions: string[]) => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const user = req.user;

            if (!user) {
                throw new Error("Unauthorized!");
            }

            // no permission required
            if (!requiredPermissions.length) {
                return next();
            }

            // ===============================
            // SUPER ADMIN
            // ===============================

            if (user.role === "SUPER_ADMIN") {

                const superAdmin =
                    await mainPrisma.superAdmins.findUnique({
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
                    throw new Error(
                        "Super admin account not found or inactive!"
                    );
                }

                const superAdminPermissions =
                    superAdmin.userRoles.flatMap(
                        (userRole) =>
                            userRole.role.rolePermissions.map(
                                (rolePermission) =>
                                    rolePermission.permission.key
                            )
                    );

                const hasPermission =
                    requiredPermissions.every(
                        (permission) =>
                            superAdminPermissions.includes(
                                permission
                            )
                    );

                if (!hasPermission) {
                    throw new Error(
                        "Forbidden! You do not have permission."
                    );
                }

                return next();
            }

            // ===============================
            // OUTLET OWNER
            // ===============================

            if (
                user.role === "OUTLET_USER" &&
                user.isOwner === true
            ) {
                return next();
            }

            // ===============================
            // OUTLET STAFF USER
            // ===============================

            if (user.role === "OUTLET_USER") {

                const outletUser =
                    await mainPrisma.outletUser.findUnique({
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
                    throw new Error(
                        "Outlet user account not found or inactive!"
                    );
                }

                const outletPermissions =
                    outletUser.userRoles.flatMap(
                        (userRole) =>
                            userRole.role.rolePermissions.map(
                                (rolePermission) =>
                                    rolePermission.permission.key
                            )
                    );

                const hasPermission =
                    requiredPermissions.every(
                        (permission) =>
                            outletPermissions.includes(
                                permission
                            )
                    );

                if (!hasPermission) {
                    throw new Error(
                        "Forbidden! You do not have permission."
                    );
                }

                return next();
            }

            // =============================
            // FALLBACK
            // =============================

            throw new Error(
                "Forbidden! Permission denied."
            );

        } catch (err) {
            next(err);
        }
    };
};

export default checkPermission;