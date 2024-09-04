---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:16:00
Last Date: 2024-09-04T20:47:58+08:00
References: 
---
## Abstract
---
```
+--------+-----+-------+-----------------+
| Opcode |  Rs  |  Rt  |    Immediate    |
| 6 bits |5 bits|5 bits|     16 bits     |
+--------+-----+-------+-----------------+
```

- [[ISA Instruction Format#Opcode|Opcode]] is used to uniquely specify an [[Instruction]]
- `rs` specifies [[Register|register]] containing first operand
- `rt` specifies register to **receive result**
- `immediate`: see [[#Immediate Value]] for more info

- `I` because it is [[Instruction]] that contains immediate value
- Meaning:  Add the **Source Register** with the **Immediate Value**, and store the result to the  **Target Register**

>[!important] 4 types of instructions
> 1. `arith $rt, $rs, 16_2s`
> 2. `lw/sw $rt, 16_2s($rs)`
> 3. `logic $rt, $rs, 16`
> 4. `branch $rs, $rt, label`, label in branch instruction refers to the **number of instructions** from the next instruction address.

>[!code] `slti`
> - Set Less Than Immediate
> - If value in [[MIPS Instruction#Source Register]] is smaller than [[#Immediate Value]], then [[MIPS Instruction#Target Register]] is set to *1* else *0*
> - The mips code - `slti $t0, $t0, 100`
> - The equivalent more high-level code - ``R[rt] = (R[rs]<SignExtImm) ? 1 : 0``

### Immediate Value 
- Value is  [[Integer Encoding (数字编码)#2's Complement (补码)]]
- 16-bits, can represent up to +-2^15 [[Computer Data Representation#Word]], 2^17 [[Memory Address]] because 4-bytes [[Memory Address#Word Addressing]]
- Used for [[ISA Addressing Mode#PC-relative Addressing Mode]]







