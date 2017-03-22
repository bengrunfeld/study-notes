# Essentials of Database Normalization

Normalizing a database's design consists of at least 3 steps of normalization, called the `normal forms`. There are also 2 additional normal forms that we won't discuss here.

#### 1st Normal Form – 1NF

* Remove repeating rows from each table
* Remove repeating columns from each table
* Set a unique `Primary Key` for each row

|Cust_ID|Customer Name|Department|Order 1|Order 2|
|:-----:|:-----------:|:--------:|:-----:|:-----:|
| 1     | Roger       | Sales    | nuts  | boxes | 
| 1     | Roger       | Shipping | fruit | veg   |
| 2     | David       | Sales    | nuts  | boxes |

There are 2 ways the above table is not in `1NF`

1. There are 2 entries for `Roger`, with the `Cust_ID` being repeated. 

2. There shouldn't be columns like `Order 1`, `Order 2`, because this is not maintainable (imagine 4000 orders).

There should only be 1 row for each customer, and any repeating groups (e.g. `Departments`, `Orders`) should be placed in their own tables.

#### 2nd Normal Form – 2NF

* No field should be a piece of information about another field. It should only be a piece of information about the `Primary Key`.

|Car Part|Warehouse Name|Warehouse Address|
|:------:|:------------:|:---------------:|
|7698    |Downtown      |325 Michigan Lane|
|7699    |Downtown      |325 Michigan Lane|
|7700    |Uptown        |146 Malloy Drive |
|7701    |Uptown        |146 Malloy Drive |

There is 1 way the above table is not in `2NF`. `Warehouse Address` depends on `Warehouse Name`, not the **Primary Key**, which is `Car Part`.

To solve this problem and make the table compliant with `2NF`, remove `Warehouse Address` from the above table and create a new table called `Warehouses`, which contains `Warehouse_ID`, `Warehouse Name`, and `Warehouse Address`. This way, any time a warehouse address changes, it only needs to be changed in one place, not in several thousand other records.

#### 3rd Normal Form – 3NF

* The table must already be in the `2nd Normal Form`
* Every field must be dependant on the `Primary Key`
* If a field is not dependant on the `Primary Key`, it should be removed and placed in it's own table and given a `Foreign Key` which will be used to relate each record to its parent table.

|Cust_ID|Customer_Name|Order_ID|Order_Amount|
|:-----:|:-----------:|:------:|:----------:|
| 1     | Roger       | 200    | 500        | 
| 2     | Max         | 201    | 750        |
| 3     | David       | 202    | 325        |

In the example above, `Cust_ID` is the **Primary Key** of the table. `Order_ID` and `Order_Amount` are **NOT** dependant on the **Primary Key** and should thus be placed in their own table - `Orders`, and given a **Foreign Key** to relate them to their corresponding customer.
