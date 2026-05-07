/*
  Warnings:

  - You are about to drop the column `bio` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `specialization` on the `doctor` table. All the data in the column will be lost.
  - The values [PENDING] on the enum `Patient_status` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[doctorCode]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bmdcNumber]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fullName` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `doctor` DROP COLUMN `bio`,
    DROP COLUMN `experience`,
    DROP COLUMN `isActive`,
    DROP COLUMN `name`,
    DROP COLUMN `password`,
    DROP COLUMN `phone`,
    DROP COLUMN `specialization`,
    ADD COLUMN `bmdcNumber` VARCHAR(191) NULL,
    ADD COLUMN `currentDesignation` VARCHAR(191) NULL,
    ADD COLUMN `doctorCode` VARCHAR(191) NULL,
    ADD COLUMN `experienceYears` INTEGER NULL,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobile` VARCHAR(191) NULL,
    ADD COLUMN `onlineStatus` ENUM('ONLINE', 'OFFLINE') NOT NULL DEFAULT 'OFFLINE',
    ADD COLUMN `qualification` VARCHAR(191) NULL,
    ADD COLUMN `specializationId` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    ADD COLUMN `subSpecialization` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `patient` MODIFY `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE `DoctorSpecialization` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',

    UNIQUE INDEX `DoctorSpecialization_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorDocument` (
    `id` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `documentType` ENUM('LICENSE', 'CERTIFICATE', 'DEGREE', 'NID', 'OTHER') NOT NULL,
    `fileUrl` VARCHAR(191) NOT NULL,
    `verificationStatus` ENUM('PENDING', 'VERIFIED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorSchedule` (
    `id` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `dayName` VARCHAR(191) NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `slotDuration` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Doctor_doctorCode_key` ON `Doctor`(`doctorCode`);

-- CreateIndex
CREATE UNIQUE INDEX `Doctor_bmdcNumber_key` ON `Doctor`(`bmdcNumber`);

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_specializationId_fkey` FOREIGN KEY (`specializationId`) REFERENCES `DoctorSpecialization`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorDocument` ADD CONSTRAINT `DoctorDocument_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorSchedule` ADD CONSTRAINT `DoctorSchedule_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
