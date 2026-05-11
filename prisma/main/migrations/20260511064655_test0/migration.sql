-- CreateTable
CREATE TABLE `HomeBanner` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `subtitle` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `primaryButtonText` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `cardTitle` VARCHAR(191) NULL,
    `cardSubtitle` VARCHAR(191) NULL,
    `patientsCount` VARCHAR(191) NULL,
    `doctorsCount` VARCHAR(191) NULL,
    `departmentsCount` VARCHAR(191) NULL,
    `experienceYears` VARCHAR(191) NULL,
    `patientsLabel` VARCHAR(191) NULL DEFAULT 'Happy Patients',
    `doctorsLabel` VARCHAR(191) NULL DEFAULT 'Expert Doctors',
    `departmentsLabel` VARCHAR(191) NULL DEFAULT 'Departments',
    `experienceLabel` VARCHAR(191) NULL DEFAULT 'Years Experience',
    `certificationTitle` VARCHAR(191) NULL,
    `certificationSubtitle` VARCHAR(191) NULL,
    `emergencyText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
