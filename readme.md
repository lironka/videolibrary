
# Requirements

* PHP 5.5+
* MySQL 5.0+
* NodeJS 0.12+ ?

## Setup Database

```
DROP DATABASE IF EXISTS `videolibrary`;
CREATE DATABASE IF NOT EXISTS `videolibrary` DEFAULT CHARACTER SET utf8;
GRANT ALL PRIVILEGES ON *.* TO user@localhost IDENTIFIED BY 'secret';
```

## Get copy of source code

```
cd /var/www
git clone https://github.com/lironka/videolibrary.git
```

## Setup Laravel application

Скопировать файл .env.example в .env

Поменять параметры соединения с базой данных

Пример настроек 

```
DB_HOST=localhost
DB_DATABASE=videolibrary
DB_USERNAME=user
DB_PASSWORD=secret
```

Загрузить дамп структуры и тестовый набор данных

Пример загрузки через консоль mysql

```
mysql -uuser -psecret videolibrary < database/schema.sql
mysql -uuser -psecret videolibrary < database/sample.sql
```

## Install composer

manual https://getcomposer.org/doc/00-intro.md

```php -r "readfile('https://getcomposer.org/installer');" | php```

## Install Node modules

```
npm install -g webpack
npm install -g bower
```

## Resolve dependencies

```
php composer.phar install
npm install
bower install
```
