-- CreateTable
CREATE TABLE `interTask` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL DEFAULT '',
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `url` VARCHAR(191) NOT NULL,
    `interTime` TIME(0) NOT NULL,
    `method` INTEGER NOT NULL DEFAULT 0,
    `params` VARCHAR(191) NOT NULL DEFAULT '{}',
    `cookie` VARCHAR(3000) NOT NULL,
    `callback` VARCHAR(191) NOT NULL DEFAULT '',
    `createTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isDelete` INTEGER NOT NULL DEFAULT 0,
    `taskType` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
