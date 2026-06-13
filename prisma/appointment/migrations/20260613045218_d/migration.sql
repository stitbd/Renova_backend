/*
  Warnings:

  - You are about to drop the column `appointmentId` on the `chatconversation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[participantOneId,participantTwoId]` on the table `ChatConversation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `ChatConversation_appointmentId_idx` ON `chatconversation`;

-- DropIndex
DROP INDEX `ChatConversation_participantOneId_participantTwoId_appointme_key` ON `chatconversation`;

-- AlterTable
ALTER TABLE `chatconversation` DROP COLUMN `appointmentId`;

-- AlterTable
ALTER TABLE `chatmessage` ADD COLUMN `appointmentId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ChatConversation_participantOneId_participantTwoId_key` ON `ChatConversation`(`participantOneId`, `participantTwoId`);

-- CreateIndex
CREATE INDEX `ChatMessage_appointmentId_idx` ON `ChatMessage`(`appointmentId`);
