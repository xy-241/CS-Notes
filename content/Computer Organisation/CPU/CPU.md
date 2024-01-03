---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-11-19T16:36:00
Last Date: 2023-12-17T20:30:13+08:00
References: 
---
## Abstract
---
- 2 Main Components - [[ALU]],  [[Control Unit]]
- Fire the necessary components based on the given [[Instruction]]
- Start in [[Privilege Level#Kernel Mode |Kernel Mode]]. Before executing a program, the kernel initiates the switch to [[Privilege Level#User Mode |User Mode]]

## Benefits
---
- Optimised for computation that requires sequential execution(One [[Instruction]] after another [[Instruction]]), [[Branching]] and logic


## Terminologies
---
### 32-bit
- [[Register#Register Width]] that are 32 [[Computer Data Representation#Bit]] each
- Because 32bits, so maximum addressable [[Main Memory]] is 4GB. The [[Register]] can't hold a [[Memory Address]] that is greater than 4GB
- The [[Computer Data Representation#Word]] size is usually 4 [[Computer Data Representation#Byte]]
### 64-bit
- [[Register#Register Width]] that are 64 [[Computer Data Representation#Bit]] each
- Doesn't have the [[Main Memory]] 4GB limitation in [[#32-bit]]
- The [[Computer Data Representation#Word]] size is usually 8 [[Computer Data Representation#Byte]]
### Scratch Area
- A small amount of high-speed memory that is used to store temporary data
- Typically located on the *CPU* die itself
### Core
- One single unit of *CPU* that executes [[Instruction]] independently from other *cores*