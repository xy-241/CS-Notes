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


## MIPS R instruction types 
--- 


| Instruction | opcode | rs    | rt    | rd    | shamt | funct  | Explanation                                |
| ----------- | ------ | ----- | ----- | ----- | ----- | ------ | ------------------------------------------ |
| add         | 000000 | 00001 | 00010 | 00011 | 00000 | 100000 | Adds the values in $1 and $2, stores in $3 |
| sub         | 000000 | 00001 | 00010 | 00011 | 00000 | 100010 | Subtracts $2 from $1, stores in $3         |
| sll         | 000000 | 00000 | 00010 | 00011 | 00001 | 000000 | Shift $2 left by 1, stores in $3           |
| srl         | 000000 | 00000 | 00010 | 00011 | 00001 | 000010 | Shift $2 right by 1, stores in $3          |
| and         | 000000 | 00001 | 00010 | 00011 | 00000 | 100100 | Bitwise AND of $1 and $2, stores in $3     |
| or          | 000000 | 00001 | 00010 | 00011 | 00000 | 100101 | Bitwise OR of $1 and $2, stores in $3      |
| xor         | 000000 | 00001 | 00010 | 00011 | 00000 | 100110 | Bitwise XOR of $1 and $2, stores in $3     |
| nor         | 000000 | 00001 | 00010 | 00011 | 00000 | 100111 | Bitwise NOR of $1 and $2, stores in $3     |
**note $ sign denotes a register**
###  Breakdown

1. **add**: 
   - **Binary**: `000000 00001 00010 00011 00000 100000`
   - **Assembly**: `add $3, $1, $2`
   - **Explanation**: This instruction adds the values stored in registers $1 and $2. The result of this addition is then stored in register $3. For example, if $1 contains the value 5 and $2 contains the value 10, after executing this instruction, $3 will contain the value 15.

2. **sub**: 
   - **Binary**: `000000 00001 00010 00011 00000 100010`
   - **Assembly**: `sub $3, $1, $2`
   - **Explanation**: This instruction subtracts the value in register $2 from the value in register $1. The result is stored in register $3. For instance, if $1 contains 10 and $2 contains 4, after executing this instruction, $3 will contain the value 6 (10 - 4).

3. **sll**: 
   - **Binary**: `000000 00000 00010 00011 00001 000000`
   - **Assembly**: `sll $3, $2, 1`
   - **Explanation**: This instruction performs a logical left shift on the value in register $2 by 1 bit. The result is stored in register $3. For example, if $2 contains the binary value `00000010` (which is 2 in decimal), after the shift, $3 will contain `00000100` (which is 4 in decimal).

4. **srl**: 
   - **Binary**: `000000 00000 00010 00011 00001 000010`
   - **Assembly**: `srl $3, $2, 1`
   - **Explanation**: This instruction performs a logical right shift on the value in register $2 by 1 bit. The result is stored in register $3. For instance, if $2 contains the binary value `00000100` (which is 4 in decimal), after the shift, $3 will contain `00000010` (which is 2 in decimal). 
   

>[!important]
>    
>sll and srl only need 5 bits (i.e., C5) because
shifting by 32-bits empties the register (i.e., set to 0)
>    

>[!important] multiplication and division
> can be done with sll and slr because in mips there exist no multiplication or division instruction 
>
>- example of sll multiplication, `a = a * 8` the instruction will be `sll $a $a 3` 3 denotes the number of bits to move to the left
>- example of slr division , `a = a / 4` the instruction will be `slr $a $a 2` 2 denotes the number of bits to move to the right 



5. **and**: 
   - **Binary**: `000000 00001 00010 00011 00000 100100`
   - **Assembly**: `and $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[AND]] operation between the values in registers $1 and $2. The result is stored in register $3. For example, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `00000011` (3 in decimal).typically it’s used for masking operations 

6. **or**: 
   - **Binary**: `000000 00001 00010 00011 00000 100101`
   - **Assembly**: `or $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[OR]] operation between the values in registers $1 and $2. The result is stored in register $3. For instance, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `00001111` (15 in decimal).

7. **xor**: 
   - **Binary**: `000000 00001 00010 00011 00000 100110`
   - **Assembly**: `xor $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[XOR]] operation between the values in registers $1 and $2. The result is stored in register $3. For example, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `00001100` (12 in decimal).

8. **nor**: 
   - **Binary**: `000000 00001 00010 00011 00000 100111`
   - **Assembly**: `nor $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[NOR]] operation between the values in registers $1 and $2. The result is stored in register $3. For instance, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `11110000` (240 in decimal, which is the bitwise negation of the OR result).
=======
### Destination Register 
- 5bits
- Labeled `rd`, mapped to `WR`
- [[Register]] that gets the result of [[Operation]] in [[MIPS R-Type Instruction]] [[Instruction]]
