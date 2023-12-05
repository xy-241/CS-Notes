---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:00
lastmod: 2023-12-05T17:42:40+08:00
References: 
---
## Abstract
- Pause the instruction before the previous [[Instruction]] has [[Pipeline Stages#Write Back]] the data it needs

![[Pipeline Stall.png]] 


## Cons
### Performance hit
- Too much stall in the [[Pipeline]] will reduce the benefits of [[Pipeline]]
- When one [[Instruction]] stalls, the other [[Instruction]] running will have to stall too
- We can minimize such situation by using [[Out-of-Order Execution]]
