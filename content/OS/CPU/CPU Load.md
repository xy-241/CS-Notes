---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - os
Creation Date: 2024-12-15, 14:51
Last Date: 2024-12-15T15:14:29+08:00
References: 
draft: 
description: CPU load measures the number of processes using or waiting for the CPU at a given time, with optimal load typically around 0.7 per CPU core to handle real-world spikes. On Unix-like systems, high load may indicate I/O bottlenecks rather than CPU contention, leading to increased response times and performance delays.
---
## Abstract
---
- CPU load measures the **number of processes that are either using or waiting for the [[CPU]]** at a specific time

>[!question] What does the CPU Load number mean?
> If the load is low, [[Process (进程)|processes]] can access the CPU without waiting. If the load exceeds the number of CPUs, processes form a queue, leading to [[#CPU Contention]]. For a single-CPU system, a **load < 1** indicates no waiting.

>[!important] Guidelines for optimal load
> A steady load of `1` per [[CPU#CPU Core|core]] ensures optimal CPU utilisation.
> 
> However, to accommodate real-world spikes, aiming for a load of **0.7 per CPU** is more practical.

>[!attention] Unix system load calculation caveat
> On [[Unix#Unix-like|Unix-like systems]], high load might indicate **I/O bottlenecks** rather than actual CPU contention. 
> 
> The load calculation includes **processes blocked in [[IO Device#IO Operation]]** (e.g., waiting for disk or network), which can inflate load numbers even if the CPU isn't fully utilised.
> 
> For example, A **15-minute load average of 37**, combined with CPU usage not being at **100%**, strongly suggests an **I/O bottleneck** or processes waiting on resources other than CPU (like disk, network, or memory contention).


### CPU Contention
- Too many [[Process (进程)|processes]] competing for [[CPU|CPU resources]]

>[!attention] Increased response time
> Processes experience **longer wait times for CPU access**, leading to significant delays, such as slower application performance.


## References
---
- [CPU Usage vs Load. Don’t confuse the two! | by Benny Ou | ESTL Lab Notes](https://estl.tech/cpu-usage-vs-load-ecca22287b21)