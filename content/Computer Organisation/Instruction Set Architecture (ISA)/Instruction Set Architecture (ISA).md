---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
  - bash
Creation Date: 2023-10-04T17:30:24+08:00
Last Date: 2024-03-01T14:05:36+08:00
References: 
---
## Abstract
---
- A set of [[Computer Organisation/Instruction Set Architecture (ISA)/Instruction| instructions]] which contains [[Instruction#Opcode]] & parameters
- Aka the language the [[CPU]] speaks, you can check the ISA of a machine using `uname -mp`

>[!success] Portability
> Physical implementation of CPU is decoupled. The same Instruction Set Architecture (ISA) can be used on different CPU
> 
> App written in X86 can be run on all the CPU that implements the X86 



## RISC
---
- Stands for **Reduced Instruction Set Computer**
- Simplified [[Instruction]] that can complete in one [[Clock Oscillator#Clock Cycle]]
- Fewer possible Instruction
- Doesn't perform any [[Operation]] directly on [[Main Memory]]

>[!success] Easier to Decode
>Each [[Instruction]] is fixed-sized

>[!success] Power-Efficient
> Needs fewer [[Transistors (晶体管)]] to perform simple [[Operation]]

>[!attention] Tedious
>Complex [[Operation#Computation]] requires more Instruction to achieve 

>[!example]- Common RISC
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
- Stands for **Complex instruction set computer**
- Very Complex set of [[Instruction]]
- Can take multiple cycles to execute

>[!success] Simpler to use
>Has many Instruction, to a point complex [[Operation#Computation]] can be performed with just one Instruction

>[!attention] Requires more transistors
>- [[CPU]] design needs to be complex to achieve complex Computation with fewer Instruction, so less [[Transistors (晶体管)]] can be used improve overall computing performance 
>- Thus, more *power-hungry*, and more wasted power when performing simple instruction

>[!attention] Harder to decode
>- Each [[Instruction]] is [[Instruction#Variable-length]]


>[!example]- Common CISC
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


## 4 Types
---
### Accumulator ISA
![[accumulator isa.png|150]]
1. ``load A``: Load value from [[Main Memory]] into accumulator
2. ``add B``: Add value from Main Memory and value in the accumulator. The sum is stored back to the accumulator
3. ``store C``: Store value in accumulator into Main Memory

### Load-Store ISA
![[register-register,load-store isa.png|150]]
- Also known as **Register-Register ISA**
- The data is decoupled from the [[Register]] to [[Main Memory]]

>[!caution] Data Loading
> ![[word_alignment.png|500]]
> - Can only load data at [[Computer Data Representation#Word]] boundaries




### Memory-Memory ISA
![[memory-memory isa.png|150]]

### Stack ISA
![[stack isa.png|150]]
1. ``push A``, ``push B``: We load values from [[Main Memory]] onto the [[Stack]]
2. ``add``: Remove the top 2 values in the Stack, add them, and load the sum onto top of Stack
3. ``pop C``: Transfer value at top of Stack to Main Memory

## References
---
- [Instruction Set Architectures](https://youtu.be/1KTW32xSs_k)
