-- CreateTable
CREATE TABLE `Appointment` (
    `id` VARCHAR(191) NOT NULL,
    `appointmentCode` VARCHAR(191) NOT NULL,
    `patientName` VARCHAR(191) NOT NULL,
    `patientEmail` VARCHAR(191) NOT NULL,
    `patientPhone` VARCHAR(191) NOT NULL,
    `patientGender` VARCHAR(191) NOT NULL,
    `patientDateOfBirth` DATETIME(3) NOT NULL,
    `patientMedicalHistory` VARCHAR(191) NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `patientId` VARCHAR(191) NOT NULL,
    `outletId` VARCHAR(191) NULL,
    `appointmentDate` DATETIME(3) NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `type` ENUM('IN_PERSON', 'ONLINE') NOT NULL DEFAULT 'IN_PERSON',
    `status` ENUM('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'NO_SHOW') NOT NULL DEFAULT 'PENDING',
    `consultationFee` DECIMAL(10, 2) NULL,
    `paymentStatus` ENUM('UNPAID', 'PAID', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'UNPAID',
    `reason` TEXT NULL,
    `patientNotes` TEXT NULL,
    `doctorNotes` TEXT NULL,
    `cancelledBy` ENUM('PATIENT', 'DOCTOR', 'OUTLET_USER', 'SUPER_ADMIN', 'SYSTEM') NULL,
    `cancellationReason` TEXT NULL,
    `cancelledAt` DATETIME(3) NULL,
    `confirmedAt` DATETIME(3) NULL,
    `completedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Appointment_appointmentCode_key`(`appointmentCode`),
    INDEX `Appointment_doctorId_appointmentDate_idx`(`doctorId`, `appointmentDate`),
    INDEX `Appointment_patientId_appointmentDate_idx`(`patientId`, `appointmentDate`),
    INDEX `Appointment_outletId_appointmentDate_idx`(`outletId`, `appointmentDate`),
    INDEX `Appointment_status_idx`(`status`),
    INDEX `Appointment_paymentStatus_idx`(`paymentStatus`),
    INDEX `Appointment_startTime_idx`(`startTime`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppointmentSlotLock` (
    `id` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `appointmentId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `AppointmentSlotLock_appointmentId_key`(`appointmentId`),
    INDEX `AppointmentSlotLock_appointmentId_idx`(`appointmentId`),
    UNIQUE INDEX `AppointmentSlotLock_doctorId_startTime_key`(`doctorId`, `startTime`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppointmentStatusLog` (
    `id` VARCHAR(191) NOT NULL,
    `appointmentId` VARCHAR(191) NOT NULL,
    `previousStatus` ENUM('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'NO_SHOW') NULL,
    `newStatus` ENUM('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'NO_SHOW') NOT NULL,
    `changedById` VARCHAR(191) NULL,
    `changedByRole` VARCHAR(191) NULL,
    `note` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `AppointmentStatusLog_appointmentId_idx`(`appointmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppointmentPayment` (
    `id` VARCHAR(191) NOT NULL,
    `appointmentId` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'BDT',
    `status` ENUM('UNPAID', 'PAID', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'UNPAID',
    `gateway` ENUM('SSLCOMMERZ', 'MANUAL') NOT NULL DEFAULT 'SSLCOMMERZ',
    `transactionId` VARCHAR(191) NOT NULL,
    `validationId` VARCHAR(191) NULL,
    `bankTransactionId` VARCHAR(191) NULL,
    `paymentMethod` VARCHAR(191) NULL,
    `cardType` VARCHAR(191) NULL,
    `gatewayResponse` JSON NULL,
    `paidAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AppointmentPayment_appointmentId_key`(`appointmentId`),
    UNIQUE INDEX `AppointmentPayment_transactionId_key`(`transactionId`),
    INDEX `AppointmentPayment_status_idx`(`status`),
    INDEX `AppointmentPayment_transactionId_idx`(`transactionId`),
    INDEX `AppointmentPayment_validationId_idx`(`validationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VideoCall` (
    `id` VARCHAR(191) NOT NULL,
    `callId` VARCHAR(191) NOT NULL,
    `channelName` VARCHAR(191) NOT NULL,
    `appointmentId` VARCHAR(191) NULL,
    `callerId` VARCHAR(191) NOT NULL,
    `receiverId` VARCHAR(191) NOT NULL,
    `callerUid` INTEGER NOT NULL,
    `receiverUid` INTEGER NULL,
    `callType` ENUM('AUDIO', 'VIDEO') NOT NULL DEFAULT 'VIDEO',
    `status` ENUM('RINGING', 'ACCEPTED', 'REJECTED', 'ENDED', 'MISSED') NOT NULL DEFAULT 'RINGING',
    `startedAt` DATETIME(3) NULL,
    `endedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VideoCall_callId_key`(`callId`),
    UNIQUE INDEX `VideoCall_channelName_key`(`channelName`),
    INDEX `VideoCall_callerId_idx`(`callerId`),
    INDEX `VideoCall_receiverId_idx`(`receiverId`),
    INDEX `VideoCall_appointmentId_idx`(`appointmentId`),
    INDEX `VideoCall_callType_idx`(`callType`),
    INDEX `VideoCall_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatConversation` (
    `id` VARCHAR(191) NOT NULL,
    `participantOneId` VARCHAR(191) NOT NULL,
    `participantTwoId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ChatConversation_participantOneId_idx`(`participantOneId`),
    INDEX `ChatConversation_participantTwoId_idx`(`participantTwoId`),
    UNIQUE INDEX `ChatConversation_participantOneId_participantTwoId_key`(`participantOneId`, `participantTwoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessage` (
    `id` VARCHAR(191) NOT NULL,
    `conversationId` VARCHAR(191) NOT NULL,
    `senderId` VARCHAR(191) NOT NULL,
    `receiverId` VARCHAR(191) NOT NULL,
    `appointmentId` VARCHAR(191) NULL,
    `type` ENUM('TEXT', 'IMAGE', 'FILE', 'SYSTEM', 'CALL') NOT NULL DEFAULT 'TEXT',
    `message` TEXT NULL,
    `fileUrl` VARCHAR(191) NULL,
    `fileName` VARCHAR(191) NULL,
    `seenAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ChatMessage_conversationId_idx`(`conversationId`),
    INDEX `ChatMessage_appointmentId_idx`(`appointmentId`),
    INDEX `ChatMessage_senderId_idx`(`senderId`),
    INDEX `ChatMessage_receiverId_idx`(`receiverId`),
    INDEX `ChatMessage_seenAt_idx`(`seenAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
ALTER TABLE `AppointmentSlotLock` ADD CONSTRAINT `AppointmentSlotLock_appointmentId_fkey` FOREIGN KEY (`appointmentId`) REFERENCES `Appointment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentStatusLog` ADD CONSTRAINT `AppointmentStatusLog_appointmentId_fkey` FOREIGN KEY (`appointmentId`) REFERENCES `Appointment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentPayment` ADD CONSTRAINT `AppointmentPayment_appointmentId_fkey` FOREIGN KEY (`appointmentId`) REFERENCES `Appointment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD CONSTRAINT `ChatMessage_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `ChatConversation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PackageOrderItem` ADD CONSTRAINT `PackageOrderItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `PackageOrder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PackagePayment` ADD CONSTRAINT `PackagePayment_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `PackageOrder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
