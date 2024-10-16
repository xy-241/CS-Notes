---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
Creation Date: 2023-09-13T10:56:36+08:00
Last Date: 2024-10-15T21:44:37+08:00
References: 
---
## Abstract
---
- Stores data, the data is managed by a [[#DBMS]]


>[!important] Database query performance optimisation
> Create an **index table** that uses a **primary key**, or a **secondary index on non-primary key columns** for faster search queries, such as searching for a user's first name. Alternatively, a **composite key** can be created on multiple columns, which is useful for queries that **involve both the first name and last name**.
> 
> Indexing greatly **improves read performance** but **slows down write operations** because with each update to the record, we also **need to update the associated index table**.


## DBMS
---
- Stands for **Database Management System**
- Handles operation, allows retrieval of data from [[Database]] in an efficient manner 
- Examples are [[MySQL]], [[Postgres]]

>[!tip] Spreadsheet interface to DBMS
> ![[nocoDB.png|500]]
> 
> [nocodb](https://github.com/nocodb/nocodb) allows us to self-host a web app that can connect to a DBMS like [[MySQL]] and [[Postgres]] etc. It provides a very nice user interface to add tables and different types of data with great ease! 
> 
> Bonus: it has a **form view** that allows us to obtain data from users in a Google Form manner.
> 
> The only concern I have is the attachment uploaded, the self-hosted version stores the file on the server, not sure how to migrate these attachments when I move from one server to another if I am using [[Docker]], I will explore this when I have more time.





## Terminologies 
---
### Database Transaction
- Used to create, update or retrieve data
- A series of [[Operation]] performed within a [[#DBMS]]
- If one of the Operation fails, the whole transaction fails
- For example, you make an online purchase, buy an item, and cause money to leave your account