---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:00
lastmod: 2023-12-05T17:45:51+08:00
References: 
---
## Abstract
- Used with [[Operand Forwarding]] to handle [[Pipeline Stall]]
- Without *Out-of-Order Execution*
![[out-of-order_before.png]]
- The third [[Instruction]] has to stop because the second [[Instruction]] stops
- With *Out-of-Order Execution*
![[out-of-order_after.png]]
- By shifting the starting point of [[Instruction]], we can minimize *idle time*
- The idea is to execute independent [[Instruction]] in between [[Instruction]] that are dependent on each other