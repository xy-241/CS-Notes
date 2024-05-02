---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - discrete_math
Creation Date: 2023-10-09T09:08:00
Last Date: 2024-05-02T12:05:24+08:00
References: 
---
## Abstract
---
- A [[Data Structure]] that offers a **network structure** that helps **define** and **visualize** **relationships**(known as **edge**) between **various components**(known as **vertex/node**) 
- **Graph theory** is the **study of the properties** of these network structure, and **how** they can be used to **model and solve problems**

## Representing Graph in Computer
---
### Adjacency Matrix
- A 2d [[Array]], the row and column index indicates the `id of a node`
- **Pros:** Check the relationship of any 2 nodes in `O(1)`
- **Cons:** Space wastage for [[#Sparse Graph]]

### Adjacency List
- A [[Hash Map]] of [[Data Structure]]
- **Pros:** Easy to manipulate using programming language

### Adjacency Set
- A collection of all [[Tree#Edge]] 


## Terminologies
---
### Weighted Graph (加权图)
- [[Tree#Edge|Edge]] has a value
### Directed Graph
- Can be used to represent [[Relation]] which only involves one [[Set]]  

### Non-Directed Graph

### Sparse Graph
- A graph in which the number of edges is much less than the possible number of edges