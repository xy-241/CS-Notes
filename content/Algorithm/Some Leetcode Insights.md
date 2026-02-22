---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-12-29, 23:32
Last Date: 2025-01-07T20:55:12+08:00
References: 
draft: 
description: 
---
## Tree
---

- For moderate complexity problems, when we want to recursively check if a tree node is valid, we often need to validate nodes against constraints. This can be done by passing intervals or threshold values down the recursive calls and verifying each node meets these requirements.
- For example, in [Validate Binary Search Tree - LeetCode](https://leetcode.com/problems/validate-binary-search-tree/), we can verify if each node is a valid BST node by passing down an interval representing the range it should lie within
- Another example is [Count Good Nodes in Binary Tree - LeetCode](https://leetcode.com/problems/count-good-nodes-in-binary-tree/). To ensure a node is a "good node," we can pass down the maximum value encountered along the path and exclude the node as a good node if the maximum value passed to it is greater than the node's value.

- preorder of a binary tree is the key to serialize and deserialize if we want to do it in dfs manner 

- for bfs, each while interation for the queue, we can process just one node or all nodes in that level. If one node, we are just focusing on the operations on that one node like adding child nodes to that node. For all nodes in that level is usually we need perform operation that require information about that level. One good example is how we focusing one node when deserilize using bfs [Serialize and Deserialize Binary Tree - LeetCode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/)

- [Diameter of Binary Tree - LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/) and [Binary Tree Maximum Path Sum - LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/) are two similar questions. At each node, we want to check if the current sum is the bigger, then pass the bigger branch + 1 up. The question bfs isn't working, because the solution requires us to go from bottom of the tree and up, but bfs is from top to bottom 

- [Same Tree - LeetCode](https://leetcode.com/problems/same-tree/) is a subproblem of [Subtree of Another Tree - LeetCode](https://leetcode.com/problems/subtree-of-another-tree/)