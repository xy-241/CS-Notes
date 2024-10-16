---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:35:03+08:00
Last Date: 2024-10-16T22:09:28+08:00
References: 
---
## Abstract
---
- A [[HTTP 1.2]] feature powered by [[HTTP Stream]], solves [[Head-of-Line Blocking (队头堵塞)#HTTP Head-of-Line Blocking]] in [[HTTP 1.1]]. Each request-response pair is assigned a unique identifier (stream), allowing the client and server to send and **receive responses out of order**, independent of when the requests were made.
- Usually comes with [[TLS]]

>[!success] Better performance
> With multiple [[HTTP Request]] in one [[TCP Connection]] at the same time, waiting time reduced greatly aka better performance.


>[!attention]
> However, we will still have the [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking]]. In some cases, [[HTTP 1.1]] performs better with multiple [[TCP Connection]].