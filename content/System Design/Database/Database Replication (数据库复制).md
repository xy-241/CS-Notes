---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-12-30, 21:53
Last Date: 2024-02-22T18:02:24+08:00
References: 
draft: 
---
## Abstract
---
![[data_replication.svg|400]]
- Database replication can be used in many [[Database#DBMS]]
- Usually with a master/slave relationship between the original ([[#Master Database]]) and the copies ([[#Slave Database]])
- Data-modifying commands like insert, delete, or update must be sent to the master database
- Most applications require a *much higher ratio of reads to writes*; thus, the number of slave databases in a system is usually larger than the number of master databases

## Master Database
---
- Generally only supports *write operations*

## Slave Database
---
- Gets copies of the data from the [[#Master Database]] and only supports *read operations*

## Benefits
---
### Better Performance
- Read operations are distributed across [[#Slave Database]]
- This model improves performance because it allows more queries to be processed in [[Concurrency (并发)#Parallelism (并行性)]]
- And we are able to perform [[System Design#Horizontal Scaling]] on the slave database to handle more read requests

### High Fault Tolerance 
- Even one of the database server is down, data is preserved since data is replicated across multiple locations
- And there is mechanism to recover quickly from [[#Potential Disaster Senario]]
- Thus, high [[System Design#Fault Tolerance (容错性)]] and high [[System Design#Reliability (可靠性)]]

### High Availability 
- Website remains in operation even if a database is offline as you can access data stored in another database server
- Thus, high [[System Design#Availability (可用性)]]


## Potential Disaster Senario
---
What if one of the database down

**Only one [[#Slave Database]] is available and it goes offline**
- Read operations will be directed to the [[#Master Database]] temporarily
- A new slave database will replace the old one that goes offline

**One of the many slave database goes offline**
- Read operations are redirected to other healthy slave databases
- A new database server will replace the old one that goes offline

**Master database goes offline**
- A slave database will be promoted to be the new master. All the database operations will be temporarily executed on the new master database
- A new slave database will replace the old one for data replication immediately
- In production systems, promoting a new master is more complicated as the data in a slave database might not be up to date. The missing data needs to be updated by running data recovery scripts. But we use algorithms like [[Raft Consensus Algorithm]] to handle the promotion process automatically
