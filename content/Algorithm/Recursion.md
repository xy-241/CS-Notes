---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-23T19:38:22+08:00
Last Date: 2024-03-07T11:21:28+08:00
References: 
---
## Abstract
---
- 3 components
	1. **Starting point**: break down the big problem, and sum up the answers of sub-problems, and return it as final answer
	2. **Progression**: obtaining the answers of sub-problems
	3. **Base case**: the terminating point of recursion
- 递归解题思路主要还是聚焦在一个节点，想想在这一个节点上要做点啥，递归就像‘水波纹’把这‘做点啥’传递到其它节点上

### Recursion Function
- A function that calls itself during its execution
- Instead of using iteration (loops), a recursive function breaks down a problem into smaller subproblems and solves each subproblem by calling itself

## Wishful Thinking
---
- **Trust the Process**, instead of trying to track the execution of every single recursive call in your head, assume that the recursive call will magically do the right thing for the smaller version of the problem
- Just look at the **smaller problems** and the build on top of the **solution of the base case**

>[!success] Simplifies Mental Model
> Instead of getting lost in the chain of recursive calls, you focus on the **relationship** between the **current problem** and the **smaller sub-problem**

>[!success] Encourages Top-Down Thinking
> You start with the **big picture** of how the problem breaks down, and the **details of the base case** help ground the recursive process

>[!example] Calculating Factorial
> Given `factorial(4)`, we know that the smaller problem is to calculate `4 * factortial(3)`. With wishful thinking, we trust that our code already magically knows how to calculate the `factorial(3)`, so in the current `facrotial(4)` function call, we just need to focus on multiplying `4` to the `factorial(3)`. And the base case aka the terminating point is `factorial(1) = 1`
