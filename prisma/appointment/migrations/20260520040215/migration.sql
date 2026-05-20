-- CreateTable
CREATE TABLE `PackageOrder` (
    `id` VARCHAR(191) NOT NULL,
    `orderCode` VARCHAR(191) NOT NULL,
    `patientId` VARCHAR(191) NOT NULL,
    `outletId` VARCHAR(191) NULL,
    `packageId` VARCHAR(191) NOT NULL,
    `packageName` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NULL,
    `totalPrice` DECIMAL(10, 2) NOT NULL,
    `discountedPrice` DECIMAL(10, 2) NOT NULL,
    `status` ENUM('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `paymentStatus` ENUM('UNPAID', 'PAID', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'UNPAID',
    `paymentMethod` ENUM('SSLCOMMERZ', 'CASH', 'MANUAL') NULL,
    `notes` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PackageOrder_orderCode_key`(`orderCode`),
    INDEX `PackageOrder_patientId_idx`(`patientId`),
    INDEX `PackageOrder_outletId_idx`(`outletId`),
    INDEX `PackageOrder_packageId_idx`(`packageId`),
    INDEX `PackageOrder_status_idx`(`status`),
    INDEX `PackageOrder_paymentStatus_idx`(`paymentStatus`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackageOrderItem` (
    `id` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `testId` VARCHAR(191) NOT NULL,
    `testName` VARCHAR(191) NOT NULL,
    `testCode` VARCHAR(191) NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `PackageOrderItem_orderId_idx`(`orderId`),
    INDEX `PackageOrderItem_testId_idx`(`testId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackagePayment` (
    `id` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'BDT',
    `status` ENUM('UNPAID', 'PAID', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'UNPAID',
    `method` ENUM('SSLCOMMERZ', 'CASH', 'MANUAL') NOT NULL DEFAULT 'SSLCOMMERZ',
    `transactionId` VARCHAR(191) NOT NULL,
    `validationId` VARCHAR(191) NULL,
    `bankTransactionId` VARCHAR(191) NULL,
    `paymentMethodName` VARCHAR(191) NULL,
    `cardType` VARCHAR(191) NULL,
    `gatewayResponse` JSON NULL,
    `paidAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PackagePayment_orderId_key`(`orderId`),
    UNIQUE INDEX `PackagePayment_transactionId_key`(`transactionId`),
    INDEX `PackagePayment_status_idx`(`status`),
    INDEX `PackagePayment_transactionId_idx`(`transactionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PackageOrderItem` ADD CONSTRAINT `PackageOrderItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `PackageOrder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PackagePayment` ADD CONSTRAINT `PackagePayment_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `PackageOrder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
