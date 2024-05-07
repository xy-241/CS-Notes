---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-09-21T10:08:04+08:00
Last Date: 2024-05-07T17:01:21+08:00
References: 
---
## Abstract
---
- A [[Combination Circuit]] that performs addition


## Half Adder
---

![[half_adder.png|500]]

- Can be built with **one** [[XOR]] for the **current bit** & **one** [[AND]] for the **carry bit**
- Takes in **two** [[Computer Data Representation#Bit]] and **return** the current bit `sum` and carry bit `cout`


## Full Adder
---
- Built with **two** [[#Half Adder]], takes in **three** [[Computer Data Representation#Bit]]
- The **sum** of the **first half adder** is added with the `cin` **by** the **second half adder**
- The **sum output** of the **second Half Adder** is the **final sum** at that **position** when there is a **carry in bit** `cin` besides the **2 bits** of the binary string **we need to sum**
- For the **carry out bit** `cout`, we need to have an [[OR]] to pipe out the final `cout` to handle situation where the first Half Adder's `cout` is 1 while the `cin` is 0 & sum of the first Half Adder is 0