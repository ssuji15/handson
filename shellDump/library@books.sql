-- MySQLShell dump 2.0.1  Distrib Ver 8.0.29 for Win64 on x86_64 - for MySQL 8.0.29 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: library    Table: books
-- ------------------------------------------------------
-- Server version	8.0.29

--
-- Table structure for table `books`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE IF NOT EXISTS `books` (
  `name` varchar(25) NOT NULL,
  `summary` text NOT NULL,
  `image` mediumblob,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
