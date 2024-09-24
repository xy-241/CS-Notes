---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-19T19:20:29+08:00
Last Date: 2024-09-18T21:51:58+08:00
References: 
---
## Abstract
---
- [[CPU]]'s instruction execution process


## Single Cycle Execution
---
- [[Instruction]] executes in one cycle. The time given to one cycle is the time taken by the slowest instruction

>[!caution]
> All instruction will take the same time as the **slowest instruction**.

>[!important]
> In the simple MIPS implementation, an instruction executes in a single clock cycle!
## Multi Cycle Execution
---
- Breaks down [[Instruction Stages]] into multiple cycles, each stage takes one cycle to complete. The time given to one cycle is the time taken by the **slowest pipeline stage**

>[!example] MIPS
> ![[mips_instruction_execution.png]]