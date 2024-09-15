---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-19T19:20:29+08:00
Last Date: 2024-09-15T08:06:03+08:00
References: 
---
## Abstract
---
[[CPU]]'s instruction execution process


## Single Cycle Execution
---
- [[Instruction]] executes in one cycle. The time given to one cycle is the time taken by the slowest instruction

>[!caution]
> All instruction will take the same time as the **slowest instruction**.


## Multi Cycle Execution
---
- Breaks down [[Instruction Stages]] into multiple cycles, each stage takes one cycle to complete. The time given to one cycle is the time taken by the **slowest pipeline stage**

>[!example] MIPS
> ![[mips_instruction_execution.png]]