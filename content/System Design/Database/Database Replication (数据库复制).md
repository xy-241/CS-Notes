---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-12-30, 21:53
Last Date: 2023-12-30T21:59:58+08:00
References: 
draft: 
---
## Abstract
---
![[data_replication.svg|500px]]
- Database replication can be used in many [[DBMS (Database Management System)]]
- Usually with a master/slave relationship between the original ([[#Master Database]]) and the copies ([[#Slave Database]])
- Data-modifying commands like insert, delete, or update must be sent to the master database
- Most applications require a *much higher ratio of reads to writes*; thus, the number of slave databases in a system is usually larger than the number of master databases

## Benefits
---


## Master Database
---
- Generally only supports *write operations*

## Slave Database
---
- Gets copies of the data from the [[#Master Database]] and only supports *read operations*