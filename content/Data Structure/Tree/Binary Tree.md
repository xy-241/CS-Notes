---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-03-26, 10:42
Last Date: 2024-04-15T16:34:56+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Each node has $0$ to $2$ [[#Edge]]
- The maximum number of nodes at `n`th [[Tree#Level]] is `2^(n-1)`

>[!bigbrain]- Implementation with Linked List
> Refer to [[Linked List]] to understand its properties.
> ![[binary_tree_linked_list.png|500]]

>[!bigbrain]- Implementation with Array
> Given the index of parent node is `i`, the index of its left child is `i*2+1`, right child is `i*2+2`. Refer to [[Array]] to understand its properties.
> ![[binary_tree_array.png|500]]

## Degenerate Binary Tree
---
![[bst_to_skewed_tree.png|400]]

- A [[Binary Tree]] in which each parent node has only one child node associated with it. Such a tree behaves like a [[Linked List]], resulting in $O(n)$ complexity for search, insertion and deletion

>[!attention] Poor performance!
> Binary tree should deliver $O(logn)$ in the ideal situation.

## Leetcode Questions
---
### Properties 
- [111. Minimum Depth of Binary Tree](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)
- [104. Maximum Depth of Binary Tree](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
- [101. Symmetric Tree](https://leetcode.cn/problems/symmetric-tree/)
- [257. Binary Tree Paths](https://leetcode.cn/problems/binary-tree-paths/)
- [404. Sum of Left Leaves](https://leetcode.cn/problems/sum-of-left-leaves/)
- [513. Find Bottom Left Tree Value](https://leetcode.cn/problems/find-bottom-left-tree-value/description/)
- [112. Path Sum](https://leetcode.cn/problems/path-sum/)
### Modification & Structure
- [226. Invert Binary Tree](https://leetcode.cn/problems/invert-binary-tree/)
- [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)
- [654. Maximum Binary Tree](https://leetcode.cn/problems/maximum-binary-tree/description/)
- [617. Merge Two Binary Trees](https://leetcode.cn/problems/merge-two-binary-trees/)
### Common Ancestor
- [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/) 