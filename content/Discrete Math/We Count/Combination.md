---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-01-28, 15:23
Last Date: 2024-07-10T20:59:51+08:00
References: 
draft: 
description: Exploring the binomial coefficient, delving into two formulas for its calculation. Formula 1 utilizes recursion, while Formula 2 involves factorials. We also touch upon properties like symmetry and its representation in Pascal's Triangle.
sr-due: 2024-03-10
sr-interval: 22
sr-ease: 190
aliases:
  - ../../Discrete-Math/Combination
---
## Abstract
---
- The **selection of items** from a larger set **without considering the order** of selection. That means each combination has an **unique set of items**
- The number of combinations can be calculated using the [[#Binomial Coefficient]]


## Combination Questions
---
### Single Set
- [77. Combinations](https://leetcode.cn/problems/combinations/)
- [39. Combination Sum](https://leetcode.cn/problems/combination-sum/)
- [40. Combination Sum II](https://leetcode.cn/problems/combination-sum-ii/)
- [216. Combination Sum III](https://leetcode.cn/problems/combination-sum-iii/)
### Multiple Sets
- [17. Letter Combinations of a Phone Number](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/) - essentially, finding the [[Set#Cartesian Product]] involves treating **each phone number** as a [[Set]]

### Partition (分割)

>[!important]
> Basically [[Combination#Combination Questions]] without re-using the same element.

- [131. Palindrome Partitioning](https://leetcode.cn/problems/palindrome-partitioning/)
- [93. Restore IP Addresses](https://leetcode.cn/problems/restore-ip-addresses/)