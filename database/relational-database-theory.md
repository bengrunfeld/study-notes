# Relational Database Theory

## Terminology

### Columns

Columns store a single piece of information and go by the names:

* Attributes
* Values
* Fields

### Rows

Rows are made up of a series of values and are generally called:

* Records

Each record represents a single entity, e.g. employee, product

### Tables and Relations

A `data table` consists of columns and rows, but it is actually called a `relation` if it follows certain rules.

* Cells in the table only contain a single value.
* Values are atomic and should not/can not be split apart into smaller components
* All of the values in a relation must be of the same type. E.g. column called `city` should not try to store `house number` in there.
* column names are unique
* The order of the columns or rows is insignificant
* Rows must be unique

## Database Lifecycle Stages

1. Planning
2. Requirement Gathering
3. Conceptual Design - translate the requirements into structure 
4. Logical Design - determine the contstraints and rules that will need to be applied to the conceptual design
5. Physical Design - incorporate into the database management system
6. Contruction - build it all out
7. Implementation and support - deploy the database
8. Ongoing support

## Removing duplicate information

One of the first problems we come across when implementing a database is storing duplicate data. 

Duplicates slow performance, cause maintenance issues, and runs the rist of becomming inconsistent and causing anomolies.

| Invoice number | Customer | Address |
|----------------|----------|---------|
| 100            | Maccas   | 1234 crazy ave |
| 200            | Maccas   | 1234 crazy ave |
| 300            | Maccas   | 1234 crazy ave |

While this table looks organized, Address is duplicated. 

The solution is to remove the components that are repeated from the main `invoices` table and to place them in completely different tables. We can do this by determining which fields depend on which other fields. e.g. the `address` depends on the `customer`.

### How to remove dupes

1. Remove the column that isn't dependant on the main topic of the table and place it in a new table.
2. Make a copy of the column that is was dependant on and place it in the new table.

So in the table above, we'd remove Address and create a new table, which would look like this:

| Customer | Address |
|----------|---------|
| Maccas   | 1234 crazy ave |

## Eliminate inconsistent data

Humans often make mistakes when entering data, but this can cause havok on your database. Imagine that you have a supplier called `Four Dogs Beer`, but an employee enters it as `4 dogs beer` in some places. Searching for one will exclude results from the other - bad!

The solution is to create a unique ID's for important fields and then use them around the database as a reference, instead of the fully spelled out name. You'll make a lot less mistakes inputting ID: #123 than `Four Dogs Beer`.

## Break data down into its components

In the following table, we have the customer's address, but it's only usable if we want the full address. If we run a search to see how many customers we have in California, it would be impossible to do in this form.

| Customer | Address |
|----------|---------|
| Maccas   | 1234 crazy ave, Los Angeles, CA, 94210 |

Address is referred to as a `multi-part field`, and is notoriously difficult to work with. Rather, it should be:

| Customer | Street Number | Street | City | State | Zip Code |
|----------|---------------|--------|------|-------|----------|
| Maccas   | 1234 crazy ave |Los Angeles | CA | 94210 |

A very common error is to store a person's full name - e.g. Ben Grunfeld. Rather, it should be stored as First Name, Last Name, to assists with searching by Last name, etc. We may also want to create a standardized email address by doing `${firstName}.${lastName}@company.com`

## Preventing Data Conflicts

Data conflicts can occur when one field is calculated from another field. The problem is that if the source field changes, then the calculated field needs to be updated as well. Sometimes these changes occur in completely seperate tables.


| Qty | Price | Total |
|-----|-------|-------|
| 2   | 10    | 20    |

Total is calculated by multiplying `Qty` * `Price`. If `Qty` or `Price` changes, then `Total` needs to be recalculated.

The solution is to simply stop storing calculated information. Calculate these values on the fly when we need them, notably in the front end, rather than storing them in the DB where they may become outdated.

Code smell: Any time you want to store information that contains the name: `total`, `min`, `max`, `avg`, it is an indication that you could potentially calculate them on the fly. E.g. tax owed, determined by tax rate.

This is also true for concatenated or interpolated data. The DBMS has functions which can manipulate and output data so that you don't have to actually store it in the desired final form. You just need to store the essential base data that it is calculated from.

## Require Complete Information

Many times, we don't have all the data requested, but if we allow Users to input partial information and just move on, they will rarely return to fill out the missing parts. This can lead to horrible inconsistencies in the database which return erroneous data.

Detemine required fields.

In most RDBMS', you have to specify the field `not null`.

This doesn't mean that you need to mark everything as `required`, just the essential information.

