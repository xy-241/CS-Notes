---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 
Last Date: 2023-12-09T19:55:10+08:00
References: 
---
## Abstract
- 3 key components - [[#Overlapping Subproblems (重复子问题)]], [[#Optimal Substructure ( 最优子结构)]] & [[#Statelessness (无后效性)]]

## Leetcode Tips
### Debugging
- Print out [[#DP Table]] to check any errors

## Questions
### Basics
- [509. Fibonacci Number](https://leetcode.cn/problems/fibonacci-number/)

### [[#Statelessness (无后效性)]]
#### CodeForces
- ⭐  [455A - Boredom (1500)](https://codeforces.com/problemset/problem/455/A)

### Sub Seqence (Continuous)
#### CodeForces
- [628B - New Skateboard](https://xy241-dsa.notion.site/B-New-Skateboard-99fcc366365b4a579fba2a1466cdf6a8?pvs=4) ([[Number Theory]] Required)


### Visualisation (Simulation)
- [1766C - Hamiltonian Wall](https://xy241-dsa.notion.site/1766C-Hamiltonian-Wall-4908ce5950ef4e9cbb0800225e20f65a?pvs=4)

## Terminologies 
### Overlapping Subproblems (重复子问题)
- Occur when a problem can be broken down into *smaller subproblems* that are *solved repeatedly*
- We can store the solutions to the subproblems as we solve them. This allows us to avoid re-solving the subproblems when we encounter them again
### Optimal Substructure (最优子结构)
- Occurs when the optimal solution to a problem can be found by *combining* the *optimal solutions to its subproblems*
- 原问题的最优解可以从子问题的最优解构建得来
- For example, the optimal solution to the knapsack problem can be found by combining the optimal solutions to the knapsack problem with smaller weights and values
- When a problem has optimal substructure, we can use the solutions to the subproblems to construct the solution to the original problem. This also allows us to avoid re-solving the subproblems
### Statelessness (无后效性)
- 给定一个确定的状态，其未来发展只与该状态有关， 与该状态所经历的过去的所有状态无关
- 如果未来发展与该状态和该状态的前一个状态相关，我们可以靠矩阵来解。但如果回溯的状态过多，就难了
- 许多[[Backtracking]] problems 都不具有*无后效性*， 无法使用*动态规划*快速求解
### DP Table
- Trade space for time
- Use extra space to hold intermediate results to avoid duplicated computation
- A mapping between the [[Backtracking#State (状态)|State]] and the correspnding solution to each sub-problems at that particular [[Backtracking#State (状态)|State]]
- Can take the form of [[Array]] or simply a variable
### State Transition Equation (状态转移方程)
