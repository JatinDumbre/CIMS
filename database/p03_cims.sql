CREATE DATABASE  IF NOT EXISTS `p03_cims` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `p03_cims`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: p03_cims
-- ------------------------------------------------------
-- Server version	8.0.40

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
  `loc_id` int NOT NULL AUTO_INCREMENT,
  `loc_name` varchar(100) NOT NULL,
  `loc_add` varchar(255) NOT NULL,
  `loc_city` varchar(45) NOT NULL,
  PRIMARY KEY (`loc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (2,'Raisen road','Anand Nagar','Bhopal'),(7,'BMCC Road','Deccan','Pune'),(16,'Ram Nagar','Ayodhya Road','Ayodhya'),(18,'Jejuri Road','Market yard','Jejuri'),(22,'Chandni Chowk','Lal Killa Road ','Delhi'),(23,'SB Road','Deccan','Pune'),(24,'Near Stadium','Jamtha Road','Nagpur');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'Red Brick',6,7,'red soil brick'),(2,'Copper Wire',9,2,'1mm copper wire'),(3,'Sand',4,11,'River Sand'),(4,'Plywood Sheet',8,7,'10x10ft'),(5,'Steel Rod',2,1,'5mm steel rod'),(6,'Black Brick',6,7,'black soil brick'),(10,'Nails',2,2,'High Quality Nails '),(11,'Tiles',1,6,'4x4 tiles'),(12,'Bamboo',8,1,'High quality dry bamboo');
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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_project`
--

LOCK TABLES `material_project` WRITE;
/*!40000 ALTER TABLE `material_project` DISABLE KEYS */;
INSERT INTO `material_project` VALUES (5,4,3,100),(9,2,3,125),(10,3,3,631),(11,5,3,541),(12,6,3,74),(28,2,19,29),(29,1,19,348),(30,6,19,876),(31,1,20,500),(32,6,20,1000),(33,2,20,400),(34,1,21,50),(35,2,15,898),(36,2,15,12345),(37,3,15,870),(38,5,15,290),(39,12,22,121),(40,11,22,230),(41,2,22,90),(42,4,22,80),(43,1,22,9000),(44,6,22,8000),(45,5,22,7);
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_request`
--

LOCK TABLES `material_request` WRITE;
/*!40000 ALTER TABLE `material_request` DISABLE KEYS */;
INSERT INTO `material_request` VALUES (6,6,180,18,'2025-02-06',3,3),(11,1,101,34,'2025-02-07',19,3),(12,2,90,34,'2025-02-07',19,2),(13,6,234,34,'2025-02-07',19,3),(14,4,907,18,'2025-02-07',3,1),(15,1,200,36,'2025-02-08',20,3),(16,6,200,36,'2025-02-08',20,4),(17,2,200,36,'2025-02-08',20,2),(18,1,50,40,'2025-02-08',21,2),(19,1,500,40,'2025-02-09',21,1),(20,1,1234,40,'2025-02-09',21,1),(21,1,980,40,'2025-02-10',21,3),(22,12,233,42,'2025-02-11',22,1),(23,11,1200,42,'2025-02-11',22,1),(24,1,8900,42,'2025-02-11',22,1),(25,5,2,42,'2025-02-11',22,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (3,'BRTS',2),(13,'Ram Jhula',16),(15,'Khandoba Temple',18),(19,'Lal Killa',22),(20,'Gokhale Sanchit',7),(21,'Temple',23),(22,'Samruddhi Mahamarg',24);
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_allocation`
--

LOCK TABLES `project_allocation` WRITE;
/*!40000 ALTER TABLE `project_allocation` DISABLE KEYS */;
INSERT INTO `project_allocation` VALUES (3,3,18,24),(8,13,17,22),(10,15,16,21),(14,19,34,35),(15,20,19,23),(16,21,40,41),(17,22,42,43);
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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
INSERT INTO `report` VALUES (8,3,11,'2025-02-05'),(15,20,11,'2025-02-08'),(16,19,11,'2025-02-08'),(17,21,11,'2025-02-10'),(18,21,11,'2025-02-10'),(19,21,11,'2025-02-10'),(20,21,11,'2025-02-10'),(21,20,11,'2025-02-10'),(22,19,11,'2025-02-10'),(23,21,11,'2025-02-10'),(24,3,11,'2025-02-10'),(25,13,11,'2025-02-10'),(26,15,11,'2025-02-10'),(27,19,11,'2025-02-10'),(28,20,11,'2025-02-10'),(29,19,11,'2025-02-10'),(30,15,11,'2025-02-10'),(31,15,11,'2025-02-11'),(32,13,11,'2025-02-11'),(33,20,11,'2025-02-11'),(34,19,11,'2025-02-11'),(35,22,11,'2025-02-11'),(36,22,11,'2025-02-11');
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
INSERT INTO `status` VALUES (1,'Requested'),(2,'Approved'),(3,'Rejected'),(4,'Hold');
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
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `acc_id_idx` (`acc_id`),
  CONSTRAINT `acc_id` FOREIGN KEY (`acc_id`) REFERENCES `access` (`acc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Admin@12','Aditya','Patil','9876543211','aditya@gmail.com','Jaipur',1,'Active'),(2,'Admin@12','Anish','Kulkarni','9123456789','anish@gmail.com','Satara',1,'Inactive'),(3,'Admin@12','Amol','Tripathi','8765437655','amol@gmail.com','Nashik',1,'Active'),(6,'Direc@12','Darshana','Kumari','7485964152','darshana@gmail.com','Jodhpur',2,'Inactive'),(7,'Direc@12','Dhruv','Deshmukh','5432109876','dhruv@gmail.com','Kolhapur',2,'Active'),(11,'Ipman@12','Ishaan','Pande','9345678901','ishaan@gmail.com','Kolhapur',3,'Active'),(12,'Ipman@12','Ian','Singh','8901234567','ian@gmail.com','Nashik',3,'Active'),(16,'Pmana@12','Prerak','Kulkarni','9632547852','prerak@gmail.com','Nashik',4,'Active'),(17,'Pmana@12','Pankaj','Patil','9191929292','pankaj@gmail.com','Nagpur',4,'Active'),(18,'Pmana@12','Pranav','Pande','7012345678','pranav@gmail.com','Pune',4,'Active'),(19,'Pmana@12','Pratik','Kulkarni','7550012345','pratik@gmail.com','Mumbai',4,'Active'),(20,'Pmana@12','Parth','Kumar','6262938383','parth@gmail.com','Kolhapur',4,'Active'),(21,'Siteop@1','Sangram','Singh','8439265748','sangram@gmail.com','Mumbai',5,'Active'),(22,'Siteop@1','Satish','Kumar','7070798765','satish@gmail.com','Kolhapur',5,'Active'),(23,'Siteop@1','Shubham','Pande','6363654321','shubham@gmail.com','Nagpur',5,'Active'),(24,'Siteop@1','Sachin','tendulkar','9876543874','sachin@gmail.com','Mumbai',5,'Active'),(34,'Pmana@12','Param','Singh','8764748789','param@gmail.com','Pune',4,'Active'),(35,'Siteop@1','Shivam','Dhaygude','8798764567','shivam@gmail.com','Nashik',5,'Active'),(36,'Pmana@12','Pritam','Das','7896546787','pritam@gmail.com','Mumbai',4,'Active'),(40,'Pmana@12','Pravin','Shinde','8792359454','pravin@gmail.com','Chennai',4,'Active'),(41,'Siteop@1','Saurabh','Patil','7943568659','saurabh@gmail.com','Ranchi',5,'Active'),(42,'Pmana@12','Piyush','Jadhav','9898779090','piyush@gmail.com','Chennai',4,'Active'),(43,'Siteop@1','Shrikant','Modi','7878909879','shrikant@gmail.com','Surat',5,'Active');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_archive`
--

DROP TABLE IF EXISTS `user_archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_archive` (
  `user_id` int NOT NULL DEFAULT '0',
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `mob_no` varchar(10) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(150) NOT NULL,
  `acc_id` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_archive`
--

LOCK TABLES `user_archive` WRITE;
/*!40000 ALTER TABLE `user_archive` DISABLE KEYS */;
INSERT INTO `user_archive` VALUES (2,'Anish','Kulkarni','9123456789','anish@gmail.com','Satara',1),(5,'Amey','Patil','7654321098','amey@gmail.com','Mumbai',1),(25,'Sandeep','Singh','9773256','sandeep@gmail.com','Pune',5),(29,'Amit','Narayan','9876543218','amit@gmail.com','Jaipur',2),(30,'Amitabh','Murti','9635874569','amitabh@gmail.com','Jodhpur',4),(31,'Abhi','Raj','7654321098','abhi@gmail.com','Mumbai',1),(33,'Amitrohi','das','9876543233','amitrohi@gmail.com','Jaipur',1),(38,'      ','    ','8753732832','punit@gmail.com','Mumbai',4);
/*!40000 ALTER TABLE `user_archive` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-11 15:18:07
