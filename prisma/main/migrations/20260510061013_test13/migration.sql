/*
  Warnings:

  - You are about to drop the column `OutletChildUserId` on the `outletuserrole` table. All the data in the column will be lost.
  - You are about to drop the `outletchilduser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[outletUserId,roleId]` on the table `OutletUserRole` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `outlets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outletUserId` to the `OutletUserRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `outletchilduser` DROP FOREIGN KEY `OutletChildUser_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `outletuserrole` DROP FOREIGN KEY `OutletUserRole_OutletChildUserId_fkey`;

-- DropIndex
DROP INDEX `OutletUserRole_OutletChildUserId_roleId_key` ON `outletuserrole`;

-- AlterTable
ALTER TABLE `outlets` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `outletuserrole` DROP COLUMN `OutletChildUserId`,
    ADD COLUMN `outletUserId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `outletchilduser`;

-- CreateTable
CREATE TABLE `OutletUser` (
    `id` VARCHAR(191) NOT NULL,
    `outletId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `isOwner` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `OutletUser_email_outletId_key`(`email`, `outletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `OutletUserRole_outletUserId_roleId_key` ON `OutletUserRole`(`outletUserId`, `roleId`);

-- AddForeignKey
ALTER TABLE `OutletUser` ADD CONSTRAINT `OutletUser_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUserRole` ADD CONSTRAINT `OutletUserRole_outletUserId_fkey` FOREIGN KEY (`outletUserId`) REFERENCES `OutletUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
