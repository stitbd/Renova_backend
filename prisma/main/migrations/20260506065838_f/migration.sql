/*
  Warnings:

  - You are about to drop the column `specializationId` on the `doctor` table. All the data in the column will be lost.
  - Added the required column `doctorId` to the `DoctorSpecialization` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `doctor` DROP FOREIGN KEY `Doctor_specializationId_fkey`;

-- DropIndex
DROP INDEX `Doctor_specializationId_fkey` ON `doctor`;

-- AlterTable
ALTER TABLE `doctor` DROP COLUMN `specializationId`;

-- AlterTable
ALTER TABLE `doctorspecialization` ADD COLUMN `doctorId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `DoctorSpecialization` ADD CONSTRAINT `DoctorSpecialization_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
