---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 
Last Date: 
References:
---
## Abstract
---
- A type of [[Signal (Software Interrupt)]]
- A special [[Instruction]] used to transfer control to [[OS]]
	1. Switch from [[User Mode]] to [[Kernel Mode]]
	2. Starts execution at a fixed address within the [[Kernel]] - [[Interrupt Handler (Interrupt Service Routine, ISR)]]
- For [[x86-64]], it is [INT](https://www.felixcloutier.com/x86/intn:into:int3:int1) is a *Trap Interrupt*


### Simliar to the call to [[Library Calls (Library Procedure)]]
-  [[Return Address]] is saved on the [[Stack (FILO)]] for use later