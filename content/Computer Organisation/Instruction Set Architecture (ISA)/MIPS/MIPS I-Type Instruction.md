---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:16:00
Last Date: 2023-12-10T18:26:19+08:00
References: 
---
## Abstract
- `I` because it is [[Instruction]] that contains [[#Immediate Value]]
- 4 parts - [[Instruction#Opcode]], [[MIPS Instruction#Source Register]], [[MIPS Instruction#Target Register]] & [[#Immediate Value]]
- Meaning:  Add the **Source Register** with the  **Immediate Value**, and store the result to the  **Target Register**

## Examples
### `andi`
- Perform a bitwise [[Logical Product (AND)]] operation between a register and an immediate value
- Get last 4 significant [[Bits]] of $s0, and store it inside $t0 - `andi $t0, $s0 , 0xF`

### `slti`
- Set Less Than Immediate
- If value in [[MIPS Instruction#Source Register]] is smaller than [[#Immediate Value]], then [[MIPS Instruction#Target Register]] is set to *1* else *0*
- The mips code - `slti $t0, $t0, 100`
- The equivalent more high-level code - ``R[rt] = (R[rs]<SignExtImm) ? 1 : 0``
### `bne` 
- Branch if Not Equal


## Terminologies
### Immediate Value 
- Value is  [[Integer Encoding (数字编码)#2's Complement (补码)]]
- 16-bits, can represent up to +-2^15 [[Word]], 2^17 [[Memory Address]] because 4-bytes [[Word Addressing]]
- Used for **PC-Relative Addressing**

