-- DropForeignKey
ALTER TABLE `doctor` DROP FOREIGN KEY `Doctor_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `doctordocument` DROP FOREIGN KEY `DoctorDocument_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `doctorschedule` DROP FOREIGN KEY `DoctorSchedule_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `doctorspecialization` DROP FOREIGN KEY `DoctorSpecialization_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `outletchilduser` DROP FOREIGN KEY `OutletChildUser_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `outletuserrole` DROP FOREIGN KEY `OutletUserRole_OutletChildUserId_fkey`;

-- DropForeignKey
ALTER TABLE `outletuserrole` DROP FOREIGN KEY `OutletUserRole_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `patient` DROP FOREIGN KEY `Patient_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_outletId_fkey`;

-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_superAdminId_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermission` DROP FOREIGN KEY `RolePermission_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermission` DROP FOREIGN KEY `RolePermission_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `superadminuserrole` DROP FOREIGN KEY `SuperAdminUserRole_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `superadminuserrole` DROP FOREIGN KEY `SuperAdminUserRole_superAdminId_fkey`;

-- DropIndex
DROP INDEX `Doctor_outletId_fkey` ON `doctor`;

-- DropIndex
DROP INDEX `DoctorDocument_doctorId_fkey` ON `doctordocument`;

-- DropIndex
DROP INDEX `DoctorSchedule_doctorId_fkey` ON `doctorschedule`;

-- DropIndex
DROP INDEX `DoctorSpecialization_doctorId_fkey` ON `doctorspecialization`;

-- DropIndex
DROP INDEX `OutletChildUser_outletId_fkey` ON `outletchilduser`;

-- DropIndex
DROP INDEX `OutletUserRole_roleId_fkey` ON `outletuserrole`;

-- DropIndex
DROP INDEX `Patient_outletId_fkey` ON `patient`;

-- DropIndex
DROP INDEX `Role_outletId_fkey` ON `role`;

-- DropIndex
DROP INDEX `Role_superAdminId_fkey` ON `role`;

-- DropIndex
DROP INDEX `RolePermission_permissionId_fkey` ON `rolepermission`;

-- DropIndex
DROP INDEX `SuperAdminUserRole_roleId_fkey` ON `superadminuserrole`;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorSpecialization` ADD CONSTRAINT `DoctorSpecialization_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorDocument` ADD CONSTRAINT `DoctorDocument_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorSchedule` ADD CONSTRAINT `DoctorSchedule_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletChildUser` ADD CONSTRAINT `OutletChildUser_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_outletId_fkey` FOREIGN KEY (`outletId`) REFERENCES `outlet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_superAdminId_fkey` FOREIGN KEY (`superAdminId`) REFERENCES `SuperAdmins`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUserRole` ADD CONSTRAINT `OutletUserRole_OutletChildUserId_fkey` FOREIGN KEY (`OutletChildUserId`) REFERENCES `OutletChildUser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OutletUserRole` ADD CONSTRAINT `OutletUserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminUserRole` ADD CONSTRAINT `SuperAdminUserRole_superAdminId_fkey` FOREIGN KEY (`superAdminId`) REFERENCES `SuperAdmins`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuperAdminUserRole` ADD CONSTRAINT `SuperAdminUserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
