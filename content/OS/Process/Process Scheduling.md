---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-12-11, 22:54
Last Date: 2024-12-26T21:38:16+08:00
References: 
---
## Abstract
---
- [[Kernel]] manages multiple [[Process (进程)]] that want to run at the [[Concurrency (并发)|same time]]
- Kernel needs to manage processes **actively** because process can hog the [[CPU]] forever

>[!important]
> [[Process Scheduling]] that is [[CPU Scheduling Techniques#Preemptive Scheduling]] can help **shorter tasks** that arrive later [[#Turnaround Time|turnaround]] faster instead of being blocked forever by a long task.

### Turnaround Time
- Turnaround Time = **Completion Time** - **Arrival Time**

>[!important]
> **Lower turnaround times** indicate **better** overall performance and **quicker** job completion.

>[!important] 3 components
> 1. **Waiting Time:** The time a [[Process (进程)|process]] spends waiting in the ready queue.
> 2. **Execution Time (Burst Time):** The time the process spends actively running on the CPU.
> 3. **I/O Time:** The time the process spends performing I/O operations.


## Process Scheduler
---
- A program that perform [[Context Switch]] of [[Process (进程)]] based on factors like [[#Process Priority]]

>[!info]
> [[Linux Kernel]] uses [CFS](https://docs.kernel.org/scheduler/sched-design-CFS.html).



## Priority Scheduling
---
- Some [[Process (进程)|process]] are more critical, so we assign a [[#Process Priority]] to each process. Processes with higher priority are typically selected for execution first

>[!important] Two types of process priority scheduling
> **Preemptive:** A higher-priority process can preempt a currently running process with a lower priority.
> 
> **Non-preemptive:** A late-arriving high-priority process must wait for the next round of scheduling.

>[!attention] Potential starvation for low-priority processes
> High-priority tasks can hog the [[CPU]], causing low-priority processes to starve.
> 
> This can be mitigated by dynamically decreasing the priority of currently running processes after each [[Time Slice]] and ensuring every process gets a fair share of CPU time with [[Time Slice#Minimum Granularity]].
> 
> However, it is challenging to guarantee or control the exact amount of CPU time allocated to a process solely through priority-based scheduling.

### Process Priority
- A value that determines which [[Process (进程)]] should get executed first

### Niceness
- An parameter that can be used to adjust the [[#Process Priority]] for the [[#Process Scheduler]]

>[!example] 
> In [[Linux Kernel]]
> - ``-20`` is most not nice
> - ``19`` is most nice
> - Command to adjust niceness - `renice`

### Priority Inversion
- Occurs when a higher-priority [[Process (进程)|process]] is **waiting for a resource that is currently held by a lower-priority process**. This can lead to a situation where the higher-priority process is effectively blocked because the lower-priority process cannot finish its task and release the resource.
- The problem worsens if there is a **medium-priority process** that **preempts the lower-priority process** as it isn't blocked by the lower-priority process, delaying the release of the resource further. As a result, the high-priority process waits indefinitely, even though it has a higher priority than the low-priority process and medium-priority process

>[!example]
> 1. **Process A (low priority)** acquires a lock to access a shared resource.
> 2. **Process B (high priority)** needs the same resource and gets blocked while waiting for Process A to release the lock.
> 3. **Process C (medium priority)** starts running and preempts Process A because it has a higher priority.
> 4. Process A cannot complete and release the lock, so Process B remains blocked, despite having the highest priority.

>[!important] Solution: Priority Inheritance Protocol
> When a low-priority process holding a resource is blocking a higher-priority process, the system **temporarily raises the priority of the low-priority process to match that of the higher-priority process**.
> 
> Once the resource is released, the low-priority process returns to its original priority.

## Shortest Job First Scheduling
---
- [[Process Scheduling|Process scheduling algorithm]] that selects the process with the shortest burst time (execution time) to run next
- The preemptive version is called **Shortest Remaining Time First**

>[!important]
> In non-preemptive SJF, if a long job arrives before shorter jobs, it will execute first and prevent the shorter jobs from starting until it's done. 
> 
> This leads to **starvation** for the short jobs, as they have to wait for the long job to finish, increasing their [[#Turnaround Time|turnaround time]]. In this case, Round Robin (RR) can improve the average turnaround time.


## Round Robin Scheduling
- Preemptive [[Process Scheduling]] algorithm where each [[Process (进程)]] is assigned a fixed [[Time Slice]]