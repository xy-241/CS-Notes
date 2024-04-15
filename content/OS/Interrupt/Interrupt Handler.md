---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - c
Creation Date: 2023-11-20T20:40:44
Last Date: 2024-04-15T18:18:32+08:00
References: 
---
## Abstract
---
- Also known as **Interrupt Service Routine (ISR)**
- A set of [[Instruction]] at a fixed address within [[Kernel]], responding to the [[Interrupts (中断)]] like [[System Call (系统调用)]] by performing the following 3 steps

>[!important] 3 Steps
> 1. [[interrupt_handler_saving_state.png|Saves the state of the CPU]] for the [[Process (进程)]] into the process's [[Process Control Block (PCB)]]. The [[Register#Program Counter]] of the process is saved to a different [[Register]]. So the interrupted process can be resumed later
> 2. Does its other business
> 3. Invokes the [[Process Management#Process Scheduler]]


>[!caution] C Implementation
> Any variables changed inside the interrupt handler should be declared with [[C Keywords#volatile]]

>[!example]
> - [[Trap Interrupt (陷入)]]
> - [[System Call (系统调用)]]


### Interrupt Handler Pointer
- Contains the [[Memory Address]] to the start of the [[Instruction]] of the [[Interrupts (中断)]]
