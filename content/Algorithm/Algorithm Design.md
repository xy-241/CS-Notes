---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-04-27, 17:55
Last Date: 2024-04-27T18:53:02+08:00
References: 
draft: 
description: 
---
## Abstract
---
- The different **components** involved in creating an [[Algorithm]]


## Top-down Approach
---

![[top_down_approach_fib.png]]

- Start with the **large, complex problem**, and understand how to break it down into **smaller subproblems**, perform [[Memoization]] by recording down the answer of subproblems to **avoid duplicated computation** on **overlapping subproblems**. Above shows how can we make use of top-down approach to find [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence) in $O(n)$

>[!attention]
> The space complexity of Top-down approach is $O(n)$, we need to record down the answer for all the subproblems.
> 
> When we break down the larger problem into smaller subproblems, some subproblems may already be solved but some aren't. The **size of subproblems** can **vary**, so we have to record down the answer to each solved subproblems, so we can solve that subproblem in$0(1)$ if we see that subproblem again.


## Bottom-up Approach
---

![[bottom_up_approach_fib.png]]

- Start with the **smallest possible subproblems**, figures out the solution to them, and then slowly **builds itself up** to solve the **larger, more complicated subproblem**

>[!success] Space efficient
> The space complexity of Bottom-up approach is $O(1)$, we just need to save the solutions of adjacent subproblems to obtain the answer to the bigger problem.
> 
> It is like finding the solution to $(5+5+5+5)+5$, we already know $(5+5+5+5)$ is $20$, then the answer to $(5+5+5+5)+5$ is simply $(20) + 5$ which is $25$. You see we don't need to remember what is the answer to $5+5$ or $5+5+5$, because the answer of $(5+5+5+5)+5$ **depends directly** on $(5+5+5+5)$, **nothing else**.