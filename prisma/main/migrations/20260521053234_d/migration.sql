-- AlterTable
ALTER TABLE `doctor` ADD COLUMN `bloodGroup` VARCHAR(191) NULL,
    ADD COLUMN `dateOfBirth` DATETIME(3) NULL,
    ADD COLUMN `gender` VARCHAR(191) NULL,
    ADD COLUMN `nationality` VARCHAR(191) NULL;
