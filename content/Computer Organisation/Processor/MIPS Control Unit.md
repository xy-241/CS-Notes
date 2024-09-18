---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-18, 17:26
Last Date: 2024-09-18T20:40:14+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[mips_control_unit_inside.png]]

| Control Signal       | Purpose                                                                                                                                 | Value                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `RegDst`             | Select the destination register, either `rd` or `rt`                                                                                    | `0` for `rt`<br><br>`1` for `rd`                                                                                            |
| `RegWrite`           | Enable the writing back to the register file                                                                                            | `0`, nothing happens<br><br>`1`, `WD` get written to `WR`                                                                   |
| `ALUSrc`             | Select the `2nd` operand for the ALU, either from the register file or the immediate value from the [[Instruction]]                     | `0` for [[MIPS R-Type Instruction]] `rt`<br><br>`1` for [[MIPS I-Type Instruction]], but `0` for [[ALU#Branch Instruction]] |
| `ALUcontrol`         | Select the operation to be performed by the ALU                                                                                         | 4bits, see [[MIPS ALU]] for more information                                                                                |
| `MemRead`/`MemWrite` | Enable reading/writing of data memory, both can't be enabled at the same time                                                           | `0` is disable<br><br>`1` is enable                                                                                         |
| `MemToReg`           | Select the result to be written back to the [[Register#Register File]], either result from the [[MIPS Data Memory]] or [[ALU#MIPS ALU]] | `1` for read data from data memory<br><br>`0` for read data from ALU                                                        |
| `PCSrc`              | Select the next value for the [[Register#Program Counter]]                                                                              | `0` for `PC + 4`<br><br>`1` for `PC + 4 + 4 * immed`                                                                        |




