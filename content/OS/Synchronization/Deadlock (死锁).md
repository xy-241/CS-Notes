---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-18T19:12:00
Last Date: 2023-12-14T19:06:05+08:00
References: 
---
## Abstract
---
- Waiting for something for *infinite time*, in which there is *no progress* for waiting [[Process (进程)]]
- When all [[#Coffman conditions]] are fulfilled, it doesn't guarantee one, just prone to one
- We have [[#Handling Strategies]] to handle deadlocks
- Can only happen if there is *more than one lock*


## Coffman conditions
---
- Useful for understanding and diagnosing [[Deadlock (死锁)]] situations
- Provide a foundation for designing algorithms and systems that avoid deadlocks
- 4 *necessary* conditions - [[#Mutual Exclusion]], [[#Hold and Wait]], [[#No Preemption]] & [[#Circular Wait]]
### Mutual Exclusion
- At least one resource must be held in a *non-shareable mode*.
- This means that only *one* [[Process (进程)]] can use the resource at any given time
- If another process requests the resource, that process must wait until the resource has been released

### Hold and Wait
- A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes

### No Preemption
- Resources cannot be [[Preemption]] from a process. They can only be released by the process holding them, typically after the process has finished its task.

### Circular Wait
- There exists a set of waiting processes such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, and so on, with Pn waiting for a resource held by P0

## Handling Strategies 
---
### Prevention
- Ensure that at least one of the [[[Deadlock (死锁)#Coffman conditions]] does not hold. For example, by implementing a **resource allocation policy** that ensures no [[#Circular Wait]]
- 
- ### Avoidance 
- The system has some additional a *prior information* available.
- The most famous algorithm used for deadlock avoidance is the [[Banker's Algorithm]]

### Detection
- The system periodically checks for [[Deadlock (死锁)]]. If detected, actions are taken to recover from it

### Ignorance
- Simply ignore the problem and assume Deadlock (死锁) will never occur. 
- This is suitable for some environments where deadlocks are rare and the overhead of other handling strategies is not justified

