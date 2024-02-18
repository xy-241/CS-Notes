---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-19T17:28:44
Last Date: 2024-02-18T16:45:40+08:00
References: 
---
## Abstract
---
- A set of [[Instruction]] in [[Kernel Space]] starts a transition from [[Privilege Level#User Mode]] to [[Privilege Level#Kernel Mode]], and then executes a particular [[Interrupt Handler]] to fulfil the need of programs in the [[User Space]]
- A implementation of [[Interrupts (中断)#Software Interrupt]]
- **Return Address** is saved on the [[Address Space#Stack Segment]] of the [[Kernel]] for use later

>[!example] x86-64
> Its [INT](https://www.felixcloutier.com/x86/intn:into:int3:int1) is a Trap Interrupt