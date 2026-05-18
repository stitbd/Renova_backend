-- CreateTable
CREATE TABLE `diagnostic_tests` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `description` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `diagnostic_tests_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `diagnostic_packages` (
    `id` VARCHAR(191) NOT NULL,
    `packageName` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NULL,
    `badgeText` VARCHAR(191) NULL,
    `totalPrice` DECIMAL(10, 2) NOT NULL,
    `discountedPrice` DECIMAL(10, 2) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_tests` (
    `id` VARCHAR(191) NOT NULL,
    `packageId` VARCHAR(191) NOT NULL,
    `testId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `package_tests_packageId_testId_key`(`packageId`, `testId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `package_tests` ADD CONSTRAINT `package_tests_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `diagnostic_packages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `package_tests` ADD CONSTRAINT `package_tests_testId_fkey` FOREIGN KEY (`testId`) REFERENCES `diagnostic_tests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
