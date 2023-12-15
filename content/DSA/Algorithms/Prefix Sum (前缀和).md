---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-08T19:28:00
Last Date: 2023-10-08T20:24:31+08:00
---
## Abstract
---
- With one time computation of the *prefix sum* in `O(n)`, we can retrieve the sum of elements in a [[Array#Contiguous Segment]] in `O(1)`
- Sum between `range[0, 6]` = Sum between `range[0, 1]` + Sum between `range[2, 6]`. Thus, Sum between `range[2, 6]` = `prefix_sum[6]` - `prefix_sum[1]`
- General formula - `prefix_sum[i, j]` = `prefix_sum[j]` - `prefix_sum[i-1]`

## Complexity
---
### Time Complexity
- `O(n)` to calculate prefix sum array of n size array
- `O(1)` to perform range sum query



## Leetcode Question
---
- [238. Product of Array Except Self](https://leetcode.cn/problems/product-of-array-except-self/)