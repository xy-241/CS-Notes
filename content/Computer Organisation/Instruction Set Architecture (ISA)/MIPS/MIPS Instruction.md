---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-09, 21:24
Last Date: 2023-12-10T18:08:29+08:00
References: 
---
## Abstract
- **32 bits**, the **first 6 bits** are [[Instruction#Opcode]]
- There are 3 different format types - [[MIPS R-Type Instruction]], [[MIPS I-Type Instruction]] and [[MIPS J-Type Instruction]]



## Terminologies
### Source Register 
- 5bits
- Labeled `rs`, mapped to `RR1`
- [[Registers|Register]] with value stored that we want to use to carry out [[Operation]]
### Target Register
- 5 bits
- Labeled `rt`, mapped to `RR2`
- [[Registers|Register]] with value stored we want to use in [[MIPS R-Type Instruction]]
- [[Registers|Register]] that gets the result of [[Operation]] in [[MIPS I-Type Instruction]]

