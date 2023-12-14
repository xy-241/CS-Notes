---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-19T17:43:54+08:00
Last Date: 2023-08-19T17:43:54+08:00
References:
---
>[!abstract] An [[Abstraction]] of [[HTTP Request]]/[[HTTP Response]] into [[HTTP Frame]]


>[!success] Each stream(a pair of [[HTTP Request]]/[[HTTP Response]]) doesn’t need to be sent in order in the same [[TCP Connection]], [[HTTP Response]] be received in a different order of sending the [[HTTP Request]]
>- Achieved with [[HTTP Stream]] ID (流标示符) in the [[HTTP Frame]]
>