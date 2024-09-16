---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-03, 17:29
Last Date: 2024-09-16T14:17:25+08:00
References: 
draft: 
description: 
---
## Abstract
---
- It specifies how different parts of an [[Instruction|instruction]] are organised within a **binary code word**

### Fixed-length Instruction
- Simplifies [[Pipeline]] & [[Instruction-Level Parallelism]]

### Variable-length Instruction
- More flexible but more complicated [[Pipeline]] & [[Instruction-Level Parallelism]]
- Requires multi-step [[Instruction Stages#Fetch]] and [[Instruction Stages#Decode]]


## Opcode
---
- Configuration for the [[Control Unit#Control Signal|Control Unit's Control Signals]] to specify the desired operation to be carried out

>[!example]
> In [[MIPS]], it is 6-bits, so total $2^{6} = 64$ different arrangements.

>[!important] Benefits of fixed-size opcode
> - [[Instruction Stages#Decode|Instruction decode]] is more efficient
> - Easier to design hardware
> - Does NOT guarantee a smaller set of assembly code, actually bigger
> - Does NOT guarantee faster processing time (this depends on the cpu implementation)  
### Expanding Opcode 
- The [[ISA Instruction Format#Opcode]] has **variable lengths** for different [[Instruction]]. This is a good way to maximise instruction bits

>[!example]
> ![[expanding_opcode.png|400]]

## Instruction Operand
---
- Can be [[Register]] Address, [[Memory Address]] or Immediate Value


