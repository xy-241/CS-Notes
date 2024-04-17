---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:00
Last Date: 2024-04-17T20:49:32+08:00
References: 
---
## Abstract
---
![[pipeline_flush.png|500]]

- We have to remove all the [[Instruction]] we loaded in (In this case, statement 1-4), because we need to execute statement A-D after the [[Pipeline Branching]]

>[!caution] Performance hit
> ![[parallism wasted.png|500]]
> 
> When there is a **pipeline branching** happening, we need to discard all Instructions that are running in a [[Instruction-Level Parallelism]] manner. 
> 
> 💡 This can be optimised by using [[Branch Prediction]].

