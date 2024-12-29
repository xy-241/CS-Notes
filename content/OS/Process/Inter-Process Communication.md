---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-16T10:11:53+08:00
Last Date: 2024-12-29T12:40:44+08:00
References: 
description: Inter-Process Communication (IPC) coordinates processes or threads via Shared Memory or Message Passing. Shared memory enables fast communication but requires synchronization to prevent race conditions. Message passing, though slower, uses system calls and queues, facilitating communication across separate address spaces.
---
## Abstract
---
- Communication is essential to coordinate activities among processes or threads that cooperate to complete a task. IPC (Inter-Process Communication) allows two isolated [[Process (进程)|processes]] or multiple [[Thread|threads]] within a single process to communicate with each other

>[!important]
> There are two primary categories of IPC: [[#Shared Memory]] and [[#Message Passing]].
> 
> We also utilize [[Synchronisation (同步)]] methods like [[Mutex (互斥体)]] and [[Semaphore (信号量)]] to prevent [[Race Condition (竞态条件)]].



## Shared Memory 
---
- A **shared memory location** exists in the [[Address Space]] of two [[Process (进程)|processes]]
- A [[System Call (系统调用)]] is required only to set up this shared memory. Subsequent communication between processes does not require further [[System Call (系统调用)|system calls]]

>[!important]
> Since the [[Kernel]] does not manage the shared memory, both processes must agree on the format and conventions for writing to it.
> 
> Most importantly, [[Synchronisation (同步)]] is required to avoid concurrent writes, which could result in overwritten or inconsistent changes.



## Message Passing
---
- The [[Address Space]] of each [[Process (进程)]] remains separate, and the processes **communicate by sending messages**
- Common implementations of message passing include [[Pipe (管道)]], [[Socket]], [[Interrupts (中断)#Upcall]], and RPC (Remote Procedure Call)

>[!important]
> A mailbox exists between the two processes, residing in the [[Kernel|kernel]]'s [[Address Space|address space]]. Therefore, each process must use [[System Calls (系统调用)]] to send and receive messages. This makes message passing slower than [[#Shared Memory]], as communication always requires invoking system calls.
> 
> For unidirectional communication, one queue is sufficient. For bidirectional communication, two queues are required.

>[!important] Listening port 
> A listening port is a message passing queue maintained by a process to receive messages from multiple processes.
> 
> It is used to handle requests for establishing new communication links between processes.


## References
---
- [IPC: To Share Memory Or To Send Messages - YouTube](https://youtu.be/Y2mDwW2pMv4?si=Lt4Vyto7yHSnAO_z)