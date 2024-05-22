---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-05-19, 18:39
Last Date: 2024-05-22T14:15:35+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[kadane_algorithm.svg|500]]

- Kadane' algorithm: given an [[Array]] of elements $A$, the **maximum sum** of **contiguous subarray** at **index $i$**, $F(i)$ is the **maximum** of **element at index $i$**, $A[i]$ and the **sum of element at index $i$ + the maximum sum of contiguous subarray at index $i-1$**, $A[i] + F(i-1)$ 
- From the [[Recursion#Recurrence Function]] $F(i)$, we can see that if the **maximum sum of contiguous subarray at index $i-1$** is **negative**, the **maximum sum** of **contiguous subarray** at **index $i$**, $F(i)$ is definitely the element at index $i$, in another word, we are actually **starting a new subarray**


>[!important]
> **Maximum sum** of **contiguous subarray** at **index $i$** **must** include the **element at index $i$**.


## Maximum Subarray Problem
---
- [Maximum Subarray Problem](https://leetcode.com/problems/maximum-subarray) is the task of finding the **largest possible sum** of a **contiguous subarray**, within a given **one-dimensional [[Array]] of numbers**
- This problem can be solved efficiently in $O(n)$ using [[Kadane's algorithm]] which computes the **largest possible sum** of a **contiguous subarray** at **each index** in $O(n)$. The answer is just the **biggest number** among all the **largest possible sum** of a **contiguous subarray** at **each index**

>[!attention]
> The **contiguous subarray** is an **non-empty subarray**. If the given array only has negative numbers, the maximum subarray should be an empty subarray which has a sum of $0$. But the solution with Kadane's algorithm will **return the smallest value from the array**.
> 
> We can definitely modify the solution a bit to adapt to this **edge case**. For example, we can have a variable that returns true if all the elements in the array are negative, then we just return $0$ when the variable is true.

**Top DP Approach**
- This [[Dynamic Programming#Top-down DP Approach]] doesn't require [[Memoization#DP Table]] as the [[Dynamic Programming#Optimal Substructure (最优子结构)]] removes the [[Dynamic Programming#Overlapping Subproblems (重复子问题)]]

```java
class Solution {
  int globalMax;
  public int maxSubArray(int[] nums) {
    globalMax = nums[0];
    dfs(nums, nums.length - 1);
    return globalMax;
  }

  public int dfs(int[] nums, int currIndex) {
    if (currIndex == 0)
      return nums[0];

    int localMax =
        Math.max(nums[currIndex], dfs(nums, currIndex - 1) + nums[currIndex]);
    globalMax = Math.max(globalMax, localMax);
    return localMax;
  }
}
```



## References
---
- [Kadane’s Algorithm — (Dynamic Programming) — How and Why does it Work? | by Rohit Singhal | Medium](https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d)