CREATE DATABASE  IF NOT EXISTS `cims_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cims_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: cims_db
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access`
--

DROP TABLE IF EXISTS `access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `access` (
  `acc_id` int NOT NULL AUTO_INCREMENT,
  `access_type` varchar(45) NOT NULL,
  PRIMARY KEY (`acc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access`
--

LOCK TABLES `access` WRITE;
/*!40000 ALTER TABLE `access` DISABLE KEYS */;
INSERT INTO `access` VALUES (1,'Admin'),(2,'Director'),(3,'IP Manager'),(4,'Project Manager'),(5,'Site Operator');
/*!40000 ALTER TABLE `access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `cat_id` int NOT NULL,
  `cat_name` varchar(45) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Cement'),(2,'Steel'),(3,'Bitumen'),(4,'Aggregates'),(5,'Blocks'),(6,'Bricks'),(7,'Stone'),(8,'Wood'),(9,'Binding Wires');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `loc_id` int NOT NULL,
  `loc_name` varchar(100) NOT NULL,
  `loc_add` varchar(255) NOT NULL,
  `loc_city` varchar(45) NOT NULL,
  PRIMARY KEY (`loc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Kothrud','Paud Road','Pune'),(2,'Anand Nagar','Raisen road','Bhopal'),(3,'Powai','JVLR','Mumbai'),(4,'Bhawarkua','Ujjain road','Indore'),(5,'Rankala','Gangavesh road','Kolhapur');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `m_id` int NOT NULL AUTO_INCREMENT,
  `m_name` varchar(100) NOT NULL,
  `cat_id` int NOT NULL,
  `unit_id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`m_id`),
  KEY `cat_id_idx` (`cat_id`),
  KEY `unit_id_idx` (`unit_id`),
  CONSTRAINT `cat_id` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`),
  CONSTRAINT `unit_id` FOREIGN KEY (`unit_id`) REFERENCES `unit` (`unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'Red Brick',6,7,'red soil brick'),(2,'Copper Wire',9,2,'1mm copper wire'),(3,'Sand',4,11,'River Sand'),(4,'Plywood Sheet',8,7,'10x10ft'),(5,'Steel Rod',2,1,'5mm steel rod'),(6,'Black Brick',6,7,'black soil brick'),(9,'Black Brick',6,7,'Black soil brick');
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_project`
--

DROP TABLE IF EXISTS `material_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material_project` (
  `mp_id` int NOT NULL AUTO_INCREMENT,
  `mat_id` int DEFAULT NULL,
  `pj_id` int NOT NULL,
  `quantity` float DEFAULT NULL,
  PRIMARY KEY (`mp_id`),
  KEY `m_id_idx` (`mat_id`),
  KEY `pj_id_idx` (`pj_id`),
  CONSTRAINT `mat_id` FOREIGN KEY (`mat_id`) REFERENCES `material` (`m_id`),
  CONSTRAINT `pj_id` FOREIGN KEY (`pj_id`) REFERENCES `project` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_project`
--

