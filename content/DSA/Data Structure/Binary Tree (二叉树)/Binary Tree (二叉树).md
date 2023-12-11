---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-03T17:32:00
Last Date: 
---
## Abstract
- The maximum number of nodes at ``n``th [[#Level]] is $$
2^{n-1}
$$


## Implementation
### Implementation with [[Linked List]]
![[binary_tree_linked_list.png]]

### Implementation with [[Array]]
![[binary_tree_array.png]]
- Given the index of parent node is ``i``, the index of its left child is ``i*2+1``, right child is ``i*2+2``


## Leetcode Questions
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


## Terminologies
### Root Node
- Node without parent node
### Leaf Node
- Node without any child nodes
- Its 2 pointers point to ``null``
### Edge
- The link created by [[Pointer]] that links up 2 nodes
### Level
- Increments from the top to bottom of the Binary Tree
- [[#Root Node]] is at level 1
### Degree
- The number of child nodes of a particular node
- In Binary Tree, it is 0, 1, 2
### Height
- The number of [[#Edge]] traversed from [[#Root Node]] to the furthest [[#Leaf Node]]
### Node Height
- The number of [[#Edge]] traversed from the current node to the furthest [[#Leaf Node]]
### Depth
- The number of [[#Edge]] traversed from [[#Root Node]] to a particular node

> [!sidenote]
> In some questions or textbook, [[#Height]] and [[#Depth]] are defined based on the number of nodes traversed instead of [[#Edge]]. In this case, we need to +1

### Balance Factor
- The difference in [[#Height]] between the left and right subtrees of a node
- A measure of how unbalanced the tree is at that node
### Height-Balanced
- For all nodes, [[#Balance Factor]] should be no greater than 1 or smaller than -1
- This means that the tree is relatively evenly distributed, and no one subtree is significantly taller than the others
- More efficient for search, insertion, and deletion operations