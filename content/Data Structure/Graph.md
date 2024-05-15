---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - discrete_math
Creation Date: 2023-10-09T09:08:00
Last Date: 2024-05-15T11:58:50+08:00
References: 
description: Detailed introduction to graph from a computer science perspective
title: Graph Data Structure
---
## Abstract
---
>[!cite]
> A graph $G = (V,E)$ is a [[Set]] of **vertices $V$** and **edges $E$** where each **edge** $(u, v)$ is a **connection between vertices**. $u,v \in V$.

![[graph.svg|300]]


- In layman term, graph is a [[Data Structure]] that offers a **network structure** that helps **define** and **visualize** **relationships**(known as **edge**) between **various components**(known as **vertex/node**) 



### Graph Theory 
- The **study of the properties** of these [[Graph]], and **how** they can be used to **model and solve problems**

## Graph Basics
---
### Neighbours

![[graph_neighbours .svg|250]]

- **Two nodes $u$, $v$** are neighbours if there is an **edge $(u, v)$** **connecting both nodes**
- In the diagram above, **node $0$** has **$3$ neighbours** which are $6$, $8$ and $4$

### Degree

![[graph_edge.svg|250]]

- The degree of a node $u$ is the **total number of edges connected to it**
- In the diagram above, **node $0$** has a **degree of $3$**, since there are **$3$ edges connected to it**

### Path

![[graph_path.svg|500]]

- A **sequence of edges** that **connects** a **sequence of nodes**
- In the diagram above, there are 2 paths, the path at the right side is a **special path** know as [[#Cycle]]
### Cycle

![[graph_cycle.svg|500]]

- [[#Path]] that **starts** and **ends** at the **same node**
- In the diagram above, we **start the path from node $0$** and **ends at node $0$**



## Graph Connectivity
---

![[graph_connectivity.svg|500]]

- **Two vertices** are **connected** if a [[#Path]] exists between them
- A [[Graph]] is **connected** when there is a path between **every pair of vertices**, ensuring **all vertices** are **reachable** from **every other vertex**

### Connected Component

![[connected_component_graph.svg|300]]

- A connected component is **a subset of vertices** $V_{i} \subseteq V$ that form a [[#Graph Connectivity|connected graph]]   




## Directed Graph
---

![[directed_graph.svg|250]]

- Edges are directed, and **NOT** [[Set#Ordered Pair]] which means $(u, v)$ and $(v, u)$ are **two different pairs**
- Can be used to represent [[Relation]] which only involves one [[Set]] 

### Directed Cyclic Graph

![[directed_cyclic_graph.svg|250]]

- [[#Directed Graph]] that has [[#Cycle]]

### Directed Acyclic Graph

![[directed_acyclic_graph.svg|250]]

- Known as **DAG**
- [[#Directed Graph]] that **doesn't have** [[#Cycle]] 

>[!important]
> A directed graph is a DAG **if and only if** it can be [[#Topological Sort|topologically ordered]].

#### Topological Sort

![[topological_sort.svg|500]]

- A **linear ordering** of vertices in a [[#Directed Acyclic Graph]]. The **direction** of **all edges** are **same**

>[!important]
> This ordering is useful in various applications, such as **task scheduling** and **dependency resolution** etc.

### Undirected Graph

![[undirected_graph.svg|500]]


- **If** edge $(u, v)$ exists, **then** edge $(v, u)$ **must also exist**
- Since **all edges** are **double arrowed**, we usually **don't draw out the arrows** as shown above

## Weighted Graph (加权图)
---

![[weight_graph.svg|500]]


- Each [[Tree#Edge]] has **a value** which can be used to **model** things like **distances between two cities**

## Graph Representation
---
### Adjacency Matrix

![[adjacency_matrix.svg|500]]

- A matrix made of [[Array]], the **row index** $i$ and **column index** $j$ indicate the **id of a vertex**
- $A_{ij}$ refers to a value at a particular cell of the matrix, the value is determined by $A_{ij} = \begin{cases}1 & edge(i,j)\\ 0 &otherwise\end{cases}$, $1$ if  an edge exists from node $i$ to node $j$, otherwise $0$
- For [[#Weighted Graph (加权图)]], the the value in the matrix cell can be used to represent the **weight**

>[!success] Efficient relationship checker
> Check if an edge exists between 2 nodes in $O(1)$.

>[!caution]
> The cost of space is $O(V^2)$, a **big space wastage** when there **isn't many edges among the nodes** - [[#Sparse Graph]].

### Adjacency List


![[adjacency_list.svg|500]]

- Each vertex is mapped to a list of its [[#Neighbours]]

>[!success] Most common representation
> It gives us an **easy access** to the [[#Neighbours]] of a node, a great tool that is very useful in graph algorithms.
> 
> 

>[!success] Space efficient
> The space complexity of adjacency list is $O(V+E)$, while it i$O(V^2)$ for [[#Adjacency Matrix]]. So adjacency list is **space friendly** when there **isn't many edges among the nodes** - [[#Sparse Graph]].

>[!caution]
> It isn't as efficient as [[#Adjacency Matrix]] when it comes to check if an edge exist between 2 nodes. We need to go through the neighbours of a node to check. We can use data structures like [[AVL Tree]] and [[Hash Map]] to hold the neighbours if a node has too many neighbours. This reduces the time complexity from $O(n)$ down to $log(n)$.
### Edge Set

![[edge_set.svg|300]]
- A collection of all [[Tree#Edge]]

>[!important]
> For **undirected graph**, the **edge definitions** inside the adjacency set **ARE NOT** [[Set#Ordered Pair]], that means if we have 2 edges $(0,1)$ and $(1,0)$, **both** are **considered as one single edge definition** in edge set!

>[!caution]
> Not a common graph representation, it is **hard to extract information** about **vertice**s and [[Graph]].


## Terminologies
---
### Sparse Graph
- A [[Graph]] in which the number of edges is much less than the possible number of edges

### Complete Graph
- A [[Graph]] that has a **direct edge** between **every pair of vertices** 


## References
---
- [Introduction to Graph Theory: A Computer Science Perspective - YouTube](https://www.youtube.com/watch?v=LFKZLXVO-Dg)
- [Directed acyclic graph - Wikipedia](https://en.wikipedia.org/wiki/Directed_acyclic_graph)