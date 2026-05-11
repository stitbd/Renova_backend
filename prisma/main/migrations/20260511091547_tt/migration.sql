-- CreateTable
CREATE TABLE `DoctorSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'MEET OUR TEAM',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `appoinmentButtonText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
