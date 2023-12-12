---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-11-19T16:36:00
Last Date: 2023-12-12T22:58:22+08:00
References: 
---
## Abstract
- 2 Main Components - [[ALU]],  [[Control Unit]]
- Fire the necessary components based on the given [[Instruction]]
- Start in [[Privilege Level#Kernel Mode |Kernel Mode]]. Before executing a program, the kernel initiates the switch to [[Privilege Level#User Mode |User Mode]]

## Benefits
- Optmised for computation that requires sequential execution(One [[Instruction]] after another [[Instruction]]), [[Branching]] and logic


## Terminologies
### 32-bit
- [[Registers#Width]] that are 32 bits each
### 64-bit
- [[Registers#Width]] that are 32 bits each
### Scratch Area
- A small amount of high-speed memory that is used to store temporary data
- Typically located on the *CPU* die itself
### Core
- Hardware that executes [[Instruction]] independently from other *cores*
