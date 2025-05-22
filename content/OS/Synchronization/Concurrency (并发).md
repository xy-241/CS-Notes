---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-24T12:23:00
Last Date: 2025-05-22T15:31:03+08:00
References: 
draft: 
description: Concurrency manages multiple tasks at once through context switching or multiple cores, enhancing CPU utilization and user experience, while parallelism executes tasks simultaneously on separate cores for true multitasking.
title: Concurrency vs. Parallelism vs. Multitasking vs. Time-Sharing
---
## Concurrency (并发)
---
>[!quote]
> Concurrency is about **dealing with lots of things at once**, but parallelism is about **doing lots of things at once**.

- A way to run multiple [[Thread]] or [[Process (进程)]] at the same time, instead of running one thread or process after another thread or process is done
- We can achieve concurrency with multiple [[CPU#CPU Core]], this is also known as [[#Parallelism (并行性)]]. We can also achieve concurrency with a single CPU core by performing [[Context Switch]]


>[!success] Maximise CPU utilisation + better user experience
> [[CPU]] is idle when the process and thread are performing non CPU-bounded tasks like reading and writing to [[OS/IO/IO Device|IO Device]] and waiting a result from a remote [[Host#Server]] etc. By performing context switch, we can let another process or thread to use CPU to complete its computation. Parallelism allows us to run multiple threads of processes at the same, if we have 4 CPU cores, it means we can have 4 processes/threads consuming the CPU at the same time.
> 
> The above describes about how concurrency helps with CPU utilisation. Concurrency also ensures users feel everything is running at the same like **browsing the web and playing music at the same time**. 

>[!important] Concurrency isn't always the answer
> It is important to first understand the type of work before trying to optimise it with concurrency. 
> 
> CPU-bound tasks won’t benefit much, since they already max out the CPU. Concurrency mainly helps when the CPU isn’t fully utilised. In fact, it comes with overhead — [[Context Switch|context switching]] aren't free. 
> 
> IO-bound work, on the other hand, tends to block the CPU and can be optimised through concurrency. I demonstrated this in my attempt to optimise a simple web server I built. You can check out the journey [here](https://t.me/xy_241/65).
> 
> Complexity of handling [[Race Condition (竞态条件)|race condition]] is something we have to factor in too.

## Parallelism (并行)
---

![[parallelism.gif|500]]

- A subset of [[Concurrency (并发)]], [[Process (进程)]] and [[Thread]] run on their own [[CPU#CPU Core]]. This is the true processing of multiple tasks at the same time, not an illusion created by quick [[Context Switch]]

### Data Parallelism
- Divide the data into smaller subsets and distribute them across different [[CPU#CPU Core|CPU cores]]

>[!important]
> This approach yields great performance when the operation on each subset of data is independent of the others, as each subset forms an **independent subproblem**.
> 
> Dividing data into 4 subsets and running them on 4 cores doesn't yield 4 times the performance due to several factors. Overheads from task distribution, [[Synchronisation (同步)|synchronisation]]. Amdahl's Law limits speedup based on the proportion of sequential work, while shared memory bandwidth and [[Cache Locality|cache misses]] can bottleneck performance. Additionally, imbalanced workloads and communication overhead further hinder scalability.


### Task Parallelism
- Distribute tasks (or [[Thread]]) across multiple CPU cores. Each thread performs a unique operation

>[!important]
> Different threads may operate on the same data, in which case [[Synchronisation (同步)]] may be needed.
> 
> If different threads operate on different data, synchronisation is not needed.


## Multi-tasking
---

![[multi_tasking.gif|500]]

- An extension of [[Multi-programming]]. The ability for [[Kernel]] to execute multiple tasks **at the same time** by giving each [[Process (进程)]] a very small [[Time Slice]], achieving [[Concurrency (并发)]]. Focusing on improving user experience
- The above animation shows only one [[CPU]], but multi-tasking can also be implemented on multiple [[CPU#CPU Core]] to achieve [[#Parallelism (并行性)]]

>[!question] VS Time-sharing?
> In [[#Time-Sharing]], we have multi-users instead of multi-tasks. Multi-tasking focuses on the tasks, and the tasks can be from different users. So in that sense, multi-tasking is a superset of time-sharing.

### Time-Sharing

![[time-sharing.gif|500]]

- A implementation of [[Concurrency (并发)]] and a specific implementation of [[#Multi-tasking]] when [[CPU]] is shared by **multiple users** at the **same time**, achieved with quick [[Context Switch]]. This allow **multiple users** to **run jobs** on the **same computer** at the **same time** 
- All Time-sharing systems are [[Multi-programming]] systems

>[!info]
> The first time-sharing machine is invented at MIT in the early 1960s, machines before it are all [[OS#Batch System]].
>
> [Multics - Wikipedia](https://en.wikipedia.org/wiki/Multics) was one of the first time-sharing [[OS]] which inspires the creation of [[Unix]].

## References
---
- [Slice Dat Time | Putting the "You" in CPU](https://cpu.land/slice-dat-time)
- [CONCURRENCY IS AN ILLUSION - YouTube](https://youtu.be/3X93PnKRNUo?si=PsdliiPMP8fv3NoO)
- [Modern OS - 1.9 Research on Operating Systems](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf)
- [Threads On Multicore Systems - YouTube](https://youtu.be/5sw9XJokAqw?si=XVNSYEn4xsjTEUo4)