## Maintain a consistent structure

One of the habits that sometimes comes over from the world of spreadsheets is the tendency to try to store multiple pieces of information of the same type in a single field. 

This commonly shows up as a comma seperated list of values, where one record has several corresponding data values. 

e.g. 

First Name | Last Name | Children
-----------|-----------|------
Matt       | Dermer    | Alice, Joyce, Daryl

You can't just have Child 1, child 2, child 3 fields, because you'd constantly need to update the fields for the employee with the largest amount of children.

The solution is to break out the problem elements into their own tables, and link them back together with some sort of reference field. E.g.

Employee ID | First Name | Last Name |
------------|------------|-----------|
100         | Matt       | Dermer    |

Employee ID | Child |
------------|-------|
100         | Alice | 
100         | Joyce | 
100         | Daryl | 

### The Open/Closed Principle

Tables should be open for extension and closed for modification.

This means that every-day data entry tasks will continue to add records to the DB tables without the need to alter their structure. 

End users will continue to grow the tables vertically, while developers are required to grow the tables horizontally. 

## Gathering Requirements

Every database should have a well thought out goal. What it is trying to do. If you define this in the beginning, it can avoid scope creep later on.

Have lots of short sentances that describe what we want the DB to do.

### Actors and Tasks

Identify groups of people who interact with the system. User groups are called `actors`. Actors represent the same position or role. 

## Conceptual Data Modelling

We start by building a `Data Model`. A data model is a graphical representation of the elements that make up the overall database's design. It's the construction blueprint that we've been working towards. 

The data model will also help us visualize the data, fields, and the relationships that will allow the database to store and retrieve information.

## Cardinality and Optionality

When checking if two tables have a `one-to-one` or a `one-to-many` relationship, also check the minimum required. 

E.g. Between Invoices and Customers, an Invoice cannot have zero Customers, but a Customer can have zero Invoices, since they may not have placed an order yet. So the relationship is `0..N to 1..1`.

## Subtypes and Supertypes

Sometimes referred to as Subclasses and Superclasses. Imagine you have a Customer table, but some of your customers are Retail and some are Wholesale. The retail customers will have a `first name` and a `last name` while the wholesale customers will have a `company name` instead. 

If would be a VERY bad idea to create a `retail customers` table and a seperate `wholesale customers` table. Rather, we should create a Supertype `customers` table which has the attributes that both retail and wholesale share, and then a Subtype for retail and a Subtype for wholesale which both inherit from Customers.

We will also want to have an attribute in Customers which defines if the customer is retail or wholesale.

This way we avoid interal loops and holes in the database.

## Lookup Tables

Lookup tables are like Constants. They define a set list of acceptable values that can be used for a specific attribute. 

E.g. a list of countries that we allow sales and shipping to.

E.g. a list of departments in our company that employees can be assigned to. We don't want to create new departments for employees by accident. The Departments table will be related back to the Employees table in a `one-to-many` relationship. As our company grows, we can add more departments.

Lookup tables effectively help us constrain our data when needed.

So if we have a field that can ONLY have a specific set of values (like a Javascript Object), then you probably want to implement a Lookup Table.

## Composite Keys

Sometimes you may want to create a Primary Key by concatenating two other keys, which will also ensure you don't have accidental multiple entries. E.g. IF you want to store a single instance of an asset at a specific latitude and longditude, you could create a composite key by concatentating them. If someone attempts to store a second asset at the same location, the database will reject it, as a Primary Key must be unique. This is one way to enfore data integrity.

## Normalization

Normalization is a series of rules that your database's table structure must pass in order to be considered a good relational design. 

The individual rules are called normal forms and they must be tested in order, like passing through a series of gates or checkpoints. In other words, you can't satisfy the requirements of the second normal form without first satisfying the requirements of the first normal form.

### First Normal Form

1NF requires that all fields only include a single piece of data. The aim here is to remove comma seperated multi-value fields.

### Second Normal Form

2NF Rule: Are all components of a Composite Primary Key required to determine the other fields in the same row?

E.g. Line Item Table

Invoice Number (PK) | Product Name (PK) | Qty | Supplier
--------------------|-------------------|-----|-------------
100                 | Apples            | 5   | Adam's Apples
100                 | Oranges           | 3   | Orly's Orangles
101                 | Apples            | 4   | Adam's Apples
101                 | Oranges           | 6   | Orly's Orangles

For example, both components of the primary key are required to know the Qty, so Qty passes the 2NF check. 

As for the Supplier, it is NOT dependant on the Invoice Number part of the PK, but the Supplier will ALWAYS be the same for line items of the same Product Name. Here is where we fail the test for 2NF.

