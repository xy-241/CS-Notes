---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-03, 16:49
Last Date: 2024-09-03T16:49:30+08:00
References: 
draft: 
description: 
---
## Abstract
---

![[isa.svg|500]]

- Stands for **Reduced Instruction Set Computer**
- [[Instruction]] in RISC is like all the **unique lego pieces** that can be used to get [[CPU]] to carry out one operation. Unlike [[CISC]] which provides **pieces built with unique lego pieces** that can be used to get CPU to carry out **multiple operation** to **complete a particular task**. Thus, RISC has fewer possible Instruction
- Doesn't perform any [[Operation]] directly on [[Main Memory]]

>[!success] Simpler decoder
>[[ISA Instruction Format#Fixed-length Instruction]]. For [ARM](https://en.wikipedia.org/wiki/ARM_architecture_family), all the instructions have a length of **4 bytes**. So the decoder know there is a new instruction after every 4 bytes, no extra logic is needed to determine if it is processing a new instruction.



>[!attention] Tedious
> More complicated tasks require programmers to use more instructions to achieve. However, with modern [[Language Processors#Compiler]], programmers code in high-level languages like C, this **isn't an issue anymore**.

>[!success] Power-Efficient
> Needs fewer [[Transistors (晶体管)]] to perform simple task.


>[!example] Common RISC
> **aarch64 / arm64** 
> - Modern, 64-bit ARM processors
>   
> **arm / armv5l**
> - Older 32-bit ARMv5 processors. Less common in modern devices
>   
> **armv7l**
> - Targets 32-bit ARMv7 processors
>  
> **RISCV**
> - A standard that is competing with arm
>   
> **MIPS**
> - Refer to [[MIPS]], usually used for educational purposes