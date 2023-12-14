---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-03T17:41:00
Last Date:
---
## Abstract
---
- Nodes have value attached to it
- If the left sub-tree isn't empty, all nodes on that sub-tree is smaller than the node value
- If the right sub-tree isn't empty, all nodes on that sub-tree is bigger than the node value
- Its left sub-tree and right sub-tree are also binary search tree (二叉搜索树)
>![[binary_search_tree.png]]


## Tips in solving Leetcode Question
---
### Handling relationship between the current node & its previous node
- Use ``prevNode`` to keep track of the previous smaller node or its parent node
- Handy in solving some problems
### Traverse nodes from smallest to biggest
 - We use [[In-Order Traversal]] (left first, then right) to print the nodes inside [[Binary Search Tree (二叉搜索树)]] from the smallest to the biggest - *useful in finding the minimum absolute difference among the nodes*
### Traverse node from biggest to smallest
- We use [[In-Order Traversal]] (right first, then left) to print the nodes inside [[Binary Search Tree (二叉搜索树)]] from the smallest to the biggest - *useful in converting the BST to [[#Greater Tree]]*
### Locate a node in log(n) time
- Select the ``node.left`` when target value is smaller than the current node
- Select the ``node.right`` when target value is bigger than the current node
- This allows us to choose only one side of the [[Binary Search Tree (二叉搜索树)]] at each [[Binary Tree (二叉树)#Level]]
### Insert a new node in log(n) time
- The idea is to insert the new node at a ``null`` slot to minimise modification of the [[Binary Tree (二叉树)#Edge]]
- The suitable ``null`` slot can be found in ``log(n)`` by go down the [[Binary Search Tree (二叉搜索树)]] using the method in [[#Locate a node in log(n) time]]



## Leetcode Question
---
### Properties
- [700. Search in a Binary Search Tree](https://leetcode.cn/problems/search-in-a-binary-search-tree/)
- [98. Validate Binary Search Tree](https://leetcode.cn/problems/validate-binary-search-tree/)
- [530. Minimum Absolute Difference in BST](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)
- [501. Find Mode in Binary Search Tree](https://leetcode.cn/problems/find-mode-in-binary-search-tree/)
- [538. Convert BST to Greater Tree](https://leetcode.cn/problems/convert-bst-to-greater-tree/)
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