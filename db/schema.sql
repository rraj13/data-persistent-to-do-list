DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todos 
(
    id INT AUTO_INCREMENT,
    todo_item VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);


SELECT * FROM todos;