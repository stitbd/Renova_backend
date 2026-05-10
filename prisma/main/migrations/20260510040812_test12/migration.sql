/*
  Warnings:

  - You are about to drop the `outlet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `doctor` DROP FOREIGN KEY `Doctor_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `outletchilduser` DROP FOREIGN KEY `OutletChildUser_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `patient` DROP FOREIGN KEY `Patient_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_outletId_fkey`;

-- DropIndex
DROP INDEX `Doctor_outletId_fkey` ON `doctor`;

-- DropIndex
DROP INDEX `OutletChildUser_outletId_fkey` ON `outletchilduser`;

-- DropIndex
DROP INDEX `Patient_outletId_fkey` ON `patient`;

-- DropIndex
DROP INDEX `Role_outletId_fkey` ON `role`;

-- DropTable
DROP TABLE `outlet`;

-- CreateTable
CREATE TABLE `outlets` (
    `id` VARCHAR(191) NOT NULL,
    `outletCode` VARCHAR(191) NOT NULL,
    `outletName` VARCHAR(191) NOT NULL,
    `subdomain` VARCHAR(191) NOT NULL,
    `division` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contactNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(10, 8) NULL,
    `longitude` DECIMAL(11, 8) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `outlets_outletCode_key`(`outletCode`),
    UNIQUE INDEX `outlets_subdomain_key`(`subdomain`),
    UNIQUE INDEX `outlets_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletChildUser` ADD CONSTRAINT `OutletChildUser_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
