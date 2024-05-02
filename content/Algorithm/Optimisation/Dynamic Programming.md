---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-11-30T21:28:00
Last Date: 2024-05-02T11:42:55+08:00
References: 
aliases:
  - ../../Algorithm/Dynamic-Programming
---
## Abstract
---
- Also known as **Dynamic Optimisation**
- A **technique** utilised to **divide** a **given problems** into **smaller problems**, **optimal answers** to those **smaller problems** generate the **optimal answer to the given problem**, and the **efficiency** of the process is **improved** by making use of [[Memoization]] to remember the answers to those smaller problems, so we **avoid duplicated computation**

>[!quote] Dynamic
> *I wanted to get across the idea that this was dynamic, this was **multistage**, this was **time-varying**.* - **Bellman**
> 
> So Dynamic programming is also known as **Multistage Optimisation**. The multstage here refers to the stages of solving subproblems which deliver the **final optimal answer** to a given problem.

- There are two main approaches to DP algorithms - [[#Top-down DP Approach]] and [[Algorithm Design#Bottom-up Approach]]


>[!tip] DP Debugging
> Print out [[Memoization#DP Table]] to check any errors.


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

## Top-down DP Approach
---

![[top_down_approach_fib.png]]

- Start with the **large, complex problem**, and understand how to break it down into **smaller subproblems**, perform [[Memoization]] by recording down the answer of subproblems to **avoid duplicated computation** on **overlapping subproblems**. Above shows how can we make use of top-down approach to find [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence) in $O(n)$

>[!attention]
> The space complexity of Top-down approach is $O(n)$, we need to record down the answer for all the subproblems.
> 
> When we break down the larger problem into smaller subproblems, some subproblems may already be solved but some aren't. The **size of subproblems** can **vary**, so we have to record down the answer to each solved subproblems, so we can solve that subproblem in $O(1)$ if we see that subproblem again.

### Divide and Conquer 
- [[#Top-down DP Approach]] without [[Memoization]], because overlapping subproblems aren't a requirement for the Divide and Conquer approach
- Make use of [[Recursion]] to divide a given problem into smaller subproblems until its **smallest form** whose **answer is known**. We combine the answers of smaller subproblems into the answer of a bigger subproblem when the function calls on the smaller subproblems return
- For example, [[Sorting#Merge Sort]] uses Divide and conquer




## Bottom-up DP Approach
---

![[bottom_up_approach_fib.png]]

- Start with the **smallest possible subproblems**, figures out the solution to them, and then slowly **builds itself up** to solve the **larger, more complicated subproblem**

>[!success] Space efficient
> The space complexity of Bottom-up approach is $O(1)$, we just need to save the solutions of adjacent subproblems to obtain the answer to the bigger problem.
> 
> It is like finding the solution to $(5+5+5+5)+5$, we already know $(5+5+5+5)$ is $20$, then the answer to $(5+5+5+5)+5$ is simply $(20) + 5$ which is $25$. You see we don't need to remember what is the answer to $5+5$ or $5+5+5$, because the answer of $(5+5+5+5)+5$ **depends directly** on $(5+5+5+5)$, **nothing else**.

>[!important] Dependency order of subproblems
> ![[dp_topological_sort_order.png|500]]
> 
> In order to be solved with dynamic programming, the **dependency order of subproblems** of a given problem **MUST** follow a **topological sort order**, as shown above. Think about the answer of $(5+5+5+5)+5$ **depends directly** on $(5+5+5+5)$, **nothing else**. If $(5+5+5+5)$ depends on $(5+5+5+5)+5$, there is no way for us to **build up** the solution from smaller subproblems! 
## DP Problem Properties 
---
### Overlapping Subproblems (重复子问题)
- Occur when a problem can be broken down into **smaller subproblems** that are **exactly the same**

>[!tip]
> Overlapping subproblems can be handled efficiently with [[Memoization]].
### Optimal Substructure (最优子结构)
- When a problem has optimal substructure, we can use the **optimal solutions of the subproblems** to construct the **optional solution of the given problem**

>[!example] Knapsack Problem
> The solution can be found by building on the optimal solutions to the knapsack problem with smaller weights and values.
### Statelessness (无后效性)
- Solutions to smaller problems are **deterministic**. For example, the answer of $(5+5+5+5)+5$ **depends directly** on $(5+5+5+5)$, **nothing else**
- We can expand the definition of [[Memoization#DP Table]] to keep track the state of more complex problems, aka building up from the optimal solution of smaller subproblems. However, problems like [Travelling salesman problem - Wikipedia](https://en.wikipedia.org/wiki/Travelling_salesman_problem#:~:text=The%20travelling%20salesman%20problem%2C%20also,returns%20to%20the%20origin%20city%3F%22) is too complex to have the solutions of its subproblems modelled into a dp table. Thus, can't be solved with the help of [[Dynamic Programming]]

## State Transition Equation (状态转移方程)
---
- The [[Recursion#Recurrence Function]] we need to perform to transit from one state(**bigger subproblems**) to a smaller state(**smaller subproblems**), comes with a **base case** for the **smallest form of the problem**

- Fibonacci sequence
$$
F(n) = 
\begin{cases}
1 & n\le 1\\
F(n-1) + F(n-2) & n>1
\end{cases}
$$

- [Unique Path - LeetCode](https://leetcode.com/problems/unique-paths/description/)
$$
F(n, m) = 
\begin{cases}
0 & n<1 \text{ or } m<1 \\
1 & n = 1 \text{ or } m = 1 \\
F(n-1, m) + F(n, m-1) & n>1 \text{ and } m>1
\end{cases}
$$

- [Coin Change - LeetCode](https://leetcode.com/problems/coin-change/description/)
$$
\begin{equation*}
    F(n) = \begin{cases} 
        -1 & n < 0 \\
        0 & n = 0 \\
        \min\{F(n-c) + 1 \mid n - c \geq 0, F(n-c) \neq -1, c \in \text{coins}\} & n \geq 1
    \end{cases}
\end{equation*}


$$

>[!important]
> Theoretically, if a problem fulfils the [[#Overlapping Subproblems (重复子问题)]] and [[#Optimal Substructure (最优子结构)]] properties, we are able to come up with the state transition equation.

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


## References
---
- [第 14 章   动态规划 - Hello 算法](https://www.hello-algo.com/chapter_dynamic_programming/#_1)