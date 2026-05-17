-- CreateTable
CREATE TABLE `Appointment` (
    `id` VARCHAR(191) NOT NULL,
    `appointmentCode` VARCHAR(191) NOT NULL,
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
    `transactionId` VARCHAR(191) NULL,
    `paymentMethod` VARCHAR(191) NULL,
    `paidAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AppointmentPayment_appointmentId_key`(`appointmentId`),
    INDEX `AppointmentPayment_status_idx`(`status`),
    INDEX `AppointmentPayment_transactionId_idx`(`transactionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AppointmentSlotLock` ADD CONSTRAINT `AppointmentSlotLock_appointmentId_fkey` FOREIGN KEY (`appointmentId`) REFERENCES `Appointment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentStatusLog` ADD CONSTRAINT `AppointmentStatusLog_appointmentId_fkey` FOREIGN KEY (`appointmentId`) REFERENCES `Appointment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentPayment` ADD CONSTRAINT `AppointmentPayment_appointmentId_fkey` FOREIGN KEY (`appointmentId`) REFERENCES `Appointment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
