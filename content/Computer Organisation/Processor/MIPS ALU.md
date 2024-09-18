---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-18, 17:31
Last Date: 2024-09-18T18:02:35+08:00
References: 
draft: 
description: 
---
## Abstract
---

![[1-bit_mips_alu.png|500]]

- `Ainvert`, `Binvert`, and `Operation` are inputs to a [[Multiplexer|multiplexer]]. `Operation` is used to select among three operations: AND, OR, and Addition. `Cin` (carry-in) is used when we want to perform subtraction on the addition, as we are using [[Integer Encoding (数字编码)#2's Complement (补码)|2's complement representation]]

>[!important] Features of ALU Control
>  ![[mips_alu_features.png|300]]


## MIPS ALU Control Signal
---

![[mips_alu_control_signal.png|500]]

- [[Control Unit#Control Signal]] for [[MIPS ALU]]

>[!important]
> ![[mips_alu_control_unit.png|400]]
> 
> We generate `ALUcontrol` using `opcode` and `funct` with a truth table, then use a [[Karnaugh Map]] to simplify the table to create a concise logic circuit, as shown above.