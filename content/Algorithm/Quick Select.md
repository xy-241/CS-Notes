---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-07-22, 20:17
Last Date: 2024-07-22T20:47:29+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A $O(n)$ algorithm for [Finding the kth Smallest Element within a an unsorted array](https://www.notion.so/xy241-dsa/215-Kth-Largest-Element-in-an-Array-18e968f86c4846c0b0a3fe25fedf8b75?pvs=4). It is closely related to [[Sorting#Quick Sort]], sharing the same idea but with a key difference: Quick Select only focuses **on one side of the partitioned array after each iteration**

>[!important] Quick Select's average time complexity is O(n)
> In the ideal case, after **each iteration**, Quick Select is able to **remove half of the elements** in the current array. Thus, the total number of elements it needs to process throughout the algorithm is $n + \frac{n}{2} + \frac{n}{4} + \dots + \frac{n}{n} = \sum_{i=0}^{\log_2 n} \frac{n}{2^i}$, which converges to $2n$ based on the [geometric series rule](https://en.wikipedia.org/wiki/1/2_%2B_1/4_%2B_1/8_%2B_1/16_%2B_%E2%8B%AF).
> 
> This is why picking a **good pivot point is critical**. If the chosen pivot consistently **falls at the middle point of the sorted array**, we can remove half of the elements after each iteration.

>[!question] Why Quick Select's worst case time complexity is O(n^2)?
> The worst-case scenario occurs when you **consistently choose the smallest or largest element as the pivot**. This leads to **unbalanced partitions**, where one subarray contains nearly all the elements while the other has very few. In this scenario, you end up making $n$ recursive calls, each taking $O(n)$ time for partitioning, resulting in a total time complexity of $O(n^2)$. **Quicksort also suffers from the same issue.**
> 
> **Choosing a pivot randomly** significantly reduces the probability of consistently picking bad pivots. However, if the array contains mostly the same value, Quick Select's time complexity will always be $O(n^2)$, as each iteration will **invariably result in an unbalanced partition**.