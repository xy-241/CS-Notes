---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-08T19:28:00
Last Date: 2024-01-23T12:33:12+08:00
---
## Abstract
---
- Basically an [[Array]] same length of the given array
- The value at each index is the sum of values from index 0

## Property
---
### O(1) Range Sum Query
- With one time computation of the [[Prefix Sum (前缀和)]] in `O(n)`, we can retrieve the sum of elements in a [[Array#Contiguous Segment]] in `O(1)`
- Let $P$ be a prefix sum of a given array, $Range(i, j)$ sums up the element in between the $i$ and $j$ (inclusive) of the given array
$$
P[j]  = P[i-1] + Range[i, j]
$$
- Thus, we can obtain the sum of any sub-sequence of the given array in `O(1)` with the following formula
$$
Range[i, j] = P[j]- P[i-1]
$$

>[!tip]
>$Range[0, j]$ is **same** as $P[j]$
## Complexity
---
### Time Complexity
- `O(n)` to calculate prefix sum array of n size array
- [[#O(1) Range Sum Query]]



## Practice Questions
---
- [[Product of Array Except Self]]
- [[Romantic Glasses]]