---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-09, 21:24
Last Date: 2024-09-05T21:38:16+08:00
References: 
---
## Abstract
---

### mips comes in 3 instruction types 
![[mips instruct types.jpeg]]

>[!question] why is the source ,target and destination field 5 bits 
>$2^5 = 32bits$
>it is because we do operations on the data stored on the register and each register address is 32 bits 



**32 bits**, the **first 6 bits** are [[Instruction#Opcode]]

- **32 bits**, the **first 6 bits** are [[ISA Instruction Format#Opcode]]
- There are 3 different format types - [[MIPS R-Type Instruction]], [[MIPS I-Type Instruction]] and [[MIPS J-Type Instruction]]

>[!important]
> Every MIPS instruction that is stored in [[Main Memory|memory]] must be [[Computer Data Representation#Word|word aligned]]!

>[!tip]
> Here is an [online calculator](http://mipsconverter.com/instruction.html) that translates a MIPS instruction to hex, and vice versa.




## Terminologies
---
### Op register 
- 6bits 
- labeled as op
- used to specify to the control what operation to perform 

### Source Register 
- 5bits
- Labeled `rs`, mapped to `RR1`
- [[Register|Register]] with value stored that we want to use to carry out [[Operation]]
### Target Register
- 5 bits
- Labeled `rt`, mapped to `RR2`
- [[Register|Register]] with value stored we want to use in [[MIPS R-Type Instruction]]
- [[Register|Register]] that gets the result of [[Operation]] in [[MIPS I-Type Instruction]]



