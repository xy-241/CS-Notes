---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-26T00:14:31+08:00
Last Date: 2024-03-26T10:47:08+08:00
References: 
---
## Abstract
---
![[avl_tree.png|500]]
- Also known as **Self-Balancing Binary Search Tree (平衡二叉搜索树)**
- A [[Binary Tree]] that is empty OR with nodes that are all [[Tree#Height-Balanced]]
- An optimised [[Binary Search Tree (二叉搜索树)]] 

>[!success] Efficient Operations
> The self-balancing property guarantees that the[[Tree#Height]] of an AVL tree with $n$ nodes is always around $O(log n)$. This means operations like searching, insertion, and deletion take a maximum of $O(log n)$ time, making them very efficient.


## Leetcode Problems
---
### Properties
- [110. Balanced Binary Tree](https://leetcode.cn/problems/balanced-binary-tree/)
- [108. Convert Sorted Array to Binary Search Tree](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)