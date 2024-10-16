---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
Creation Date: 2023-09-24T20:56:00
Last Date: 2024-10-15T21:10:24+08:00
---

## Relational 
---
- Has [[ACID Transactions]]
- Storing data in tables with predefined schemas. Adding a new columns requires us to apply it to all records in the table
- Rigid schema & usually [[System Design#Vertical Scaling]]

>[!question] When is it suitable?
> When we want to have [[ACID Transactions]], financial applications, and we have structured and consistent data.

## NoSQL Database 
---
- Flexible schema
- [[System Design#Horizontal Scaling]]
  

>[!question] When is it suitable?
> When we want to have large volumes of unstructured data, flexibility in data structure and **rapid development**.
### Key-Value NoSQL
- Structure like a [[Hash Map]], example is Redis

### Wide Column NoSQL
- Example is Cassandra

### Document NoSQL
- JSON struction, example is MongoDB


### Graph NoSQL
- Example is neo4j



## References
---
- [7 Database Paradigms - YouTube](https://youtu.be/W2Z7fbCLSTw?si=fkKydKtRFdw_tCEN)