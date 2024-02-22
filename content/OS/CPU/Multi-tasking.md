---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-24T12:23:00
Last Date: 2024-02-22T18:07:42+08:00
description: "Unlock the Power of Multitasking in Computer Science: Explore the intricacies of Corporative and Preemptive Multitasking, extending the capabilities of traditional multi-programming."
---
## Multi-tasking
---
- A logical extension of [[Multi-programming]]
- Ability of computer executing multiple tasks at the same time by giving each [[Process (进程)]] a very small slice of [[CPU]] time
</br>

- Focus on improving user experience 

### Time-Sharing
- A Implementation of [[Concurrency (并发)]]
- A specific implementation of [[Multi-tasking]] when resources are shared by multiple users at the **same time**, achieved with quick [[Context Switch]]
- All Time-sharing systems are [[Multi-programming]] systems
- Allow multiple remote users to run jobs on the same computer at the same time 
## Corporative Multitasking
---
- Rather than [[OS]] decides when to preempt [[Process (进程)]]. Process gives up [[CPU]] and let other Process to run
>[!caution] CPU Hogging
>Process can hog to CPU forever, modern OS adapts [[#Preemptive Multitasking]]

## Preemptive Multitasking
---
- Ensure no [[Process (进程)]] can hog the [[CPU]] forever

**Mechanism**
1. Before jumping to program code, the [[OS]] sets the [[Timer Chip]] to trigger an [[Interrupts (中断)#Hardware interrupts (外中断)]] after some period of time
2. The OS switches to [[Privilege Level#User Mode]] and jumps to the next [[Instruction]] of the program
3. When the Timer Chips elapses, it triggers a Hardware interrupts (外中断) to switch to [[Privilege Level#Kernel Mode]] and jump to OS code
4. The OS can now save where the program left off, load a different program, and repeat the process


