#SQL

SQL is used for defining and operating on relational databases.

SQL is used to directly control relational databases.

##Selecting Columns

	SELECT * FROM Customers

The `SELECT` statements retrieves information. The `*` character means "everything". `FROM` specifies that the `SELECT` statements wants information from a specific table, and `Customers` is the name of that table.

	SELECT FirstName, Address FROM Customers

The only selects the columns `FirstName` and `Address` from the `Customers` table.

	SELECT FirstName AS 'First Name', Address as Destination FROM Customers
	
This statment uses aliases for column names. The results will show `First Name` instead of `FirstName`. Note to use single quotation marks to delimit names using spaces, otherwise you'll get an error. Some SQL servers **DON'T** like **double quotes**.

##Selecting Rows
You can specify which `rows` you want returned by using a `WHERE` filter.

	SELECT name, slug FROM wp_terms WHERE slug = 'MongoDB'

This will only return rows where the column value of `slug` equals `MongoDB`.

##The COUNT Function
`COUNT` is an aggregator function, which means it works on a group of rows at a time.  

	SELECT COUNT(*) FROM wp_terms

This will count **all** the rows in the `wp_terms` table.

	SELECT COUNT(meta_data) FROM wp_usermeta

This will count the rows of a single column only where the row does not contain a value of `NULL`. If there is a `non-NULL` in the field, it will be counted.

##The GROUP BY Function
`GROUP BY` works with aggregator functions. It groups together all the rows that **have the same value** in that column, then applies the aggregator function. 

The `GROUP BY` statment takes all the rows that have the same value in the specified column and represents them only once, but applies the aggregator function to all the instances of the specified column in the table.

	SELECT Continent, COUNT(Name) AS Countries FROM Country GROUP BY Continent

Continent	| Countries
---------	|----------
Asia			| 51
Europe		| 46
USA			| 50
Africa		| 58

##Standardized SQL
Most SQL is vendor specific. So SQL that will work on one DBMS might not work on another DBMS.

##SQL Syntax
SQL is made up of `clauses`, `expressions` and `functions`.

	SELECT 'Hello, World'

In the e.g. above, `Hello, World` is an expression.

`SELECT` is the **clause**.

	SELECT Name, Continent, Region FROM Country WHERE Continent = 'Europe'
	
The full above e.g. is a **statement**. `SELECT`, `FROM`, and `WHERE` are **clauses**, and their associated values are the **expressions**.

	SELECT COUNT(*) FROM Country

Above, `COUNT(*)` counts as an **expression**, even though it is a function.

##Formatting SQL
Because SQL ignores whitespace and new line characters, we can use that to our advantage to format SQL in a way that makes it even more readable.

	SELECT Name as 'Full Name', Address as Destination 
		FROM Country AS c
		JOIN City AS ct
			ON ct.ID = c.Capital
		ORDER BY c.Name DESC
	
Semicolons `;` separate or terminate SQL statements. When it's only a single SQL statement, you generally won't see it, but when there are multiple SQL statements, it will probably be used.

##Creating Databases, Tables, and Columns
The syntax for creating a database is usually not used, because databases differ so widely in this, but this will give you the general idea.

	CREATE DATABASE wishlist

Will create a database called `wishlist`.

	CREATE TABLE customer (
		id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(255),
		address VARCHAR(255),
		city VARCHAR(255),
		state CHAR(2),
		zip CHAR(10) 
	);
	
Will create a table with the attributes involved. This is an area where many databases are very different.

##Creating Rows in Tables

The `INSERT` statement is used to create a new **row** in a table, that is to insert data into a table.

	INSERT INTO customer
		( name, address, city, state, zip )
		VALUES (
			'John Doe',
			'32 main st',
			'Michigan',
			'CO',
			'90210'
		)

##Joins

There are 2 main forms of `JOIN` syntax. One is newer and one is older. Here is the newer form

	SELECT c.Name AS Country, c.Continent, ct.Name AS Capital
		FROM country AS c
		JOIN City AS ct
			ON ct.ID = c.Capital
		ORDER BY Country

This is a `SELECT` clause that uses a `JOIN`. 

###The Old Way

