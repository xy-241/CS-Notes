---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
  - binance
Creation Date: 2025-01-08, 00:54
Last Date: 2025-01-08T02:05:33+08:00
References: 
draft: 
description: Collation defines how text data is compared and sorted in databases, including case sensitivity. For case-insensitive searches, standardise data by storing values in lowercase. Use utf8mb4_general_ci collation for consistent comparisons and Unicode support across applications.
---
## Abstract
---
- A set of rules that determine how text data is **sorted** and **compared** in a [[Database|database]], including case sensitivity


>[!important] Case sensitivity
> Database data is typically stored in a case-insensitive manner (e.g., `"a" = "A"`). 
> 
> For example, `name = 'John'` will match "`John"`, `"john"`, and other variations in capitalisation.

>[!important]
> Case insensitivity affects only how the data is **compared** or **searched**, not how it is **stored** or **retrieved**.
> 
> For example: If the data stored in the database is `John` and you query with `SELECT name FROM users WHERE name = 'john';`, the database will return `John` because it was stored that way, even though the search was case-insensitive.
> 
> Therefore, it is important to process the value before insertion. For case-insensitive searches, **storing all values in lowercase ensures consistency**. For instance, if both `john` and `John` are stored and you search for `john`, the database returns both, which can lead to errors if you expect to retrieve only one result. To avoid this, you can standardize by storing all data in lowercase (e.g., `john`) so that the result is consistent regardless of the case used in the query.


>[!code] Specifying case sensitivity
> Use `utf8_general_ci` for case-insensitive storage. In MySQL, it also treats `"hello "` and `"hello"` as equal!
> 
> Use `utf8mb4_general_ci` for case-insensitive storage with support for **up to 4 bytes per character**, accommodating a wider range of Unicode characters, including emojis and rare Chinese characters.

## Check Collation of a Column
---
```sql title="MySQL"
SELECT TABLE_NAME, COLUMN_NAME, COLLATION_NAME
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = 'my_database'
  AND TABLE_NAME = 'users'
  AND COLUMN_NAME = 'username';
```

