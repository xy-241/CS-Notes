---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-08T19:28:00
Last Date: 2024-05-31T14:37:50+08:00
---
## Abstract
---

![[prefix_sum.svg|500]]

- Prefix sum is an [[Array]] that has the **same length** as a **given array**
- The **value at each index** is the **sum** of values from the **first element of the given array** to the **element at the current index**
- Calculates the **sum of a particular range** of a **given array** efficiently by leveraging on [[Memoization]]

## Range Sum Query
---

![[range_sum_query.svg|500]]


- With one-time computation of the [[Prefix Sum (前缀和)]] in $O(n)$, we can retrieve the sum of elements in a [[Array#Contiguous Segment]] in $O(1)$
- $Range[i, j] = P_j- P_{i-1}$, because $P_j  = Range[i, j] + P_{i-1}$


>[!tip]
>$Range[0, j]$ is **same** as $P_j$. So we can just retrieve the value from the prefix sum array with index $j$, instead of using the formula stated in the diagram above, which requires us to have a placeholder at index $0$.



## Practice Questions
---
- [ ] [[Product of Array Except Self]]
- [ ] [[Romantic Glasses]]
- [ ] [[Closest Cities]]
