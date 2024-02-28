**SQL Notes: Beginner to Advanced Level**

**1. Introduction to SQL:**
- SQL (Structured Query Language) is a standard language for managing relational databases.
- It allows users to define, manipulate, and query data stored in a relational database management system (RDBMS).

**2. Basic SQL Commands:**
- **SELECT:** Retrieves data from one or more tables.
- **INSERT:** Adds new rows of data into a table.
- **UPDATE:** Modifies existing data in a table.
- **DELETE:** Removes rows from a table.

**3. Creating Tables:**
- Use the `CREATE TABLE` statement to create tables.
- Define column names and their data types.
- Specify constraints like primary keys, foreign keys, etc.

**Example:**
```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);
```

**4. Data Types:**
- SQL supports various data types such as INT, VARCHAR, DATE, FLOAT, etc.
- Choose appropriate data types based on the nature of the data being stored.

**5. Constraints:**
- **Primary Key:** Uniquely identifies each record in a table.
- **Foreign Key:** Establishes a relationship between two tables.
- **Unique:** Ensures that all values in a column are unique.
- **Not Null:** Ensures that a column cannot have NULL values.

**Example:**
```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
```

**6. Retrieving Data with SELECT:**
- Use the `SELECT` statement to retrieve data from tables.
- Specify columns to be retrieved and conditions using the `WHERE` clause.

**Example:**
```sql
SELECT * FROM students WHERE age > 18;
```

**7. Filtering Data:**
- Use operators like `=`, `>`, `<`, `LIKE` for filtering data.
- Combine conditions using `AND`, `OR`.

**Example:**
```sql
SELECT * FROM students WHERE age > 18 AND name LIKE 'A%';
```

**8. Sorting Data:**
- Use the `ORDER BY` clause to sort retrieved data.
- Specify column names and sorting order (`ASC` for ascending, `DESC` for descending).

**Example:**
```sql
SELECT * FROM students ORDER BY age DESC;
```

**9. Aggregate Functions:**
- Aggregate functions perform calculations on a set of values and return a single value.
- Common aggregate functions include `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.

**Example:**
```sql
SELECT COUNT(*) FROM students;
SELECT AVG(age) FROM students;
```

**10. Grouping Data:**
- Use the `GROUP BY` clause to group rows that have the same values into summary rows.
- Combine with aggregate functions to perform calculations on each group.

**Example:**
```sql
SELECT department, AVG(salary) FROM employees GROUP BY department;
```

**11. Joining Tables:**
- Use `JOIN` to combine rows from two or more tables based on a related column.
- Common types of joins include `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`.

**Example:**
```sql
SELECT * FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;
```

**12. Subqueries:**
- A subquery is a query nested within another query.
- Use subqueries to perform operations on the result of another query.

**Example:**
```sql
SELECT * FROM students WHERE age > (SELECT AVG(age) FROM students);
```

**13. Views:**
- A view is a virtual table based on the result of a SELECT query.
- Views can simplify complex queries and provide a layer of security.

**Example:**
```sql
CREATE VIEW adult_students AS
SELECT * FROM students WHERE age > 18;
```

**14. Transactions:**
- A transaction is a series of SQL statements that are executed as a single unit.
- Use transactions to ensure data integrity and consistency.

**Example:**
```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 123;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 456;
COMMIT;
```

**15. Indexes:**
- Indexes improve the speed of data retrieval operations on database tables.
- Use indexes on columns frequently used in WHERE clauses or JOIN conditions.

**Example:**
```sql
CREATE INDEX idx_lastname ON employees (last_name);
```

**16. Advanced Topics:**
- Advanced topics include recursive queries, window functions, and advanced data manipulation techniques.
- These topics are used for complex data analysis and reporting.

**Example:**
```sql
WITH RECURSIVE cte AS (
    SELECT employee_id, manager_id FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.employee_id, e.manager_id FROM employees e
    INNER JOIN cte ON e.manager_id = cte.employee_id
)
SELECT * FROM cte;
```

**Database-Specific Methods:**

**1. Oracle:**
- Oracle is a popular enterprise-level relational database management system.
- It supports features like PL/SQL, partitioning, and advanced security options.

**2. PostgreSQL:**
- PostgreSQL is an open-source relational database management system known for its reliability and advanced features.
- It supports features like JSONB data type, full-text search, and geographic objects.

**3. MySQL:**
- MySQL is an open-source relational database management system commonly used for web applications.
- It supports features like replication, clustering, and spatial data types.

**Example Code (PostgreSQL):**
```sql
-- Create a JSONB column
ALTER TABLE products ADD COLUMN attributes JSONB;

-- Insert JSON data into the column
UPDATE products SET attributes = '{"color": "blue", "size": "large"}' WHERE product_id = 123;

-- Query using JSON operators
SELECT * FROM products WHERE attributes ->> 'color' = 'blue';
```

These notes cover a range of SQL topics from beginner to advanced levels, along with examples and methods specific to different databases like Oracle, PostgreSQL, and MySQL. 