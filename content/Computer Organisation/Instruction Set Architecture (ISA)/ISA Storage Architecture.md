---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-03, 16:58
Last Date: 2024-09-04T20:51:14+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Defines the way how a computer system manages and accesses data storage

>[!important]
> [[#Accumulator ISA]] and [[#Stack ISA]] use **implicit operands**.
> 
> The implicit operand in Stack-based architecture is **“top-of-the-stack”** whereas in accumulator-based architecture it is a special register called an **accumulator**.

## Accumulator ISA
---
![[accumulator isa.png|150]]
1. ``load A``: Load value from [[Main Memory]] into accumulator which is a special [[Register]]!
2. ``add B``: Add value from Main Memory and value in the accumulator. The sum is stored back to the accumulator
3. ``store C``: Store value in accumulator into Main Memory

## Load-Store ISA
---
![[register-register,load-store isa.png|150]]
- Also known as **Register-Register ISA**
- The data is decoupled from the [[Register]] to [[Main Memory]]

>[!caution] Data Loading
> ![[word_alignment.png|500]]
> 
> Can only load data at [[Computer Data Representation#Word]] boundaries.




## Memory-Memory ISA
---
![[memory-memory isa.png|150]]

## Stack ISA
---
![[stack isa.png|150]]
1. ``push A``, ``push B``: We load values from [[Main Memory]] onto the [[Stack]]
2. ``add``: Remove the top 2 values in the Stack, add them, and load the sum onto top of Stack
3. ``pop C``: Transfer value at top of Stack to Main Memory