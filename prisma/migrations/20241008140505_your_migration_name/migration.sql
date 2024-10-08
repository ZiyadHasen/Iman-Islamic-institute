/*
  Warnings:

  - You are about to drop the `volunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `volunteer`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `status` ENUM('SUCCESSFULLY_NOTICED', 'NOT_ANSWERED', 'NOT_CALLED', 'SUCCESSFULLY_SUBMITTED') NOT NULL DEFAULT 'NOT_CALLED',
    `description` VARCHAR(191) NULL,
    `lastCalled` DATETIME(3) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
