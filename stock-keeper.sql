-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 14, 2024 at 01:43 PM
-- Server version: 8.0.36-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stock-keeper`
--

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `product_type` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `code`, `product_type`, `description`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Teclado para Notebook Lenovo ThinkPad', 'TEC65892168', 'Teclado', 'Teclado para Notebook Lenovo ThinkPad E470 - Portugues BR, preto', 161.4, '2024-04-14 13:38:43', '2024-04-14 13:38:43');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('1-20240414151346-create-user.js'),
('2-20240414152017-create-product.js'),
('20240414151346-create-user.js'),
('3-20240414151746-create-stock.js');

-- --------------------------------------------------------

--
-- Table structure for table `Stocks`
--

CREATE TABLE `Stocks` (
  `id` int NOT NULL,
  `fk_inputUser` int DEFAULT NULL,
  `fk_outputUser` int DEFAULT NULL,
  `qtd` int DEFAULT NULL,
  `price_total` float DEFAULT NULL,
  `fk_code` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Stocks`
--

INSERT INTO `Stocks` (`id`, `fk_inputUser`, `fk_outputUser`, `qtd`, `price_total`, `fk_code`, `createdAt`, `updatedAt`) VALUES
(1, 1, NULL, 1, 161.4, 'TEC65892168', '2024-04-14 13:41:32', '2024-04-14 13:41:32');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Matheus', '123456789', '2024-04-14 13:37:08', '2024-04-14 13:37:08'),
(2, 'Cleiton', '987654321', '2024-04-14 13:37:08', '2024-04-14 13:37:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_code` (`code`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Stocks`
--
ALTER TABLE `Stocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_inputUser` (`fk_inputUser`),
  ADD KEY `fk_outputUser` (`fk_outputUser`),
  ADD KEY `fk_code` (`fk_code`) USING BTREE;

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Stocks`
--
ALTER TABLE `Stocks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Stocks`
--
ALTER TABLE `Stocks`
  ADD CONSTRAINT `Stocks_ibfk_1` FOREIGN KEY (`fk_inputUser`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Stocks_ibfk_2` FOREIGN KEY (`fk_outputUser`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Stocks_ibfk_5` FOREIGN KEY (`fk_code`) REFERENCES `Products` (`code`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
