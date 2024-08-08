/*Table structure for table `lygdestination` */

DROP TABLE IF EXISTS `lygdestination`;

CREATE TABLE `lygdestination` (
  `DestinationCode` varchar(20) NOT NULL,
  `DestinationName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`DestinationCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

/*Table structure for table `lygstylesize` */

DROP TABLE IF EXISTS `lygstylesize`;

CREATE TABLE `lygstylesize` (
  `StyleCode` varchar(50) NOT NULL,
  `SizeSort` int(11) NOT NULL,
  `SizeName` varchar(10) NOT NULL,
  PRIMARY KEY (`StyleCode`,`SizeSort`,`SizeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
