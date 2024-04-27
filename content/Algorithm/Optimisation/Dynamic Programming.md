---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-11-30T21:28:00
Last Date: 2024-04-27T19:04:36+08:00
References: 
aliases:
  - ../../Algorithm/Dynamic-Programming
---
## Abstract
---
- Also known as **Dynamic Optimisation**
- Divide a given problems into smaller problems, answers to those smaller problems generate the answer to the given problem. We make use of [[Memoization]] to remember the answers to those smaller problems, so we don't re-solve those smaller problems

>[!quote] Dynamic
> *I wanted to get across the idea that this was dynamic, this was **multistage**, this was **time-varying**.* - **Bellman**
> 
> So Dynamic programming is also known as **Multistage Optimisation**. The multstage here refers to the stages of solving subproblems which deliver the **final optimal answer** to a given problem.

- There are two main approaches to DP algorithms - [[Algorithm Design#Top-down Approach]] and [[Algorithm Design#Bottom-up Approach]]


>[!tip] DP Debugging
> Print out [[#DP Table]] to check any errors.


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


## DP Components
---
### DP Table
- Trade space for time
- Use extra space to hold intermediate results to avoid duplicated computation
- A mapping between the [[Backtracking#State (状态)|State]] and the correspnding solution to each sub-problems at that particular state
- Can take the form of [[Array]] or simply a variable
### State Transition Equation (状态转移方程)
- What is the **mathematical operation** we need to perform to transit from one state (smaller scope) to the next state (bigger scope), eventually we reach the global state which returns the final answer

>[!example] 0-1 knapsack problem
> In [[Combinatorial Optimisation#0-1 knapsack problem]], the scope is basically the number of the items we can select. The less the items available to be selected the smaller the scope.
> 
> The **smallest scope** is $0$  item, in this case, the maximum value we can obtain is always $0$ regardless the size of the knapsack bag.
> 
> Then we expand the scope from $0$ item to $1$ item. What is the mathematical operation we need to perform to obtain the new state of the new scope? 
> 
> The answer is to loop through the knapsack size from $1$ to the maximum size. At each size, if the weight of the new item exceeds the knapsack size, we get a bigger knapsack size until we get one that is big enough for the new item. **The new state in this case is just the state of the previous smaller scope**.
> 
> When the knapsack size is big enough, there are **2 choices** for us, it is either we put the new item into the bag or we don't. So how? Remember we want to maximise the value we can have inside the knapsack bag, so we should always make the decision that increments the value in the new state.
> 
> Lets abstract the problem:
> - Let $s$ be the current knapsack bag size
> - Let $p$ be the previous state with $s$, basically the best value we can have with $s$
> - Let $w$ be the weight of the new item
> - Let $v$ be the value of new item
> 
> So now we want to perform **state transition** which is to obtain the **best value** with **bigger scope** at $s$. How should we do that?
> 
> The answer is simple, we only put the new item into the knapsack bag **if it can generate a bigger value** at $s$.
> 
> We know the **previous state** is the **best state** at that **smaller scope**. So we can build on top of it! If I put in the new item, the best value it can generate is basically the best value at $s-w$ at the previous state(let this best value be $q$) + $v$. If we don't put the new item, the best value is basically $p$.
> 
> Thus, we obtain our **State Transition Equation**. The new state at $p$ is  `Math.max(q + v, p)`. We put the new item into the bag if $q+v \gt p$, else we don't.