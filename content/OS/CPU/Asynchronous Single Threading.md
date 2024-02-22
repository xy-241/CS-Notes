---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-11T19:17:00
Last Date: 2024-02-22T18:01:25+08:00
References: 
---
## Abstract
---
- Basically takes the benefits of [[Multi-threading]] without the [[Multi-threading#Cons]] with [[Thread#Non-blocking|Non-blocking Thread]] 


## Cons
---
### No Parallelism
- Only one single [[Thread]], thus can't take advantage of [[Multi-core Chip]]
- Blocking the execution of the program when there is a **CPU Bounded** task
- Thus no [[Concurrency (并发)#Parallelism (并行性)]]