-- CreateTable
CREATE TABLE `SuperAdmins` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuperAdmins_email_key`(`email`),
    UNIQUE INDEX `SuperAdmins_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patient` (
    `id` VARCHAR(191) NOT NULL,
    `referenceName` VARCHAR(191) NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NULL,
    `age` INTEGER NULL,
    `bloodGroup` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `emergencyContact` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `otp` VARCHAR(191) NULL,
    `otpExpiresAt` DATETIME(3) NULL,
    `outletId` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Patient_mobileNumber_key`(`mobileNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `id` VARCHAR(191) NOT NULL,
    `doctorCode` VARCHAR(191) NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `bmdcNumber` VARCHAR(191) NULL,
    `subSpecialization` VARCHAR(191) NULL,
    `qualification` VARCHAR(191) NULL,
    `experienceYears` INTEGER NULL,
    `currentDesignation` VARCHAR(191) NULL,
    `consultationFee` DECIMAL(10, 2) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `onlineStatus` ENUM('ONLINE', 'OFFLINE') NOT NULL DEFAULT 'OFFLINE',
    `outletId` VARCHAR(191) NULL,
    `specializationId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Doctor_doctorCode_key`(`doctorCode`),
    UNIQUE INDEX `Doctor_mobile_key`(`mobile`),
    UNIQUE INDEX `Doctor_email_key`(`email`),
    UNIQUE INDEX `Doctor_bmdcNumber_key`(`bmdcNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorSpecialization` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',

    UNIQUE INDEX `DoctorSpecialization_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorDocument` (
    `id` VARCHAR(191) NOT NULL,
    `documentType` ENUM('LICENSE', 'CERTIFICATE', 'DEGREE', 'NID', 'OTHER') NOT NULL,
    `fileUrl` VARCHAR(191) NOT NULL,
    `verificationStatus` ENUM('PENDING', 'VERIFIED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `doctorId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorSchedule` (
    `id` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `dayName` VARCHAR(191) NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `slotDuration` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorUnavailableDate` (
    `id` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `unavailableDate` DATETIME(3) NOT NULL,
    `startTime` VARCHAR(191) NULL,
    `endTime` VARCHAR(191) NULL,
    `reason` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `DoctorUnavailableDate_doctorId_unavailableDate_idx`(`doctorId`, `unavailableDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `outlets` (
    `id` VARCHAR(191) NOT NULL,
    `outletCode` VARCHAR(191) NOT NULL,
    `outletName` VARCHAR(191) NOT NULL,
    `subdomain` VARCHAR(191) NOT NULL,
    `division` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contactNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(10, 8) NULL,
    `longitude` DECIMAL(11, 8) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `outlets_outletCode_key`(`outletCode`),
    UNIQUE INDEX `outlets_subdomain_key`(`subdomain`),
    UNIQUE INDEX `outlets_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletUser` (
    `id` VARCHAR(191) NOT NULL,
    `outletId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `isOwner` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `OutletUser_phone_key`(`phone`),
    INDEX `OutletUser_outletId_idx`(`outletId`),
    UNIQUE INDEX `OutletUser_email_outletId_key`(`email`, `outletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletRole` (
    `id` VARCHAR(191) NOT NULL,
    `outletId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `OutletRole_outletId_idx`(`outletId`),
    UNIQUE INDEX `OutletRole_name_outletId_key`(`name`, `outletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletPermission` (
    `id` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `module` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `OutletPermission_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletRolePermission` (
    `id` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `permissionId` VARCHAR(191) NOT NULL,

    INDEX `OutletRolePermission_roleId_idx`(`roleId`),
    INDEX `OutletRolePermission_permissionId_idx`(`permissionId`),
    UNIQUE INDEX `OutletRolePermission_roleId_permissionId_key`(`roleId`, `permissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OutletUserRole` (
    `id` VARCHAR(191) NOT NULL,
    `outletUserId` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `OutletUserRole_outletUserId_idx`(`outletUserId`),
    INDEX `OutletUserRole_roleId_idx`(`roleId`),
    UNIQUE INDEX `OutletUserRole_outletUserId_roleId_key`(`outletUserId`, `roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuperAdminRole` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuperAdminRole_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuperAdminPermission` (
    `id` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `module` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuperAdminPermission_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuperAdminRolePermission` (
    `id` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `permissionId` VARCHAR(191) NOT NULL,

    INDEX `SuperAdminRolePermission_roleId_idx`(`roleId`),
    INDEX `SuperAdminRolePermission_permissionId_idx`(`permissionId`),
    UNIQUE INDEX `SuperAdminRolePermission_roleId_permissionId_key`(`roleId`, `permissionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuperAdminUserRole` (
    `id` VARCHAR(191) NOT NULL,
    `superAdminId` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `SuperAdminUserRole_superAdminId_idx`(`superAdminId`),
    INDEX `SuperAdminUserRole_roleId_idx`(`roleId`),
    UNIQUE INDEX `SuperAdminUserRole_superAdminId_roleId_key`(`superAdminId`, `roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HomeBanner` (
    `id` VARCHAR(191) NOT NULL,
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
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

-- CreateTable
CREATE TABLE `AboutSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'ABOUT US',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `feature1Icon` VARCHAR(191) NULL,
    `feature1Title` VARCHAR(191) NULL,
    `feature1Description` VARCHAR(191) NULL,
    `feature2Icon` VARCHAR(191) NULL,
    `feature2Title` VARCHAR(191) NULL,
    `feature2Description` VARCHAR(191) NULL,
    `feature3Icon` VARCHAR(191) NULL,
    `feature3Title` VARCHAR(191) NULL,
    `feature3Description` VARCHAR(191) NULL,
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
    `cardExperienceCount` VARCHAR(191) NULL,
    `cardExperienceLabel` VARCHAR(191) NULL DEFAULT 'Years',
    `cardPatientsCount` VARCHAR(191) NULL,
    `cardPatientsLabel` VARCHAR(191) NULL DEFAULT 'Patients',
    `primaryButtonText` VARCHAR(191) NULL,
    `secondaryButtonText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'OUR SERVICES',
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `buttonText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceItem` (
    `id` VARCHAR(191) NOT NULL,
    `serviceSectionId` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `linkText` VARCHAR(191) NULL DEFAULT 'Learn More',
    `serial` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'MEET OUR TEAM',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `appoinmentButtonText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppointmentSection` (
    `id` VARCHAR(191) NOT NULL,
    `badgeText` VARCHAR(191) NULL DEFAULT 'NOW ACCEPTING PATIENTS',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `feature1Text` VARCHAR(191) NULL,
    `feature2Text` VARCHAR(191) NULL,
    `feature3Text` VARCHAR(191) NULL,
    `feature4Text` VARCHAR(191) NULL,
    `patientsServedCount` VARCHAR(191) NULL,
    `doctorsCount` VARCHAR(191) NULL,
    `ratingCount` VARCHAR(191) NULL,
    `patientsServedLabel` VARCHAR(191) NULL DEFAULT 'PATIENTS SERVED',
    `doctorsLabel` VARCHAR(191) NULL DEFAULT 'SPECIALIST DOCTORS',
    `ratingLabel` VARCHAR(191) NULL DEFAULT 'AVERAGE RATING',
    `phoneLabel` VARCHAR(191) NULL DEFAULT 'PREFER A CALL?',
    `phoneNumber` VARCHAR(191) NULL,
    `formTitle` VARCHAR(191) NULL,
    `formDescription` VARCHAR(191) NULL,
    `submitButtonText` VARCHAR(191) NULL,
    `sslText` VARCHAR(191) NULL,
    `confirmText` VARCHAR(191) NULL,
    `reviewText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'OUR SHOP',
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `buttonText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacilitySection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'OUR FACILITIES',
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `buttonText` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TestimonialSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'PATIENT STORIES',
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `satisfactionCount` VARCHAR(191) NULL,
    `ratingCount` VARCHAR(191) NULL,
    `reviewCount` VARCHAR(191) NULL,
    `satisfactionLabel` VARCHAR(191) NULL DEFAULT 'Patient Satisfaction',
    `ratingLabel` VARCHAR(191) NULL DEFAULT 'Average Rating',
    `reviewLabel` VARCHAR(191) NULL DEFAULT 'Reviews Collected',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BlogSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'HEALTH INSIGHTS',
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `buttonText` VARCHAR(191) NULL,
    `emergencyTitle` VARCHAR(191) NULL,
    `emergencyDescription` VARCHAR(191) NULL,
    `phoneNumber1` VARCHAR(191) NULL,
    `phoneNumber2` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AboutBanner` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'WHO WE ARE',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `ManagingDirectorSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'MESSAGE FROM OUR MD',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `image` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `designation` VARCHAR(191) NULL,
    `degree` VARCHAR(191) NULL,
    `badgeText` VARCHAR(191) NULL,
    `experienceCount` VARCHAR(191) NULL,
    `patientsCount` VARCHAR(191) NULL,
    `satisfactionCount` VARCHAR(191) NULL,
    `experienceLabel` VARCHAR(191) NULL DEFAULT 'Years Leading',
    `patientsLabel` VARCHAR(191) NULL DEFAULT 'Lives Touched',
    `satisfactionLabel` VARCHAR(191) NULL DEFAULT 'Patient Satisfaction',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeadershipSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'Our Leadership',
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorBanner` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'OUR MEDICAL TEAM',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CareerSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'CAREER OPPORTUNITIES',
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `feature1` VARCHAR(191) NULL,
    `feature2` VARCHAR(191) NULL,
    `feature3` VARCHAR(191) NULL,
    `feature4` VARCHAR(191) NULL,
    `buttonText` VARCHAR(191) NULL,
    `specialistsCount` VARCHAR(191) NULL,
    `departmentsCount` VARCHAR(191) NULL,
    `certifiedCount` VARCHAR(191) NULL,
    `specialistsLabel` VARCHAR(191) NULL DEFAULT 'Specialists',
    `departmentsLabel` VARCHAR(191) NULL DEFAULT 'Departments',
    `certifiedLabel` VARCHAR(191) NULL DEFAULT 'BMDC Certified',
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContactSection` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'GET IN TOUCH',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `addressTitle` VARCHAR(191) NULL,
    `addressDescription` VARCHAR(191) NULL,
    `phoneTitle` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `phoneDescription` VARCHAR(191) NULL,
    `emailTitle` VARCHAR(191) NULL,
    `emailAddress` VARCHAR(191) NULL,
    `emailDescription` VARCHAR(191) NULL,
    `workingHoursTitle` VARCHAR(191) NULL,
    `workingHours` VARCHAR(191) NULL,
    `workingHoursDescription` VARCHAR(191) NULL,
    `emergencyNumber` VARCHAR(191) NULL,
    `appointmentNumber` VARCHAR(191) NULL,
    `pharmacyNumber` VARCHAR(191) NULL,
    `billingNumber` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShopBanner` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'HEALTH STORE',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `feature1Title` VARCHAR(191) NULL,
    `feature1Description` VARCHAR(191) NULL,
    `feature1Icon` VARCHAR(191) NULL,
    `feature2Title` VARCHAR(191) NULL,
    `feature2Description` VARCHAR(191) NULL,
    `feature2Icon` VARCHAR(191) NULL,
    `feature3Title` VARCHAR(191) NULL,
    `feature3Description` VARCHAR(191) NULL,
    `feature3Icon` VARCHAR(191) NULL,
    `feature4Title` VARCHAR(191) NULL,
    `feature4Description` VARCHAR(191) NULL,
    `feature4Icon` VARCHAR(191) NULL,
    `productSectionLabel` VARCHAR(191) NULL DEFAULT 'OUR SHOP',
    `productTitle1` VARCHAR(191) NULL,
    `productHighlightedText` VARCHAR(191) NULL,
    `productTitle2` VARCHAR(191) NULL,
    `productDescription` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackageBanner` (
    `id` VARCHAR(191) NOT NULL,
    `sectionLabel` VARCHAR(191) NULL DEFAULT 'HEALTH PACKAGES',
    `title1` VARCHAR(191) NOT NULL,
    `highlightedText` VARCHAR(191) NULL,
    `title2` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_specializationId_fkey` FOREIGN KEY (`specializationId`) REFERENCES `DoctorSpecialization`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorDocument` ADD CONSTRAINT `DoctorDocument_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorSchedule` ADD CONSTRAINT `DoctorSchedule_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorUnavailableDate` ADD CONSTRAINT `DoctorUnavailableDate_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUser` ADD CONSTRAINT `OutletUser_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletRole` ADD CONSTRAINT `OutletRole_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletRolePermission` ADD CONSTRAINT `OutletRolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `OutletRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletRolePermission` ADD CONSTRAINT `OutletRolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `OutletPermission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUserRole` ADD CONSTRAINT `OutletUserRole_outletUserId_fkey` FOREIGN KEY (`outletUserId`) REFERENCES `OutletUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUserRole` ADD CONSTRAINT `OutletUserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `OutletRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminRolePermission` ADD CONSTRAINT `SuperAdminRolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `SuperAdminRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminRolePermission` ADD CONSTRAINT `SuperAdminRolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `SuperAdminPermission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminUserRole` ADD CONSTRAINT `SuperAdminUserRole_superAdminId_fkey` FOREIGN KEY (`superAdminId`) REFERENCES `SuperAdmins`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminUserRole` ADD CONSTRAINT `SuperAdminUserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `SuperAdminRole`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceItem` ADD CONSTRAINT `ServiceItem_serviceSectionId_fkey` FOREIGN KEY (`serviceSectionId`) REFERENCES `ServiceSection`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
