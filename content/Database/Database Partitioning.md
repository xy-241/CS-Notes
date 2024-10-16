---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
  - system_design
Creation Date: 2024-10-15, 21:42
Last Date: 2024-10-15T21:53:16+08:00
References: 
draft: 
description: 
---
## Abstract
---
### Horizontal Partitioning
- Divides rows of a table across multiple databases

### Vertical Partitioning
- Separate columns into different databases

### Directory-based Partitioning
- Use a lookup service to abstract the partitioning scheme which simplifies the design of your user application


## Database Partitioning Techniques
---
- We can apply a [[Hash Function]] on data to determine which [[Database Scaling#Shard]] the data belongs to 

>[!attention]
> Introducing difficulty in joining across multiple [[Database Scaling#Shard]], leading to potential tricky data rebalancing.

### Consistent Hashing
- A technique that **minimises data redistribution** when scaling the number of servers **around a hash ring**
- Each data is hashed to determined which [[Database Scaling#Shard]] it belongs to, each server is only responsible for a portion of the hash ring
- Adding or removing server only a small fraction of data needs to remapped. This allows easy dynamic scaling and reducing the impact of server changes

### List Partitioning
- Assign each [[Database Scaling#Shard]] a list of value, storing each data based on which list its key belongs to 

### Round Robin Partitioning
- Distributes data evenly across [[Database Scaling#Shard]] in a **circular order**

### Composite Parititoning
- Combines two or more [[#Database Partitioning Techniques]]