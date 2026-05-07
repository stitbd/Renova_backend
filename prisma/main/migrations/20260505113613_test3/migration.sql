/*
  Warnings:

  - You are about to drop the column `diagnostic_Child_UsersId` on the `diagnosticuserrole` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `diagnostic_AccountId` on the `role` table. All the data in the column will be lost.
  - You are about to drop the `diagnostic_account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `diagnostic_child_users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[DiagnosticChildUserId,roleId]` on the table `DiagnosticUserRole` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mobileNumber]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,DiagnosticAccountId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `DiagnosticChildUserId` to the `DiagnosticUserRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `diagnostic_child_users` DROP FOREIGN KEY `Diagnostic_Child_Users_diagnostic_AccountId_fkey`;

-- DropForeignKey
ALTER TABLE `diagnosticuserrole` DROP FOREIGN KEY `DiagnosticUserRole_diagnostic_Child_UsersId_fkey`;

-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_diagnostic_AccountId_fkey`;

-- DropIndex
DROP INDEX `DiagnosticUserRole_diagnostic_Child_UsersId_roleId_key` ON `diagnosticuserrole`;

-- DropIndex
DROP INDEX `Patient_email_key` ON `patient`;

-- DropIndex
DROP INDEX `Role_diagnostic_AccountId_fkey` ON `role`;

-- DropIndex
DROP INDEX `Role_name_diagnostic_AccountId_key` ON `role`;

-- AlterTable
ALTER TABLE `diagnosticuserrole` DROP COLUMN `diagnostic_Child_UsersId`,
    ADD COLUMN `DiagnosticChildUserId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `patient` DROP COLUMN `name`,
    DROP COLUMN `password`,
    DROP COLUMN `phone`,
    ADD COLUMN `dateOfBirth` DATETIME(3) NULL,
    ADD COLUMN `diagnosticAccountId` VARCHAR(191) NULL,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobileNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `otp` VARCHAR(191) NULL,
    ADD COLUMN `otpExpiresAt` DATETIME(3) NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `diagnostic_AccountId`,
    ADD COLUMN `DiagnosticAccountId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `diagnostic_account`;

-- DropTable
DROP TABLE `diagnostic_child_users`;

-- CreateTable
CREATE TABLE `DiagnosticAccount` (
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

    UNIQUE INDEX `DiagnosticAccount_email_key`(`email`),
    UNIQUE INDEX `DiagnosticAccount_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiagnosticChildUser` (
    `id` VARCHAR(191) NOT NULL,
    `DiagnosticAccountId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DiagnosticChildUser_email_DiagnosticAccountId_key`(`email`, `DiagnosticAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `DiagnosticUserRole_DiagnosticChildUserId_roleId_key` ON `DiagnosticUserRole`(`DiagnosticChildUserId`, `roleId`);

-- CreateIndex
CREATE UNIQUE INDEX `Patient_mobileNumber_key` ON `Patient`(`mobileNumber`);

-- CreateIndex
CREATE UNIQUE INDEX `Role_name_DiagnosticAccountId_key` ON `Role`(`name`, `DiagnosticAccountId`);

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_diagnosticAccountId_fkey` FOREIGN KEY (`diagnosticAccountId`) REFERENCES `DiagnosticAccount`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiagnosticChildUser` ADD CONSTRAINT `DiagnosticChildUser_DiagnosticAccountId_fkey` FOREIGN KEY (`DiagnosticAccountId`) REFERENCES `DiagnosticAccount`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_DiagnosticAccountId_fkey` FOREIGN KEY (`DiagnosticAccountId`) REFERENCES `DiagnosticAccount`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiagnosticUserRole` ADD CONSTRAINT `DiagnosticUserRole_DiagnosticChildUserId_fkey` FOREIGN KEY (`DiagnosticChildUserId`) REFERENCES `DiagnosticChildUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
