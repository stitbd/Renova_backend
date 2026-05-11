-- CreateTable
CREATE TABLE `ServiceSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'OUR SERVICES',
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `buttonText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceItem` (
    `id` VARCHAR(191) NOT NULL,
    `serviceSectionId` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `linkText` VARCHAR(191) NULL DEFAULT 'Learn More',
    `serial` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServiceItem` ADD CONSTRAINT `ServiceItem_serviceSectionId_fkey` FOREIGN KEY (`serviceSectionId`) REFERENCES `ServiceSection`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
