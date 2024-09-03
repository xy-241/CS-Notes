---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-03, 17:29
Last Date: 2024-09-03T17:41:39+08:00
References: 
draft: 
description: 
---
## Abstract
---

### Fixed-length Instruction
- Simplifies [[Pipeline]] & [[Instruction-Level Parallelism]]

### Variable-length Instruction
- More flexible but more complicated [[Pipeline]] & [[Instruction-Level Parallelism]]
- Requires multi-step [[Pipeline Stages#Fetch]] and [[Pipeline Stages#Decode]]


## Opcode
---
- Configuration for the [[Control Unit#Control Signal|Control Unit's Control Signals]] to specify the desired operation to be carried out

>[!example]
> In [[MIPS]], it is 6-bits, so total $2^{6} = 64$ different arrangements.

### Expanding Opcode 
- The [[ISA Instruction Format#Opcode]] has **variable lengths** for different [[Instruction]]. This is a good way to maximise instruction bits

## Instruction Operand
---
- Can be [[Register]] Address, [[Memory Address]] or Immediate Value


