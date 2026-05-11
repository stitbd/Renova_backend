-- CreateTable
CREATE TABLE `TestimonialSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'PATIENT STORIES',
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `satisfactionCount` VARCHAR(191) NULL,
    `ratingCount` VARCHAR(191) NULL,
    `reviewCount` VARCHAR(191) NULL,
    `satisfactionLabel` VARCHAR(191) NULL DEFAULT 'Patient Satisfaction',
    `ratingLabel` VARCHAR(191) NULL DEFAULT 'Average Rating',
    `reviewLabel` VARCHAR(191) NULL DEFAULT 'Reviews Collected',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
