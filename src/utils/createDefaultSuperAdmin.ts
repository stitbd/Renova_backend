import bcrypt from "bcrypt";

import { PrismaClient, RoleOwnerType } from "../generated/main-client";

import { env } from "../configs/env";

const prisma = new PrismaClient();

export const createDefaultSuperAdmin = async () => {
  try {

    const existingAdmin =
      await prisma.superAdmins.findUnique({
        where: {
          email: "admin@gmail.com",
        },
      });

    if (existingAdmin) {
      console.log("ℹ️ Super Admin already exists.");
      return;
    }

    const hashedPassword =
      await bcrypt.hash(
        "admin@123",
        Number(env.bcrypt_salt_rounds)
      );

    await prisma.$transaction(async (tx) => {

      // create super admin
      const superAdmin =
        await tx.superAdmins.create({
          data: {
            name: "Super Admin",
            email: "admin@gmail.com",
            phone: "01700000000",
            password: hashedPassword,
            isActive: true,
          },
        });

      // create permissions
      const permissions = [
        {
          key: "outlet:create",
          module: "OUTLET",
        },
        {
          key: "outlet:view",
          module: "OUTLET",
        },
        {
          key: "outlet:update",
          module: "OUTLET",
        },
        {
          key: "outlet:delete",
          module: "OUTLET",
        },

        {
          key: "doctor:verify",
          module: "DOCTOR",
        },

        {
          key: "role:create",
          module: "ROLE",
        },

        {
          key: "permission:create",
          module: "PERMISSION",
        },
      ];

      for (const permission of permissions) {

        const existingPermission =
          await tx.permission.findUnique({
            where: {
              key: permission.key,
            },
          });

        if (!existingPermission) {
          await tx.permission.create({
            data: permission,
          });
        }
      }

      // fetch all permissions
      const allPermissions =
        await tx.permission.findMany();

      // create super admin role
      const superAdminRole =
        await tx.role.create({
          data: {
            name: "SUPER_ADMIN",

            ownerType:
              RoleOwnerType.SUPER_ADMIN,

            superAdminId: superAdmin.id,
          },
        });

      // assign permissions to role
      await tx.rolePermission.createMany({
        data: allPermissions.map(
          (permission) => ({
            roleId: superAdminRole.id,
            permissionId: permission.id,
          })
        ),

        skipDuplicates: true,
      });

      // assign role to super admin
      await tx.superAdminUserRole.create({
        data: {
          superAdminId: superAdmin.id,
          roleId: superAdminRole.id,
        },
      });

      console.log(
        "✅ Default Super Admin created successfully."
      );
    });

  } catch (error) {
    console.log(
      "❌ Failed to create default super admin:",
      error
    );
  }
};