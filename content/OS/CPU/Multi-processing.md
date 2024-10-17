---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-07T14:50:00
Last Date: 2024-10-17T16:52:54+08:00
References: 
---
## Abstract
---
- Having multiple [[Process (进程)]] running at the same time on [[Multi-core Chip]], offers [[Concurrency (并发)#Parallelism (并行)]]


>[!important] Simpler to Implement concurrency
> Avoid issues like [[Deadlock (死锁)]] & [[Race Condition (竞态条件)]] faced by [[Multi-threading]], because each process isn't sharing the same [[Address Space]].

>[!caution] More Resources Intense
> Each process has its own address space,

>[!caution] Not So Scalable
> Performance is limited by the **number of CPU cores**,