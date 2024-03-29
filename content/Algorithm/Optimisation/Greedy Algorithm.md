---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-09T09:10:00
Last Date: 2024-03-22T17:00:22+08:00
References: 
---
## Abstract
---
>[!quote]
>- 向日葵朝着太阳转动， 时刻都在寻求当前汲取最大养分的可能。 
>- 最优子结构就是追随太阳最高效的移动轨迹。
>- 移除重复子问题让向日葵紧跟太阳的脚步。
>- 贪心策略在一轮轮的简单选择中，逐步导向最佳的答案。


- Solves [[Combinatorial Optimisation]]
- Usually better performance than [[Backtracking]] & [[Dynamic Programming]]
- Think about what is the [[#Local Optimal Solution]]. If it feels with the current stage optimal solution can form the global optimal solution, can give a try of the greedy approach 
- Follow pre-defined procedures for each stage


>[!bigbrain] When greedy shines
> **Guaranteed to get the Global Optimal Solution**
> - When we can't find an **counter-example** with the greedy approach 
> 
> **Sub-optimal solution is good enough**
> - When finding [[#Global Optimal Solution]] takes too much effort & a Sub-optimal solution gets the job done

>[!bigbrain] Comparison with Dynamic Programming
> Both rely on [[Dynamic Programming#Optimal Substructure (最优子结构)]]. However greedy
> 
> - Find a locally optimal solution at each step without the need to consider decisions made previously
> - [[Dynamic Programming]] is determined to find **global optimal**
> - May or may not find the optimal solution
> - Often simple and efficient



## Tips to Solve Greedy Problems
---
### Greedy at different stages
- We can use [[#Greedy Loop]] more than once in a problem
- For example, for question *1005*, we use the first Greedy Loop to ensure all possible negative numbers are negated to positive numbers. Then, we can use the second Greedy Loop to negate the smallest positive integer when there is still negation left to use
- The first Greedy Loop ensures we get the maximum value from negating the negative values in the array. The second Greedy Loop ensure we lose the least from negating array with all positive values
### Obtain Optimal Substructure
- One way to obtain [[Dynamic Programming#Optimal Substructure (最优子结构)|Optimal Substructure]] is by *sorting* the given input
- Basically *limit* the *impact range of each element* to its *adjacent neighbours*

## Questions
---
### Basics 
- For some questions, we can apply greedy loop more than once, for example the *problem 1005* below

>[!example] Leetcode
>- [455. Assign Cookies](https://leetcode.cn/problems/assign-cookies/)
>- [1005. Maximize Sum Of Array After K Negations](https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/)
>- [860. Lemonade Change](https://leetcode.cn/problems/lemonade-change/)

>[!example] CodeForces
>- [507A - Amr and Music (1000)](https://codeforces.com/problemset/problem/507/A)

### Sub-Sequence
- The order of the elements cant be altered, refer to [[Sub-Sequence]]

>[!example] Leetcode
>- [376. Wiggle Subsequence](https://leetcode.cn/problems/wiggle-subsequence/)
>- [738. Monotone Increasing Digits](https://leetcode.cn/problems/monotone-increasing-digits/)




### Array

>[!example] Leetcode
>- [53. Maximum Subarray](https://leetcode.cn/problems/maximum-subarray/)
>- [134. Gas Station](https://leetcode.cn/problems/gas-station/)

>[!example] CodeForces
>- [1641A - Great Sequence (1200)](https://codeforces.com/problemset/problem/1641/A)
>- [1557B - Moamen and k-subarrays (1100)](https://codeforces.com/problemset/problem/1557/B)
>- [1334B - Middle Class (1000)](https://codeforces.com/problemset/problem/1334/B)
>- ⭐ [1616B - Mirror in the String (1100)](https://codeforces.com/problemset/problem/1616/B)
>- [1203E - Boxers (1500)](https://codeforces.com/problemset/problem/1203/E)
>- [1154D - Walking Robot (1500)](https://codeforces.com/problemset/problem/1154/D) - very similar to [134. Gas Station](https://leetcode.cn/problems/gas-station/)


### Stock Problems (股票买卖问题)
- [122. Best Time to Buy and Sell Stock II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)

### Greedy By Parts (2-Dimensions)
- *135. Candy*, we can be greedy to ensure proper distribution of candies on the left side, then greedy again to ensure proper distribution of candies on the right side. Then with both left and right, we are able to fulfil the requirement of *Children with a higher rating get more candies than their 2 neighbors*

>[!example] Leetcode
>- [135. Candy](https://leetcode.cn/problems/candy/)
>- [406. Queue Reconstruction by Height](https://leetcode.cn/problems/queue-reconstruction-by-height/)

>[!example] CodeForces
>- [1760E - Binary Inversions (1100)](https://codeforces.com/contest/1760/problem/E)

### Interval Problems (区间调度问题)

- The trick is to think about finding the maximum range/reach
- Use the smallest steps to increase the most amount of range/reach. We get the answer once the range/reach arrives at the last index of the given array
- *55. Jump Game* only has 1 range/reach to keep track of 
- *45. Jump Game II* has 2 range/reach to keep track of, one is the maximum reach/range of current step, another one is the maximum reach/range of next step


- *452,435, 56*, we rely on sorting to make each entity next to each other, to form the [[Combinatorial Optimisation#Optimal Sub-structure]] to perform greedy algorithms

>[!example] Leetcode
>- [55. Jump Game](https://leetcode.cn/problems/jump-game/)
>- [45. Jump Game II](https://leetcode.cn/problems/jump-game-ii/)
>- [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)
>- [435. Non-overlapping Intervals](https://leetcode.cn/problems/non-overlapping-intervals/)
>- [56. Merge Intervals](https://leetcode.cn/problems/merge-intervals/)
>- [763. Partition Labels](https://leetcode.cn/problems/partition-labels/)

>[!example] CodeForces
>- ⭐ [1712C - Sort Zero](https://codeforces.com/contest/1712/problem/C)

### Recursion

>[!example] Leetcode
>- [968. Binary Tree Cameras](https://leetcode.cn/problems/binary-tree-cameras/)



## Terminologies 
---
### Greedy Loop
- Looping through a collection, and apply a greedy algorithm on the elements
### Local Optimal Solution 
### Global Optimal Solution