---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-11T19:17:00
Last Date: 2024-03-25T20:00:14+08:00
References: 
---
## Abstract
---
- Basically takes the benefits of [[Multi-threading]] without the worry for [[Race Condition (竞态条件)]] & [[Deadlock (死锁)]], thanks to [[Thread#Non-blocking Thread]] 

>[!attention] No Parallelism
> There is only one single [[Thread]], so can't take advantage of [[Multi-core Chip]]. A **CPU Bounded** task can block the execution of the entire program, thus no [[Concurrency (并发)#Parallelism (并行性)]]
