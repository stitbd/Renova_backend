/*
  Warnings:

  - A unique constraint covering the columns `[patientCode]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `patient` ADD COLUMN `patientCode` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Patient_patientCode_key` ON `Patient`(`patientCode`);
