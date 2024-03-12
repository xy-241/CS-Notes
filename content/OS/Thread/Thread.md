---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-12T18:59:00
Last Date: 2024-03-12T17:14:57+08:00
References: 
---

## Abstract
---
- Responsible to carry out some features of a [[Process (进程)]]
- Threads in a process share the same [[Address Space]] & other per-process items as shown below

![[thread_resources.png|500]]
</br>

- There are 3 types - [[User Thread]], [[Kernel Thread]] & [[Hybrid Threads]]

>[!success]- More Performant
> Since thread doesn't have the need to perform [[Context Switch#An expensive operation|Expensive Context Switching]]. It is 10-100 times faster than Process.
> 
> Faster to create and destroy compared to Process, because it can be created without making [[System Call (系统调用)]] to the underlying [[Kernel]].

>[!success]- Easier to program
> Unlike process, different parts of program able to communicate **without** the use of [[Interrupts (中断)]] and [[Inter-Process Communication (IPC)]] etc.

>[!caution]- No protection among threads
> One thread can read, write, or even wipe out another thread’s stack. It is also able to bring down the entire Process.

>[!caution]- Forking
> Should we copy over all the threads or just a single one?

>[!caution]- Interrupt Handling
> For [[Interrupts (中断)#Software Interrupt]] handling - which thread should handle it?

### Blocking Thread
- [[Thread]] doesn't do anything while waiting for **IO Operations** or **Network Operations** etc
### Non-blocking Thread
- Thread carries out other tasks if the current tasks require it to wait for **IO Operations** or **Network Operations** etc
- Goes back to the current task when the waiting ends - **Call back**
- However, it still blocks when the task is **CPU Bounded**


## Thread Table
---
- To keep track of the [[Thread]] in a [[Process (进程)]]
- Similar to [[Kernel]]'s [[Process Control Block (PCB)#Process Table]], except it only keeps track of the [per-thread items](thread_resources.png)
- Managed by the [[User Thread#Runtime System]] for [User Thread](thread_implementation_in_user_space.png) & Kernel for [Kernel Thread](thread_implementation_in_kernel_space.png)