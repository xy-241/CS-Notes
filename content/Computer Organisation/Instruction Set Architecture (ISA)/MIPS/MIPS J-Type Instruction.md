---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:16:00
Last Date: 2024-09-03T19:34:04+08:00
References: 
---
## Abstract
---
```
+--------+---------------------------+
| Opcode |         Address           |
| 6 bits |         26 bits           |
+--------+---------------------------+
```

 - [[Instruction]] that tells [[CPU]] jump to [[Memory Address]] & execute [[Instruction]] starting from that point
 - 2 sections - [[ISA Instruction Format#Opcode]], [[Memory Address]]
 - Supports `if-else` and loops 

>[!important] Jump to any address within the same 256 MB region as the current PC
> Since the MIPS j-type instruction can only store a **26-bit address**, we construct the full 32-bit target address by taking the upper 4 bits from the current [[Register#Program Counter|program counter]], appending the 26-bit immediate from the instruction, and adding **two `0` bits** at the end. We ignore the last 2 bits because MIPS instructions are word-aligned, allowing us to address `256 MB` within the same region of the PC.