LOCK TABLES `material_project` WRITE;
/*!40000 ALTER TABLE `material_project` DISABLE KEYS */;
INSERT INTO `material_project` VALUES (1,1,1,10000),(2,2,1,500),(3,3,2,150),(4,1,2,5000),(5,4,3,100);
/*!40000 ALTER TABLE `material_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_request`
--

DROP TABLE IF EXISTS `material_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material_request` (
  `req_id` int NOT NULL AUTO_INCREMENT,
  `m_id` int NOT NULL,
  `req_qty` float NOT NULL,
  `req_by` int NOT NULL,
  `req_date` date NOT NULL,
  `project_id` int NOT NULL,
  `status_id` int DEFAULT NULL,
  PRIMARY KEY (`req_id`),
  KEY `m_id_idx` (`m_id`),
  KEY `req_by_idx` (`req_by`),
  KEY `project_id_idx` (`project_id`),
  KEY `status_id_idx` (`status_id`),
  CONSTRAINT `m_id` FOREIGN KEY (`m_id`) REFERENCES `material` (`m_id`),
  CONSTRAINT `project_id` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`),
  CONSTRAINT `req_by` FOREIGN KEY (`req_by`) REFERENCES `user` (`user_id`),
  CONSTRAINT `status_id` FOREIGN KEY (`status_id`) REFERENCES `status` (`idstatus`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_request`
--

LOCK TABLES `material_request` WRITE;
/*!40000 ALTER TABLE `material_request` DISABLE KEYS */;
INSERT INTO `material_request` VALUES (1,1,5000,22,'2024-10-11',2,1),(2,3,120,22,'2024-10-11',2,2),(3,5,50,21,'2024-12-12',1,3);
/*!40000 ALTER TABLE `material_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(100) NOT NULL,
  `loc_id` int NOT NULL,
  PRIMARY KEY (`project_id`),
  KEY `loc_id_idx` (`loc_id`),
  CONSTRAINT `loc_id` FOREIGN KEY (`loc_id`) REFERENCES `location` (`loc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Paud road',1),(2,'JVLR Highway',3),(3,'BRTS',2);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_allocation`
--

DROP TABLE IF EXISTS `project_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_allocation` (
  `pa_id` int NOT NULL AUTO_INCREMENT,
  `p_id` int NOT NULL,
  `pm_id` int DEFAULT NULL,
  `so_id` int DEFAULT NULL,
  PRIMARY KEY (`pa_id`),
  KEY `pm_id_idx` (`pm_id`),
  KEY `so_id_idx` (`so_id`),
  KEY `p_id_idx` (`p_id`),
  CONSTRAINT `p_id` FOREIGN KEY (`p_id`) REFERENCES `project` (`project_id`),
  CONSTRAINT `pm_id` FOREIGN KEY (`pm_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `so_id` FOREIGN KEY (`so_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_allocation`
--

LOCK TABLES `project_allocation` WRITE;
/*!40000 ALTER TABLE `project_allocation` DISABLE KEYS */;
INSERT INTO `project_allocation` VALUES (1,1,16,21),(2,2,17,22);
/*!40000 ALTER TABLE `project_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `rep_id` int NOT NULL AUTO_INCREMENT,
  `proj_id` int NOT NULL,
  `gen_by` int NOT NULL,
  `rep_date` date NOT NULL,
  PRIMARY KEY (`rep_id`),
  KEY `project_id_idx` (`proj_id`),
  KEY `gen_by_idx` (`gen_by`),
  CONSTRAINT `gen_by` FOREIGN KEY (`gen_by`) REFERENCES `user` (`user_id`),
  CONSTRAINT `proj_id` FOREIGN KEY (`proj_id`) REFERENCES `project` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
INSERT INTO `report` VALUES (1,1,6,'2024-10-12'),(2,2,6,'2024-12-15');
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `idstatus` int NOT NULL,
  `status_name` text NOT NULL,
  PRIMARY KEY (`idstatus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Requested by PM to SO'),(2,'Approve by SO to PM'),(3,'Requested by SO to IP Manager'),(4,'Approve by IP Manager to SO'),(5,'Reject by IP Manager to SO'),(6,'Hold by IP Manager'),(7,'Received by SO');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `unit_id` int NOT NULL AUTO_INCREMENT,
  `unit_name` varchar(45) NOT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'tons'),(2,'Kg'),(3,'gram'),(4,'Bag'),(5,'Cu. m.'),(6,'Sq. m.'),(7,'Nos.'),(8,'Quintall'),(9,'Ltr'),(10,'ml'),(11,'Brass');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `mob_no` varchar(10) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(150) NOT NULL,
  `acc_id` int NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `mob_no_UNIQUE` (`mob_no`),
  KEY `acc_id_idx` (`acc_id`),
  CONSTRAINT `acc_id` FOREIGN KEY (`acc_id`) REFERENCES `access` (`acc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'12345678','aditya','patil','878989898','aditya@gmail.com','Jaipur',1),(2,'12345678','Anish','Kulkarni','9123456789','anish@gmail.com','Satara',1),(3,'12345678','Amol','Tripathi','8765437655','amol@gmail.com','Nashik',1),(4,'12345678','Akshay','Kumar','8765432109','akshay@gmail.com','Pune',1),(5,'12345678','Amey','Patil','7654321098','amey@gmail.com','Mumbai',1),(6,'12345678','Darshan','Kumar','6543210987','darshan@gmail.com','Pune',2),(7,'12345678','Dhruv','Deshmukh','5432109876','ritesh@gmail.','Kolhapur',2),(8,'12345678','Deepak','Singh','43210987','deepak@gmail.com','Nagpur',2),(9,'12345678','Dilip','Kumar','3210987','dilip@gmail.com','Nashik',2),(10,'12345678','Dipesh','Bhoir','32109876','dipesh@gmail.com','Pune',2),(11,'12345678','Ishaan','Pande','87654321','ishaan@gmail.com','Kolhapur',3),(12,'12345678','Ian','Singh','99220876','ian@gmail.com','Nashik',3),(13,'12345678','Ivan','Kumar','98765432','ivan@gmail.com','Nagpur',3),(14,'12345678','Issac','Newton','98761234','issac@gmail.com','Pune',3),(15,'12345678','Imran','Patil','88665678','imran@gmail.com','Mumbai',3),(16,'12345678','Prerak','Kulkarni','77445678','prerak@gmail.com','Nashik',4),(17,'12345678','Pankaj','Patil','32109887','pankaj@gmail.com','Nagpur',4),(18,'12345678','Pranav','Pande','66996543','pranav@gmail.com','Pune',4),(19,'12345678','Pratik','Kulkarni','77889034','pratik@gmail.com','Mumbai',4),(20,'12345678','Parth','Kumar','908766334','parth@gmail.com','Kolhapur',4),(21,'12345678','Sangram','Singh','88669078','sangram@gmail.com','Mumbai',5),(22,'12345678','Satish','Kumar','32109543','satish@gmail.com','Kolhapur',5),(23,'12345678','Shubham','Pande','98692324','shubham@gmail.com','Nagpur',5),(24,'12345678','Sachin','Kulkarni','82865445','sachin@gmail.com','Nashik',5),(25,'12345678','Sandeep','Singh','9773256','sandeep@gmail.com','Pune',5),(27,'12345678','Aksar','Patil','9522969004','aksar@gmail.com','Pune',2),(29,'12345678','Amit','Narayan','9876543218','amit@gmail.com','Jaipur',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-31 10:42:09
