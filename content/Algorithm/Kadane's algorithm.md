---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-05-19, 18:39
Last Date: 2024-05-27T21:40:46+08:00
References: 
draft: 
description: 
---
## Abstract
---

![[kadane_algorithm.svg]]

- Kadane' algorithm: given an [[Array]] of elements $A$, the **maximum sum** of **contiguous subarray** at **index $i$**, $localMax(i)$ is the **maximum** of **element at index $i$**, $A[i]$ and the **sum of element at index $i$** and **the maximum sum of contiguous subarray at index $i-1$**, $A[i] + localMax(i-1)$ 
- From the [[Recursion#Recurrence Function]] $localMax(i)$, we can see that if the **maximum sum of contiguous subarray at index $i-1$** is **negative**, the **maximum sum** of **contiguous subarray** at **index $i$**, $localMax(i)$ is definitely the element at index $i$, in another word, we are actually **starting a new subarray**


>[!attention]
> **Maximum sum** of **contiguous subarray** at **index $i$** **must** include the **element at index $i$**.


## Maximum Subarray Problem
---

![[maximum_subarray_problem.svg]]

- [Maximum Subarray Problem](https://leetcode.com/problems/maximum-subarray) is the task of finding the **largest possible sum** of a **contiguous subarray**, within a given **one-dimensional [[Array]] of numbers**
- This problem can be solved efficiently in $O(n)$ using [[Kadane's algorithm]] which computes the **largest possible sum** of a **contiguous subarray** at **each index**. The answer is just the **biggest number** among all the **largest possible sum** of **contiguous subarray** at **each index**

>[!attention]
> The **contiguous subarray** is an **non-empty subarray**. If the given array only has **negative numbers**, the maximum subarray should be an empty subarray which has a sum of $0$. But the solution with Kadane's algorithm will **return the smallest value from the array**.
> 
> We can definitely modify the solution a bit to adapt to this **edge case**. For example, we can have a variable that returns true if all the elements in the array are negative, then we just return $0$ when the variable is true.

**Top-down DP Approach**

$$
localMax(i) = 
\begin{cases}
0 & i = 0 \\
A[1] & i=1 \\
max(A[i], A[i]+F(i-1)) & i\ge2
\end{cases}
$$

- This [[Dynamic Programming#Top-down DP Approach]] doesn't require [[Memoization#DP Table]] as the [[Dynamic Programming#Optimal Substructure (最优子结构)]] removes the [[Dynamic Programming#Overlapping Subproblems (重复子问题)]]. The [[Dynamic Programming#State Transition Equation (状态转移方程)]] shown above is the core of this top-down DP approach
- The `globalMax` variable is used to keep track of the **biggest number** among all the **largest possible sum** of **contiguous subarray** at **each index**


```java
class Solution {
  int globalMax;
  public int maxSubArray(int[] nums) {
	if (nums.length == 0) return 0;
	if (nums.length == 1) return nums[0];
	
    globalMax = nums[0];
    localMax(nums, nums.length - 1);
    return globalMax;
  }

  public int localMax(int[] nums, int currIndex) {
    if (currIndex == 0)
      return nums[0];

    int localMax =
        Math.max(nums[currIndex], localMax(nums, currIndex - 1) + nums[currIndex]);
    globalMax = Math.max(globalMax, localMax);
    return localMax;
  }
}
```

**Bottom-up DP Approach**
- In [[Dynamic Programming#Bottom-up DP Approach]], we can see the **maximum subarray** with the inclusion of element at current index is the **maximum** of the **element at the current index** and the **sum of element at current index + maximum subarray at the previous index**
- The `globalMax` variable is used to keep track of the **biggest number** among all the **largest possible sum** of **contiguous subarray** at **each index**

```java
class Solution {
  public int maxSubArray(int[] nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];

    int globalMax = nums[0];
    int localMax = nums[0];
    for (int i = 1; i < nums.length; i++) {
      localMax = Math.max(nums[i], localMax + nums[i]);
      globalMax = Math.max(globalMax, localMax);
    }
    return globalMax;
  }
}
```

## Maximum Product Subarray
---

![[maximum_product_subarray.svg]]

- [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray) is the task of finding the **largest possible product** of a **contiguous subarray**, within a given **one-dimensional [[Array]] of numbers**

>[!important] Key point
> It is a more advanced version of [[#Maximum Subarray Problem]], because the largest possible product **can consist of negative numbers** since **negative** $\times$ **negatives** produces **positive**. However, **negative** $\times$ **positive** produces **negative**.
> 
> If we use [[Kadane's algorithm]] to find the **maximum product** of a contiguous subarray at index $i$, there is **NO WAY** to find the largest product if it consists of two negative numbers, for example. This is because, once we **encounter a negative number**, we **discard it** since a **positive number multiplied by a negative number** is **negative**, unless the two negative numbers are the first elements. The solution is to keep track of the **minimum product** of a contiguous subarray at index $i$ as well, and the **maximum product** of a contiguous subarray at index $i$ depends on it!

**Top-down DP Approach**
$$
minVal(i) = 
\begin{cases}
0 & i=0\\
A[1]  & i=1\\
min(A[i], A[i]*minVal(i-1), A[i]*maxVal(i-1)) & n\ge2
\end{cases}
$$

$$
maxVal(i) = 
\begin{cases}
0 & i=0\\
A[1]  & i=1\\
max(A[i], A[i]*maxVal(i-1), A[i]*minVal(i-1)) & n\ge2
\end{cases}
$$

- The [[Dynamic Programming#State Transition Equation (状态转移方程)]] shown above is the core of this top-down DP approach. The `globalMax` variable is used to keep track of the **biggest number** among all the **largest possible product** of **contiguous subarray** at **each index** 

```java
class Solution {
  int globalMax;
  int[] maxArr;
  int[] minArr;
  public int maxProduct(int[] nums) {
    if (nums.length == 0)
      return 0;
    if (nums.length == 1)
      return nums[0];

    maxArr = new int[nums.length];
    minArr = new int[nums.length];

    Arrays.fill(maxArr, Integer.MIN_VALUE);
    Arrays.fill(minArr, Integer.MAX_VALUE);

    globalMax = nums[0];
    maxVal(nums, nums.length - 1);
    return globalMax;
  }

  public int minVal(int[] nums, int currIndex) {
    if (currIndex == 0)
      return nums[0];
    if (minArr[currIndex] != Integer.MAX_VALUE)
      return minArr[currIndex];

    int currVal = nums[currIndex];

    int localMin = Math.min(currVal,
        Math.min(currVal * minVal(nums, currIndex - 1),
            currVal * maxVal(nums, currIndex - 1)));

    minArr[currIndex] = localMin;
    return localMin;
  }

  public int maxVal(int[] nums, int currIndex) {
    if (currIndex == 0)
      return nums[0];
    if (maxArr[currIndex] != Integer.MIN_VALUE)
      return maxArr[currIndex];

    int currVal = nums[currIndex];
    int localMax = Math.max(currVal,
        Math.max(currVal * minVal(nums, currIndex - 1),
            currVal * maxVal(nums, currIndex - 1)));

    globalMax = Math.max(globalMax, localMax);
    maxArr[currIndex] = localMax;
    return localMax;
  }
}
```

**Bottom-up DP Approach**
- In [[Dynamic Programming#Bottom-up DP Approach]], we can see the **maximum subarray** with the inclusion of element at current index is the **maximum** of the **element at the current index**, **minimum product at the previous index $\times$ element at current index**, **maximum product at the previous index $\times$ element at current index**
- The `globalMax` variable is used to keep track of the **biggest number** among all the **largest possible product** of **contiguous subarray** at **each index**

```java
class Solution {
  public int maxProduct(int[] nums) {
    if (nums.length == 0)
      return 0;
    if (nums.length == 1)
      return nums[0];

    int maxVal = nums[0];
    int minVal = nums[0];
    int globalMax = nums[0];

    for (int i = 1; i < nums.length; i++) {
      int currVal = nums[i];

      int localMax =
          Math.max(currVal, Math.max(minVal * currVal, maxVal * currVal));
      int localMin =
          Math.min(currVal, Math.min(maxVal * currVal, minVal * currVal));

      globalMax = Math.max(globalMax, localMax);
      maxVal = localMax;
      minVal = localMin;
    }

    return globalMax;
  }
}
```
## References
---
- [Kadane’s Algorithm — (Dynamic Programming) — How and Why does it Work? | by Rohit Singhal | Medium](https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d)