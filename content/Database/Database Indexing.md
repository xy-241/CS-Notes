---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
  - binance
Creation Date: 2024-12-26, 21:50
Last Date: 2025-12-03T00:20:03+08:00
References:
draft:
description: Database indexing speeds up queries by organizing column values in structures like B-trees, allowing for O(log n) search times versus O(n) full table scans. However, pattern-based searches like LIKE %ZA% require full table scans. Trigram search addresses this by using trigrams (three-character substrings) for efficient matching. Use EXPLAIN ANALYZE to measure query performance and IGNORE INDEX() to disable indexing.
---
## Abstract
---
```sql title="Creating an index on the name column of the people table"
CREATE INDEX idx_name
ON people (name);
```

- Database indexing is a data structure based on one or more columns, usually a single column, to improve query performance. This data structure **organises the values in the column in a way that enables faster search speed (`O(log n)`)** compared to full table scan's `O(n)`
- One common data structure used for this purpose is the **B-tree**. The performance gain remains even if the values in the column are unique, as **each unique value is represented as a node in the B-tree**

>[!important]
> If the data you're querying is **stored in the index itself**, the speed is even faster, as there’s **no need to access the table** to fetch the data from the table’s rows.

>[!attention]
> Indexes lose their effectiveness with `LIKE %ZA%`, as it is **a pattern rather than a specific value** that can be used to quickly locate data in **O(log n)** time. **A full table scan is required to find all the rows that match this pattern**.
> 
> However, [Trigram search](https://en.wikipedia.org/wiki/Trigram_search) solves the issue with `LIKE %ZA%` by breaking down the string into **trigrams** (three-character substrings).

>[!tool] Performance analysis
> Prefix the SQL query with `EXPLAIN ANALYZE` to check the time taken by the query, and use `IGNORE INDEX()` to force the database to avoid using an index.

>[!code] Drop index
> ```sql title="MySQL"
> DROP INDEX index_name ON table_name;
> ```
> Can be used to drop [[Database Search#Full-text Search|full-text search index]].

## Index Selectivity
---
- We should only create indexes on columns with high cardinality - columns with many distinct values relative to the total row count.
- A column like `gender` is a poor candidate because it typically has only 2-3 distinct values. A query like `WHERE gender = 'male'` would match ~50% of the table. At that point, the query optimiser will likely prefer a full table scan over the index because sequential disk reads are faster than the random I/O pattern of index lookups (jump to index → find pointer → jump to row). This overhead compounds quickly across millions of rows

>[!tip] Rule of thumb
> Indexes become ineffective when selecting more than ~10-15% of the table.

>[!important] Exception
> **Composite indexes**: Low-cardinality columns can still be useful as part of a multi-column index, like `(gender, created_at, city)` where the combination is highly selective.
> 
> **Skewed distributions**: If 99% are male and 1% are female, an index helps queries filtering for female

## References
---
- [Database Indexing Explained (with PostgreSQL) - YouTube](https://youtu.be/-qNSXK7s7_w?si=k6-YgArF5WOQsWCg)