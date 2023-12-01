#dsa 
## Abstract
- [[Perfect Binary Tree (完美二叉树)]] except the bottom [[Tree Level]] may not filled up
- The nodes on the bottom [[Tree Level]] are strictly arranged from left to right 
- Used to implement [[Heap]]
![[complete_binary_tree.png]]

## Calculate total number of nodes
- Time Complexity = logn * logn, 
	- if the complete tree isn’t a [[Perfect Binary Tree (完美二叉树)]], we need to go through each level of the tree once which is logn
	- At each level, using the current node as the root node. we need to go down the left most branch and the right most branch to check if the tree is a full binary tree or not, this takes another logn time ([[Perfect Binary Tree (完美二叉树)#Calculate total number of nodes]])
	- Thus overall is O(logn * logn)


## Leetcode Problems
### Properties
- [222. Count Complete Tree Nodes](https://leetcode.cn/problems/count-complete-tree-nodes/)