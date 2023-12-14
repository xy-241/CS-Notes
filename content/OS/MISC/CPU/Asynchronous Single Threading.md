---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-11T19:17:00
Last Date: 2023-12-12T22:51:38+08:00
References:
---
## Abstract
---
- Basically takes the benefits of [[Multi-threading]] without the [[Multi-threading#Cons]] with [[Thread#Non-blocking|Non-blocking Thread]] 


## Cons
---
### No [[High-performance Computing#Parallelism (并行性)|Parallelism (并行性)]]
- Only one single *thread*, thus can't take advantage of [[Multi-core chips]]
- Blocking the execution of the program when there is a *CPU Bounded* task