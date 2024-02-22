---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - c
Creation Date: 2023-11-20T20:40:44
Last Date: 2024-02-22T18:33:15+08:00
References: 
---
## Abstract
---
- Also known as **Interrupt Service Routine (ISR)**
- A set of [[Instruction]] at a fixed address within [[Kernel]], responding to the [[Interrupts (中断)]] like [[System Call (系统调用)]]

>[!caution] C Implementation
> Any variables changed inside the interrupt handler should be declared with [[C Keywords#volatile]]

>[!example]
> - [[Trap Interrupt (陷入)]]
> - [[System Call (系统调用)]]


### Interrupt Handler Pointer
- Contains the [[Memory Address]] to the start of the [[Instruction]]of the [[Interrupts (中断)]]
