-- CreateTable
CREATE TABLE `ContactSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'GET IN TOUCH',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `addressTitle` VARCHAR(191) NULL,
    `addressDescription` VARCHAR(191) NULL,
    `phoneTitle` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `phoneDescription` VARCHAR(191) NULL,
    `emailTitle` VARCHAR(191) NULL,
    `emailAddress` VARCHAR(191) NULL,
    `emailDescription` VARCHAR(191) NULL,
    `workingHoursTitle` VARCHAR(191) NULL,
    `workingHours` VARCHAR(191) NULL,
    `workingHoursDescription` VARCHAR(191) NULL,
    `emergencyNumber` VARCHAR(191) NULL,
    `appointmentNumber` VARCHAR(191) NULL,
    `pharmacyNumber` VARCHAR(191) NULL,
    `billingNumber` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
