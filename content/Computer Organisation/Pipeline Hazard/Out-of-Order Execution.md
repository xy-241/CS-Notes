---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:00
Last Date: 2024-04-17T20:42:58+08:00
References: 
---
## Abstract
---
- Usually used with [[Operand Forwarding]] to handle **negative performance impact** caused by [[Pipeline Stall]]
- The idea is to execute **independent** [[Instruction]] in between instruction that are dependent on each other by **shifting the order of execution** defined in a given program. So those independent instructions can avoid pipeline stall. Thus, minimize **idle time**

>[!example]
> **Without Out-of-Order Execution**
> 
> ![[out-of-order_before.png|500]]
> - The **third instruction** has to stop because the **second instruction** stops
>   
> **With Out-of-Order Execution**
> 
> ![[out-of-order_after.png|500]]
> - 2 pipeline stalls are removed


