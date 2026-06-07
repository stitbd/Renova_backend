-- AlterTable
ALTER TABLE `videocall` ADD COLUMN `callType` ENUM('AUDIO', 'VIDEO') NOT NULL DEFAULT 'VIDEO';

-- CreateIndex
CREATE INDEX `VideoCall_callType_idx` ON `VideoCall`(`callType`);
