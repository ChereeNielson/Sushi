DROP DATABASE IF EXISTS sushi_db;

CREATE DATABASE IF NOT EXISTS sushi_db;
USE sushi_db;

CREATE TABLE sushi (
    id INT AUTO_INCREMENT NOT NULL,
    sushi_roll VARCHAR(100) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);