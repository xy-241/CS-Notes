---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:16:00
Last Date: 2024-01-10T15:43:33+08:00
References: 
---
## Abstract
---
 - [[Instruction]] that tells [[CPU]] jump to [[Memory Address]] & execute [[Instruction]] starting from that point
 - 2 sections - [[Instruction#Opcode]], [[Memory Address]]
 - Supports `if-else` and loops 

# MIPS J-Type Instructions

MIPS J-type (Jump type) [[Instruction]]  is used for control flow in a program, allowing the program to jump to a different [[Memory Address]]. These instructions are essential for implementing functions, loops, and conditional branches. J-type instructions typically use a 26-bit address field to specify the target address for the jump.

## J-Type Instruction Format

The J-type instruction format consists of the following fields:

|Field|Number of Bits|Description|
|---|---|---|
|opcode|6 bits|Specifies the operation (e.g., jump)|
|address|26 bits|The target address to jump to|

##  MIPS J-Type Instructions

|Instruction|Opcode|Address|Explanation|
|---|---|---|---|
|j|000011|26 bits|Jumps to the specified address.|
|jal|000011|26 bits|Jumps to the specified address and saves the return address in `$ra`.|

>[!important] Why 26 bits ??
>
