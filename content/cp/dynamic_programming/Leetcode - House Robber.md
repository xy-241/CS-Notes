---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space: 
Time: 
Appears On:
  - Leetcode
Brush: 1
Difficulty:
  - Medium
Area:
  - dynamic_programming
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-05-16, 13:02
Last Date: 2024-06-01T15:14:19+08:00
tags:
  - cp
draft: 
description: Leetcode 198 House Robber, solution with in-depth dynamic programming approach
---

## Abstract
---
- [Original Problem](https://leetcode.com/problems/house-robber/)
- This article presents solution with **in-depth** [[Dynamic Programming]] approach

## Top-down DP Approach
---
$$
F(h, c) = 
\begin{cases}
h[0] & c = 0 \\
max(h[0], h[1]) & c == 1 \\
max(F(h, c-1), F(h, c-2) + houses[c]) & currHouse >= 2
\end{cases}
$$

- For [[Dynamic Programming#Top-down DP Approach]], the key is to come up with the [[Dynamic Programming#State Transition Equation (状态转移方程)]] which determines how we **break down the problem** into smaller pieces and how we combine the solutions into the final solution in a [[Recursion|recursive]] manner
- In the state transition equation above, $h$ is the given **list of values in each house**, $c$ is the **current house** the robber is at
- Below is the brute-force [[Dynamic Programming#Divide and Conquer]] implementation which will **timeout**!
```java
class Solution {
  public int rob(int[] nums) {
    return dfs(nums, nums.length - 1);
  }

  public int dfs(int[] nums, int curr) {
    if (curr == 0)
      return nums[0];
    if (curr == 1)
      return Math.max(nums[0], nums[1]);

    return Math.max(dfs(nums, curr - 1), dfs(nums, curr - 2) + nums[curr]);
  }
}
```
- We can handle the timeout using [[Memoization#DP Table]] to only perform **one computation** on [[Dynamic Programming#Overlapping Subproblems (重复子问题)]]
```java
class Solution {
  int[] dp;
  public int rob(int[] nums) {
    dp = new int[nums.length];
    Arrays.fill(dp, -1);
    return dfs(nums, nums.length - 1);
  }

  public int dfs(int[] nums, int curr) {
    if (dp[curr] != -1)
      return dp[curr];
    if (curr == 0)
      return nums[0];
    if (curr == 1)
      return Math.max(nums[0], nums[1]);

    dp[curr] = Math.max(dfs(nums, curr - 1), dfs(nums, curr - 2) + nums[curr]);
    return dp[curr];
  }
}
```


## Bottom-up DP Approach
---

![[198_house_robber.svg|500]]

- For [[Dynamic Programming#Bottom-up DP Approach]], the key is to identify the [[Dynamic Programming#Dependency order of subproblems]]
- In the dependency order of subproblems diagram above. The **red arrow** means there is **robbing activities happening at the same time**. The **green arrow** means there **isn't robbing activities happening at the same time**. If you observe carefully, except the first two houses, the optimal value we can rob in the following houses **depends on** how much we can rob in the **previous 2 houses**. We can conclude that this problem has [[Dynamic Programming#Optimal Substructure (最优子结构)]] and [[Dynamic Programming#Statelessness (无后效性)]]
- Below is an implementation of this bottom-up DP approach
```java
class Solution {
 public
  int rob(int[] nums) {
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);

    int res = 0;
    int previousHouse2 = nums[0];
    int previousHouse1 = Math.max(nums[0], nums[1]);

    for (int i = 2; i < nums.length; i++) {
      res = Math.max(previousHouse1, nums[i] + previousHouse2);
      previousHouse2 = previousHouse1;
      previousHouse1 = res;
    }

    return res;
  }
}
```