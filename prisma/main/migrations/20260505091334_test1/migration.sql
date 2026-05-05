/*
  Warnings:

  - You are about to drop the column `diagnosticChildUserId` on the `diagnosticuserrole` table. All the data in the column will be lost.
  - You are about to drop the column `diagnosticAccountId` on the `role` table. All the data in the column will be lost.
  - You are about to drop the `diagnosticaccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `diagnosticchilduser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `superadmin` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[diagnostic_Child_UsersId,roleId]` on the table `DiagnosticUserRole` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,diagnostic_AccountId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `diagnostic_Child_UsersId` to the `DiagnosticUserRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `diagnosticchilduser` DROP FOREIGN KEY `DiagnosticChildUser_diagnosticAccountId_fkey`;

-- DropForeignKey
ALTER TABLE `diagnosticuserrole` DROP FOREIGN KEY `DiagnosticUserRole_diagnosticChildUserId_fkey`;

-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_diagnosticAccountId_fkey`;

-- DropIndex
DROP INDEX `DiagnosticUserRole_diagnosticChildUserId_roleId_key` ON `diagnosticuserrole`;

-- DropIndex
DROP INDEX `Role_diagnosticAccountId_fkey` ON `role`;

-- DropIndex
DROP INDEX `Role_name_diagnosticAccountId_key` ON `role`;

-- AlterTable
ALTER TABLE `diagnosticuserrole` DROP COLUMN `diagnosticChildUserId`,
    ADD COLUMN `diagnostic_Child_UsersId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `diagnosticAccountId`,
    ADD COLUMN `diagnostic_AccountId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `diagnosticaccount`;

-- DropTable
DROP TABLE `diagnosticchilduser`;

-- DropTable
DROP TABLE `superadmin`;

-- CreateTable
CREATE TABLE `SuperAdmins` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuperAdmins_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Diagnostic_Account` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `centerName` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Diagnostic_Account_email_key`(`email`),
    UNIQUE INDEX `Diagnostic_Account_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Diagnostic_Child_Users` (
    `id` VARCHAR(191) NOT NULL,
    `diagnostic_AccountId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Diagnostic_Child_Users_email_diagnostic_AccountId_key`(`email`, `diagnostic_AccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `DiagnosticUserRole_diagnostic_Child_UsersId_roleId_key` ON `DiagnosticUserRole`(`diagnostic_Child_UsersId`, `roleId`);

-- CreateIndex
CREATE UNIQUE INDEX `Role_name_diagnostic_AccountId_key` ON `Role`(`name`, `diagnostic_AccountId`);

-- AddForeignKey
ALTER TABLE `Diagnostic_Child_Users` ADD CONSTRAINT `Diagnostic_Child_Users_diagnostic_AccountId_fkey` FOREIGN KEY (`diagnostic_AccountId`) REFERENCES `Diagnostic_Account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_diagnostic_AccountId_fkey` FOREIGN KEY (`diagnostic_AccountId`) REFERENCES `Diagnostic_Account`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiagnosticUserRole` ADD CONSTRAINT `DiagnosticUserRole_diagnostic_Child_UsersId_fkey` FOREIGN KEY (`diagnostic_Child_UsersId`) REFERENCES `Diagnostic_Child_Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
