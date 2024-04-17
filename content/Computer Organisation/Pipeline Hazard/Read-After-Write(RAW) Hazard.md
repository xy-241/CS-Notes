---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:00
Last Date: 2024-04-17T20:27:41+08:00
References: 
---
## Abstract
---
![[Read-After-Write(RAW) Hazard.png|500]]

* `x` is only ready at `t=5` since there's where the first [[Instruction]] (`x <- y + z`) finishes, but the second instruction `w <- x` needs `x` at `t=3`. This can lead to incorrect results if not handled properly

>[!success] Solution
> RAW Hazard can be countered with [[Pipeline Stall]] which can be optimised with [[Operand Forwarding]] and [[Out-of-Order Execution]].