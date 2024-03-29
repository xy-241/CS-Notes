---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-14T21:51:00
Last Date: 2024-03-29T16:24:02+08:00
References: 
---
## Abstract
---
- **Definition:** A mathematical field focused on solving **discrete problems** by finding the **best possible solution** (the "optimal" solution) from a **large but finite** set of **potential solutions**. These solutions are often represented as [[Combination]] of discrete elements
- **Goal:** The aim is to identify a solution that **maximizes** or **minimizes** a specific **objective function** (e.g., minimizing cost, maximizing profit, finding the shortest path) while adhering to **a set of constraints**

>[!bigbrain] 4 key components
> **Discrete Problems**
> - **Decision variables** can only take on **discrete values** (e.g., [[Integer (整数)]], boolean decisions, etc.), rather than continuous ranges like [[Real Number]]
> 
> **Finite Solution Space**
> - Finite number of possible solutions. This distinguishes these problems from **continuous optimisation**
> 
> **Objective Functions**
> - [[Mathematical Function]] that defines what you want to **optimise**. You can find the solution that either **maximises** or **minimises** this function
> 
> **Constraints**
> - **Conditions** or **limitations** that any feasible solution must meet



## Knapsack Problem
---
- **Problem definition**: Given a [[Set]] of items, each with a **weight** and a **value**, determine which **items to include** in the collection so that `total weight <= a given limit(bag size)` and the **maximise the value**

>[!bigbrain] 4 key components
> **Discrete Problems**
> - The **decision variable** is should we place the item into bag? Yes if the bag can hold it and it generates a higher value, else no
> 
> **Finite Solution Space**
> - There is a finite [[Combination]] of items we can have given a finite set of item and a finite bag size
> 
> **Objective Functions**
> - **maximise the value**
> 
> **Constraints**
> - `total weight <= a given limit(bag size)`


## Terminologies
---
### Optimal Sub-structure


## References 
---
- [Knapsack problem - Wikipedia](https://en.wikipedia.org/wiki/Knapsack_problem#0-1_knapsack_problem)