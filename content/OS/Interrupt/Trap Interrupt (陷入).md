---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-19T17:28:44
Last Date: 2024-02-17T19:18:08+08:00
References: 
---
## Abstract
---
- A [[Instruction]] in [[Kernel Space]] starts a transition from [[Privilege Level#User Mode]] to [[Privilege Level#Kernel Mode]], jumping from the program’s code to the execution at a **fixed address** within the [[Kernel]] - [[Interrupt Handler]]
- A form of [[Interrupts (中断)#Software Interrupt]]
- **Return Address** is saved on the [[Address Space#Stack Segment]] for use later

>[!example] x86-64
> Its [INT](https://www.felixcloutier.com/x86/intn:into:int3:int1) is a Trap Interrupt