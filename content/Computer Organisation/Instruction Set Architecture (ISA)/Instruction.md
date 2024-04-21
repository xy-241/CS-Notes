---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-09-28T09:59:05+08:00
Last Date: 2024-04-21T13:31:04+08:00
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



## 2 Instruction Forms
---
### Fixed-length
- Easy [[Pipeline Stages#Fetch]] & [[Pipeline Stages#Decode]]
- Simplified [[Pipeline]] & [[Instruction-Level Parallelism]]
### Variable-length
- More Flexible BUT Requires more steps for [[Pipeline Stages#Fetch]] & [[Pipeline Stages#Decode]]


## Branch Instruction
---
- An [[Instruction]] that causes [[Process (进程)]] to jump to a different location in the codes


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