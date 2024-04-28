---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-18T12:59:13+08:00
Last Date: 2024-04-29T01:52:14+08:00
References: 
---
## Abstract
---
- When one object blocks other object or following object from progressing 


## HTTP Head-of-Line Blocking
---

![[http1.1_HOL_blocking.png|500]]

- Happens when there is **only one single** [[TCP Connection]] like [[HTTP 1.0]]
- Above shows when we aren't able to receive the CSS file. We aren't able to request for the JS file. Thus, the CSS file is blocking other files in the queue from be requested & received

>[!success] Solution
> **Software Solution**
> 1. Having different domains serving different object, the browser will have a different [[TCP Connection]] with each domain. Thus, if one [[HTTP Request]] failed, it doesn't block browser from retrieving object from other domains
> 2. Technologies like [[Webpack]] consolidate many Object into a few object to minimise the chance of blocking
> 
> **Networking Solution**
> - [[HTTP Multiplexing (多路复用)]]





## TCP Head-of-Line Blocking
---
- When one of the many [[TCP Segment]] is lost, we need to wait for it to be resent & receive, in order to proceed with the receiving of the rest of the [[TCP Segment]]. All the [[HTTP Response]] in that [[TCP Connection]] is blocked!

>[!success] Solution 
> Solved by [[HTTP 1.3]].
