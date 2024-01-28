---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-01-28T22:07:38+08:00
References: 
sr-due: 2024-01-29
sr-interval: 1
sr-ease: 230
---
## Abstract
---
- [[Latch]] that stores a single [[Computer Data Representation#Bit]] and provides a way to **reset the stored bit**

### Circuit 1
![[sr_latch_basic_form.png|700]]
- As shown in the diagram above, we can build it with one [[OR]], one [[NOT]] and one [[AND]]
- Refer to footnote for a nice visualisation of how it works[^1]


### Circuit 2
![[S-R_Latch_Start.png|700]]
- Can be built with two [[NOR]]
- The diagram above shows the state when the circuit is **first turned on**
- Refer to footnote for a nice visualisation of how it works[^2]
</br>

![[S-R Latch.png|500]]
- Circuit Diagram & [[Truth Table]] using NOR  (high [[Asynchronous Sequential Circuit#Level Sensitive]] input S-R Latch)
- `Q` is the 1 bit storage

>[!caution] Invalid condition exists and must be avoided
>- When both S & R are 1, both `Q` & `Q'` will be 0


#### The Abstracted Diagram
![[S-R_Latch_diagram.png|200]]
## Gated S-R Latch
---
![[gated_sr_latch.png|500]]
- [[S-R Latch]] with [[Latch#Steering Gate]]
- Only active when `EN` is high

[^1]: [[#Circuit 1]] (From `1:15` to `2:36`)
![How Do Computers Remember? - YouTube](https://youtu.be/I0-izyq6q5s?si=uCiyGmIsDyOfcte9)
[^2]: [[#Circuit 2]] (From `2:57` to `4:33`)
![How Do Computers Remember? - YouTube](https://youtu.be/I0-izyq6q5s?si=uCiyGmIsDyOfcte9)