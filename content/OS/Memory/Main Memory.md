---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - computer_organisation
Creation Date: 2023-10-07T16:38:29+08:00
Last Date: 2024-03-02T20:34:31+08:00
References: 
---
## Abstract
---
- Also known as **RAM** (**Random-access Memory**)
- Made of [[#Memory Element]], which can be assessed using [[#Physical Address]] in a [[#Random-Access]] manner which is very efficient
- We use [[#Memory Frames]] for easier memory management 

>[!example]- Commone Use Cases
> - Main system memory (the RAM modules you install in your computer)

## Memory Element
---
- A device which can remember value **indefinitely**
- Change value on command from its inputs
- A basic unit of storage element, able to store 1 [[Computer Data Representation#Bit]]
- 2 Types - [[Sequential Circuit#Latch]] & [[Sequential Circuit#Flip-flops]]

### Physical Address
- The address that points to a collection of [[#Memory Element]]
- Usually one physical address points to 8 memory elements to form address [[Computer Data Representation#Byte]]


## Memory Frames
---
- **Fixed-size blocks** that are obtained by dividing the [[Main Memory]]
- All frames share the same size 
- Size determined by the [[Kernel]] & [[Instruction Set Architecture (ISA)]].
- Represent actual blocks of Main Memory that hold [[Data]] & [[Instruction]]

## SRAM
---
- A type of [[Main Memory]] characterised by its fast access speeds, but generally higher cost and lower density (stores less data per unit area)

>[!example]- Use Cases
> - CPU cache memory (L1, L2, L3)
> - High-speed registers
> - Embedded systems where speed is critical

## Terminologies
---
### Random-Access
- A random specific memory location can be accessed instantly without waiting to render until that location. $O(1)$ complexity


