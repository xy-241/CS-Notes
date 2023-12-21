---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-09-28T09:59:05+08:00
Last Date: 2023-12-21T15:10:57+08:00
References: 
---
## Abstract
---
- Also known as *Machine Codes*
- [[Bit String]]
- Passed to CPU to get translated to carry out [[Operation]]
- Doesn't specify which [[CPU Datapath]] does what, just specify what outputs are expected with a given input
- The instruction lifecycle can be broken down into [[Pipeline Stages]]
- 2 forms - [[#Fixed-length]] & [[#Variable-length]]

## 2 Parts
---
### Opcode
- Config for [[Control Unit#Control Signal]]
- [[MIPS]], 6-bits, 2^6 -> 64 combinations 
### Parameter
- [[Register]] Address
- [[Memory Address]]
- Immediate Value


## Terminologies
---
### Branch
- An [[Instruction]] that causes [[Process]] to jump to a different location in the codes

### Fixed-length
- Easy [[Pipeline Stages#Fetch]] & [[Pipeline Stages#Decode]]
- Simplified [[Pipeline]] & [[Instruction-Level Parallelism]]
### Variable-length
- More Flexible BUT Requires more steps for [[Pipeline Stages#Fetch]] & [[Pipeline Stages#Decode]]

### Single Instruction Multiple Data
- This allows one [[Instruction]] to operate on multiple data at once and have multiple outputs essentially
- This can reduce the number of instructions in a program significantly, and have more data processed without the involvement of the inefficient [[Main Memory]]

### Expanding Opcode Scheme
- The [[#Opcode]] in an [[Instruction]] can be *extended* to accommodate additional instructions in the future without changing the basic format of the instruction set