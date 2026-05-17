import bcrypt from "bcrypt";
import { PrismaClient } from "../generated/main-client";
import { env } from "../configs/env";

const prisma = new PrismaClient();

export const createDefaultSuperAdmin = async () => {
  try {
    const existingAdmin = await prisma.superAdmins.findUnique({
      where: {
        email: "admin@gmail.com",
      },
    });

    if (existingAdmin) {
      console.log("ℹ️ Super Admin already exists.");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      "admin@123",
      Number(env.bcrypt_salt_rounds)
    );

    const permissions = [
      { key: "outlet:create", module: "OUTLET", description: "Can create outlet" },
      { key: "outlet:view", module: "OUTLET", description: "Can view outlets" },
      { key: "outlet:update", module: "OUTLET", description: "Can update outlet" },
      { key: "outlet:delete", module: "OUTLET", description: "Can delete outlet" },
      { key: "doctor:verify", module: "DOCTOR", description: "Can verify doctor" },
      { key: "super-admin:create", module: "SUPER_ADMIN", description: "Can create super admin" },
      { key: "super-admin:view", module: "SUPER_ADMIN", description: "Can view super admins" },
      { key: "super-admin:update", module: "SUPER_ADMIN", description: "Can update super admin" },
      { key: "super-admin:delete", module: "SUPER_ADMIN", description: "Can delete super admin" },

      { key: "super-admin-role:create", module: "SUPER_ADMIN_ROLE", description: "Can create super admin role" },
      { key: "super-admin-role:view", module: "SUPER_ADMIN_ROLE", description: "Can view super admin roles" },
      { key: "super-admin-role:update", module: "SUPER_ADMIN_ROLE", description: "Can update super admin role" },
      { key: "super-admin-role:delete", module: "SUPER_ADMIN_ROLE", description: "Can delete super admin role" },
      { key: "super-admin-permission:create", module: "SUPER_ADMIN_PERMISSION", description: "Can create super admin permission" },
      { key: "super-admin-permission:view", module: "SUPER_ADMIN_PERMISSION", description: "Can view super admin permissions" },
      { key: "super-admin-permission:update", module: "SUPER_ADMIN_PERMISSION", description: "Can update super admin permission" },
      { key: "super-admin-permission:delete", module: "SUPER_ADMIN_PERMISSION", description: "Can delete super admin permission" },
    ];


    await prisma.$transaction(async (tx) => {
      const superAdmin = await tx.superAdmins.create({
        data: {
          name: "Super Admin",
          email: "admin@gmail.com",
          phone: "01700000000",
          password: hashedPassword,
          isActive: true,
        },
      });

      await tx.superAdminPermission.createMany({
        data: permissions,
        skipDuplicates: true,
      });

      
      const allPermissions = await tx.superAdminPermission.findMany();

      const superAdminRole = await tx.superAdminRole.create({
        data: {
          name: "SUPER_ADMIN",
        },
      });

      await tx.superAdminRolePermission.createMany({
        data: allPermissions.map((permission) => ({
          roleId: superAdminRole.id,
          permissionId: permission.id,
        })),
        skipDuplicates: true,
      });

      await tx.superAdminUserRole.create({
        data: {
          superAdminId: superAdmin.id,
          roleId: superAdminRole.id,
        },
      });
    });

    

    console.log("✅ Default Super Admin created successfully.");
  } catch (error) {
    console.log("❌ Failed to create default super admin:", error);
  }
};