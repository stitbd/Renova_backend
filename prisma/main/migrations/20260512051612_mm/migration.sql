-- CreateTable
CREATE TABLE `ManagingDirectorSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'MESSAGE FROM OUR MD',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `designation` VARCHAR(191) NULL,
    `degree` VARCHAR(191) NULL,
    `badgeText` VARCHAR(191) NULL,
    `experienceCount` VARCHAR(191) NULL,
    `patientsCount` VARCHAR(191) NULL,
    `satisfactionCount` VARCHAR(191) NULL,
    `experienceLabel` VARCHAR(191) NULL DEFAULT 'Years Leading',
    `patientsLabel` VARCHAR(191) NULL DEFAULT 'Lives Touched',
    `satisfactionLabel` VARCHAR(191) NULL DEFAULT 'Patient Satisfaction',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
