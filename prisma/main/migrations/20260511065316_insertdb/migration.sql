/*
  Warnings:

  - You are about to drop the column `subtitle` on the `homebanner` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `homebanner` table. All the data in the column will be lost.
  - Added the required column `title1` to the `HomeBanner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `homebanner` DROP COLUMN `subtitle`,
    DROP COLUMN `title`,
    ADD COLUMN `title1` VARCHAR(191) NOT NULL,
    ADD COLUMN `title2` VARCHAR(191) NULL;
