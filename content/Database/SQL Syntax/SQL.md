---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
Creation Date: 2023-10-12T15:14:00
Last Date: 
References:
---
## Abstract
---
- Because the join is not yet materialized at the time the subquery is evaluated, you cannot refer to the table returned from the join inside the subquery

## Common Operations
---
### `GROUP BY` with Aggregation Function
- We can sum up value with `SUM()` under a particular [[#Identifier]] Category Value
- We avg value with `AVG()` under a particular [[#Identifier]] Category Value
### Obtain the occurrence of [[#Identifier]] under a particular [[#Identifier]] Category Value
- Use `GROUP BY` to specify the Category Value
- Use `COUNT` to count the occurrence of [[#Identifier]]

## Comparison
---
### IS
- Used for `NULL`
### =
- Used to compared values like string and integers etc
- Any comparison with `NULL` will result in `false`, must use [[#IS]] to evaluate 

## Aggregation 
---

##
### JOIN
![[sql_join.png]]

## Terminologies 
---
### Entity 
- A table that contains unique set of data
### Constraints
- `not null`, `unique`, `primary key`
- `varchar(255)`, `text`
### Normalisation (Normalised Structure)
- Every [[#Entity]] is organised into the smallest form
- The [[#JOIN]] the table when needed
### Statement
- Codes that do something
- Ends with `;`
### Identifier
- Column names
- Must specify [[#Constraints]]
### Index
- Lookup table for specific columns
- Used when `foregin key` [[#Constraints]] aren't allowed 
- Pros: Faster read
- Cons: Slower write & additional memory