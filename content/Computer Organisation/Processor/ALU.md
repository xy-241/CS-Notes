---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:26:04+08:00
Last Date: 2024-09-16T14:13:53+08:00
References: 
---
## Abstraction
---
![[alu.svg|500]]

- A digital circuit inside [[CPU]] that is responsible to carry **arithmetic operation** like addition and multiplication etc
- ALU takes in **operand_1** and **operand_2** that are required to carry out the **arithmetic operation** and it also takes in [[ISA Instruction Format#Opcode]] which tells the ALU **what arithmetic operation to carry out**
- Besides outputting the result of the arithmetic operation, the ALU also outputs a status bit, known as a **flag**, to **summarise the operation**, such as indicating overflow

## MIPS ALU
---
### Non-branch Instruction

![[mips_alu_non_branch.png|500]]

- 4 bits are used for `ALUcontrol`

### Branch Instruction

![[mips_alu_branch.png|500]]

- `PCSrc` is `0` for **not taking** a branch and `1` for **taking** a branch. `isZero?` flag is also used to determine the value of `PCSrc`. `isZero?` is `1` when a branch should take place
- PCSrc value is computed using by doing a subtract operation on the s1 and s2 registers , if the result is 0 set PCSrc to 0 else 1  

 >[!important]
> `ALUSrc` is `0`, even though branch instruction is an [[MIPS I-Type Instruction|I-type instruction]].
> 
> The branch target address **isn't** calculated by the ALU!