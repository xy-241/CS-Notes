---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:00
Last Date: 2024-04-17T20:23:34+08:00
References: 
---
## Abstract
---
![[Pipeline Stall.png|500]] 

- **Pause the [[Instruction]]** before the previous Instruction has [[Pipeline Stages#Write Back]] the data it needs to

>[!attention] Performance hit
> Too much pipeline stall will reduce the benefits of [[Pipeline]]. Because when one instruction stalls, the other instructions that are dependent on the previous instruction have to stall too. 
> 
> We can minimize such situation by using [[Out-of-Order Execution]] & [[Operand Forwarding]].

 