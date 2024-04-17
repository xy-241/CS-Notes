---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-03T17:41:00
Last Date: 2024-04-17T15:19:31+08:00
---
## Abstract
---
![[binary_search_tree.png|300]]

- Also known as **BST** 
- Nodes have **a value attached** to it. If the **left sub-tree** isn't empty, all nodes on that sub-tree is **smaller** than the value of [[Tree#Root Node]]. If the **right sub-tree** isn't empty, all nodes on that sub-tree is **bigger** than the root node value. Its **left sub-tree** and **right sub-tree** are also **binary search tree**

>[!tip] Access previous node from current node
> Use a variable `prevNode` to keep track of the previous node. Handy in solving some problems.

## Node Traversal
---
- We can use [[In-Order Traversal]] to print the nodes inside a BST from smallest to the biggest or from biggest to smallest

>[!note] From smallest to the biggest
> Go to the left subtree then right subtree. Useful in finding the **minimum absolute difference among the nodes**

>[!note] From biggest to the smallest
> Go to the right subtree then left subtree. Useful in converting the BST to [[#Greater Tree]].


## BST Node Search
---
>[!attention]
> We can only achieve $log(n)$ if the BST is [[Tree#Height-Balanced]]. A not height-balanced BST can be degraded into a [[Binary Tree#Degenerate Binary Tree]].

- If the current node isn't the node we are finding, select the `node.left` when target value is smaller than the current node, otherwise select `node.right`
- This allows us to choose only one side of the [[Binary Search Tree (二叉搜索树)]] at each [[Tree#Level]], achieving $log(n)$ speed

## BST Node Insertion
---

>[!attention]
> We can only achieve $log(n)$ if the BST is [[Tree#Height-Balanced]]. A not height-balanced BST can be degraded into a [[Binary Tree#Degenerate Binary Tree]].

- The idea is to insert the new node as a [[Tree#Leaf Node]] to minimise modification to the [[Binary Search Tree (二叉搜索树)]]
- The suitable `null` slot can be found in $log(n)$ speed by going down the BST using the Node Location method descripted above





## Leetcode Question
---
### Properties
- [700. Search in a Binary Search Tree](https://leetcode.cn/problems/search-in-a-binary-search-tree/)
- [98. Validate Binary Search Tree](https://leetcode.cn/problems/validate-binary-search-tree/)
- [530. Minimum Absolute Difference in BST](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)
- [501. Find Mode in Binary Search Tree](https://leetcode.cn/problems/find-mode-in-binary-search-tree/)
- [538. Convert BST to Greater Tree](https://leetcode.cn/problems/convert-bst-to-greater-tree/)
- [108. Convert Sorted Array to Binary Search Tree](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)
### Modification & Structure
- [701. Insert into a Binary Search Tree](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)
- [450. Delete Node in a BST](https://leetcode.cn/problems/delete-node-in-a-bst/)
- [669. Trim a Binary Search Tree](https://leetcode.cn/problems/trim-a-binary-search-tree/)
- [108. Convert Sorted Array to Binary Search Tree](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)
### Common Ancestor
- [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)


## Terminologies 
---
### Greater Tree
- Every value of node of the original BST is changed to the original value of node plus the sum of all value of nodes greater than the value of the original node of  in BST