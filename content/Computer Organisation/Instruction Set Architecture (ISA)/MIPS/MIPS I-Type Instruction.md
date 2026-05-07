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
#### MIPS I-Type Instruction Format

| Field     | Number of Bits | Description                                                                              |
| --------- | -------------- | ---------------------------------------------------------------------------------------- |
| opcode    | 6 bits         | Specifies the operation (e.g., load, store, branch)                                      |
| rs        | 5 bits         | Source register (the register containing the first operand)                              |
| rt        | 5 bits         | Target register (the register where the result is stored or the immediate value is used) |
| immediate | 16 bits        | Immediate value or address offset used in the instruction                                |

### Explanation of Each Field

1. **opcode**: 
   - The first 6 bits indicate the type of operation to be performed.

2. **rs**: 
   - The next 5 bits specify the source register.

3. **rt**: 
   - The following 5 bits specify the target register.

4. **immediate**: 
   - The last 16 bits represent an immediate value or an address offset.


### Types of Operations for MIPS I-Type Instructions

1. **Data Transfer Operations**:
    
    - **Load Word (lw)**: Loads a word from memory into a register.
    - **Store Word (sw)**: Stores a word from a register into memory.
    - **Load Byte (lb)**: Loads a byte from memory into a register.
    - **Store Byte (sb)**: Stores a byte from a register into memory.
2. **Arithmetic Operations**:
    
    - **Add Immediate (addi)**: Adds a constant (immediate value) to a register and stores the result in another register.
    - **Add Immediate Unsigned (addiu)**: Similar to `addi`, but does not check for overflow.
    - **Subtract Immediate (subi)**: Subtracts an immediate value from a register (not a standard MIPS instruction but can be implemented using `addi` with a negative immediate).
3. **Logical Operations**:
    
    - **AND Immediate (andi)**: Performs a bitwise AND operation between a register and an immediate value.
    - **OR Immediate (ori)**: Performs a bitwise OR operation between a register and an immediate value.
    - **XOR Immediate (xori)**: Performs a bitwise XOR operation between a register and an immediate value.
4. **Comparison Operations**:

    - **Set on Less Than Immediate (slti)**: Sets a register to 1 if the value in another register is less than the immediate value; otherwise, it sets the register to 0.
    - **Set on Less Than Immediate Unsigned (sltiu)**: Similar to `slti`, but treats the values as unsigned.
5. **Branch Operations**:
    
    - **Branch on Equal (beq)**: Compares two registers and branches to a specified label if they are equal.
    - **Branch on Not Equal (bne)**: Compares two registers and branches to a specified label if they are not equal.
    - **Branch on Less Than (blt)**: Branches to a specified label if the first register is less than the second register.
    - **Branch on Greater Than (bgt)**: Branches to a specified label if the first register is greater than the second register.



### MIPS I instruction types 

| Instruction                       | opcode(6 bits) | rs (5 bits) | rt (5 bits) | immediate (16 bits) | Explanation                                                                   |
| --------------------------------- | -------------- | ----------- | ----------- | ------------------- | ----------------------------------------------------------------------------- |
| lw (Load Word)                    | 100011         | 00001       | 00010       | 0000000001100100    | Loads a word from memory into register rt.                                    |
| sw (Store Word)                   | 101011         | 00001       | 00010       | 0000000001100100    | Stores a word from register rt into memory.                                   |
| addi (Add Immediate)              | 001000         | 00001       | 00010       | 0000000000001010    | Adds an immediate value to register rs and stores in rt.                      |
| andi (AND Immediate)              | 001100         | 00001       | 00010       | 0000000000001111    | Performs a bitwise AND between register rs and an immediate value.            |
| ori (OR Immediate)                | 001101         | 00001       | 00010       | 0000000000001111    | Performs a bitwise OR between register rs and an immediate value.             |
| xori (XOR Immediate)              | 001110         | 00001       | 00010       | 0000000000001111    | Performs a bitwise XOR between register rs and an immediate value.            |
| slti (Set on Less Than Immediate) | 001010         | 00001       | 00010       | 0000000000001010    | Sets rt to 1 if rs is less than the immediate value; otherwise, sets rt to 0. |
| beq (Branch on Equal)             | 000100         | 00001       | 00010       | 0000000000000001    | Branches to a label if the values in registers rs and rt are equal.           |
| bne (Branch on Not Equal)         | 000101         | 00001       | 00010       | 0000000000000001    | Branches to a label if the values in registers rs and rt are not equal.       |


## Examples
---
### `lw`

- Load Word
- Loads a word from memory into a register. The address is calculated by adding the immediate value to the value in the source register.
- The MIPS code: `lw $t2, 100($t1)`
- The equivalent high-level code: `R[rt] = Memory[R[rs] + SignExtImm]`

### `sw`

- Store Word
- Stores a word from a register into memory. The address is calculated by adding the immediate value to the value in the source register.
- The MIPS code: `sw $t2, 100($t1)`
- The equivalent high-level code: `Memory[R[rs] + SignExtImm] = R[rt]`

### `addi`

- Add Immediate
- Adds an immediate value to a register and stores the result in another register.
- The MIPS code: `addi $t2, $t1, 10`
- The equivalent high-level code: `R[rt] = R[rs] + SignExtImm`

### `andi`

- AND Immediate
- Performs a bitwise AND operation between a register and an immediate value.
- The MIPS code: `andi $t2, $t1, 0xFF`
- The equivalent high-level code: `R[rt] = R[rs] & SignExtImm`

### `ori`

- OR Immediate
- Performs a bitwise OR operation between a register and an immediate value.
- The MIPS code: `ori $t2, $t1, 0x0F`
- The equivalent high-level code: `R[rt] = R[rs] | SignExtImm`

### `xori`

- XOR Immediate
- Performs a bitwise XOR operation between a register and an immediate value.
- The MIPS code: `xori $t2, $t1, 0x0F`
- The equivalent high-level code: `R[rt] = R[rs] ^ SignExtImm`

### `slti`

- Set Less Than Immediate
- Sets the target register to 1 if the value in the source register is less than the immediate value; otherwise, it sets the target register to 0.
- The MIPS code: `slti $t2, $t1, 100`
- The equivalent high-level code: `R[rt] = (R[rs] < SignExtImm) ? 1 : 0`

### `beq`

- Branch on Equal
- Branches to a specified label if the values in the two registers are equal.
- The MIPS code: `beq $t1, $t2, label`
- The equivalent high-level code: `if (R[rs] == R[rt]) PC = PC + SignExtImm`

### `bne`

- Branch on Not Equal
- Branches to a specified label if the values in the two registers are not equal.
- The MIPS code: `bne $t1, $t2, label`
- The equivalent high-level code: `if (R[rs] != R[rt]) PC = PC + SignExtImm`
=======
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
- to represent longer values can use [[Integer Encoding (数字编码)#sign extension]]
-  Used for **PC-Relative Addressing**
- Used for [[ISA Addressing Mode#PC-relative Addressing Mode]]







