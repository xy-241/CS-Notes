---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
  - binance
Creation Date: 2025-01-16, 10:40
Last Date: 2025-01-16T11:48:08+08:00
References: 
draft: 
description: 
---
## Like
---
```sql title="MySQL"
-- Retrieve all usernames starting with "john"
SELECT * FROM users
WHERE username LIKE 'john%';

-- Find all users with `.com` email addresses 
SELECT * FROM users
WHERE email LIKE '%.com';

-- Find all products containing the word "phone" in their name
SELECT * FROM products
WHERE product_name LIKE '%phone%';

-- Find employees who don't use the company's email domain
SELECT * FROM employees
WHERE email NOT LIKE '%@company.com';

-- Find all customers with phone numbers starting with "9895"
SELECT * FROM customers
WHERE phone_number LIKE '9895-____';
```
- `LIKE` searches with pattern matching within strings, case-insensitive in MySQL by default

>[!success] In small databases
> `LIKE` can be used for quick, non-indexed searches.

>[!attention] Avoid `LIKE`
> **Large datasets**: it can be slow because it performs a **full table scan** without an [[Database Indexing|index]].
> 
> **Complex search logic**: use [[#Full-text Search]] or other search systems like Elasticsearch.


## Full-text Search
---
```sql title="MySQL"
-- Seearch for job postings matching skills and preferences
SELECT job_title, job_description
FROM jobs
WHERE MATCH(job_title, job_description) AGAINST('software engineer remote' IN NATURAL LANGUAGE mode);
```

- Full-text search uses [[Database Indexing|full-text index]], enabling efficient searches and [[#Relevance Ranking|relevance ranking]] (the default mode in [[MySQL]])

>[!success] Shiny point 
> Great for **large datasets** containing **textual information**.

>[!attention] Minimum word length
> The default minimum word length for indexing is **4 characters**. Words shorter than this are ignored.
> 
> We can change this with `ft_min_word_len` system variable in the MySQL configuration file.

>[!attention] Stopwords
> Common words (e.g., "the", "is", "and") are ignored by default because they are in the stopword list. You can customize the stopword list.

>[!code] 
> `REPAIR TABLE table_name QUICK;`, often used when `ft_min_word_len` or stop list are changed.

### Adding FULLTEXT Index to Existing Table

```sql title="MySQL"
-- Create single-col index
ALTER TABLE table_name
ADD FULLTEXT INDEX fulltext_idx_name(col_1);

-- Create multi-cols index, must search with multi-cols too
ALTER TABLE table_name
ADD FULLTEXT INDEX fulltext_idx_name(col_1, col_2);
```

### Relevance Ranking

```sql title="MySQL"
-- Obtain the relevance score, 
-- put this as part of the selected columns
MATCH(title, content) AGAINST('MySQL optimization') AS relevance_score
```

>[!important] Factors affecting the score
> **Term Frequency (TF)**: The more frequently a search term appears in the column, the higher the score.
> 
> **Field Length**: The longer the field, the lower the score for a given term. In large documents, terms might not contribute as much to the relevance score.
> 
> **Position of the Term**: If the search term appears near the beginning of the column, it may have a slightly higher score.
> 
> **Inverse Document Frequency (IDF)**: The rarer the term (i.e., the fewer rows it appears in), the higher the score.

>[!important] Tokenization
> Special characters like colons are often treated as delimiters, and only the numeric part (`20093`) is indexed and searched.
> 
> Characters like `::` don't influence the search result if they are ignored during tokenization, which is why the search for `20093` can match `BUSINESS_CENTER::20093`.
> 
> **Numeric Matching**: Full-text search matches the numeric token `20093` even if it is part of a more complex string (like `BUSINESS_CENTER::20093`).