---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-12-11T23:00:51+08:00
Last Date: 2023-12-11T23:00:51+08:00
References:
---
>[!abstract]
>- The duration an [[Process Scheduler]] allows a [[Process]] to run before [[Preemption]]


>[!caution] Performance issues with small Timeslice
>- [[Context Switch#^99b02a| Context Switching is an expense operation]]
>- So we usually has a [[Minimum Granularity]] to ensure it is still worth to perform [[Context Switch]] on an overall performance perspective
>- It also means the [[Target Latency]] is exceeded when there is enough [[Process]] for [[Minimum Granularity]] to take effect - [[Process]] will seem laggy on user side, so rebooting to clear some [[Process]] will make computer seems faster
>- 