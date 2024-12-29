---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - sql
  - java
Creation Date: 2024-12-24, 20:16
Last Date: 2024-12-29T18:31:44+08:00
References: 
draft: 
description: Optimize database performance with SQL queries for batch selection, insertion, updates, and upserts. Techniques include IN operators for filtering, VALUES for bulk insertion, CASE statements for dynamic updates, and ON DUPLICATE KEY for seamless upserts.
---
## Batch Select
---
```sql title="MySQL"
SELECT * 
FROM students
WHERE student_name IN ('Xinyang', 'Ruihan', 'Caomei');
```

-  This query retrieves all records from the `students` table where the `student_name` matches one of the specified values: `'Xinyang'`, `'Ruihan'`, or `'Caomei'` in one execution

>[!code]
> The `IN` operator allows for filtering multiple values in a single query, making it efficient for batch selection.

>[!code]- Java Mybatis code example
> <div class="onecompilerCode-wrapper"><iframe class="onecompilerCodeBig" frameBorder="0" src="https://codefile.io/f/yacOSOYlzT"></iframe></div>
> 
> The above method selects a batch of label values from the `metric_label_lookup` [[Database Indexing|index table]] where the label values match the given error codes.



## Batch Insert
---
```sql title="MySQL"
INSERT INTO students (name, gender, height)
VALUES 
    ('Xinyang', 'Male', 170),
    ('Ruihan', 'Female', 165),
    ('Caomei', 'Male', 170);
```

- This query inserts multiple records into the `students` table in a single execution

>[!code]
> The `VALUES` clause specifies the data for each new record, including the `name`, `gender`, and `height` columns. Batch insertion like this reduces the overhead compared to inserting each record individually.

>[!code]- Java Mybatis code example
> <div class="onecompilerCode-wrapper"><iframe class="onecompilerCodeBig" frameBorder="0" src="https://codefile.io/f/cfPBHE0A5t"></iframe></div>
> 
> Inserts a batch of error codes into the metric_label_lookup table.


## Batch Update
---

```sql title="MySQL"
UPDATE students
SET 
    height = CASE
        WHEN name = 'Xinyang' THEN 175
        WHEN name = 'Ruihan' THEN 165
    END,
    gender = 'male'
WHERE name IN ('Xinyang', 'Ruihan');

```

- This query updates multiple records and columns in the `students` table in a single execution. This approach minimizes the need for multiple update queries by combining them into a single query

>[!code]
> The `CASE` statement dynamically assigns different values to the `height` column based on the `name` of the student.
> 
> The `gender` column is set to `'Male'` for all matching records.
> 
> The `WHERE` clause ensures that only rows where the `name` is `'Xinyang'` or `'Ruihan'` are updated.

>[!code]- Java Mybatis code example
> <div class="onecompilerCode-wrapper"><iframe class="onecompilerCodeBig" frameBorder="0" src="https://codefile.io/f/VQ9oWvV4Vm"></iframe></div>
> 
> Updates the columns in the metric_label_lookup table for the given list of error codes.

## Batch Upsert
----

```sql title="MySQL"
INSERT INTO students (name, gender, height)
VALUES
    ('Xinyang', 'Male', 170),
    ('Ruihan', 'Female', 165),
    ('Caomei', 'Male', 170);
ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    gender = VALUES(gender);
```

- Batch upsert, which combines the operations of [[#Batch Insert]] and [[#Batch Update]]

>[!code]
> If a record with the same unique or primary key already exists, the `ON DUPLICATE KEY UPDATE` clause updates the existing record with new values.
> 
> If no matching record exists, a new row is inserted.
> 
> The `VALUES()` function retrieves the values from the `INSERT` statement for updating existing records.

>[!important]
> In MySQL, to use a non-primary column (like `name`) to check for record existence, you must define a unique constraint on that column in the table schema.