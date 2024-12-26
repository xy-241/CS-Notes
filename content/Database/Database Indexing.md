---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
Creation Date: 2024-12-26, 21:50
Last Date: 2024-12-26T22:48:25+08:00
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

## References
---
- [Database Indexing Explained (with PostgreSQL) - YouTube](https://youtu.be/-qNSXK7s7_w?si=k6-YgArF5WOQsWCg)