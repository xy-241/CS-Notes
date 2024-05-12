---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-11-19T16:36:00
Last Date: 2024-05-12T17:43:46+08:00
References: 
---
## Abstract
---
- 2 Main Components - [[ALU]],  [[Control Unit]]
- Fire the necessary components based on the given [[Instruction]]
- Start in [[Privilege Level#Kernel Mode |Kernel Mode]]. Before executing a program, the kernel initiates the switch to [[Privilege Level#User Mode |User Mode]]

>[!success] 
> Optimised for computation that requires **sequential execution**(One [[Instruction]] after another [[Instruction]]), [[Pipeline Branching]] and logic.

## Multi-threaded CPU
---
- [[CPU]] that makes uses the **Hyperthreading technology** which enables a single CPU to **handle multiple tasks simultaneously**
- This is achieved by duplicating the [[ALU]], [[Register#Program Counter]] and some [[Pipeline Stages]] etc. The rest like [[Branch Prediction]], [[CPU Cache]] and other pipeline stages are shared


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