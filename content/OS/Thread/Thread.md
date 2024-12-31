---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-12T18:59:00
Last Date: 2024-12-31T13:06:47+08:00
References: 
description: Threads within a process share the same address space, allowing for faster execution and easier communication without system calls. Types include User, Kernel, and Hybrid Threads. Threads are more performant, easier to program, but lack protection between them, leading to potential issues.
---

## Abstract
---
![[thread_resources.png|500]]

- Responsible for executing specific features of a [[Process (进程)|process]]

- Threads within a process share the same [[Address Space]] and other per-process resources, as illustrated above. So threads within the same process **can share memory without** having to use any [[System Call (系统调用)]]

- There are 3 types - [[User Thread]], [[Kernel Thread]] & [[Hybrid Thread]]

>[!success] More Performant
> Threads avoid the need for expensive [[Context Switch#Process Context Switch|context switching]], making them **10-100 times faster** than processes.
> 
> They are also faster to create and destroy compared to processes because they do not require a [[System Call (系统调用)]] to the underlying [[Kernel]].

>[!success] Easier to program
> Unlike processes, different parts of a program can communicate **without** using [[Interrupts (中断)]] or [[Inter-Process Communication]], making threads easier to work with.

>[!caution] Lack of protection between threads
> Threads within the same process can access each other's stack, potentially leading to issues like one thread overwriting another's data. This lack of isolation can cause the entire process to fail.

>[!caution] Forking
> When forking a process, should all threads be copied, or just the main one?

>[!caution] Interrupt Handling
> For handling [[Interrupts (中断)#Software Interrupt]], which thread should manage it?


### Blocking Thread
- Also known as **Synchronized Threads**
- A [[Thread]] remains idle while waiting for **IO Operations** or **Network Operations**, etc.
- This is straightforward to implement and understand!




## Thread Table
---
- Tracks the [[Thread|threads]] in a [[Process (进程)|process]]
- Similar to the [[Kernel]]'s [[Process Control Block (PCB)#Process Table|process table]], but it specifically tracks [per-thread items](thread_resources.png)
- Managed by the [[User Thread#Runtime System|runtime system]] for [[User Thread]] and by the kernel for [[Kernel Thread]]


## PThread
---
![[pthread_example.png|500]]

- A [[POSIX]] library for [[Thread]] 

>[!code] `pthread_yield()`
> Unlike [[Process (进程)|processes]], [[Thread|threads]] within the same program can collaborate to fulfil a particular feature, which is why functions like `pthread_yield()` exist to allow threads to **hand over execution** to other threads.