There is an older form of this syntax which is still used by people who haven't come up to date. It will still work in most databases.

	SELECT c.Name AS Country, c.Continent, ct.Name AS Capital
		FROM country AS c, City AS ct
		WHERE ct.ID = c.Capital
		ORDER BY Country

The reason to use the newer version is because it makes the fact that a `JOIN` is occuring a lot more obvious.

##Types of Joins

### 1. Inner Join

An `INNER JOIN` is where records will **ONLY** be shown if there are matching records in both tables where those matching records are specified in the `ON` clause or in the `WHERE` clause.

So `INNER JOIN` shows data where there are matching records in both tables. E.g.

	SELECT c.id, c.name, s.id, s.name
		FROM Country AS c
		INNER JOIN State AS s
			ON c.id = s.id

### 2. Left Join

In a `LEFT JOIN`, all the data in the table on the left will be shown, regardless of whether it has matching data in the table on the right, BUT…

**ONLY** data from the right table that has a matching record in the left table will be shown.

	SELECT c.id, c.name, s.id, s.name
		FROM Country AS c
		LEFT JOIN State AS s
			ON c.id = s.id


#### Which is the LEFT Table and which is the RIGHT Table?

Above, `Country` is on the left hand side of the `JOIN` statement and `State` is on the right hand side. So `Country` is the left table and `State` is the right table.

### 3. Right Join

A `RIGHT JOIN` is just the opposite of a `LEFT JOIN`. All records in the right hand table will be displayed regardless of whether they have matching records in the left table, BUT…

**ONLY** data from the left table that has a matching record in the right table will be shown.

	SELECT c.id, c.name, s.id, s.name
		FROM Country AS c
		RIGHT JOIN State AS s
			ON c.id = s.id

### 4. Full Outer Join

You can think of `FULL OUTER JOIN` as a combination of `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`.

`FULL OUTER JOIN` will show all the records from the left table AND the right table regardless of if there is matching data or not. It will simple show ALL of BOTH tables.

	SELECT c.id, c.name, s.id, s.name
		FROM Country AS c
		FULL OUTER JOIN State AS s
			ON c.id = s.id

## The WHERE Clause

The `WHERE` clause is used to filter which rows will be returned from a query. 

There are a lot of **operators** that can be used when constructing your `WHERE` clause. These **operators** are called **predicates**.

### Using WHERE with Literal Strings

You can use `WHERE` to filter rows where a cell contains a literal string. E.g.

	SELECT StateCode, StateName, Population
		FROM State
		WHERE StateCode = 'CO'
	
### Using WHERE with other Operators

	SELECT StateCode, StateName, Population
		FROM State
		WHERE Population >= 450000
	
This will only return rows from the state table where the population **IS GREATER THAN OR EQUAL TO** 450000. Note the lack of single quotes around the number.

### Using WHERE to match part of a string

To return rows that match part of a string, we use the `LIKE` operator.

	SELECT StateCode, StateName, Population
		FROM State
		WHERE StateName LIKE 'C%'

The `%` character is a wildcard character that means any characters that come afterwards, so this query will return any rows where the StateName starts with `C`.

You could also use `%C` or `%C%` for strings that **end with** or contain `C` somewhere in them.

### Using the IN Operator

The `IN` operator selects from a list of values and compares that list to the column or variable that you provide for it. 

	SELECT StateCode, StateName, Population
		FROM State
		WHERE StateCode IN ( 'CO', 'MA', 'GA' )

Here, the `IN` clause will make the `SELECT` statement return results with a `StateCode` of `CO`, `MA`, or `GA`.

### Combining WHERE clauses using the AND and OR Operators

You can combine `WHERE` clauses using the logical operators `AND` and `OR`.

	SELECT StateCode, StateName, Population
		FROM State
		WHERE StateCode IN ( 'CO', 'MA', 'GA' )
		AND Population > 450000
	
This will return records with the matching `StateCodes` **AND** a `Population` greater than 450000.

## Removing Duplicates with DISTICT

Sometimes, you will have duplicate rows returned in the first result column. You can eliminate these with the keyword `DISTINCT`.

	SELECT DISTINCT Territory, HeadOfState
		FROM Country
		WHERE HeadOfState LIKE '%be%'

This query will return a list of heads of state with the letter `be` somewhere in their name but with **NO DUPLICATES**.
	



	