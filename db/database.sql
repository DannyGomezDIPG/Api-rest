CREATE DATABASE icecream;

USE icecream;

CREATE TABLE flavors(
    id INT(11)NOT NULL AUTO_INCREMENT,
    flavor VARCHAR (45) DEFAULT NULL,
    price DOUBLE DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO flavors VALUES 
(1, 'Chocolate', 2.99),
(2, 'Blue Berry', 3.99),
(3, 'Vainilla', 2.99),
(4, 'Lemon', 2.99);