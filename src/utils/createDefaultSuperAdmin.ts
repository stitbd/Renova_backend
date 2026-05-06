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

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(
        "admin@123",
        Number(env.bcrypt_salt_rounds)
      );

      await prisma.superAdmins.create({
        data: {
          name: "Admin",
          email: "admin@gmail.com",
          phone: "01700000000",
          password: hashedPassword,
          isActive: true,
        },
      });

      console.log("✅ Default Super Admin created.");
    } else {
      console.log("ℹ️ Super Admin already exists.");
    }
  } catch (error) {
    console.log("❌ Failed to create default super admin:", error);
  }
};