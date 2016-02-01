# ************************************************************
# Sequel Pro SQL dump
# Версия 4500
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Адрес: 127.0.0.1 (MySQL 5.6.26)
# Схема: laravel
# Время создания: 2016-01-31 23:07:20 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Дамп таблицы comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `video_id` int(11) unsigned NOT NULL,
  `body` text,
  `date_insert` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comment_video` (`video_id`),
  CONSTRAINT `fk_comment_video` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;

INSERT INTO `comment` (`id`, `video_id`, `body`, `date_insert`)
VALUES
	(1,1,'The greatest movie ever!!!','2016-01-20 00:00:00'),
	(2,1,'Like it, but can be better…','2016-01-21 00:00:00'),
	(3,1,'One of my favorites!!!','2016-01-22 00:00:00'),
	(4,2,'O!! The greatest movie ever!!!','2016-01-22 00:00:00'),
	(15,4,'sdgser','2016-01-31 20:14:45'),
	(16,4,'QQQQQQQQQQ','2016-01-31 20:24:50');

/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;


# Дамп таблицы rating
# ------------------------------------------------------------

DROP TABLE IF EXISTS `rating`;

CREATE TABLE `rating` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `video_id` int(11) unsigned NOT NULL,
  `rating` int(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_rating_video` (`video_id`),
  CONSTRAINT `fk_rating_video` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;

INSERT INTO `rating` (`id`, `video_id`, `rating`)
VALUES
	(1,1,1),
	(2,2,2),
	(3,3,3),
	(4,4,4),
	(5,5,5),
	(6,1,3),
	(7,1,2),
	(8,1,1),
	(9,1,2),
	(10,1,4),
	(11,1,3),
	(12,1,4),
	(13,1,1),
	(14,1,4),
	(15,1,5),
	(16,1,2),
	(17,1,1),
	(18,1,5),
	(19,1,5),
	(20,1,5),
	(21,1,5),
	(22,1,5),
	(23,1,5),
	(24,1,5),
	(25,1,5),
	(26,1,5),
	(27,1,5),
	(28,1,5),
	(29,1,5),
	(30,1,5),
	(31,1,1),
	(32,1,5),
	(33,1,5),
	(34,1,5),
	(35,1,5),
	(36,1,5),
	(37,1,5),
	(38,1,5),
	(39,1,5),
	(40,1,5),
	(41,1,1),
	(42,1,1),
	(43,1,1),
	(44,1,1),
	(45,1,1),
	(46,1,1),
	(47,1,1),
	(48,1,1),
	(49,1,1),
	(50,1,2),
	(51,1,1),
	(52,1,1),
	(53,1,2),
	(54,1,2),
	(55,1,1),
	(56,1,1),
	(57,1,2),
	(58,1,2),
	(59,1,2),
	(60,1,2),
	(61,1,2),
	(62,1,2),
	(63,1,2),
	(64,1,2),
	(65,1,1),
	(66,1,1),
	(67,1,1),
	(68,1,1),
	(69,1,1),
	(70,1,4),
	(71,1,5),
	(72,1,1),
	(73,1,1),
	(74,1,1),
	(75,1,1),
	(76,1,1),
	(77,1,1),
	(78,1,2),
	(79,1,4),
	(80,1,5),
	(81,1,5);

/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;


# Дамп таблицы video
# ------------------------------------------------------------

DROP TABLE IF EXISTS `video`;

CREATE TABLE `video` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `preview` text NOT NULL,
  `url` varchar(255) NOT NULL DEFAULT '',
  `description` text,
  `type` varchar(255) NOT NULL DEFAULT '',
  `duration` varchar(255) NOT NULL DEFAULT '',
  `date_insert` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;

INSERT INTO `video` (`id`, `title`, `preview`, `url`, `description`, `type`, `duration`, `date_insert`)
VALUES
	(1,'Kung Fu Panda 3','http://st-im.kinopoisk.ru/im/kadr/2/6/0/kinopoisk.ru-Kung-Fu-Panda-3-2602129.jpg','http://kp.cdn.yandex.net/692865/kinopoisk.ru-Kung-Fu-Panda-3-296586.mp4','A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.','Movie','1h 35m','2016-01-18 00:00:00'),
	(2,'Mune, le gardien de la lune','http://st-im.kinopoisk.ru/im/kadr/2/5/7/kinopoisk.ru-Mune_2C-le-gardien-de-la-lune-2576688.jpg','http://kp.cdn.yandex.net/842910/kinopoisk.ru-Mune_-le-gardien-de-la-lune-262303.mp4','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a nulla vitae ante condimentum commodo non gravida est. Vestibulum vestibulum nisl odio, id rutrum ex porta consectetur. ','Movie','35m','2016-01-20 00:00:00'),
	(3,'Cars 2','http://st-im.kinopoisk.ru/im/kadr/1/5/5/kinopoisk.ru-Cars-2-1555900.jpg','http://kp.cdn.yandex.net/409013/kinopoisk.ru-Cars-2-64626.mp4',' Etiam ut purus accumsan, suscipit velit nec, ultrices leo. Aliquam ut dui tempus, vestibulum orci gravida, condimentum massa. Etiam dui nunc, eleifend eget semper a, laoreet vitae ante. Etiam mollis lacus aliquet, auctor mauris vel, consequat sem. ','Movie','45m','2016-01-19 00:00:00'),
	(4,'Minions','http://st-im.kinopoisk.ru/im/kadr/2/6/0/kinopoisk.ru-Minions-2602158.jpg','http://kp.cdn.yandex.net/694051/kinopoisk.ru-Minions-262012.mp4','Donec malesuada cursus elit et volutpat. Pellentesque quam augue, semper eu augue eget, vestibulum porta erat. Vivamus in sapien at purus posuere ornare a ac lectus. Integer interdum elit ut urna dictum aliquam.','Movie','20m','2016-01-21 00:00:00');

/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
