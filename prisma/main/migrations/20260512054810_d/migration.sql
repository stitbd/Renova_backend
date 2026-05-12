-- CreateTable
CREATE TABLE `CareerSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'CAREER OPPORTUNITIES',
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `feature1` VARCHAR(191) NULL,
    `feature2` VARCHAR(191) NULL,
    `feature3` VARCHAR(191) NULL,
    `feature4` VARCHAR(191) NULL,
    `buttonText` VARCHAR(191) NULL,
    `specialistsCount` VARCHAR(191) NULL,
    `departmentsCount` VARCHAR(191) NULL,
    `certifiedCount` VARCHAR(191) NULL,
    `specialistsLabel` VARCHAR(191) NULL DEFAULT 'Specialists',
    `departmentsLabel` VARCHAR(191) NULL DEFAULT 'Departments',
    `certifiedLabel` VARCHAR(191) NULL DEFAULT 'BMDC Certified',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
