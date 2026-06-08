/*
  Warnings:

  - Added the required column `patientDateOfBirth` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientEmail` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientGender` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientName` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientPhone` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` ADD COLUMN `patientDateOfBirth` DATETIME(3) NOT NULL,
    ADD COLUMN `patientEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `patientGender` VARCHAR(191) NOT NULL,
    ADD COLUMN `patientName` VARCHAR(191) NOT NULL,
    ADD COLUMN `patientPhone` VARCHAR(191) NOT NULL;
