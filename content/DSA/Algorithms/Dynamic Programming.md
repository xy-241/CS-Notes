---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 
Last Date: 
References:
---
## Abstract
- 3 key components - [[#Overlapping Subproblems (重复子问题)]], [[#Optimal Substructure ( 最优子结构)]] & [[#Statelessness (无后效性)]]

## Leetcode Tips
### Debugging
- Print out [[#DP Table]] to check any errors

## Questions
### Basics: [[#Overlapping Subproblems (重复子问题)]]
- [509. Fibonacci Number](https://leetcode.cn/problems/fibonacci-number/)

### [[#Optimal Substructure (最优子结构)]]
#### CodeForces
- ⭐  [455A - Boredom (1500)](https://codeforces.com/problemset/problem/455/A)

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
### State Transition Equation (状态转移方程)
