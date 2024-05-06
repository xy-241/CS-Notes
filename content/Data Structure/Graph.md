---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - discrete_math
Creation Date: 2023-10-09T09:08:00
Last Date: 2024-05-06T18:18:15+08:00
References: 
---
## Abstract
---

![[graph_definition.gif|500]]

- A [[Data Structure]] that offers a **network structure** that helps **define** and **visualize** **relationships**(known as **edge**) between **various components**(known as **vertex/node**) 

### Graph Theory 
- The **study of the properties** of these [[Graph]], and **how** they can be used to **model and solve problems**



## Graph Core Terminologies
---
### Neighbours

![[graph_neighbours.gif|500]]

### Degree

![[graph_degree.gif|500]]

### Path

![[graph_path.gif|500]]

### Cycle

![[graph_cycle.gif|500]]

- A specific type of [[#Path]]

## Graph Connectivity
---

![[graph_connectivity.png|500]]

- **Two vertices** are **connected** if a [[#Path]] exists between them
- A [[Graph]] is **connected** when **all vertices are connected**, that means for **any two vertices** of a graph, these two vertices are **connected by a path**

### Connected Component

![[grapg_disconnected_graph.png|300]]

- A connected component is **a subset of vertices** $V_{i} \subseteq V$ that form a [[#Graph Connectivity|connected graph]]   



## Graph Representation
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

## Directions in Graph
---
### Undirected Graph
- If there is an edge $(u, v)$, then there is also an edge $(v, u)$

### Directed Graph
- Can be used to represent [[Relation]] which only involves one [[Set]] 


## Terminologies
---
### Weighted Graph (加权图)
- [[Tree#Edge|Edge]] has a value

 


### Sparse Graph
- A graph in which the number of edges is much less than the possible number of edges


## References
---
- [Introduction to Graph Theory: A Computer Science Perspective - YouTube](https://www.youtube.com/watch?v=LFKZLXVO-Dg)