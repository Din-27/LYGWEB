/*
SQLyog Enterprise v12.5.1 (32 bit)
MySQL - 10.4.24-MariaDB : Database - LYGWEB
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`LYGWEB` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `LYGWEB`;

/*Table structure for table `lygdestination` */

DROP TABLE IF EXISTS `lygdestination`;

CREATE TABLE `lygdestination` (
  `DestinationCode` varchar(20) NOT NULL,
  `DestinationName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`DestinationCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `lygdestination` */

insert  into `lygdestination`(`DestinationCode`,`DestinationName`) values 
('HK','Hongkong'),
('SG','Singapore');

/*Table structure for table `lygsewingoutput` */

DROP TABLE IF EXISTS `lygsewingoutput`;

CREATE TABLE `lygsewingoutput` (
  `TrnDate` date NOT NULL,
  `OperatorName` varchar(50) NOT NULL,
  `StyleCode` varchar(50) NOT NULL,
  `SizeName` varchar(10) NOT NULL,
  `DestinationCode` varchar(20) NOT NULL,
  `QtyOutput` int(11) DEFAULT NULL,
  PRIMARY KEY (`TrnDate`,`OperatorName`,`StyleCode`,`SizeName`,`DestinationCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `lygsewingoutput` */

insert  into `lygsewingoutput`(`TrnDate`,`OperatorName`,`StyleCode`,`SizeName`,`DestinationCode`,`QtyOutput`) values 
('2024-01-02','Afizza Shabira','BOSSE FANCY OH HOOD S.9','L','HK',9),
('2024-01-02','Afizza Shabira','BOSSE FANCY OH HOOD S.9','L','SG',1),
('2024-01-02','Afizza Shabira','BOSSE FANCY OH HOOD S.9','S','HK',12),
('2024-01-02','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XL','HK',25),
('2024-01-02','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XL','SG',3),
('2024-01-02','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XS','HK',12),
('2024-01-02','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XS','SG',2),
('2024-01-02','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XXL','HK',7),
('2024-01-02','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','152','HK',6),
('2024-01-02','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','92','HK',13),
('2024-01-02','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','98','HK',12),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','L','HK',30),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','S','HK',25),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','S','SG',5),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','XL','HK',17),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','XL','SG',12),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','XS','HK',15),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','XS','SG',3),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','XXL','HK',11),
('2024-01-02','M. Zaidan','BOSSE FANCY OH HOOD S.9','XXL','SG',1),
('2024-01-02','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','152','HK',10),
('2024-01-02','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','152','SG',9),
('2024-01-02','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','92','HK',21),
('2024-01-02','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','92','SG',19),
('2024-01-02','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','98','HK',20),
('2024-01-02','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','98','SG',18),
('2024-01-03','Afizza Shabira','BOSSE FANCY OH HOOD S.9','L','HK',31),
('2024-01-03','Afizza Shabira','BOSSE FANCY OH HOOD S.9','L','SG',6),
('2024-01-03','Afizza Shabira','BOSSE FANCY OH HOOD S.9','S','HK',36),
('2024-01-03','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XL','HK',26),
('2024-01-03','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XL','SG',11),
('2024-01-03','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XXL','HK',13),
('2024-01-03','Afizza Shabira','BOSSE FANCY OH HOOD S.9','XXL','SG',13),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','104','SG',19),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','110','SG',7),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','116','SG',6),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','122','SG',5),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','134','SG',12),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','140','SG',18),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','146','SG',19),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','152','SG',21),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','92','SG',21),
('2024-01-03','Afizza Shabira','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','98','SG',11),
('2024-01-03','M. Zaidan','BOSSE FANCY OH HOOD S.9','L','HK',39),
('2024-01-03','M. Zaidan','BOSSE FANCY OH HOOD S.9','S','HK',32),
('2024-01-03','M. Zaidan','BOSSE FANCY OH HOOD S.9','S','SG',9),
('2024-01-03','M. Zaidan','BOSSE FANCY OH HOOD S.9','XL','HK',33),
('2024-01-03','M. Zaidan','BOSSE FANCY OH HOOD S.9','XL','SG',30),
('2024-01-03','M. Zaidan','BOSSE FANCY OH HOOD S.9','XXL','HK',11),
('2024-01-03','M. Zaidan','BOSSE FANCY OH HOOD S.9','XXL','SG',12),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','104','HK',21),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','110','HK',14),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','116','HK',17),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','122','HK',23),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','128','HK',25),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','134','HK',27),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','140','HK',29),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','146','HK',14),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','152','HK',12),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','92','HK',11),
('2024-01-03','M. Zaidan','FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9','98','HK',12);

/*Table structure for table `lygstylesize` */

DROP TABLE IF EXISTS `lygstylesize`;

CREATE TABLE `lygstylesize` (
  `StyleCode` varchar(50) NOT NULL,
  `SizeSort` int(11) NOT NULL,
  `SizeName` varchar(10) NOT NULL,
  PRIMARY KEY (`StyleCode`,`SizeSort`,`SizeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `lygstylesize` */

insert  into `lygstylesize`(`StyleCode`,`SizeSort`,`SizeName`) values 
('BOSSE FANCY OH HOOD S.9',1,'XS'),
('BOSSE FANCY OH HOOD S.9',2,'S'),
('BOSSE FANCY OH HOOD S.9',3,'M'),
('BOSSE FANCY OH HOOD S.9',4,'L'),
('BOSSE FANCY OH HOOD S.9',5,'XL'),
('BOSSE FANCY OH HOOD S.9',6,'XXL'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',1,'92'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',2,'98'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',3,'104'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',4,'110'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',5,'116'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',6,'122'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',7,'128'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',8,'134'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',9,'140'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',10,'146'),
('FOOTBALL SETS EUROCUP CW N (ARGENTINA) S.9',11,'152');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
