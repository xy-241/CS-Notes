---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
  - bash
Creation Date: 2023-10-04T17:30:24+08:00
Last Date: 2024-09-03T16:58:53+08:00
References: 
---
## Abstract
---
- **A set of [[Instruction]]** which contains [[ISA Instruction Format#Opcode]] & **parameters** that tells [[CPU]] what to do in the form of **0s and 1s**. You can check the ISA of a machine using `uname -mp`

>[!success] Portability
> The **exact hardware implementation** of **different CPU** can **vary** but app written for a particular ISA like X86 can be run on all the CPU that implements the X86. The ISA functions like a **standard** that different hardware implementations need to follow, so software has a **common interface** to work with different CPUs.
> 
> Think of the **CPU implementation** as the **logic inside a function**, and the **ISA** specifies the **inputs and outputs** of the function.

>[!important]
> There are two types of ISA, [[#RISC]] and [[CISC]]. Both don't decide the performance of [[CPU]]. [[CPU Cache]] and [[Branch Prediction]] are two main factors that determine the CPU performance.
> 
> "**What limits computer performance is predictability**" - [Jim Keller](https://www.youtube.com/watch?v=yTMRGERZrQE)




## References
---
- [Instruction Set Architectures](https://youtu.be/1KTW32xSs_k)
- [ARM vs x86: 冷飯重炒的假議題 | RISC vs CISC分析 - YouTube](https://www.youtube.com/watch?v=iibDpt5f3T4)
- [What the Heck is a Micro-Operation? | by Erik Engheim | Medium](https://erik-engheim.medium.com/what-the-heck-is-a-micro-operation-e991f76209e)
