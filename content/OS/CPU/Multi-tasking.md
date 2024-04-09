---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-24T12:23:00
Last Date: 2024-04-09T17:03:31+08:00
description: "Unlock the Power of Multitasking in Computer Science: Explore the intricacies of Corporative and Preemptive Multitasking, extending the capabilities of traditional multi-programming."
---
## Abstract
---
- An extension of [[Multi-programming]]. The ability for [[Kernel]] to execute multiple tasks at the same time by giving each [[Process (进程)]] a very small [[Timeslice]]


>[!info] Purpose
> Focus on improving user experience.


## Corporative Multitasking
---
- Rather than [[Kernel]] decides when to preempt [[Process (进程)]]. Process gives up [[CPU]] and let other Process to run

>[!caution] CPU Hogging
>Process can hog to CPU forever, modern OS adapts [[#Preemptive Multitasking]] instead.

## Preemptive Multitasking
---
1. Before jumping to program code, the [[Kernel]] sets the [[Timer Chip]] to trigger an [[Interrupts (中断)#Hardware interrupts (外中断)]] after some period of time
2. The kernel switches to [[Privilege Level#User Mode]] and jumps to the next [[Instruction]] of the program
3. When the Timer Chips elapses, it triggers a Hardware interrupts. The [[CPU]] receives the interrupt.
4. The hardware interrupt stores [[Register#Program Counter]], so it can resume later
5. The hardware interrupt invokes corresponding [[Interrupt Handler]] which saves rest of the state of the CPU for the [[Process (进程)]] into the process's [[Process Control Block (PCB)]]. So the interrupted process can be resumed later
6. The interrupt handler does its other business and then invokes the [[Process Management#Process Scheduler]]
7. The process scheduler selects a process to run by restoring the state of the CPU for that process from the process's PCB
8. Repeat step 1 to step 7

>[!success] No CPU Hogging
> Ensure no [[Process (进程)]] can hog the [[CPU]] forever.
