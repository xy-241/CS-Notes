---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:35:03+08:00
Last Date: 2024-01-06T21:50:52+08:00
References: 
---
## Abstract
---
- A [[HTTP 1.2]] feature
- Solves [[Head-of-Line Blocking (队头堵塞)#HTTP Head-of-Line Blocking]] in [[HTTP 1.1]]
- Allows send multiple [[HTTP Request]] in a single [[TCP Connection]], so one failed HTTP Request cant block other [[HTTP Response]]
- This is powered by [[HTTP Stream]]
- With multiple [[HTTP Request]] in one [[TCP Connection]], waiting time reduced greatly aka better performance
- Usually comes with [[TLS]]

>[!caution] But we will still have the [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking]]
>In some cases, [[HTTP 1.1]] performs better with multiple [[TCP Connection]]
