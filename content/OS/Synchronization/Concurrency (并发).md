---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-02-22, 17:53
Last Date: 2024-04-26T20:53:22+08:00
References: 
draft: 
description: 
---
## Concurrency (并发)
---
>[!quote]
> Concurrency is about **dealing with lots of things at once**, but parallelism is about **doing lots of things at once**.

- A way to run multiple [[Thread]] at the same time, instead of running one thread after another thread is done . Thus, improving the overall performance
- Can be achieved with multiple [[CPU#Core]]([[#Parallelism (并行性)]])  or [[Context Switch]] when there is only one core

>[!success] Resource utilisation
> Maximise the use of resources on hand and handle multiple requests or events.


## Time-Sharing
---

![[time-sharing.gif|500]]

- A Implementation of [[Concurrency (并发)]] and a specific implementation of [[Multi-tasking]] when resources are shared by **multiple users** at the **same time**, achieved with quick [[Context Switch]] of [[Process (进程)]]. This allow **multiple users** to **run jobs** on the **same computer** at the **same time** 
- All Time-sharing systems are [[Multi-programming]] systems

>[!info]
> [Multics - Wikipedia](https://en.wikipedia.org/wiki/Multics) was one of the first time-sharing [[OS]] which inspires the creation of [[Unix]].

## Parallelism (并行性)
---

![[parallelism.gif|500]]

- A subset of [[Concurrency (并发)]], [[Thread]] run on its own [[CPU#Core]], so it is concurrency running on multiple resources (multple [[CPU#Core]])


## Corporative Scheduling
---
- Rather than [[Kernel]] decides when to preempt [[Process (进程)]]. Process gives up [[CPU]] and let other Process to run

>[!caution] CPU Hogging
> ![[corporative_scheduling_cpu_hogging.gif]]
> 
>Process can hog to CPU forever, modern OS adapts [[#Preemptive Scheduling]] instead.

## Preemptive Scheduling
---

![[preemptive_scheduling.gif|500]]

1. Before jumping to program code, the [[Kernel]] sets the [[Timer Chip]] to trigger an [[Interrupts (中断)#Hardware interrupts (外中断)]] after some period of time
2. The kernel switches to [[Privilege Level#User Mode]] and jumps to the [[Instruction]] of the program
3. When the Timer Chips elapses, it triggers a Hardware interrupts. The [[CPU]] receives the interrupt.
4. The hardware interrupt invokes [[Trap Interrupt (陷入)]] which triggers the  corresponding [[Interrupt Handler]]
5. Interrupt handler passes control to [[Process Management#Process Scheduler]] selects a process to run by restoring the state of the CPU for that process from the process's PCB
6. Repeat step 1 to step 5

>[!success] No CPU Hogging
> Ensure no [[Process (进程)]] can hog the [[CPU]] forever which may happen in the case of [[#Corporative Scheduling]].


## References
---
- [CONCURRENCY IS AN ILLUSION - YouTube](https://youtu.be/3X93PnKRNUo?si=PsdliiPMP8fv3NoO)