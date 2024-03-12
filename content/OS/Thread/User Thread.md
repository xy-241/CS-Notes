---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-16T23:11:00
Last Date: 2024-03-12T17:32:54+08:00
References: 
---
## Abstract
---
![[thread_implementation_in_user_space.png|300]]

- [[Thread]] managed in the [[User Space]] entirely
- The [[Kernel]] knows nothing about them. As far as the kernel is concerned, it is managing single-threaded [[Process (进程)]]
- The threads run on top of a [[#Runtime System]]
- Each process needs its own private [[Thread#Thread Table]], unlike the [thread table in kernel thread](thread_implementation_in_kernel_space.png)
- [[Thread]] are implemented by a [[#User Thread Library]]




>[!success] Good Compatibility
> Thread can be implemented on an kernel that does not support threads.

>[!success] Great Performance
> Thread switching is at least **an order of magnitude faster** than trapping to the kernel. No [[Trap Interrupt (陷入)]] and [[Context Switch]] are needed. The [[CPU Cache]] also don't need to be flushed.

>[!success] Easy to customise
> Each Process can have its own customized **Process Scheduling Algorithms** without the need to modify the kernel codes.

>[!success] Better Scalability
> [[Kernel Thread]] require some table space and [[Address Space#Stack Segment]] in the Kernel, which can be a problem if there is a very large number of threads.

>[!caution] Declined Performance
> Since Kernel sees a Process with multiple user threads as **one single thread**, when the running user thread has a [[Page Faults]], other user threads can't be scheduled to run.


>[!caution] Risk of Thread Hogging
> If an user thread starts running, no other User Thread in that Process will ever run unless the first thread voluntarily gives up the [[CPU]]. Within a single process, there are no [[Interrupts (中断)]], making it impossible to schedule processes round-robin fashion.
> 
> Implementing [[Interrupts (中断)]] in [[#Runtime System]] is **resource intensive**.

>[!note]- When thread is blocked locally
> Thread calls the Runtime System to check if the thread must be put into blocked state. If so, Runtime System stores the thread’s registers (i.e., its own) in the thread table and looks in the table for a ready thread to run


## User Thread Library
---
### PThread (C)
- A [[Thread]] package under [[POSIX]]
![[pthread_example.png]]

>[!note] ``pthread_yield()``
>- The [[Library Call]] for *thread* to give [[CPU]] to other *threads*
>- In [[Process (进程)]], we don't have this. Because [[Thread]] is in the same program, written by the same programmer, so they collaborate to get fulfil a particular feature

### Others
- [Golang Goroutines](https://granulate.io/blog/deep-dive-into-golang-performance/)

## Terminologies
---
### Runtime System
- The **Thread Scheduler** in [[User Space]]
### Scheduler Activations
- Instead of relying on the [[Kernel]] for every thread management decision, the [[#Runtime System]]  is responsible for scheduling [[Thread]]
- Mitigates inefficiency from Kernel