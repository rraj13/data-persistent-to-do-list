DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todos 
(
    id INT AUTO_INCREMENT,
    todo_item VARCHAR(100) NOT NULL,
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO todos (todo_item, completed) VALUES ("Learn sequelize", FALSE);
INSERT INTO todos (todo_item, completed) VALUES ("Learn frontend", FALSE);
INSERT INTO todos (todo_item, completed) VALUES ("Learn react",  FALSE);


SELECT * FROM todos;