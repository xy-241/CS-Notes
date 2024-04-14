---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-14T00:24:47+08:00
Last Date: 2024-04-14T19:00:36+08:00
References: 
---
## Abstract
---
![[perfect_binary_tree.png|300]]
- A [[Tree]] only has nodes that have a [[Tree#Degree]] of 0 or 2 **AND** the nodes with degree 0 is on the last [[Tree#Level]]
- [[Complete Binary Tree (完全二叉树)]] whose [[Tree#Depth]] of the left most branch is same as the depth of the right most branch

>[!tip] Calculate total number of nodes
> $total = 2^{height+1}-1$. This operation takes $logn$ time, because we need to go to the bottom of the tree from one side to find the [[Tree#Tree Height]].

>[!example] Question Bank
> **Properties**
> - [ ] [222. Count Complete Tree Nodes](https://leetcode.cn/problems/count-complete-tree-nodes/)

