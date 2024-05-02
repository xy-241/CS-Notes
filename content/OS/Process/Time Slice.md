---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-05T12:16:44+08:00
Last Date: 2024-05-02T17:10:23+08:00
References: 
---
## Abstract
---
- Also known as **Quantums**
- The **period of time** for which a [[Process (进程)]] is allowed to run in a [[Concurrency (并发)#Preemptive Scheduling]] system

>[!attention]
> The **length of each time slice** can be critical to balancing **system performance** and **process responsiveness** - if the time slice is **too short** then the [[Process Management#Process Scheduler]] will **consume too much processing time**, but if the time slice is **too long**, processes will take **longer to respond to input**.
> 
> Thus, we have [[#Minimum Granularity]] to **control the resource usage of process scheduler** and [[#Target Latency]] to **ensure the responsiveness of the system**.


## Minimum Granularity
---
- Minimum Granularity is the **minimum time period** the [[Time Slice]] should have, this guarantees a minimum amount of **CPU time** for each process gets before being [[Concurrency (并发)#Preemptive Scheduling|preempted]]

>[!success] Control resource usage of process scheduler
> Process preemption is an **expensive operation**, it involves [[Context Switch]] and change in [[Privilege Level]]. Thus, minimum granularity ensures the resource cost of process scheduler is controlled.


>[!info]
> In [[Linux Kernel]], the minimum granularity is `0.75ms`.

## Target Latency 
---
- The **maximum amount of time** that a [[Process (进程)]] **should wait** before being given a chance to run again 

>[!success] Ensure the responsiveness of the system
> The target latency configured is **not noticeable to users**, so the process doesn't seem laggy on the user side.

>[!info]
> **Target latency will exceed** when we have **too many process** and we need to **ensure** [[#Minimum Granularity]]. That is why our computers are laggy when we are running too many programs and why a **rebooting helps to speed up the computer**.

>[!info]
> In [[Linux Kernel]], the minimum granularity is `6ms`.


