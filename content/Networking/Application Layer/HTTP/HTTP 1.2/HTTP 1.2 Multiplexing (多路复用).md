---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:35:03+08:00
Last Date: 2023-08-21T10:35:03+08:00
References:
---
>[!abstract] Used to solve [[Head-of-Line Blocking (队头堵塞)]] in [[HTTP 1.1]]
>- Allows send multiple [[HTTP Request]] in a single [[TCP Connection]], so one failed [[HTTP Request]] cant block other [[HTTP Response]]
>
>>[!caution] But we will still have the [[TCP Head-of-Line Blocking]]
>>In some cases, [[HTTP 1.1]] performs better with multiple [[TCP Connection]]


>[!success] [[HTTP Head-of-Line Blocking]] solved by [[HTTP Stream]]

>[!success] With multiple [[HTTP Request]] in one [[TCP Connection]], waiting time reduced greatly aka better performance

>[!success] Usually comes with [[TLS]]