CREATE TABLE `machi`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `machi` VARCHAR(255) NOT NULL,
    `reading` VARCHAR(255) NOT NULL,
    `romaji` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`machi`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;