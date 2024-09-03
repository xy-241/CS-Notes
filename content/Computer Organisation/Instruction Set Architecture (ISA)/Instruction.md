---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-09-28T09:59:05+08:00
Last Date: 2024-09-03T17:40:28+08:00
References: 
---
## Abstract
---
![[instruction.gif|500]]

- Also known as **Machine Codes**
- [[Computer Data Representation#Bit String]], which is passed to [[CPU]], gets translated to carry out [[Operation]]
- Doesn't specify which [[CPU Datapath]] does what, just specify what outputs are expected with a given input
- The instruction lifecycle can be broken down into [[Pipeline Stages]]

### Pseudo Instruction
- Syntactic sugar for a set of [[Instruction]], so it is easier for programmers to use

>[!example] Assigning value from one variable to another in MIPS
> Instead of `add $s0, $s1, $zero`, we have pseudo-instruction `move $s0, $s1`.




## Branch Instruction
---
![[branch_instruction.gif|500]]

- An [[Instruction]] that causes [[CPU]] to jump to a different location in the codes of  [[Process (进程)]], instead of executing instruction sequentially 


## Terminologies
---
### Single Instruction Multiple Data
- This allows one [[Instruction]] to operate on multiple data at once and have multiple outputs essentially
- This can reduce the number of instructions in a program significantly, and have more data processed without the involvement of the inefficient [[Main Memory]]



## References
---
- [Reinventing the Processor - Youtube](https://youtu.be/rDnqmVnrZKs?si=NZli6pp_ubxKEOPm)
- [CONCURRENCY IS AN ILLUSION - YouTube](https://youtu.be/3X93PnKRNUo?si=rDF1G2BmAufYasap)

![]()