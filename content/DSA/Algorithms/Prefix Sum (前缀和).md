---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-08T19:28:00
Last Date: 2023-12-30T19:26:09+08:00
---
## Abstract
---
- Basically an [[Array]] same length of the given array
- The value at each index is the sum of values from index 0

## Property
---
### O(1) Range Sum Query
- With one time computation of the [[Prefix Sum (前缀和)]] in `O(n)`, we can retrieve the sum of elements in a [[Array#Contiguous Segment]] in `O(1)`
- Give
$$
Prefix\_{Sum[j]}  = Prefix\_{Sum[i-1]} + Range[i, j]
$$
$$
Range[i, j] = Prefix\_{Sum[j]}- Prefix\_Sum[i-1]
$$

## Complexity
---
### Time Complexity
- `O(n)` to calculate prefix sum array of n size array
- [[#O(1) Range Sum Query]]



## Leetcode Question
---
- [238. Product of Array Except Self](https://leetcode.cn/problems/product-of-array-except-self/)