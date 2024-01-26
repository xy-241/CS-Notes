---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-01-26T23:06:59+08:00
References: 
---
## Abstract
---
![[sr_latch_basic_form.png|700]]

- [[Latch]] that stores a single [[Computer Data Representation#Bit]]
- As shown in the diagram above, we can build it with one [[OR]], one [[NOT]] and one [[AND]][^1]
</br> 

- Can be built with either [[NOR]] where [[Asynchronous Sequential Circuit#Level Sensitive]] is high, or [[NAND Gates]]  where level sensitive is low
- Circuit Diagram & [[Truth Table]] using NOR  (Active-high input S-R Latch)
- When the pin from ``Q`` or ``Q'`` is low, the NOR is active which means it is ready to take in the input from either ``R`` or ``S``
![[S-R Latch.png|500]]

>[!info] ``Q``
>- The 1 bit storage

>[!caution] Invalid condition exists and must be avoided
>- When both S & R are 1, both `Q` & `Q'` will be 0


- The [[Abstraction (抽象)]] diagram
![[S-R_Latch_diagram.png|200]]
## Gated S-R Latch
---
![[gated_sr_latch.png|500]]
- [[S-R Latch]] with [[Latch#Steering Gate]]
- Above is active high: only active when `EN` is high

[^1]: How Do Computers Remember? (From `1:15` to `2:36`)
![How Do Computers Remember? - YouTube](https://youtu.be/I0-izyq6q5s?si=uCiyGmIsDyOfcte9)
