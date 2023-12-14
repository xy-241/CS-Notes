---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-18T19:12:00
Last Date: 
References:
---
## Abstract
---
- Useful for understanding and diagnosing [[Deadlock (死锁)]] situations
- Provide a foundation for designing algorithms and systems that avoid deadlocks
- 4 *necessary* conditions - [[#Mutual Exclusion]], [[#Hold and Wait]], [[#No Preemption]] & [[#Circular Wait]]


## Terminologies
---
### Mutual Exclusion
- At least one resource must be held in a *non-shareable mode*.
- This means that only *one* [[Process]] can use the resource at any given time
- If another process requests the resource, that process must wait until the resource has been released

### Hold and Wait
- A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes

### No Preemption
- Resources cannot be [[Preemption]] from a process. They can only be released by the process holding them, typically after the process has finished its task.

### Circular Wait
- There exists a set of waiting processes such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, and so on, with Pn waiting for a resource held by P0