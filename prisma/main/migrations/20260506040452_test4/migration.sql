/*
  Warnings:

  - You are about to drop the column `diagnosticAccountId` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `DiagnosticAccountId` on the `role` table. All the data in the column will be lost.
  - The values [DIAGNOSTIC] on the enum `Role_ownerType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `diagnosticaccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `diagnosticchilduser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `diagnosticuserrole` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name,outletId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `diagnosticchilduser` DROP FOREIGN KEY `DiagnosticChildUser_DiagnosticAccountId_fkey`;

-- DropForeignKey
ALTER TABLE `diagnosticuserrole` DROP FOREIGN KEY `DiagnosticUserRole_DiagnosticChildUserId_fkey`;

-- DropForeignKey
ALTER TABLE `diagnosticuserrole` DROP FOREIGN KEY `DiagnosticUserRole_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `patient` DROP FOREIGN KEY `Patient_diagnosticAccountId_fkey`;

-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_DiagnosticAccountId_fkey`;

-- DropIndex
DROP INDEX `Patient_diagnosticAccountId_fkey` ON `patient`;

-- DropIndex
DROP INDEX `Role_DiagnosticAccountId_fkey` ON `role`;

-- DropIndex
DROP INDEX `Role_name_DiagnosticAccountId_key` ON `role`;

-- AlterTable
ALTER TABLE `patient` DROP COLUMN `diagnosticAccountId`,
    ADD COLUMN `outletId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `DiagnosticAccountId`,
    ADD COLUMN `outletId` VARCHAR(191) NULL,
    MODIFY `ownerType` ENUM('OUTLET', 'SUPER_ADMIN') NOT NULL;

-- DropTable
DROP TABLE `diagnosticaccount`;

-- DropTable
DROP TABLE `diagnosticchilduser`;

-- DropTable
DROP TABLE `diagnosticuserrole`;

-- CreateTable
CREATE TABLE `outlet` (
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

    UNIQUE INDEX `outlet_email_key`(`email`),
    UNIQUE INDEX `outlet_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletChildUser` (
    `id` VARCHAR(191) NOT NULL,
    `outletId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `OutletChildUser_email_outletId_key`(`email`, `outletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletUserRole` (
    `id` VARCHAR(191) NOT NULL,
    `OutletChildUserId` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `OutletUserRole_OutletChildUserId_roleId_key`(`OutletChildUserId`, `roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Role_name_outletId_key` ON `Role`(`name`, `outletId`);

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletChildUser` ADD CONSTRAINT `OutletChildUser_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUserRole` ADD CONSTRAINT `OutletUserRole_OutletChildUserId_fkey` FOREIGN KEY (`OutletChildUserId`) REFERENCES `OutletChildUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUserRole` ADD CONSTRAINT `OutletUserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
