---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-05T12:16:44+08:00
Last Date: 2023-12-24T16:29:31+08:00
References: 
---
>[!abstract]
>- [[Timeslice]] = [[Timeslice#Target Latency]] / (total [[Process]] - 1), where total process is >1
>![[Dynamic_timeslice_round-robin_scheduling.png]]
>- Used in modern [[Process Scheduler]]

>[!success] Helps to make each [[Process]] be more responsive
>- Ensures each [[Process]] will get to run again before it seems laggy to the user

>[!success] [[Process]] gets to run faster when there is less [[Process]]
>- The [[Timeslice]] is a ratio of Target Latency and total [[Process]]