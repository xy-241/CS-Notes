---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - discrete_math
Creation Date: 2023-10-09T09:08:00
Last Date: 2024-05-10T13:47:54+08:00
References: 
description: Detailed introduction to graph from a computer science perspective
title: 
---
## Abstract
---

![[graph_definition.gif|500]]

- A [[Data Structure]] that offers a **network structure** that helps **define** and **visualize** **relationships**(known as **edge**) between **various components**(known as **vertex/node**) 

### Graph Theory 
- The **study of the properties** of these [[Graph]], and **how** they can be used to **model and solve problems**





## Graph Connectivity
---

![[graph_connectivity.png|500]]

- **Two vertices** are **connected** if a [[#Path]] exists between them
- A [[Graph]] is **connected** when there is a path between **every pair of vertices**, ensuring **all vertices** are **reachable** from **every other vertex**

### Connected Component

![[grapg_disconnected_graph.png|300]]

- A connected component is **a subset of vertices** $V_{i} \subseteq V$ that form a [[#Graph Connectivity|connected graph]]   








## Directed Graph
---

![[directed_graph.png|250]]

- **If** edge $(u, v)$ exists, **then** edge $(v, u)$ **must NOT exist**
- Can be used to represent [[Relation]] which only involves one [[Set]] 

### Directed Cyclic Graph

![[directed_cyclic_graph.png|250]]

- [[#Directed Graph]] that has [[#Cycle]]

### Directed Acyclic Graph

![[directed_acyclic_graph(DAG).png|250]]

- Known as **DAG**
- [[#Directed Graph]] that **doesn't have** [[#Cycle]]


### Undirected Graph

![[undirected_graph.png|500]]

- **If** edge $(u, v)$ exists, **then** edge $(v, u)$ **must also exist**
- Since **all edges** are **double arrowed**, we usually **don't draw out the arrows** as shown above

## Weighted Graph (加权图)
---

![[weighted_graph.png|500]]


- Each [[Tree#Edge]] has **a value** which can be used to **model** things like **distances between two cities**

## Graph Representation
---
### Adjacency Matrix

![[adjacency_matrix.png|500]]

- A matrix made of [[Array]], the **row index** $i$ and **column index** $j$ indicate the **id of a vertex**
- $A_{ij}$ refers to a value at a particular cell of the matrix, the value is determined by $A_{ij} = \begin{cases}1 & edge(i,j)\\ 0 &otherwise\end{cases}$, $1$ if  an edge exists from node $i$ to node $j$, otherwise $0$
- For [[#Weighted Graph (加权图)]], the the value in the matrix cell can be used to represent the **weight**

>[!success] Efficient relationship checker
> Check if an edge exists between 2 nodes in $O(1)$.

>[!caution]
> The cost of space is $O(V^2)$, a **big space wastage** when there **isn't many edges among the nodes** - [[#Sparse Graph]].

### Adjacency List

![[adjacency_list.png|500]]

- Each vertex is mapped to a list of its [[#Neighbours]]

>[!success] Most common representation
> It gives us an **easy access** to the [[#Neighbours]] of a node, a great tool that is very useful in graph algorithms.
> 
> 

>[!success] Space efficient
> The space complexity of adjacency list is $O(V+E)$, while it i$O(V^2)$ for [[#Adjacency Matrix]]. So adjacency list is **space friendly** when there **isn't many edges among the nodes** - [[#Sparse Graph]].

### Adjacency Set

![[edge_set.png|300]]

- A collection of all [[Tree#Edge]]

>[!important]
> The edge definitions inside the adjacency set **ARE NOT** [[Set#Ordered Pair]], that means if we have 2 edges $(0,1)$ and $(1,0)$, **both** are **considered as one single edge definition** in adjacency set!

>[!caution]
> Not a common graph representation, it is **hard to extract information** about **vertice**s and [[Graph]].


## Terminologies
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

 
### Sparse Graph
- A graph in which the number of edges is much less than the possible number of edges


## References
---
- [Introduction to Graph Theory: A Computer Science Perspective - YouTube](https://www.youtube.com/watch?v=LFKZLXVO-Dg)