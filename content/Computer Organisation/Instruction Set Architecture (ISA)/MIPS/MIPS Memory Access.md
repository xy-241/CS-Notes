---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-08-30, 16:29
Last Date: 2024-08-31T21:08:25+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Each word in [[MIPS]] is 4 [[Computer Data Representation#Byte|bytes]], and MIPS uses [[Memory Address#Byte Addressing|byte addressing]], so **consecutive words' addresses differ** by $4$. Thus, the offset to the next word is always a multiple of 4

>[!question] Can I load or store one byte?
> Yes, we can use `lb` and `sb`. The consecutive byte's addresses differ by $1$.

>[!important]
> MIPS disallows loading/storing unaligned word using [[#lw]] and [[#sw]].

>[!important]
>Using [[Pointer|pointers]] will often result in less MIPS code when looping through array elements. This is because we can use the memory address directly as the loop termination condition, rather than having to **calculate the offset**.
### lw
![[mips_lw.png|500]]

### sw
![[mips_sw.png|500]]