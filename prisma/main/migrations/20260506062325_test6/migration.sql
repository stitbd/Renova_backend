-- AlterTable
ALTER TABLE `doctor` ADD COLUMN `outletId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
