---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:16:00
Last Date: 2023-12-10T18:03:38+08:00
References: 
---
## Abstract
 - [[Instruction#Opcode]] is always **000000**
- [[Operation]] is decided by the [[#Function Code]]
- 6 parts - [[Instruction#Opcode]], [[MIPS Instruction#Source Register]], [[MIPS Instruction#Target Register]], [[#Destination Register]], [[#Shift Amount]] & [[#Function Code]]

## Examples
### `srl`
- Shift Right Logical
- [[MIPS Instruction#Source Register]] is **0**
- Shifts the value right by n bits, discarding the lower n bits
- Dividing the value in register `$s0` by *16* (2^4) - `srl $s0, $s0, 4`

## Terminologies 
### Destination Register 
- 5bits
- Labeled `rd`, mapped to `WR`
- [[Registers]] that gets the result of [[Operation]] in [[MIPS R-Type Instruction]] [[Instruction]]
### Function Code
- 6 bits 
- Give [[MIPS]] (2^6-1) + 2^6 = 127 instead of 2^6=64 [[Instruction]]
- Dedicated for [[MIPS R-Type Instruction]] (if my understanding isn't wrong)
### Shift Amount 
- 5bits
- Labeled as `shamt`