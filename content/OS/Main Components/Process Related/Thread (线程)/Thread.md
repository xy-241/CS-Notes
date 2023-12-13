---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-12T18:59:00
Last Date: 2023-12-13T17:26:46+08:00
References: 
---

## Abstract
- Responsible to carry out some features of a running program - [[Process]]

>[!note] [[Thread]] in a process share the same [[Address Space]]
>![[thread_resources.png]]
>- Per-process items can be accessed by all [[Thread]]


## 3 ways to implement
1. [[User Thread]]
2. [[Kernel Threads]]
3. [[Hybrid Threads]]



## Benefits
### Fast to create/destroy
- 10-100 times faster than [[Process]]
- Because without the need of [[Context Switch#Latency Number An expensive operation|Expensive Context Switching]]

### Makes programming easier
- Different parts of program able to communicate **without** the use of [[Interrupts (中断)]] and [[Inter-Process Communication (IPC)]] etc

### Better responsiveness aka more user friendly
- With [[Multi-threading]], each [[Thread]] runs for a short while, to make all [[Threads]] seem running all the time
#### Example: Powerpoint with [[Multi-threading]]
1. One thread can be used to receive inputs from users
2. One thread can be used to format the slides
3. One thread can be used to save the slides automatically on a regular interval


### 2 benefits over [[Process]]
1. Lighter to create and destroy compared to [[Process]], because it doesn't require [[System Call (系统调用)]] to the underlying [[OS]]
2. Share memory among themselves, avoid [[Memory Page Shifting]] which is expensive 


## Cons
>[!caution] No protection among threads
>- One thread can bring down the entire [[Process]]
>- One thread can read, write, or even wipe out another thread’s stack

>[!caution] [[fork()]]
>- Should we copy over all the threads or just a single one?

>[!caution] [[Signal (Software Interrupt)]] handling - which thread should handle it

## Common Procedures


## Terminologies 
### Blocking
- *Thread* doesn't do anything while waiting for *IO Operations* or *Network Operations* etc
### Non-blocking
- *Thread* carries out other tasks if the current tasks require it to wait for *IO Operations* or *Network Operations* etc
- Goes back to the current task when the waiting ends - *Call back*
- However, it still blocks when the task is *CPU Bounded*
### Thread Table
- To keep track of the [[Thread]] in a [[Process]]
- Similar to [[Kernel]]'s [[Process Control Block (PCB)#Process Table]], except that it keeps track only of the per-thread properties
- Managed by the [[User Thread#Runtime System]] in [[User Thread]] & [[Kernel]] in [[Kernel Threads]]
