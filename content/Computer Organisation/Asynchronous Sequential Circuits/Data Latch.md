---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-01-30, 07:59
Last Date: 2024-02-03T21:54:43+08:00
References: 
draft: 
description: Builds on Set-Reset Latch, using a single multifunctional Set input controlled by a Data Input. This simplifies data handling by avoiding invalid states. The Data Input can both set and erase the stored state when Store input is active, offering flexibility but increasing gate count.
sr-due: 2024-02-03
sr-interval: 1
sr-ease: "270"
sr-due: 2024-02-06
sr-interval: 3
sr-ease: 270
---
## Abstract
---
![[Data Latch 1.png|700]]
- Built on top of [[Set Reset Latch]] with another 2 [[AND]], 1 [[NOT]]
- The difference is that, instead of having one set input and one reset input. We **only have one input** that does these 2 jobs. We call it the **Data Input**
- we have another input we call the **Store Input** which **controls** if we are going allow the state of **Data Input** from taking effect or not
- Refer to footnote for a nice visualisation on how it works [^1]

>[!success] Eliminate the Invalid State of Set-Reset Latch
>When **both** Data Input and Store Input are **active**, we are simply setting the **Set Input active** and **Reset Input inactive**
>
>There **isn't a way** to **set both** Set Input and Reset Input to **active** at the **same time**

[^1]: Data Latch Visualisation (From `4:33` to `5:55`)
![How Do Computers Remember? - YouTube](https://youtu.be/I0-izyq6q5s?si=uCiyGmIsDyOfcte9)