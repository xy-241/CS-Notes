---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-12T18:59:00
Last Date: 2024-02-17T19:18:34+08:00
References: 
---

## Abstract
---
- Responsible to carry out some features of a [[Process (进程)]]
- Thread in a process share the same [[Address Space]] & other per-process items as shown below
![[thread_resources.png]]
</br>

- There are 3 types 
	1. [[User Thread]]
	2. [[Kernel Thread]]
	3. [[Hybrid Threads]]


## Benefits
---
### Fast to Create/Destroy
- 10-100 times faster than [[Process (进程)]]
- Because without the need of [[Context Switch#Latency Number An expensive operation|Expensive Context Switching]]

### Makes Programming Easier
- Different parts of program able to communicate **without** the use of [[Interrupts (中断)]] and [[Inter-Process Communication (IPC)]] etc

### Better Responsiveness
- With [[Multi-threading]], each [[Thread]] runs for a short while, to make all [[Threads]] seem running all the time

>[!example] Powerpoint with Multiple Threads
>An implementation of [[Multi-threading]]
>1. One thread can be used to receive inputs from users
>2. One thread can be used to format the slides
>3. One thread can be used to save the slides automatically on a regular interval




### Benefits over Process
1. Lighter to create and destroy compared to [[Process (进程)]], because it doesn't require [[System Call (系统调用)]] to the underlying [[OS]]
2. Share memory among themselves, avoid [[Memory Page Shifting]] which is expensive 


## Cons
---
### No protection among threads
- One thread can bring down the entire [[Process (进程)]]
- One thread can read, write, or even wipe out another thread’s stack

### Forking
- Should we copy over all the threads or just a single one?

### Interrupt Handling
- For [[Interrupts (中断)#Software Interrupt]] handling - which thread should handle it?



## Terminologies 
---
### Blocking
- *Thread* doesn't do anything while waiting for **IO Operations** or **Network Operations** etc
### Non-blocking
- *Thread* carries out other tasks if the current tasks require it to wait for **IO Operations** or **Network Operations** etc
- Goes back to the current task when the waiting ends - **Call back**
- However, it still blocks when the task is **CPU Bounded**
### Thread Table
- To keep track of the [[Thread]] in a [[Process (进程)]]
- Similar to [[Kernel]]'s [[Process Control Block (PCB)#Process Table]], except that it keeps track only of the per-thread properties
- Managed by the [[User Thread#Runtime System]] in [[User Thread]] & [[Kernel]] in [[Kernel Thread]]