---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-03-26, 10:42
Last Date: 2024-07-19T12:13:43+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Each node has $0$ to $2$ [[#Edge]]
- The maximum number of nodes at the `nth` [[Tree#Level|level]] is `2^(n-1)`, counting from $1$

>[!bigbrain]- Implementation with Linked List
> Refer to [[Linked List]] to understand its properties.
>



## Binary Tree Array Representation
---

 ![[binary_tree_array.png|400]]
- Given the index of a parent node `i`, the **index of its left child** is calculated as `i * 2 + 1`, the **index of its right child** is calculated as `i * 2 + 2`. We can find the **index of its parent node** with `(i - 1) / 2`

## Binary Tree Linked List Representation
---
 ![[binary_tree_linked_list.png|400]]
- Compared to the [[#Binary Tree Array Representation|array representation]], the linked list representation of a binary tree is **easier to scale in terms of size**, but it comes with **higher memory usage** due to the overhead of storing pointers for each node. Additionally, it cannot take advantage of [[CPU Cache#Cache Locality|CPU cache locality]] as effectively as the array representation
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