---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:16:00
Last Date: 2023-12-09T21:46:03+08:00
References: 
---
## Abstract
 [[Instruction#Opcode]] is always **000000**
- [[Operation]] is decided by the [[#Function Code]]
- 6 parts - [[Instruction#Opcode]], [[MIPS Instruction#Source Register]], [[MIPS Instruction#Target Register]], [[MIPS Instruction#Destination Register]], [[#Shift Amount]] & [[#Function Code]]



## Terminologies 
### Function Code
- 6 bits 
- Give [[MIPS]] (2^6-1) + 2^6 = 127 instead of 2^6=64 [[Instruction]]
- Dedicated for [[MIPS R-Type Instruction]] (if my understanding isn't wrong)
### Shift Amount 
- 5bits
- Labeled as `shamt`