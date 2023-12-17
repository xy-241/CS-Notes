---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-04T17:30:24+08:00
Last Date: 2023-12-17T20:50:19+08:00
References: 
---
## Abstract
---
- A set of [[Computer Organisation/Instruction Set Architecture (ISA)/Instruction| instructions]] which contains [[Instruction#Opcode]] & parameters
- Aka the language the [[CPU]] speaks

## Benefit
---
### Portability
- Implementation of [[CPU]] is decoupled. The same Instruction Set Architecture (ISA) can be used on different [[CPU]]
- App written in X86 can be run on all the CPU that implements the X86 


## 2 Categories
---
### RISC
- Stands for *Reduced Instruction Set Computer*
- Simplified [[Instruction]] that can complete in one [[Clock Cycle]]
- Fewer possible Instruction
- Doesn't perform any [[Operation]] directly on [[Main Memory]]
>[!success] Easier to Decode
>Each [[Instruction]] is fixed-sized

>[!success] Power-Efficient
>- Needs fewer [[Transistors (晶体管)]]
>- Great efficiency when performing simple [[Operation]]

>[!attention] Tedious
>Complex [[Operation#Computation]] requires more [[Instruction]] to achieve 

>[!example]
>- ARM developed by Acorn Computer
>- [[MIPS]]

### CISC
- Stands for *Complex instruction set computer*
- Very Complex set of [[Instruction]]
- Can take multiple cycles to execute

>[!success] Simpler to use
>Has many [[Instruction]], to a point complex [[Operation#Computation]] can be performed with just one Instruction

>[!attention] Requires More [[Transistors (晶体管)]]
>- [[CPU]] design needs to be complex to achieve complex [[Operation#Computation]] with few Instruction
>- Less Transistors (晶体管) can be used improve overall computing performance 
>- Thus, more *power-hungry*, and wasted power when performing simple instruction

>[!attention] Harder to[[Pipeline Stages#Decode]]
>- Each [[Instruction]] is [[Instruction#Variable-length]]


>[!example]
>X86 developed by Intel


## References
---
- [Instruction Set Architectures](https://youtu.be/1KTW32xSs_k)
