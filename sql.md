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


