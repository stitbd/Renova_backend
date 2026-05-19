/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `AppointmentPayment` will be added. If there are existing duplicate values, this will fail.
  - Made the column `transactionId` on table `appointmentpayment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `appointmentpayment` ADD COLUMN `bankTransactionId` VARCHAR(191) NULL,
    ADD COLUMN `cardType` VARCHAR(191) NULL,
    ADD COLUMN `gateway` ENUM('SSLCOMMERZ', 'MANUAL') NOT NULL DEFAULT 'SSLCOMMERZ',
    ADD COLUMN `gatewayResponse` JSON NULL,
    ADD COLUMN `validationId` VARCHAR(191) NULL,
    MODIFY `transactionId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `AppointmentPayment_transactionId_key` ON `AppointmentPayment`(`transactionId`);

-- CreateIndex
CREATE INDEX `AppointmentPayment_validationId_idx` ON `AppointmentPayment`(`validationId`);
