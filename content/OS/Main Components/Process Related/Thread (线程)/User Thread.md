---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-16T23:11:00
Last Date: 2023-12-13T17:29:35+08:00
References: 
---
## Abstract
---
- [[Thread]] managed in the [[User Space]] entirely
- The [[Kernel]] knows nothing about them
- As far as the kernel is concerned, it is managing single-threaded [[Process]]
- The threads run on top of a [[#Runtime System]]
- Each process needs its own private [[Thread#Thread Table]]
- [[Thread]] are implemented by a [[#Examples|library]]
![[thread_implementation_in_user_space.png]]


>[!note] When thread becoming blocked locally
>- Thread calls [[#Runtime System]]
>	1. checks to see if the thread must be put into blocked state. 
>	2. If so, it stores the thread’s registers (i.e., its own) in the thread table, looks in the table for a ready thread to run


## Benefits
---
### Good Compatibility
- [[Thread]] can be implemented on an [[OS]] that does
not support threads.

### Great Performance
- Thread switching is at least an order of magnitude faster than trapping to the kernel 
- No [[Trap Interrupt (陷入)]] is needed
- No [[Context Switch]] needed
- the [[Cache]] need not be flushed

### Great Customisation 
- Allow each [[Process]] to have its own customized **Process Scheduling Algorithms**

### Better Scalability 
- [[Kernel Threads]] require some table space and [[Address Space#Stack Segment]] in the [[Kernel]], which can be a problem if there are a very large number of threads.

## Cons
---
### Declined Performance
- The [[Kernel]] sees a [[Process]] with multiple *user threads* as one single [[Thread]]
- When the running *user thread* has a [[Page Faults]], other *user threads* aren't scheduled to run 

### Risk of Thread Hogging
- If an *user thread* starts running, no other [[User Thread]] in that [[Process]] will ever run unless the first thread voluntarily gives up the [[CPU]]
- Within a single process, there are no [[Interrupts (中断)]], making it impossible to schedule processes round-robin fashion (taking turns) 
- The [[Interrupts (中断)]] from [[#Runtime System]] is *resource intensive*

>[!caution] Programmers generally want threads in applications where the threads block often

## Examples
---
### PThread (C)
- A [[Thread]] package under [[Portable Operating System Interface (POSIX)]]
![[pthread_example.png]]

>[!note] ``pthread_yield()``
>- The [[Library Calls (Library Procedure)]] for *thread* to give [[CPU]] to other *threads*
>- In [[Process]], we don't have this. Because [[Thread]] is in the same program, written by the same programmer, so they collaborate to get fulfil a particular feature

### Others
[Golang Goroutines](https://granulate.io/blog/deep-dive-into-golang-performance/)

## Terminologies
---
### Runtime System
- The **Thread Scheduler** in [[User Space]]
### Scheduler Activations
- Instead of relying on the [[Kernel]] for every thread management decision, the [[#Runtime System]]  is responsible for scheduling [[Thread]]
- Mitigates inefficiency from [[Kernel]]