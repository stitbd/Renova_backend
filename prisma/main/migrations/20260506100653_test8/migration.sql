/*
  Warnings:

  - You are about to drop the column `doctorId` on the `doctordocument` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `doctorschedule` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `doctorspecialization` table. All the data in the column will be lost.
  - Added the required column `documentId` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleId` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specializationId` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `doctordocument` DROP FOREIGN KEY `DoctorDocument_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `doctorschedule` DROP FOREIGN KEY `DoctorSchedule_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `doctorspecialization` DROP FOREIGN KEY `DoctorSpecialization_doctorId_fkey`;

-- DropIndex
DROP INDEX `DoctorDocument_doctorId_fkey` ON `doctordocument`;

-- DropIndex
DROP INDEX `DoctorSchedule_doctorId_fkey` ON `doctorschedule`;

-- DropIndex
DROP INDEX `DoctorSpecialization_doctorId_fkey` ON `doctorspecialization`;

-- AlterTable
ALTER TABLE `doctor` ADD COLUMN `documentId` VARCHAR(191) NOT NULL,
    ADD COLUMN `scheduleId` VARCHAR(191) NOT NULL,
    ADD COLUMN `specializationId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `doctordocument` DROP COLUMN `doctorId`;

-- AlterTable
ALTER TABLE `doctorschedule` DROP COLUMN `doctorId`;

-- AlterTable
ALTER TABLE `doctorspecialization` DROP COLUMN `doctorId`;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_specializationId_fkey` FOREIGN KEY (`specializationId`) REFERENCES `DoctorSpecialization`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `DoctorDocument`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_scheduleId_fkey` FOREIGN KEY (`scheduleId`) REFERENCES `DoctorSchedule`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
