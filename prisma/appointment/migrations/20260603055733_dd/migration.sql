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
    INDEX `VideoCall_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatConversation` (
    `id` VARCHAR(191) NOT NULL,
    `appointmentId` VARCHAR(191) NULL,
    `participantOneId` VARCHAR(191) NOT NULL,
    `participantTwoId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ChatConversation_appointmentId_idx`(`appointmentId`),
    INDEX `ChatConversation_participantOneId_idx`(`participantOneId`),
    INDEX `ChatConversation_participantTwoId_idx`(`participantTwoId`),
    UNIQUE INDEX `ChatConversation_participantOneId_participantTwoId_appointme_key`(`participantOneId`, `participantTwoId`, `appointmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessage` (
    `id` VARCHAR(191) NOT NULL,
    `conversationId` VARCHAR(191) NOT NULL,
    `senderId` VARCHAR(191) NOT NULL,
    `receiverId` VARCHAR(191) NOT NULL,
    `type` ENUM('TEXT', 'IMAGE', 'FILE', 'SYSTEM') NOT NULL DEFAULT 'TEXT',
    `message` TEXT NULL,
    `fileUrl` VARCHAR(191) NULL,
    `fileName` VARCHAR(191) NULL,
    `seenAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ChatMessage_conversationId_idx`(`conversationId`),
    INDEX `ChatMessage_senderId_idx`(`senderId`),
    INDEX `ChatMessage_receiverId_idx`(`receiverId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD CONSTRAINT `ChatMessage_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `ChatConversation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
