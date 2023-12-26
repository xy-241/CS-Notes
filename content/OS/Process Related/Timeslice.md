---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-05T12:16:44+08:00
Last Date: 2023-12-26T22:44:16+08:00
References: 
---
## Abstract
---
- Also known as *Quantums*
- The period of time for which a [[Process]] is allowed to run in a [[Multi-tasking#Preemptive Multitasking]] system


## Minimum Granularity
---
- [[Context Switch]] is [[Context Switch#An expensive operation]]
- So we have a *Minimum Granularity*,  a lower bound to the [[Timeslice]], guaranteeing a minimum amount of *CPU time* for each process. In [[Linux]], it is 0.75ms
- This minimises context switching overhead and improving overall system efficiency

## Target Latency 
---
- The desired maximum amount of time that a [[Process]] should wait before being given a chance to run again. So the process doesn't seem laggy on the user side
- In [[Linux]], it is 6ms
- [[#Target Latency]] is exceeded when there is enough [[Process]] for [[#Minimum Granularity]] to take effect - Process will seem laggy on user side, so rebooting to clear some Process will make computer seems faster


## 2 Types of Scheduling
---
### Fixed Timeslice Round-Robin Scheduling
- Give every [[Process]] the same [[Timeslice]], perhaps10 ms, and cycle through tasks in order

>[!caution]  Laggy Situation
>When there is a lot of [[Process]], and each of them gets a fixed [[Timeslice]], the one cycle of all Process will take a significant amount of time

### Dynamic Timeslice Round-Robin Scheduling
- [[Timeslice]] = [[#Target Latency]] / total [[Process]]
![[Dynamic_timeslice_round-robin_scheduling.png]]
- Used in modern [[Process Management#Process Scheduler]]

>[!success] Helps to make each Process be more responsive
>Ensures each Process will get to run again before it seems laggy to the user. As long [[#Minimum Granularity]] is ensured and [[#Target Latency]] is not exceeded 

>[!success]  Process gets to run faster when there is less Process
>The [[Timeslice]] is a ratio of Target Latency and total Process. Less process means more time for each process