# SQL Example
This is a basic example consisting of 2 tables, People and Friends, and retreiving information from those tables.

## ERD

A one-to-many relationship exists between People (one) and Friends (many)

People|
------|
p_id (PK)|
name|
character_trait|

Friends|
------|
friend_record_id (PK)|
p_id_FK|
f.id_FK|
placeName|



## SQL Main Statements

Create Table Statements:

	CREATE TABLE People (
			p_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
        name VARCHAR(255),
        character_trait VARCHAR(255)
	)

---

	CREATE TABLE Friends (
			friend_record_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
			p_id_FK INTEGER,
			f_id_FK INTEGER,
			placeName VARCHAR(255),
			FOREIGN KEY (p_id_FK) REFERENCES People (p_id),
			FOREIGN KEY (f_id_FK) REFERENCES People (p_id)
	)

---

Add records to tables:

	INSERT INTO People
	( name, character_trait )
        VALUES
	( 'John Doe', 'hospitable')
	
---

	INSERT INTO Friends
    ( p_id_FK, f_id_FK, placeName )
    VALUES
    ( 1, 3, 'ClusterPluck')

---

## SQL Questions

1 - List all the friends of a specific person

	SELECT p.name, f.p_id_FK AS 'Initial Friend', f.f_id_FK AS 'New Friend'
		FROM People as p
		INNER JOIN Friends AS f
			ON p.p_id = f.p_id_FK
		WHERE p.p_id = 1

2 - List all the friends for all the people

	SELECT p.name, f.p_id_FK AS 'Initial Friend', f.f_id_FK AS 'New Friend'
		FROM People as p
		INNER JOIN Friends AS f
			ON p.p_id = f.p_id_FK
		ORDER BY f.p_id_FK
		

3 - Count the number of friends that a specific person has

	SELECT p.name, f.p_id_FK AS 'Initial Friend', COUNT(f.f_id_FK) AS 'Number of Friends'
		FROM People AS p
		INNER JOIN Friends as f
			ON p.p_id = f.p_id_FK
		WHERE f.p_id_FK = 1


4 - Count the number of friends that everyone has

	SELECT p.name, f.p_id_FK AS 'Initial Friend', COUNT(f.f_id_FK) AS 'Number of Friends'
		FROM People AS p
		INNER JOIN Friends as f
			ON p.p_id = f.p_id_FK
		GROUP BY f.p_id_FK

5 - List the name of the Initial Friend, the name of the New friend, where they met, and what character trait of the New Friend drew the Initial friend to like him.

        