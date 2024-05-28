---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-09-28T09:59:05+08:00
Last Date: 2024-05-28T17:16:44+08:00
References: 
---
## Abstract
---
![[instruction.gif|500]]

- Also known as **Machine Codes**
- [[Computer Data Representation#Bit String]], which is passed to [[CPU]], gets translated to carry out [[Operation]]
- Doesn't specify which [[CPU Datapath]] does what, just specify what outputs are expected with a given input
- The instruction lifecycle can be broken down into [[Pipeline Stages]]

### Opcode
- Config for [[Control Unit#Control Signal]]

>[!example]
> In [[MIPS]], it is 6-bits, so total 2^6 -> 64 different arrangements.
### Parameter
- Can be [[Register]] Address, [[Memory Address]] or Immediate Value

### Fixed-length Instruction
- Simplifies [[Pipeline]] & [[Instruction-Level Parallelism]]

### Variable-length Instruction
- More flexible but more complicated [[Pipeline]] & [[Instruction-Level Parallelism]]



## Branch Instruction
---
![[branch_instruction.gif|500]]

- An [[Instruction]] that causes [[CPU]] to jump to a different location in the codes of  [[Process (进程)]], instead of executing instruction sequentially 


## Terminologies
---
### Single Instruction Multiple Data
- This allows one [[Instruction]] to operate on multiple data at once and have multiple outputs essentially
- This can reduce the number of instructions in a program significantly, and have more data processed without the involvement of the inefficient [[Main Memory]]

### Expanding Opcode Scheme
- The [[#Opcode]] in an [[Instruction]] can be **extended** to accommodate additional instructions in the future without changing the basic format of the instruction set


## References
---
- [Reinventing the Processor - Youtube](https://youtu.be/rDnqmVnrZKs?si=NZli6pp_ubxKEOPm)
- [CONCURRENCY IS AN ILLUSION - YouTube](https://youtu.be/3X93PnKRNUo?si=rDF1G2BmAufYasap)

![]()