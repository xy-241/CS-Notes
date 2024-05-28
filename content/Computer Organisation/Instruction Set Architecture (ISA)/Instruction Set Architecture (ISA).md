---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
  - bash
Creation Date: 2023-10-04T17:30:24+08:00
Last Date: 2024-05-28T17:16:10+08:00
References: 
---
## Abstract
---
- A set of [[Instruction]] which contains [[Instruction#Opcode]] & **parameters** that tells [[CPU]] what to do in the form of **0s and 1s**. You can check the ISA of a machine using `uname -mp`

>[!success] Portability
> The **exact hardware implementation** of **different CPU** can **vary** but app written for a particular ISA like X86 can be run on all the CPU that implements the X86. The ISA functions like a **standard** that different hardware implementations need to follow, so software has a **common interface** to work with different CPUs.
> 
> Think of the **CPU implementation** as the **logic inside a function**, and the **ISA** specifies the **inputs and outputs** of the function.



## RISC
---

![[isa.svg|500]]

- Stands for **Reduced Instruction Set Computer**
- [[Instruction]] in RISC is like all the **unique lego pieces** that can be used to get [[CPU]] to carry out one operation. Unlike [[#CISC]] which provides **pieces built with unique lego pieces** that can be used to get CPU to carry out **multiple operation** to **complete a particular task**. Thus, RISC has fewer possible Instruction
- Doesn't perform any [[Operation]] directly on [[Main Memory]]

>[!success] Easier to Decode
>Each [[Instruction]] is fixed-sized.

>[!success] Power-Efficient
> Needs fewer [[Transistors (晶体管)]] to perform simple task.

>[!attention] Tedious
> More complicated tasks require programmers to use more instructions to achieve.

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



## CISC
---

![[isa.svg|500]]

- Stands for **Complex Instruction Set Computer**
- [[Instruction]] in CSIC is like **pieces built with unique lego pieces** that can be used to get [[CPU]] to carry out **multiple operation** to **complete a particular task**. Unlike [[#CISC]] which only provides **unique lego pieces** that can be used to get CPU to carry out one operation. Thus, RISC has fewer possible Instruction

>[!success] Takes less resources to build applications
> First, the programmers can code faster with **complex instructions**, because each instruction is able to do **multiple things**, you can think of it as a small function. Second, since one instruction is able to do multiple things, **less instructions are needed**, thus less usage on the [[Main Memory]].
> 
> **However**, thanks to [[Language Processors#Compiler]], programmers seldom code in complex instructions anymore. And with modern [[Main Memory]], the space saved with CISC isn't significant anymore.

>[!attention] Requires more transistors
> The **design** of [[CPU]] needs to be **complex** to achieve complex computation with fewer Instruction, so less [[Transistors (晶体管)]] can be used improve overall computing performance. Thus, more **power-hungry**, and **more wasted power** when **performing simple instruction**.

>[!attention] Harder to decode
> [[Instruction#Variable-length Instruction]].


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



## Accumulator ISA
---
![[accumulator isa.png|150]]
1. ``load A``: Load value from [[Main Memory]] into accumulator
2. ``add B``: Add value from Main Memory and value in the accumulator. The sum is stored back to the accumulator
3. ``store C``: Store value in accumulator into Main Memory

## Load-Store ISA
---
![[register-register,load-store isa.png|150]]
- Also known as **Register-Register ISA**
- The data is decoupled from the [[Register]] to [[Main Memory]]

>[!caution] Data Loading
> ![[word_alignment.png|500]]
> 
> Can only load data at [[Computer Data Representation#Word]] boundaries.




## Memory-Memory ISA
---
![[memory-memory isa.png|150]]

## Stack ISA
---
![[stack isa.png|150]]
1. ``push A``, ``push B``: We load values from [[Main Memory]] onto the [[Stack]]
2. ``add``: Remove the top 2 values in the Stack, add them, and load the sum onto top of Stack
3. ``pop C``: Transfer value at top of Stack to Main Memory

## References
---
- [Instruction Set Architectures](https://youtu.be/1KTW32xSs_k)
