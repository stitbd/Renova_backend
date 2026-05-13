/*
  Warnings:

  - You are about to drop the `permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rolepermission` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[mobile]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `OutletUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `SuperAdmins` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `outletuserrole` DROP FOREIGN KEY `OutletUserRole_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_superAdminId_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermission` DROP FOREIGN KEY `RolePermission_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermission` DROP FOREIGN KEY `RolePermission_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `superadminuserrole` DROP FOREIGN KEY `SuperAdminUserRole_roleId_fkey`;

-- DropTable
DROP TABLE `permission`;

-- DropTable
DROP TABLE `role`;

-- DropTable
DROP TABLE `rolepermission`;

-- CreateTable
CREATE TABLE `OutletRole` (
    `id` VARCHAR(191) NOT NULL,
    `outletId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `OutletRole_outletId_idx`(`outletId`),
    UNIQUE INDEX `OutletRole_name_outletId_key`(`name`, `outletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletPermission` (
    `id` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `module` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `OutletPermission_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletRolePermission` (
    `id` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `permissionId` VARCHAR(191) NOT NULL,

    INDEX `OutletRolePermission_roleId_idx`(`roleId`),
    INDEX `OutletRolePermission_permissionId_idx`(`permissionId`),
    UNIQUE INDEX `OutletRolePermission_roleId_permissionId_key`(`roleId`, `permissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuperAdminRole` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuperAdminRole_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuperAdminPermission` (
    `id` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `module` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuperAdminPermission_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuperAdminRolePermission` (
    `id` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `permissionId` VARCHAR(191) NOT NULL,

    INDEX `SuperAdminRolePermission_roleId_idx`(`roleId`),
    INDEX `SuperAdminRolePermission_permissionId_idx`(`permissionId`),
    UNIQUE INDEX `SuperAdminRolePermission_roleId_permissionId_key`(`roleId`, `permissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Doctor_mobile_key` ON `Doctor`(`mobile`);

-- CreateIndex
CREATE UNIQUE INDEX `OutletUser_phone_key` ON `OutletUser`(`phone`);

-- CreateIndex
CREATE INDEX `OutletUserRole_outletUserId_idx` ON `OutletUserRole`(`outletUserId`);

-- CreateIndex
CREATE UNIQUE INDEX `SuperAdmins_phone_key` ON `SuperAdmins`(`phone`);

-- CreateIndex
CREATE INDEX `SuperAdminUserRole_superAdminId_idx` ON `SuperAdminUserRole`(`superAdminId`);

-- AddForeignKey
ALTER TABLE `OutletRole` ADD CONSTRAINT `OutletRole_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletRolePermission` ADD CONSTRAINT `OutletRolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `OutletRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletRolePermission` ADD CONSTRAINT `OutletRolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `OutletPermission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUserRole` ADD CONSTRAINT `OutletUserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `OutletRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminRolePermission` ADD CONSTRAINT `SuperAdminRolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `SuperAdminRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminRolePermission` ADD CONSTRAINT `SuperAdminRolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `SuperAdminPermission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminUserRole` ADD CONSTRAINT `SuperAdminUserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `SuperAdminRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `outletuser` RENAME INDEX `OutletUser_outletId_fkey` TO `OutletUser_outletId_idx`;

-- RenameIndex
ALTER TABLE `outletuserrole` RENAME INDEX `OutletUserRole_roleId_fkey` TO `OutletUserRole_roleId_idx`;

-- RenameIndex
ALTER TABLE `superadminuserrole` RENAME INDEX `SuperAdminUserRole_roleId_fkey` TO `SuperAdminUserRole_roleId_idx`;
