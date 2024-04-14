---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-26T00:14:31+08:00
Last Date: 2024-04-14T20:15:10+08:00
References: 
---
## Abstract
---
![[avl_tree.png|500]]
- A type of **Self-Balancing Binary Search Tree (平衡二叉搜索树)**. Basiclly, an optimised [[Binary Search Tree (二叉搜索树)]] that is either empty OR with all nodes that are [[Tree#Height-Balanced]]

>[!important] Self-Balancing
> When we insert or delete a node and the binary tree becomes unbalanced, AVL tree will use [[#AVL Tree Rotation]] to auto-adjust the structure of the binary tree, ensuring that the tree remains height-balanced.

>[!success] Efficient Operations
> The self-balancing property guarantees that the[[Tree#Tree Height]] of an AVL tree with $n$ nodes is always around $O(log n)$. This means operations like searching, insertion, and deletion take a maximum of $O(log n)$ time, making them very efficient.

## AVL Tree Rotation
---


## Leetcode Problems
---
### Properties
- [110. Balanced Binary Tree](https://leetcode.cn/problems/balanced-binary-tree/)
- [108. Convert Sorted Array to Binary Search Tree](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)


## References
---
- [AVL 树 - Hello 算法](https://www.hello-algo.com/chapter_tree/avl_tree/)