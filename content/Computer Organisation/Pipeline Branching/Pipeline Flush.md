---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:00
Last Date: 2023-12-05T17:24:53+08:00
References: 
---
## Abstract
---
- We have to remove all the [[Instruction]] we loaded in (In this case, statement 1-4), because we need to execute statement A-D after the [[Pipeline Branching]]

![[pipeline_flush.png]]

## Cons
---
### [[Instruction-Level Parallelism]] Wasted!
- In this case, when there is a [[Pipeline Branching]] happening, we need to discard all [[Instruction]] running in [[Instruction-Level Parallelism]]
- This can be optimised by using [[Branch Prediction]]
![[parallism wasted.png]]