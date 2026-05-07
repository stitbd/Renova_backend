/*
  Warnings:

  - You are about to drop the column `documentId` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleId` on the `doctor` table. All the data in the column will be lost.
  - Added the required column `doctorId` to the `DoctorDocument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorId` to the `DoctorSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `doctor` DROP FOREIGN KEY `Doctor_documentId_fkey`;

-- DropForeignKey
ALTER TABLE `doctor` DROP FOREIGN KEY `Doctor_scheduleId_fkey`;

-- DropIndex
DROP INDEX `Doctor_documentId_fkey` ON `doctor`;

-- DropIndex
DROP INDEX `Doctor_scheduleId_fkey` ON `doctor`;

-- AlterTable
ALTER TABLE `doctor` DROP COLUMN `documentId`,
    DROP COLUMN `scheduleId`;

-- AlterTable
ALTER TABLE `doctordocument` ADD COLUMN `doctorId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `doctorschedule` ADD COLUMN `doctorId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `DoctorDocument` ADD CONSTRAINT `DoctorDocument_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorSchedule` ADD CONSTRAINT `DoctorSchedule_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
