---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - discrete_math
Creation Date: 2023-10-09T09:08:00
Last Date: 2024-01-13T15:13:11+08:00
References: 
---
## Abstract
---
- A [[Data Structure]] that can be used to model a lot of real-world problems

## 3 Ways to Represent
---
### Adjacency Matrix
- A 2d [[Array]], the row and column index indicates the `id of a node`
- **Pros:** Check the relationship of any 2 nodes in `O(1)`
- **Cons:** Space wastage for [[#Sparse Graph]]

### Adjacency List
- A [[Hash Map]] of [[Data Structure]]
- **Pros:** Easy to manipulate using programming language

### Adjacency Set
- A collection of all [[Binary Tree (二叉树)#Edge]] 


## Terminologies
---
### Weighted Graph (加权图)
- [[Binary Tree (二叉树)#Edge |Edge]] has a value
### Directed Graph
- Can be used to represent [[Relation]] which only involves one [[Set]]  

### Non-Directed Graph

### Sparse Graph
- A graph in which the number of edges is much less than the possible number of edges