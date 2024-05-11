---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-01-24, 13:28
Last Date: 2024-05-11T20:19:26+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A technique stores the results of **expensive** function calls and return the **cached result** in $O(1)$ when the same function call is executed

>[!bigbrain] Improves computation efficiency
> With the cost of [[Main Memory]], we **avoid redundant expensive computations**. This improve the overall running performance of the program.

>[!info] Use case in dynamic programming
> An **optimisation technique** used in [[Dynamic Programming]], used in both [[Dynamic Programming#Top-down DP Approach]] and [[Dynamic Programming#Bottom-up DP Approach]].
## DP Table
---
- [[Memoization]] in [[Dynamic Programming]] to **trade space for time** - use extra space to hold **optimal solution** of [[Dynamic Programming#Overlapping Subproblems (重复子问题)]] to **avoid duplicated computation**
- DP table can take the form of [[Array]] or simply a variable