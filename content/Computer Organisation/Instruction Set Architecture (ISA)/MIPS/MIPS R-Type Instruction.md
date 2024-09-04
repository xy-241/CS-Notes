---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:16:00
Last Date: 2024-09-04T20:43:19+08:00
References: 
---
## Abstract
---
```
+--------+------+------+------+------+------+
| Opcode |  Rs  |  Rt  |  Rd  | Shamt| Funct|
| 6 bits |5 bits|5 bits|5 bits|5 bits|6 bits|
+--------+------+------+------+------+------+
```

- [[ISA Instruction Format#Opcode|Opcode]] is always `000000`
- `funct` combined with opcode exactly specifies the [[Instruction|instruction]]
- `rs` specifies register containing first operand
- `rt` specifies register containing second operand. Set to `0` for shift instructions
- `rd` specifies register which will receive result of computation
- `shamt` for `sll` and `srl`. Set to `0` for non-shift instructions


>[!important] 2 types of instructions
> 1. `arith $rd, $rs, $rt`
> 2. `shift $rd, $rt, shamt`

>[!important]
> R format instructions has only [[Register|registers]] as [[ISA Instruction Format#Instruction Operand]] except the **shift instructions**.
### Function Code
- 6 bits 
- Give [[MIPS]] (2^6-1) + 2^6 = 127 instead of 2^6=64 [[Instruction]]
- Dedicated for [[MIPS R-Type Instruction]] 

## Examples
---
### `srl`
- Shift Right Logical
- [[MIPS Instruction#Source Register]] is **0**
- Shifts the value right by n bits, discarding the lower n bits
- Dividing the value in register `$s0` by *16* (2^4) - `srl $s0, $s0, 4`

## Terminologies 
---
### Destination Register 
- 5bits
- Labeled `rd`, mapped to `WR`
- [[Register]] that gets the result of [[Operation]] in [[MIPS R-Type Instruction]] [[Instruction]]
