---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-16T23:11:00
Last Date: 2025-03-16T17:16:51+08:00
References: 
description: User-space threads offer enhanced performance and portability by managing threads in user space with no kernel intervention. They are customizable, scalable, and faster than kernel-based threads. However, they face challenges like thread hogging, requiring efficient thread management via runtime systems and schedulers for optimal execution.
---
## Abstract
---
![[thread_implementation_in_user_space.png|300]]


- [[Thread]] are managed entirely in [[User Space]], running on top of a [[#Runtime System]]. A user thread library is used to implement the threads
- Each process maintains its own private [[Thread#Thread Table|thread table]], in contrast to the [thread table managed by the kernel for kernel threads](thread_implementation_in_kernel_space.png)

>[!important]
> With a pure user-space threading model (many-to-one), the [[Kernel|kernel]] perceives a [[Process (进程)|process]] with multiple [[User Thread|user threads]] as a **single [[Kernel Thread|kernel thread]]**. 
> 
> When a [[Page Fault|page fault]] occurs, it is not possible to schedule another thread within the same process to run. This limitation can be addressed by adopting a **kernel-supported threading model,** such as a [[Kernel Thread|one-to-one kernel thread mapping]] or a [[Hybrid Thread|many-to-many hybrid threading model]]

>[!important] Key advantages
> **Portability**: Threads can be implemented on a kernel that does not natively support threads.
> 
> **Performance**: Thread switching is significantly faster than [[Kernel Thread|kernel-based switching]], with no need for [[Trap Interrupt (陷入)]] or [[Context Switch]], and the [[CPU Cache]] does not need to be flushed.
> 
> **Customisation**: Each process can implement its own **customised process scheduling algorithms** without altering the kernel code.
> 
> **Scalability**: Unlike [[Kernel Thread]], which require additional table space and [[Address Space#Stack Segment]] in the kernel, user threads avoid these limitations, supporting better scalability for large numbers of threads.

>[!caution] Risk of thread hogging
> If a user thread starts running, no other user thread in the same process will execute unless the first thread voluntarily relinquishes the [[CPU]]. Within a single process, there are no [[Interrupts (中断)]], making it impossible to schedule threads in a round-robin manner.
> 
> Implementing [[Interrupts (中断)]] in the [[#Runtime System]] is **resource-intensive**.


## Runtime System
---
- Contains a **Thread Scheduler** in [[User Space]] for managing [[User Thread]]

>[!important] Thread blocking
> The thread calls the runtime system to check if it needs to be put into a blocked state. If so, the runtime system stores the thread’s registers (i.e., its state) in the thread table and searches the table for a thread that is ready to run.

### Scheduler Activations
- Instead of relying on the [[Kernel]] for every thread management decision, the [[#Runtime System]] is responsible for scheduling [[Thread]]
- This approach mitigates inefficiencies caused by kernel involvement in thread management





