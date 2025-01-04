---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-12T18:59:00
Last Date: 2025-01-04T23:19:57+08:00
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

## Thread Interleaving
---
```c
int x = 0;
void thread1() {
    x += 1; // Operation 1
    x *= 2; // Operation 2
}
void thread2() {
    x += 3; // Operation 3
    x *= 4; // Operation 4
}

// Sequential Execution
x = 0 → x + 1 = 1 → x * 2 = 2 → x + 3 = 5 → x * 4 = 20

// Interleaved Execution
x = 0 → x + 3 = 3 (Operation 3)
      → x + 1 = 4 (Operation 1)
      → x * 4 = 16 (Operation 4)
      → x * 2 = 32 (Operation 2)
```
- The way multiple [[Thread|threads]] execute [[Concurrency (并发)|concurrently]], where their **operations are interleaved in an unpredictable sequence** due to the **scheduling decisions** of the [[Kernel|kernel]] or [[User Thread#Runtime System|runtime system]]

>[!important]
> Since threads **often share resources** (e.g., memory, variables, or files), the order in which their instructions are executed can **affect the outcome of a program**.
> 
> The **non-deterministic nature** of thread interleaving **makes bugs hard to reproduce and debug**.
> 
> It can lead to problems like [[Race Condition (竞态条件)|race conditions]] if not handled carefully with [[Synchronisation (同步)|synchronisation techniques]].


## PThread
---
![[pthread_example.png|500]]

- A [[POSIX]] library for [[Thread]] 

>[!code] `pthread_yield()`
> Unlike [[Process (进程)|processes]], [[Thread|threads]] within the same program can collaborate to fulfil a particular feature, which is why functions like `pthread_yield()` exist to allow threads to **hand over execution** to other threads.