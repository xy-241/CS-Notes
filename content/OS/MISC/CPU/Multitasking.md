---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-24T12:23:00
Last Date: 2023-12-14T18:16:44+08:00
---
## Abstract
---
- Ability of computer executing multiple tasks at the same time by giving each [[Process]] a very small slice of [[CPU]] time
- A logical extension of [[Multi-Programming]]
- Focus on improving user experience 
- Can be implemented on computers that have a single([[#Time-Sharing]]) or multiple [[CPU]]


## Terminologies
---
### Time-Sharing ([[High-performance Computing#Concurrency (并发)|Concurrency (并发)]])
- A specific implementation of [[Multi-tasking]] when there is only a single resource - single [[CPU]], achieve with quick [[Context Switch]]
- All Time-sharing systems are [[Multi-Programming]] systems
- Allow multiple remote users to run jobs on the same computer at the same time 

### Corporative
- Rather than [[OS]] decides when to preempt [[Process]]. [[Process]] gives up [[CPU]] and let other [[Process]] to run
- [[Process]] can hog to [[CPU]] forever
- Modern [[OS]] moves to [[#Preemptive Multitasking]]

### Preemptive Multitasking
- Ensure no [[Process]] can hog the [[CPU]] forever
#### Mechanism
1. Before jumping to program code, the [[OS]] sets the [[Timer Chips]] to trigger an [[Interrupts (中断)]] after some period of time
2. The OS switches to [[User Mode]] and jumps to the next [[Instruction]] of the program
3. When the [[Timer Chips]] elapses, it triggers a [[Hardware interrupts (外中断)]] to switch to [[Kernel Mode]] and jump to OS code
4. The OS can now save where the program left off, load a different program, and repeat the process.
>