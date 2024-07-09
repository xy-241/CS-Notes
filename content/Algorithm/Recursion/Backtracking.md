---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-18T12:15:00
Last Date: 2024-07-09T17:44:48+08:00
---
## Abstract
---
- A **brute-force method** that **explores all possible paths**

>[!important]
> Backtracking is an **Algorithm Strategy,** while [[Recursion]] is more like a **Algorithm Tool.** Recursion powers searching problems.
> 
> 回溯算法通常并不显式地对问题进行拆解，而是将问题看作一系列决策步骤，通过试探和[[#Pruning (剪枝)]]， 搜索所有可能的[[#Solution (解)]]. We can perform [[#Pruning]] to improve the performance, but this will not change the overall worst case

>[!attention]
> [[Iterative Recursion]] doesn't work well to implement this algorithm, stick to [[Recursion]] - backtracking allows us to implicitly create multiple nested for-loops until we find the desired answer
## Tips in solving Leetcode
---
### Pruning
- For example, when **finding the sum** in questions, **sort the given array** before backtracking. This allows you to **skip** the rest of the loops **if the next element is larger**. Thus, [[#Pruning (剪枝)]] is achieved

### Handling Duplicates in Combination
- For [[Combination]], each element can be **used only once**, so we **need** to **remove duplicates**. We can achieve this by **sorting the given set**. At each level, **skip elements** with the **same value** as the **previous element**

```java
// In the primary function
Arrays.sort(nums);

// In Backtracking function
for (start = start; start<nums.length; start++) {
	// ...
	while(start < nums.length-1 && nums[start]==nums[start+1]) start++;
}
```
### 2 Ways to Handle Duplicates in Permutation
1. To remove duplicates at each level, you can utilise a [[Hash Map]] or [[Array|array]], particularly if the **element values** are within a **small, known range** (e.g., 0 to n-1)

```java
// Without the need to sort the given array in the primary function

// In Backtracking function
boolean[] duplicates = new boolean[n];
for (int i=0; i<nums.length; i++) { 
	if (duplicates[nums[i]]) continue;
	duplicates[nums[i]] = true;
	// ...
}
```

2. Sort the given [[Array|array]], then remove duplicates by checking **if the previous element** is the **same as** the **current element** and **hasn't been used yet**. This ensures that the previous element with the same value can be used, thus **avoiding duplicate [[Permutation]]**


```java
// In the primary function
Arrays.sort(nums);

// In Backtracking function
if (i>0 && nums[i-1]==nums[i] && visited[i-1]==false) continue;
```

## Leetcode Questions
---
>[!important]
> For [[Combination#Combination Questions]], [[#Solution (解)]] is obtained by collecting the [[#State (状态)]] at the [[Tree#Leaf Node| Leaf Node]].
> 
>For [[#Subset (子集)]], [[#Solution (解)]] is obtained by collecting the [[#State (状态)]] at all nodes.
>
>Refer to [[Permutation#Permutation Questions|here]] for questions on [[Permutation]].


### Subset (子集)
- [78. Subsets](https://leetcode.cn/problems/subsets/)
- [90. Subsets II](https://leetcode.cn/problems/subsets-ii/)
#### Maintain Given Order
- [491. Non-decreasing Subsequences](https://leetcode.cn/problems/non-decreasing-subsequences/)


### Chessboard Problem
- [51. N-Queens](https://leetcode.cn/problems/n-queens/)
- [37. Sudoku Solver](https://leetcode.cn/problems/sudoku-solver/)

## Terminologies
---
### Solution (解)
- The answer that fulfil all [[#Constraint (约束条件)]]
- Can be one or many
### Constraint (约束条件)
- Conditions that limit the [[#Solution (解)]], usually used in [[#Pruning (剪枝)]]
- For example, the solution must contain certain number of nodes or sum up to a particular value
### State (状态)
- Represents the problem at any point of the time, including the choices made
### Attempt (尝试)
- The process of finding potential [[#Solution (解)]] with the provided choices
- Including making the choice, updating the [[#State (状态)]] and check if it is the solution
### Backtracking (回退)
- Removing the previous choice made & return to the previous [[#State (状态)]]
### Pruning (剪枝)
- To **conserve computational resources**, **avoid fully exploring paths** that, based on [[#Constraint (约束条件)]], cannot lead to viable solutions

>[!example]
> When a problem requires a [[#Solution (解)]] containing a **specific number of nodes**, we can terminate the current attempt if it becomes impossible to reach that target number.
