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

	SELECT COUNT(*) FROM wp_terms

This will count **all** the rows in the `wp_terms` table.

	SELECT COUNT(meta_data) FROM wp_usermeta

This will count the rows of a single column only where the row does not contain a value of `NULL`. If there is a `non-NULL` in the field, it will be counted.



