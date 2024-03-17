---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - go
Creation Date: 2023-08-16T23:11:00
Last Date: 2024-03-16T20:33:41+08:00
References: 
---
## Abstract
---
![[thread_implementation_in_user_space.png|300]]

- [[Thread]] is managed in the [[User Space]] entirely. The thread is running on top of a [[#Runtime System]]. An [[#User Thread Library]] is used to implement the thread
- Each process needs its own private [[Thread#Thread Table]], unlike [thread table managed by kernel for kernel thread](thread_implementation_in_kernel_space.png)
- The [[Kernel]] knows nothing about them. As far as the kernel is concerned, it is managing single-threaded [[Process (进程)]]

>[!success]- Good Compatibility
> Thread can be implemented on an kernel that does not support threads.

>[!success]- Great Performance
> Thread switching is at least **an order of magnitude faster** than trapping to the kernel. No [[Trap Interrupt (陷入)]] and [[Context Switch]] are needed. The [[CPU Cache]] also don't need to be flushed.

>[!success]- Easy to customise
> Each Process can have its own customized **Process Scheduling Algorithms** without the need to modify the kernel codes.

>[!success]- Better Scalability
> [[Kernel Thread]] require some table space and [[Address Space#Stack Segment]] in the Kernel, which can be a problem if there is a very large number of threads.

>[!caution]- Declined Performance
> Since Kernel sees a Process with multiple user threads as **one single thread**, when the running user thread has a [[Page Faults]], other user threads can't be scheduled to run.

>[!caution]- Risk of Thread Hogging
> If an user thread starts running, no other User Thread in that Process will ever run unless the first thread voluntarily gives up the [[CPU]]. Within a single process, there are no [[Interrupts (中断)]], making it impossible to schedule processes round-robin fashion.
> 
> Implementing [[Interrupts (中断)]] in [[#Runtime System]] is **resource intensive**.

>[!note]- When thread is blocked locally
> Thread calls the Runtime System to check if the thread must be put into blocked state. If so, Runtime System stores the thread’s registers (i.e., its own) in the thread table and looks in the table for a thread that is ready to run.


## Runtime System
---
- Contains a **Thread Scheduler** in [[User Space]] for [[User Thread]]
### Scheduler Activations
- Instead of relying on the [[Kernel]] for every thread management decision, the [[#Runtime System]]  is responsible for scheduling [[Thread]]
- Mitigates inefficiency from Kernel

## User Thread Library
---
### Golang Goroutines
- [[User Thread]] managed by the Go runtime. This design decision allows goroutines to be **[lightweight(2kb)](https://github.com/golang/go/blob/f296b7a6f045325a230f77e9bda1470b1270f817/src/runtime/stack.go#L72)** and **efficiently multiplexed** onto a smaller number of [[Kernel Thread]]
- The Go runtime scheduler handles the mapping of goroutines to kernel threads, utilizing techniques like **multiplexing** and **asynchronous I/O** to optimize performance
- Refer to [here](https://granulate.io/blog/deep-dive-into-golang-performance/) for more information


