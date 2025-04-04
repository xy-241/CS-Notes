---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - python
Creation Date: 2024-03-02, 16:16
Last Date: 2025-04-04T11:26:00+08:00
References: 
draft: 
description: A comprehensive guide to Union Find data structure, covering its implementation, optimizations (path compression and weighted union), and applications in graph algorithms. Learn how to efficiently manage disjoint sets with O(α(n)) time complexity operations. Includes Python implementation, common pitfalls, and real-world applications in network connectivity and minimum spanning trees.
---
## Abstract
---
- [[Data Structure]] that lets you manage a collection of [[Subset#Disjoin Set]] also known as **Dynamic Relation** **efficiently**
- Used in graph algorithms like [[Kruskal's Algorithm]] for [[Minimum Spanning Tree]], cycle detection, and connectivity problems

>[!info] Dynamic Relation
> A Dynamic Relation is a [[Relation]] that has a different set of elements inside the relation depending on the given input. In Union-Find, the operation `union(x, y)` gives the dynamic property, combining 2 relations into one relation.
> 
> All relations in Union-Find are [[Equivalence Relation]]!

>[!abstract] 2 main operations 
> `find(x)`
> - Determines the **representative element** of the disjoint set that contains element $x$
> - The representative acts as the **unique identifier** for the **whole disjoint set**
> 
> `union(x, y)`
> - Combines the two disjoint sets containing elements $x$ and $y$ respectively into a **single disjoint set**

>[!question] What does it mean 'efficiently'?
> `find(x)`
> - Time complexity is $O(1)$ using [[#Path Compression]]
> 
> `union(x, y)`
> - Time complexity is $O(1)$
> - We use `find(x)` and `find(y)` to obtain the representative element of both disjoint sets in $O(1)$
> - Then attach the representative element of one disjoint set to another elements on the path in $O(1)$
> - Overall complexity is $O(1)$

>[!success] Solve Grouping Problems 
> Union-Find can tell us if two elements are connected by a certain relationship in $O(1)$

## Key Optimisations
---
### Path Compression
   - When finding an element's root, update all nodes along the path to point directly to the root
   - Flattens the tree structure for future operations
   - Reduces time complexity to nearly constant time
   - **Mechanism:** During `find(x)`, directly link each node on the path to the root node
   - This flattens the trees, making subsequent `find(x)` operations much faster

### Weighted Union
   - When merging sets, attach the smaller tree to the larger tree's root
   - Maintains balance and minimizes tree height
   - Prevents degenerate tree structures

>[!note] Rank vs Height
> The rank in Union-Find is an **upper bound** on the height, not the exact height. This distinction is crucial:
> 
> 1. **Rank vs Height**:
>    - Height is the **actual length** of the longest path from root to leaf
>    - Rank is a property that's **only incremented when merging trees of equal rank**
>    - Due to path compression, the actual height can be **much smaller than the rank**
> 
> 2. **Why use rank instead of height?**:
>    - Tracking exact height would be **expensive to maintain** after path compression
>    - Rank is **easier to maintain** and still provides the balancing we need
>    - The rank property is sufficient to guarantee the **O(α(n)) time complexity**
> 
> 3. **Rank Updates During Union**:
>    - When attaching smaller rank tree to larger rank tree: **rank stays the same**
>    - When attaching trees of equal rank: **rank increases by 1**
>    - Actual height might increase temporarily, but path compression will flatten it in future operations

>[!note] Time Complexity
> - With both optimizations: O(α(n)) where α is the inverse Ackermann function
> - Without optimizations: O(n) for worst-case operations
> - α(n) grows extremely slowly, making operations effectively constant time

## Core Operations
---
### Find Operation
- Returns the root/representative of the set containing element x
- Implements path compression to optimize future operations
- Key insight: All nodes along the path to root are updated to point directly to root

### Union Operation
- Merges two sets by connecting their roots
- Uses weighted union to maintain balanced trees
- Key insight: Smaller tree is always attached to larger tree's root

## Python Implementation
---
>[!code]- Union-Find Class with Optimizations
> ```python
> class UnionFind:
>     def __init__(self, size):
>         self.parent = list(range(size))  # Each element starts as its own parent
>         self.rank = [0] * size  # Used for weighted union
>     
>     def find(self, x):
>         # Path compression: make each node point directly to root
>         if self.parent[x] != x:
>             self.parent[x] = self.find(self.parent[x])  # Recursive path compression
>         return self.parent[x]
>     
>     def union(self, x, y):
>         # Find roots of x and y
>         root_x = self.find(x)
>         root_y = self.find(y)
>         
>         # If already in same set, do nothing
>         if root_x == root_y:
>             return
>             
>         # Weighted union: attach smaller rank tree to larger rank tree
>         if self.rank[root_x] < self.rank[root_y]:
>             self.parent[root_x] = root_y
>         elif self.rank[root_x] > self.rank[root_y]:
>             self.parent[root_y] = root_x
>         else:
>             # If ranks are equal, choose one as root and increment its rank
>             self.parent[root_y] = root_x
>             self.rank[root_x] += 1
> ```

>[!code]- Example Usage
> ```python
> # Create Union-Find with 5 elements
> uf = UnionFind(5)
> 
> # Initially, each element is in its own set
> print(uf.find(0))  # 0
> print(uf.find(1))  # 1
> 
> # Union some elements
> uf.union(0, 1)
> uf.union(2, 3)
> 
> # Check if elements are in same set
> print(uf.find(0) == uf.find(1))  # True
> print(uf.find(2) == uf.find(3))  # True
> print(uf.find(0) == uf.find(2))  # False
> ```

## Applications
---
1. **Graph Algorithms**
   - [[Kruskal's Algorithm]] for [[Minimum Spanning Tree]]
   - Cycle detection in undirected graphs
   - Connected components in graphs

2. **Dynamic Connectivity**
   - Network connectivity problems
   - Image processing (pixel connectivity)
   - Social network analysis

3. **Percolation Problems**
   - Modeling physical systems
   - Grid-based simulations
   - Phase transitions

## Common Mistakes
---
>[!warning] Common Pitfalls
> 1. **Forgetting Path Compression**
>    - Without path compression, operations can degrade to O(n)
>    - Always implement recursive path compression in find operation
> 
> 2. **Ignoring Weighted Union**
>    - Can lead to unbalanced trees
>    - Degrades performance to O(n) in worst case
> 
> 3. **Incorrect Initialization**
>    - Each element must start as its own parent
>    - Rank array must be initialized to zeros

## References
---
- [Union Find Introduction - YouTube](https://www.youtube.com/watch?v=ibjEGG7ylHk)
- [Union Find - Union and Find Operations - YouTube](https://www.youtube.com/watch?v=0jNmHPfA_yE)
- [Union Find in 5 minutes — Data Structures & Algorithms - YouTube](https://www.youtube.com/watch?v=ayW5B2W9hfo)