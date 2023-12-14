---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-11-28T20:12:00
Last Date: 2023-12-10T17:53:48+08:00
---
## Abstract
---
- [[Bit String]] stored in the [[Main Memory]]
- Passed to CPU to get translated to carry out [[Operation]]
- Doesn't specify which [[CPU Datapath]] does what, just specify what outputs are expected with a given input
- The instruction lifecycle can be broken down into [[Pipeline Stages]]
- Made up of 2 parts - [[#Opcode]] & [[#Parameter]]
- 2 forms - [[#Fixed-length]] & [[#Variable-length]]


## Terminologies
---
### Opcode
- Config for [[Control Unit#Control Signal]]
- [[MIPS]], 6-bits, 2^6 -> 64 combinations 
### Parameter
- [[Registers]] Address
- [[Memory Address]]
- Immediate Value
### Branch
- An [[Instruction]] that causes [[Process]] to jump to a different location in the codes

### Fixed-length
- Easy [[Pipeline Stages#Fetch]] & [[Pipeline Stages#Decode]]
- Simplified [[Pipeline]] & [[Instruction-Level Parallelism]]
### Variable-length
- More Flexible BUT Requires more steps for [[Pipeline Stages#Fetch]] & [[Pipeline Stages#Decode]]



