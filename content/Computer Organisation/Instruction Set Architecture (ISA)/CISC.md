---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-03, 16:48
Last Date: 2024-09-03T16:49:39+08:00
References: 
draft: 
description: 
---
## Abstract
---

![[isa.svg|500]]

- Stands for **Complex Instruction Set Computer**
- [[Instruction]] in CSIC is like **pieces built with unique lego pieces** that can be used to get [[CPU]] to carry out **multiple operation** in **one single instruction** to **complete a particular task**. Unlike [[#RISC]] which only provides **unique lego pieces** that can be used to get CPU to carry out one operation at a time. Thus, RISC has fewer possible Instruction

>[!success] Takes less resources to build applications
> First, the programmers can code faster with **complex instructions**, because each instruction is able to do **multiple things**, you can think of it as a small function. Second, since one instruction is able to do multiple things, **less instructions are needed**, thus less usage on the [[Main Memory]].
> 
> **However**, thanks to [[Language Processors#Compiler]], programmers seldom code in complex instructions anymore. And with modern [[Main Memory]], the space saved with CISC isn't significant anymore.


>[!attention] More complex decoder
> [[ISA Instruction Format#]]. For [x86](https://en.wikipedia.org/wiki/X86_instruction_listings), the length of instructions range from **1-15 bytes**. So the decoder needs extra logic to determine if it is processing a new instruction. However, we can make use of [micro-op](https://miro.medium.com/v2/1*titoeiXLVZ-jBgaktnxJ2w.png) to handle this.

>[!attention] Requires more transistors
> The **design** of [[CPU]] needs to be **complex** to achieve complex computation with fewer Instruction, so less [[Transistors (晶体管)]] can be used improve overall computing performance. Thus, more **power-hungry**, and **more wasted power** when **performing simple instruction**.

>[!example] Common CISC
> **X86** 
> - Developed by Intel
>   
> **x86-64**
> - The 64bits version of X86
>   
> **AMD64**
> - 64-bit extension of the x86, created by AMD
>   
> **i486**
> - A 32-bit x86 processor released by Intel in 1989, very outdated and mostly found in retro computing or embedded systems with minimal requirements.
> 
> **i686**
> - Intel's 6th generation x86 processor introduced in 1995. It designates a baseline of features present in most modern x86 processors (both Intel and AMD)
