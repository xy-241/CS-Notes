---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-19T17:28:44
Last Date: 2024-04-23T15:31:52+08:00
References: 
---
## Abstract
---

![[trap_interrupt.gif|500]]

- [[Instruction]] that starts a transition from [[Privilege Level#User Mode]] to [[Privilege Level#Kernel Mode]], saves the state of [[CPU]] like **Return Address** onto the [[Address Space#Stack Segment]] of the [[Kernel]] for use later, and then executes a particular [[Interrupt Handler]] to fulfil the need of programs in the [[User Space]] and perform [[Process Management]]
  

>[!info] INT Instruction
> [INT](https://www.felixcloutier.com/x86/intn:into:int3:int1) is a Trap Interrupt x86-64.