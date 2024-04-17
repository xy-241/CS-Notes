---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-05, 17:15
Last Date: 2024-04-17T20:53:56+08:00
References: 
---
## Abstract
---
 ![[step_in.png|500]]
 
- Instead of executing [[Instruction]] one by one in sequence. The execution jump around the program instructions. Very common with loops like **for-loop & while-loop**. The execution jumps back to previous instruction (start of the loop)


>[!caution] Potential performance hit
> When the execution jumps aorund without going down the instructions one by one, [[Pipeline Flush]] is likely to happen.

