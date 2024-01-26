---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
Creation Date: 2023-10-12T15:14:00
Last Date: 2024-01-27T01:23:04+08:00
References: 
---
## Abstract
---
- The language used to obtain data from [[DBMS (Database Management System)]] from [[Database]]
</br>

- SQL query execution order, more details can be found [here](https://www.youtube.com/channel/UCZgt6AzoyjslHTC9dz0UoTw/community?lb=UgkxxRdC2UPk8w8gaLjR9epBdDZNuKHwrfO7)
<img src="https://yt3.ggpht.com/1Eb7pPs2b1bjeEIcBVTV5xbvV44xdtA9uAI4pb_uCtOEzGJKI1_U5JGOcDpf8x1L0oQH2_bAUO5ULQ=s2000-nd-v1-rwa" width="400" />
>[!caution] Comparison
>- `IS` is used for `NULL`
>- `=` is used to compare values like string and integers etc. Any comparison with `NULL` will result in `false`, must use *IS* to evaluate 

## Aggregation 
---
### JOIN
![[sql_join.png|300]]
- Combine information from more than one table
>[!error] Cannot refer to the table returned from the `JOIN` inside the subquery
>- Because the join is not yet materialized at the time the subquery is evaluated




### Group By
- We can sum up value with `SUM()` under a particular [[#Identifier]] Category Value
- We avg value with `AVG()` under a particular Identifier Category Value
- Use `COUNT` to count the occurrence of identifier

## Metadata
---
- Obtain the length of a string with `LENGTH()`
- Can be used outside of `SELECT`


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