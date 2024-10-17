---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-05T17:45:00
Last Date: 2024-10-17T17:30:14+08:00
References: 
---
## Abstract
---
- A **fixed-number** group of [[Thread]] that are reused to execute tasks submitted to [[#Task Queue]] by a client. 
- Commonly used in scenarios where tasks are small, numerous, and independent(**stateless**). Examples include web servers handling [[HTTP]] and applications that perform many [[Async IO]]

>[!important]
> The number of threads is usually the **number of cores** the system has. Less will lead to wasted CPU power, more will introduce [[Context Switch]] which has overhead, unless the task isn't **cpu-bounded**.

>[!success] Reduced Overhead
> Creating a new thread is an expensive operation, so reusing threads can improve performance. Especially for [[Kernel Thread]].

>[!success] Improved Resource Management
> A thread pool limits the number of [[Thread]] that can be active at any one time. This ensures the system does not become overwhelmed with too many concurrent threads, which can reduce performance due to [[Context Switch]] or **resource thrashing**.



## Task Queue
---
- Tasks that need to be executed are placed in a queue
- When a [[Thread]] becomes available, it pulls a task from the queue and executes it
- After completing the task, the thread returns to the [[Thread Pool]] to await the next assignment

>[!attention] Thread Safety
> Make sure the Task Queue is manipulated by one Thread at a time. Otherwise, we may we may have more than 1 thread processing the same task - [[Race Condition (竞态条件)]] happens. Thus, we need to have [[Mutex (互斥体)]] on the [[#Task Queue]].

>[!tip] Efficient assignment of task
> Make sure idle Threads don't keep checking Task Queue for tasks. This will result in purely wasted computation.