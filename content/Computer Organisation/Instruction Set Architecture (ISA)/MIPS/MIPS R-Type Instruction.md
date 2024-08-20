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
---
 - [[Instruction#Opcode]] is always **000000**
- [[Operation]] is decided by the [[#Function Code]]
- 6 parts - [[Instruction#Opcode]], [[MIPS Instruction#Source Register]], [[MIPS Instruction#Target Register]], [[#Destination Register]], [[#Shift Amount]] & [[#Function Code]]


## Terminologies 
---
R-type instructions have a fixed format and consist of several fields that specify the operation to be performed and the registers involved. The key fields in an R-type instruction are:


| Field  | Size (bits) | Description                                                                                                                                        |
| ------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| opcode | 6           | This field specifies the operation to be performed. For R-type instructions, this is always set to 0.                                              |
| rs     | 5           | Source register 1 (first operand)                                                                                                                  |
| rt     | 5           | Target register 2 (second operand)                                                                                                                 |
| rd     | 5           | Destination register (where the result is stored)                                                                                                  |
| shamt  | 5           | Shift amount (used for shift instructions) specifies the amount to shift. It is not used in most R-type instructions, so it is typically set to 0. |
| funct  | 6           | This field specifies the exact operation to be performed (e.g., addition, subtraction).                                                            |


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
   

5. **and**: 
   - **Binary**: `000000 00001 00010 00011 00000 100100`
   - **Assembly**: `and $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[AND]] operation between the values in registers $1 and $2. The result is stored in register $3. For example, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `00000011` (3 in decimal).

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
