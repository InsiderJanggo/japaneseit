CREATE TABLE `kanji`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `kanji` VARCHAR(255) NOT NULL,
    `reading` VARCHAR(255) NOT NULL,
    `onyomi` VARCHAR(255) NOT NULL,
    `kunyomi` VARCHAR(255) NOT NULL,
    `meaning` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;