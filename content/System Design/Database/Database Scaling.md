---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2024-01-02, 13:16
Last Date: 2024-10-16T23:56:08+08:00
References: 
draft: 
---
## Abstract
---
![[database_scaling.png|500]]

- To prevent [[Database]] from overloading
- There are 2 types - [[#Database Vertical Scaling]] & [[#Database Horizontal Scaling]]

## Database Vertical Scaling
---
- See [[System Design#Vertical Scaling]]
- `stackoverflow.com` in 2013 had over 10 million monthly unique visitors, but it only had 1 master database

## Database Horizontal Scaling
---
![[databse_sharding_1.png|300]]


- Also known as *Sharding*
- See [[System Design#Horizontal Scaling]]
- Data in [[Database]] is broke down into smaller pieces, and each piece is stored inside a [[#Shard]] 
- In the above example, data is allocated to a shard based on `user_id` which is the [[#Sharding Key]]. The calculation is done with a [[Hash Function]]
- It comes with [[#Sharding Challenges]]


### Shard
![[database_sharding_2.png|300]]
- One of the multiple [[Database]] server that stores a part of the data stored in the database tier
- Shares the same schema as other shards

### Shard Exhaustion
- When a [[#Shard]] runs out of space
### Sharding Key 
- Also known as **Partition Key**
- Consists of one or more columns that determine which [[#Shard]] the data should be inserted into 
- Thus, we need to find a key that ensures evenly distributed data, so shard holds the same amount of data to avoid [[#Shard Exhaustion]]

### Sharding Challenges
#### Resharding Data
- We need to reshard data when
	1. a single [[#Shard]] could no longer hold more data due to rapid growth
	2. Certain shards might experience [[#Shard Exhaustion]] faster than others due to uneven data distribution caused by the choice of [[#Sharding Key]] and [[Hash Function]]
- [[Database Partitioning#Consistent Hashing]] is a technique used to minimise the movement of data when resharding data

#### Celebrity Problem
- Also known as **hotpot key problem**
- Basically specific [[#Shard]] overloads due to excessive access to a specific shard
- Imagine data for Katy Perry, Justin Bieber, and Lady Gaga all end up on the same shard. For social applications, that shard will be overwhelmed with read operations
- To solve this problem, we may need to allocate a shard for each celebrity. Each shard might even require further partition

#### Join and De-normalization
- It is hard to perform join operations across [[#Shard]]
- A workaround is to de-normalize the [[Database]] so that queries can be performed in a single table.