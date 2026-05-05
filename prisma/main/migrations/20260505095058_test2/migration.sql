/*
  Warnings:

  - A unique constraint covering the columns `[name,superAdminId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `role` ADD COLUMN `superAdminId` VARCHAR(191) NULL,
    MODIFY `ownerType` ENUM('DIAGNOSTIC', 'SUPER_ADMIN') NOT NULL;

-- CreateTable
CREATE TABLE `SuperAdminUserRole` (
    `id` VARCHAR(191) NOT NULL,
    `superAdminId` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `SuperAdminUserRole_superAdminId_roleId_key`(`superAdminId`, `roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Role_name_superAdminId_key` ON `Role`(`name`, `superAdminId`);

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_superAdminId_fkey` FOREIGN KEY (`superAdminId`) REFERENCES `SuperAdmins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminUserRole` ADD CONSTRAINT `SuperAdminUserRole_superAdminId_fkey` FOREIGN KEY (`superAdminId`) REFERENCES `SuperAdmins`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminUserRole` ADD CONSTRAINT `SuperAdminUserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
