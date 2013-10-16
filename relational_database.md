#Relational Database

##Relationship types
* One-to-one
* One-to-many / Many-to-one
* Many-to-many

###One-to-one Relationships
A one-to-one relationship is very rare, and really means that you've created a table for something that should actually be a field.

E.g. One `customer` can only have one `address`, with these both being separate tables. Actually, this means that `address` is really an `attribute` of `customer`, and should actually just be a field in the customer table.

So a one-to-one relationship means that an `attribute` has been improperly identified as an `entity`.

###One-to-Many Relationships
This means that you have records in a `parent table` that are related to records in many `child tables`. 

`Parent table` implies the **one** side, and `child table` implies the **many** side of the relationship.

So **one** `parent` can have **many** related `children`.

###Many-to-Many Relationships
These types of relationships should be eliminated. 

Many-to-many relationships mean that you have 2 related parent tables by their relationship is not actually direct.

Instead, it needs to be related through an additional child table, so you'll have a one-to-many relationship.

###Resolving Relationships
You know that you're done with the data modelling process when all your relationships are **one-to-many's**, and you've gotten rid of all the **one-to-one's** and **many-to-many's**.

To get rid of **many-to-many** relationships, add a join table that has a **one-to-many** relationship with each `parent` table.

##ERD's
Steps to creating an `ERD`.

1. Develop a list of entities (or tables) that belong in the data model
2. Determine and diagram the relationship between those entitites
3. Review the diagram for correctness and consistency

Seek out **nouns** in a description of a database you need to build. Those will probably be your entities.

In an `ERD`, you have `table occurances`, which is an instance of a database table. So each box you see in an ERD builder references ONLY one table in your database.

Although, you are able to create more than one `table occurance` for each table in your database. But you can't have 2 `table occurances` with the same name, even if they are of the same table.

##Primary and Foreign Keys
You need something that can link each table together. `Keys` act as links between tables.

* **Primary Key** is the parent
* **Foreign Key** is the child

Every `parent` table must have a **primary key** defined.

Each `child` table must have a **foreign key** defined for each `parent`.

The parent is the one, and the child is the many.

The **primary keys** purpose is to ensure the uniqueness of every field in this table, so it must not be duplicated in a table. It must be unique.

But **foreign keys** do NOT need to be unique in a `child` table, because any one `parent` could have multiple related records in a `child` table.

If a table is a `child` to 2 `parent` tables (i.e. a join table), it will need to **foreign keys**, one for each `parent` table.

##Naming Conventions
1. To ensure that primary keys appear above other fields when sorted, prefix with 2 underscores `__`. 2 underscores makes PK come before FK.
2. To ensure that foreign keys appear above other fields (but not PK's) when sorted, use a single underscore `_`
3. Suffix primary keys with `_PK`
4. Suffix foreign keys with `_FK`

##Data Sharing
Child tables can borrow information from parent tables. If a borrowed field is changed in the child table, it will be automatically changed in the parent table. Visa versa applies.



##Terminology
**Entities** – Data is broken down into small pieces, known as entities. Entities contain attributes.
**Attributes** – are pieces of data that describe an entity. Attributes will become fields inside the database.
**Relational Modelling** – is planning the construction of your database, aka creating a blueprint for the database.
**Data Modelling** – Describes business rules as data inputs and outputs
**ERD** – Entity Relationship Diagram. A method of diagraming relationships in a database.





