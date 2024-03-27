---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-11-30T21:28:00
Last Date: 2024-03-22T16:49:01+08:00
References: 
---
## Abstract
---
- Divide a given problems into smaller problems, answers to those smaller problems generate the answer to the given problem. We remember the answers to those smaller problems, so we don't re-solve those smaller problems
- 3 key components - [[#Overlapping Subproblems (重复子问题)]], [[#Optimal Substructure ( 最优子结构)]] & [[#Statelessness (无后效性)]]

>[!tip] Debugging
> Print out [[#DP Table]] to check any errors


>[!note]- Question Bank
> **Basics**
> - [509. Fibonacci Number](https://leetcode.cn/problems/fibonacci-number/)
>   
> **[[#Statelessness (无后效性)]]**
> - [455A - Boredom (1500)](https://codeforces.com/problemset/problem/455/A)
>   
> **Continuous Sub-sequence**
> - [628B - New Skateboard](https://xy241-dsa.notion.site/B-New-Skateboard-99fcc366365b4a579fba2a1466cdf6a8?pvs=4) ([[Number Theory]] Required)
> 
> **Simulation**
> - [1766C - Hamiltonian Wall](https://xy241-dsa.notion.site/1766C-Hamiltonian-Wall-4908ce5950ef4e9cbb0800225e20f65a?pvs=4)


## DP Problem Properties 
---
### Overlapping Subproblems (重复子问题)
- Occur when a problem can be broken down into **smaller subproblems** that are **solved repeatedly**
- We can store the solutions to the subproblems as we solve them. This allows us to avoid re-solving the subproblems when we encounter them again
### Optimal Substructure (最优子结构)
- Answer to a given problem has to be a [[Combination]] of the optimal solution of its smaller problems - solve the smaller problems in the best way possible, we solve the given problem (如果原问题的最优解可以从子问题的最优解构建得来，则它就具有最优子结构)
- When a problem has optimal substructure, we can use the solutions to the subproblems to construct the solution to the original problem

>[!example] Knapsack Problem
> The solution can be found by combining the optimal solutions to the knapsack problem with smaller weights and values.
### Statelessness (无后效性)
- Solutions to smaller problems are **deterministic**  
- 给定一个**确定的状态**， 其**未来发展**只与**该状态有关**， 与该状态所经历的过去的所有**状态无关**
- 如果未来发展与该状态和该状态的前一个状态相关，我们可以靠矩阵来解。但如果回溯的状态过多，就难了
- 许多[[Backtracking]] problems 都不具有**无后效性**， 无法使用 [[Dynamic Programming]] 快速求解


## DP Tools
---
### DP Table
- Trade space for time
- Use extra space to hold intermediate results to avoid duplicated computation
- A mapping between the [[Backtracking#State (状态)|State]] and the correspnding solution to each sub-problems at that particular [[Backtracking#State (状态)|State]]
- Can take the form of [[Array]] or simply a variable
### State Transition Equation (状态转移方程)