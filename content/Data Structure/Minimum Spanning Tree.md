---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - optimization
  - graph
Creation Date: 2025-04-13, 18:19
Last Date: 2025-04-13T18:23:19+08:00
References: 
draft: 
description: A comprehensive guide to Minimum Spanning Trees (MST), covering key properties, algorithms (Prim's, Kruskal's, Boruvka's), and their applications in network design and optimisation.
---
## Abstract
---
- A [[Graph]] subgraph that connects all vertices with the minimum possible total edge weight
- Contains exactly $n-1$ edges for a graph with $n$ vertices
- Forms a [[Tree]] (no cycles) that spans all vertices

>[!note] Key Properties
> 1. **Cycle Property**: The heaviest edge in any cycle cannot be in the MST
> 2. **Cut Property**: The lightest edge crossing any cut must be in the MST

>[!warning] Common Mistakes
> 1. **Assuming MST gives shortest paths**
>    - MST minimizes total weight, not individual path lengths
>    - For shortest paths, use [[Dijkstra's Algorithm]] or [[Bellman-Ford Algorithm]]
> 
> 2. **Incorrect cycle detection**
>    - Must use efficient data structures (Union-Find)
>    - Naive cycle checking can lead to poor performance
> 
> 3. **Early termination**
>    - Must ensure all nodes are connected
>    - Cannot stop just because all nodes are "touched"

## Fundamental Properties
---
### Path Properties
- An MST does NOT guarantee the shortest total path between any two nodes
- An MST DOES guarantee that the maximum weight edge on any path between two nodes is minimized
  - This means that among all possible paths between any two nodes in the graph, the path in the MST will have the smallest possible maximum edge weight
  - This property is particularly useful in network design where we want to minimise the worst-case bottleneck
>[!example] Bottleneck Property Example
> Consider a graph with cities and roads:
> ```
> A --5-- B --8-- C
>  \     / \     /
>   3   4   2   6
>    \ /     \ /
>     D --7-- E
> ```
> 
> In the MST, the path from A to E might be A-D-B-E (with edges 3,4,2)
> - This path has a maximum edge weight of 4
> - The alternative path A-B-E (with edges 5,2) has a maximum edge weight of 5
> - The MST path is chosen because it minimizes the maximum edge weight (4 < 5)
> 
> Note: The total path length (3+4+2=9) is actually longer than the alternative path (5+2=7), but the MST prioritises minimising the maximum edge weight.


- A path always exists between any two nodes in an MST (by definition of a tree)

### Edge Properties
- The heaviest edge crossing a cut is NOT guaranteed to be excluded from the MST
- Counterexample: When edges within sets A and B are heavier than edges crossing the cut, the MST might include multiple cross-cut edges, including the heaviest one
- The MST will include the minimum number of edges needed to connect the graph while minimizing total weight

## MST Algorithms
---
### Prim's Algorithm
- **Greedy approach** starting from one vertex
- Repeatedly adds the lowest-weight edge connecting to a new vertex
- **Time complexity**: 
  - $O(E \log V)$ with binary heap
  - $O(E + V \log V)$ with Fibonacci heap

### Kruskal's Algorithm
- Sorts edges by weight and adds them if they don't create cycles
- Uses [[Union Find]] data structure to check for cycles
- **Time complexity**: $O(E \log V)$
- **Termination conditions**:
  - Exactly $(n-1)$ edges have been added
  - All nodes are in the same connected component

>[!warning] Common Mistake
> The algorithm cannot stop just because all nodes are "touched" or "reached"
> It must continue until all nodes are in the same connected component (same union-find set)

### Boruvka's Algorithm
- Works by merging components, finding minimum outgoing edge for each
- Less commonly implemented but historically significant
- **Time complexity**: $O(E \log V)$

## Number of MSTs
---
- A graph with unique edge weights has exactly one MST
- Graphs with identical edge weights may have multiple MSTs
- The number of spanning trees depends on the graph structure


## Implementation Considerations
---
### Edge Selection
- Must consider both edge weight and connectivity
- Need efficient cycle detection (using Union-Find)
- Priority queue management for Prim's algorithm

### Graph Representation
- Adjacency list vs. adjacency matrix
- Impact on algorithm performance
- Memory considerations for large graphs

## Applications
---
1. **Network Design**
   - Designing efficient communication networks
   - Minimising cable/wire length in physical networks
   - Optimising resource distribution

2. **Approximation Algorithms**
   - Used as a building block for more complex algorithms
   - Helps solve NP-hard problems approximately

3. **Clustering**
   - Identifying natural groupings in data
   - Image segmentation
   - Social network analysis


## References
---
- [Eager Prim's Minimum Spanning Tree Algorithm \| Graph Theory - YouTube](https://youtu.be/xq3ABa-px_g?si=YwZ5J5J5J5J5J5J5)

