---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - graph
  - shortest-path
Creation Date: 2024-03-31T21:47:00
Last Date: 2025-08-20T19:33:54+08:00
References:
description: A versatile shortest path algorithm that can handle negative edge weights
---
## Abstract
---
- [[Algorithm]] that finds the **shortest paths** from a source node to **all other nodes** in a weighted [[Graph]], even when the graph contains **negative edge weights**
- Particularly useful for detecting negative cycles and finding arbitrage opportunities

## Key Concepts
---
### Edge Relaxation
- **Definition**: The process of checking if the current known path to node v can be improved by going through node u
- **Formula**: If `distance[u] + weight(u,v) < distance[v]`, then update `distance[v] = distance[u] + weight(u,v)`
- **Intuition**: Like releasing tension in the path - making it shorter and more efficient

>[!tip] Edge Weight Modifications
> Modifying all edge weights preserves shortest paths in one case:
> - Multiplying by a constant `C > 0`:
>    - If `P` is the shortest path in `G` with weight `W`
>    - In `G'` (with all weights `× C`), `P`'s weight becomes `W × C`
>    - `P` remains shortest because all paths are scaled proportionally
> 
> Note: Adding a constant `C > 0` does NOT preserve shortest paths because:
> - The number of edges in a path affects the total additional weight
> - A path with more edges gets more weight added
> - This can change which path is shortest

>[!tip] Finding Longest Paths
> Bellman-Ford can be modified to find the longest path in a directed graph with positive weights:
> - Negate all edge weights
> - Run Bellman-Ford
> - The shortest path in the modified graph is the longest path in the original graph
> 
> Note: This only works for directed graphs without cycles (DAGs) because:
> - In a graph with cycles, the longest path might be infinite
> - Bellman-Ford can detect negative cycles, which would indicate an infinite longest path

### The Algorithm
1. Initialise distance to source node as 0, all others as infinity
2. Repeat $|V| - 1$ times (where $|V|$ is the number of vertices):
   - For each edge `(u,v)` with weight w: If `distance[u] + w < distance[v]`, update `distance[v]`
1. Optional: Check one more time to detect negative cycles

>[!tip] Why |V|-1 iterations?
> The longest possible path without cycles in a graph with $|V|$ vertices has $|V|-1$ edges. Therefore, $|V|-1$ iterations are sufficient to find the shortest paths if no negative cycles exist.

>[!tip] Invariant
> ![[belllman ford invariant.png|300]]
> After `k` iterations of the outer loop, for any node `v`, if there exists a shortest path from source to `v` that uses at most `k` edges, then `distance[v]` has the correct shortest path distance. This invariant helps prove the algorithm's correctness:
> - Base case: After `0` iterations, only source node has correct distance which is `0`
> - Inductive step: If all shortest paths using at most k edges are correct, then all shortest paths using at most `k+1` edges will be correct in the next iteration
> - Termination: After $|V|-1$ iterations, all possible paths have been considered
> 
> Note: A node within `k` hops might be reached through a longer path with smaller total weight as shown above, so we must consider the number of edges in the shortest path, not just any path.

### Negative Edges vs. Negative Cycles
- **Negative edges**: Individual connections with negative weights (Bellman-Ford can handle these)
- **Negative cycles**: Cycles where the sum of all edge weights is negative (Bellman-Ford cannot find shortest paths if these exist)
- **Cycle detection**: If any distance can still be improved after $|V|-1$ iterations, a negative cycle exists

## Complexity
---
- **Time complexity**:  $O(|V| × |E|)$ where $|V|$ is the number of vertices and $|E|$ is the number of edges
- **Space complexity**: $O(|V|)$ to store the distance array

## Applications
---
### Network Routing
- Finding optimal paths in communication networks
- Particularly useful when network conditions can result in negative weights (e.g., certain routing protocols)
- **Key Applications**:
  - **Distance Vector Routing Protocols**:
    - RIP (Routing Information Protocol)
    - [[Border Gateway Protocol]]


### Arbitrage Detection
- Identifying profit opportunities in currency exchange markets
- **Setup**:
  - Nodes represent currencies
  - Edges represent exchange rates (using negative logarithm of rates)
  - Negative cycles indicate risk-free profit sequences

## Comparison with Other Algorithms
---
### vs. Dijkstra's algorithm
- Bellman-Ford is slower $O(VE)$ vs $O(E + V log V)$
- Bellman-Ford handles negative edges, Dijkstra's doesn't
- Both find shortest paths in weighted graphs

## Implementation Considerations
---
- Always runs in worst-case O(VE) time
- Particularly useful when negative edges are present
- Can be modified to reconstruct the actual paths in addition to distances

>[!tip] Bellman-Ford on Trees
> For a tree graph, Bellman-Ford can be optimised to a single pass:
> ```python
> # Process vertices in BFS order
> for each vertex u in BFS order:
>     for each edge e = (u -> v):
>         relax(e)
> ```
> 
> This works because:
> - Trees have exactly one path between any two vertices
> - No cycles exist in a tree
> - BFS order ensures vertices are processed in order of increasing distance
> - By the time we relax edge (u,v), distance[u] is already correct
> 
> Complexity improves from $O(|V| × |E|)$ to  $O(|E|) = O(|V|)$ for trees.

>[!example] Tree Example 🌳
> Consider this tree with edge weights:
> ```
>     A
>    / \
>   2   5
>  /     \
> B       C
> |       |
> 1       4
> |       |
> D       E
> ```
> 
> BFS edge labels:
> - (A→B) weight 2
> - (A→C) weight 5
> - (B→D) weight 1
> - (C→E) weight 4
> 
> Initial distances: dist[A]=0, all others = ∞
> 
> One-pass Bellman-Ford in BFS order:
> 
> Process A:
> - Relax (A→B): dist[B] = 2
> - Relax (A→C): dist[C] = 5
> 
> Process B:
> - Relax (B→D): dist[D] = 2+1 = 3
> 
> Process C:
> - Relax (C→E): dist[E] = 5+4 = 9
> 
> Process D, E (no outgoing edges)
> 
> Final distances from A:
> - dist[A] = 0
> - dist[B] = 2
> - dist[C] = 5
> - dist[D] = 3
> - dist[E] = 9
> 
> The algorithm works because in a tree with BFS ordering, **a vertex's correct distance is established before processing its children**. 
> 
> This is much more efficient than the standard Bellman-Ford algorithm, which has a time complexity of $O(V×E) = O(V²)$ on a tree.

>[!example] Currency Exchange Example
> Consider a currency exchange network with three currencies: USD, EUR, and GBP. The exchange rates are:
> - USD → EUR: 0.85
> - EUR → GBP: 0.90
> - GBP → USD: 1.30
> 
> To find arbitrage opportunities:
> 1. Convert rates to negative logarithms (to convert multiplication to addition)
> 2. Run Bellman-Ford
> 3. If a negative cycle is found, it represents a profitable trading sequence
> 
> In this case, converting 100 USD → EUR → GBP → USD would result in:
> 100 × 0.85 × 0.90 × 1.30 = 99.45 USD
> This is not profitable, so no negative cycle exists in this example. 


## References
---
- [4.4 Bellman Ford Algorithm - Single Source Shortest Path - Dynamic Programming - YouTube](https://youtu.be/FtN3BYH2Zes?si=e1D_bQYG9avhsiT_)