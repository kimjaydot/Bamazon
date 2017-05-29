# Bamazon
Creating an Amazon-like storefront

## Instructions
[Bamazon](https://kimjaydot.github.io/Bamazon)

![Database Image](https://raw.githubusercontent.com/kimjaydot/Bamazon/master/images/database.png)

1. Run database code
```
CREATE DATABASE Bamazon;
SHOW DATABASES; 
USE Bamazon;

CREATE TABLE products (
item_id INT NOT NULL,
product_name VARCHAR(255) DEFAULT NULL,
department_name VARCHAR(255) DEFAULT NULL,
price INT DEFAULT NULL, 
stock_quantity INT DEFAULT NULL); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (1, "Cheetah", "Purses", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (2, "Pole", "Shirts", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (3, "Guess", "Jeans", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (4, "True Religion", "Shorts", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (5, "LuLu", "Dresses", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (6, "Urban Decay", "Makeup", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (7, "Forver 21", "Swimsuit", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (8, "Bebe", "Sports", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (9, "Nike", "Shoes", 2, 3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity ) VALUES (9, "Hoops", "Accessories", 2, 3);


SELECT * FROM products;

```
