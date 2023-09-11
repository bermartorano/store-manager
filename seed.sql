CREATE DATABASE IF NOT EXISTS StoreManager;

USE `StoreManager`;

-- Crie a tabela 'products' se ela não existir

CREATE TABLE
    IF NOT EXISTS `products` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `name` VARCHAR(255) NOT NULL
    );

-- Crie a tabela 'sales' se ela não existir

CREATE TABLE
    IF NOT EXISTS `sales` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `date` DATETIME NOT NULL
    );

-- Crie a tabela 'sales_products' se ela não existir

CREATE TABLE
    IF NOT EXISTS `sales_products` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `sale_id` INT NOT NULL,
        `product_id` INT NOT NULL,
        `quantity` INT NOT NULL,
        FOREIGN KEY (`sale_id`) REFERENCES `sales`(`id`),
        FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
    );

-- Resto do seu script de seed

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `products`;

TRUNCATE TABLE `sales`;

TRUNCATE TABLE `sales_products`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `products` (`name`)
VALUES ("Martelo de Thor"), ("Traje de encolhimento"), ("Escudo do Capitão América");

INSERT INTO `sales` (`date`) VALUES (NOW()), (NOW());

INSERT INTO
    `sales_products` (
        `sale_id`,
        `product_id`,
        `quantity`
    )
VALUES (1, 1, 5), (1, 2, 10), (2, 3, 15);