---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-19T17:28:44
Last Date: 2024-04-27T21:33:33+08:00
References: 
---
## Abstract
---

![[trap_interrupt.gif|500]]

- [[Instruction]] that changes [[Privilege Level]] from [[Privilege Level#User Mode]] to [[Privilege Level#Kernel Mode]], saves the state of [[CPU]] like **Return Address** onto the [[Address Space#Stack Segment]] of the [[Kernel]] for use later, and then it triggers a particular [[Interrupt Handler]] to fulfil the need of programs in the [[User Space]] and perform [[Process Management]]

>[!question] When is trap instruction triggered?
> Trap instruction is usually triggered to handle an exceptional events like an error or an [[Interrupts (中断)]]. Basically events than need privileged access from the kernel.

>[!info] INT Instruction
> [INT](https://www.felixcloutier.com/x86/intn:into:int3:int1) is a Trap Interrupt x86-64.

>[!info] Trap
> ![[it_is_a_trap.gif|300]]
> 
> The term *Trap* comes from the idea that the CPU is being "trapped" or diverted from its normal execution flow into a special routine or handler.
