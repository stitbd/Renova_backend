-- CreateTable
CREATE TABLE `MissionVisionSection` (
    `id` VARCHAR(191) NOT NULL,
    `missionTitle` VARCHAR(191) NULL,
    `missionDescription` VARCHAR(191) NULL,
    `missionIcon` VARCHAR(191) NULL,
    `visionTitle` VARCHAR(191) NULL,
    `visionDescription` VARCHAR(191) NULL,
    `visionIcon` VARCHAR(191) NULL,
    `valuesTitle` VARCHAR(191) NULL,
    `valuesDescription` VARCHAR(191) NULL,
    `valuesIcon` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
