---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-18T19:12:00
Last Date: 2024-08-10T16:33:22+08:00
References: 
---
## Abstract
---
- A deadlock occurs when two or more [[Process (进程)|processes]] are **waiting for each other** to **release locks on resources** they need to continue processing. This results in a situation where **none of the processes can proceed**, and they end up **waiting indefinitely**


>[!important]
> When all [[#Coffman conditions|Coffman conditions]] are fulfilled, it doesn't guarantee a deadlock, it just makes the system **prone to one**. A deadlock can only happen if there is **more than one lock**.

>[!success] Solution
> We have [[#Deadlock Handling Strategies]] to handle deadlocks.

## Coffman conditions
---
- There are 4 conditions in Coffman Conditions - [[#Mutual Exclusion]], [[#Hold and Wait]], [[#No Preemption]] & [[#Circular Wait]]

>[!important]
> Coffman conditions are useful for understanding and diagnosing [[Deadlock (死锁)|deadlock situations]]. They provide a foundation for designing algorithms and systems that avoid deadlocks.


### Mutual Exclusion
- At least one resource must be held in a **non-shareable mode**
- This means that **only one** [[Process (进程)]] can use the resource at any given time. If another process requests the resource, that process must wait until the resource has been released


### Hold and Wait
- A [[Process (进程)|process]] must be holding at least one resource and waiting to acquire additional resources that are currently held by other processes.

### No Preemption
- Resources cannot be preempted from a process. They can only be released by the process holding them, typically after the process has finished its task.

### Circular Wait
- There exists a set of waiting processes such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, and so on, with Pn waiting for a resource held by P0

## Deadlock Handling Strategies 
---
### Deadlock Prevention
- Ensure that at least one of the [[#Coffman conditions]] does not hold. For example, by implementing a **resource allocation policy** that ensures no [[#Circular Wait]]


### Deadlock Avoidance 
- The system has some additional a **prior information** available
- The most famous algorithm used for deadlock avoidance is the [[Banker's Algorithm]]

### Deadlock Detection
- The system periodically checks for [[Deadlock (死锁)]]. If detected, actions are taken to recover from it

### Deadlock Ignorance
- Simply ignore the problem and assume [[Deadlock (死锁)]] will never occur. 
- This is suitable for some environments where deadlocks are rare and the overhead of other handling strategies is not justified

