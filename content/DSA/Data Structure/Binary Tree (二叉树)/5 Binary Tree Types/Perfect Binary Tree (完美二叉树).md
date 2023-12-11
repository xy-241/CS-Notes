#dsa 
## Abstract
- When a [[Binary Tree (二叉树)]] only has nodes that have a [[Binary Tree (二叉树)#Degree]] of 0 or 2 AND the nodes [[Binary Tree (二叉树)#Degree]] 0 is on the last [[Binary Tree (二叉树)#Level]]
- If the [[Binary Tree (二叉树)#Depth]] of the left most branch is same as the [[Binary Tree (二叉树)#Depth]] of the right most branch AND it is a [[Complete Binary Tree (完全二叉树)]]
![[perfect_binary_tree.png]]

## Calculate total number of nodes
- Total nodes = 2^([[Binary Tree (二叉树)#Height]]+1) -1
- Time complexity = log(n), because we just need to go to the bottom from one side to find the [[Binary Tree (二叉树)#Height]]
- Space complexity = O(1) 

## Leetcode Problems
### Properties
- [222. Count Complete Tree Nodes](https://leetcode.cn/problems/count-complete-tree-nodes/)