E.g. if I gave you the Invoice Number #100, could you tell me what the Qty was? No. You'd also need the Product Name. If I only gave you the Product Name, you still wouldn't be able to tell me the Qty because you'd need the Invoice Number.

But if I only gave you the Product Name of `Apples`, could you tell me who the Supplier was? Yes! Because it will always be `Adam's Apples`, regardless of Invoice Number. 

SOLUTION: The solution is to remove the offending column and place it into its own table (maybe a table for it already exists in the DB), and add a copy of the portion of the composite key that the field was dependant on.

Product Name (PK) | Supplier
------------------|-------------
Apples            | Adam's Apples
Oranges           | Orly's Orangles

Now we just add a `one-to-many` relationship between the tables.


### Third Normal Form

3NF follows a similar pattern to 2NF, but we check every non-key field against each other.

A table is in 3NF if all of the non-key fields are independant of any other non-key field.

Here, we're looking for columns that are functionally dependent on another piece of information that isn't the primary key. This often occurs when two fields are simply stating the same thing in a different way. 

For instance, you might try storing the state, and the state abbreviation in an address table. Since state abbreviation is entirely dependent on the state, or vice-versa, one of those two fields should be removed from the table. 

e.g. 

Order Id (PK) | Part Name | Status      | Status Code
--------------|-----------|-------------|-------------
100           | Spanner   | Shipped     | 2
101           | Wrench    | Not Shipped | 1
102           | Wrench    | Not Shipped | 1
103           | Screws    | Shipped     | 2

Here, Status Code is derived from Status. We can remove one of these columns and place it into it's own table. It doesn't really matter which one we keep, although there's a slight performance gain to keeping the numerical value.

There are many cases where you don't need to store one of these pieces of information at all, but can just calculate what you need on the fly in the front end. E.g. if we get a Status Code of 2, we can just generate the text "Shipped" in the front end.

## Logical Design

Think through all the data types that you want to use and check the documentation to see what types and precision are supported.

### Junction Tables

Having a `many-to-many` relationship can be problematic. Imagine you have a `m2m` relationship between `Courses` and `Students`. A Student could easily be enrolled in a Course twice.

The solution is to create an intermediary table called `CoursesStudents` or `StudentsCourses` which has a `one-to-many` relationship with both `Courses` and `Students`. 

CourseID (PK+) | StudentID (PK+) | Final Grade
---------------|-----------------|-------------
Chem101        | 100             | A+
Physics101     | 100             | B-
Chem101        | 101             | C+

StudentID (PK) | First Name | Last Name
---------------|------------|----------
100            | John       | Green
101            | Mark       | Rookwood

CourseID (PK) | Course Name
--------------|--------------
Chem101       | Chemistry 101  
Physics101    | Physics 101

This way, a student can't be enrolled for the same course twice. Now we can create additional fields in this table that describe the unique pairing between student and course, like `Final Grade`, which is about a single student in a single course. It's perfect because it isn't just about the Student, and it isn't just about the Course.

Students can be registered in the Students table, even though they aren't registered for a Course, and Courses can be created in the Courses table, even though no Student has signed up for them yet.

As soon as a Student signs up for a Course, a record will be created in the Linking/Junction Table.

Make sure your Database does NOT have ANY `many-to-many` tables.

### Enforcing Data Integrity Through Constraints

To make sure values entered into the Database are valid, use the following tools:

* Lookup tables
* Create a check constraint (must be updated if the Business rules change)
* Check that numbers are within an acceptable range (e.g. prices cannot be negative)
* Set date ranges (e.g. shipping date cannot be in the past)
* Make a field required (NOT NULL)

These constraints should have been discovered during the interviewing stage.

### Referential Integrity

Referential checks ensure the a record in the Child table actually point to something in the Parent table.

E.g. You have a child table `Employees` and a parent table `Departments`. Each employee must be assigned to a department. If you have a referential contraint in place, the department that as employee is assigned to **MUST** exist in the Departments table. If it doesn't, an error will occur

EmployeeID (PK) | First Name | DepartmentID (FK)
----------------|------------|------------------
100             | John       | 1
101             | Mark       | 2
102             | Beti       | 3

DepartmentID (PK) | Department Name
------------------|--------------
1                 | Sales
2                 | Marketing

In the above `Employees` table, if we have a referential constraint in place, employee #102 will generate an error upon creation because DepartmentID #3 does not exist in the `Departments` table.

This prevents an orphaned record from occurring.

### Building Indexes

 