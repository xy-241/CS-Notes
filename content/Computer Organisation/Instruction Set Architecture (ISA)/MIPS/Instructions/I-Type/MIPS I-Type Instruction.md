---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:16:00
Last Date: 2023-12-09T21:28:07+08:00
References: 
---
## Abstract
- `I` because it is [[Instruction]] that contains [[#Immediate Value]]
- 4 parts - [[Instruction#Opcode]], 


> [!info]
> 4 parts
> - [[Instruction]]
> - [[Source Register (rs, 5bits)]]
> - [[Target Register (rt, 5bits)]]
> - [[Immediate Value (16 bits, 2's Complement)]]
> 
> Meaning: Add the Source Register with the Immediate Value, and store the result to the Target Register

## Terminologies
### Immediate Value 
- Value is  [[2's Complement (补码)]]
- - 16-bits, can represent up to +-2^15 [[Word]], 2^17 [[Memory Address]] because 4-bytes [[Word Addressing]]
- Used for **PC-Relative Addressing**

