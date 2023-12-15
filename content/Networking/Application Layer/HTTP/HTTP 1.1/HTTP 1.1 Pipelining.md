---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-16T23:56:29+08:00
Last Date: 2023-08-16T23:56:29+08:00
References:
---
>[!abstract] Allows send multiple [[HTTP Request]] in a single [[TCP Connection]], so one failed [[HTTP Request]] cant block other [[HTTP Response]]


>[!caution] [[HTTP Response]] must be received in the order of sending the [[HTTP Request]]. This is a problem, because we may lose the 1st [[HTTP Request]], then the second [[HTTP Response]] becomes the 1st [[HTTP Request]]
>![[http_pipelining.png]]