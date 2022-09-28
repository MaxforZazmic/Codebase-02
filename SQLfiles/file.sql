CREATE TABLE products (
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY (id)u
);  -- int not null means even if you insert not complete data, it should have an ID, id column can't be null


INSERT INTO products
VALUES (1,"Shoes", 32); -- insert in every column

INSERT INTO products (id, name) -- insert new data to db
VALUES (2, "pen"); -- when you don't have data for every column you need to specify table and columns

select * from demo
where ID=10 --

UPDATE products
SET price = 21,
WHERE price =19; -- update edits specific value in an existing table.
-- if you don't declare WHERE, than price=21 will be set for every product.

ALTER TABLE products
ADD Brand varchar (25); -- adds Brand column to a products table

ALTER TABLE product
DROP COLUMN Brand; -- deletes column in a table p

DELETE FROM products
WHERE id=2; -- deletes entire row

DELETE FROM products -- if you run this command, everything  in table will be deleted.
