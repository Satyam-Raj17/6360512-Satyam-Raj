
CREATE DATABASE SmallProductDB;
USE SmallProductDB;


CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);
INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop ', 'Electronics', 1200.00),
(2, 'Smartphone ', 'Electronics', 800.00),
(3, 'Tablet ', 'Electronics', 800.00),
(4, 'Chair', 'Furniture', 200.00),
(5, 'Desk', 'Furniture', 350.00),
(6, 'Sofa', 'Furniture', 500.00);

SELECT * FROM Products;

SELECT 
    ProductID,
    ProductName,
    Category,
    Price,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS rank_num
FROM Products;

SELECT * FROM (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Products
) AS Ranked
WHERE RowNum <= 3;

SELECT 
    ProductID,
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS dense_rank_num
FROM Products;
SELECT *
FROM (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS dense_rank_num
    FROM Products
) AS ranked
WHERE dense_rank_num <= 3
ORDER BY Category, dense_rank_num;
