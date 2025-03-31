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
Last Date: 2025-03-31T22:10:13+08:00
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

### The Algorithm
1. Initialise distance to source node as 0, all others as infinity
2. Repeat $|V| - 1$ times (where $|V|$ is the number of vertices):
   - For each edge `(u,v)` with weight w: If `distance[u] + w < distance[v]`, update `distance[v]`
1. Optional: Check one more time to detect negative cycles

>[!tip] Why $|V|-1$ iterations?
> The longest possible path without cycles in a graph with $|V|$ vertices has $|V|-1$ edges. Therefore, $|V|-1$ iterations are sufficient to find the shortest paths if no negative cycles exist.

### Negative Edges vs. Negative Cycles
- **Negative edges**: Individual connections with negative weights (Bellman-Ford can handle these)
- **Negative cycles**: Cycles where the sum of all edge weights is negative (Bellman-Ford cannot find shortest paths if these exist)
- **Cycle detection**: If any distance can still be improved after $|V|-1$ iterations, a negative cycle exists

## Complexity
---
- **Time complexity**: `O(|V| × |E|)` where $|V|$ is the number of vertices and $|E|$ is the number of edges
- **Space complexity**: $O(|V|)$ to store the distance array

## Applications
---
### Network Routing
- Finding optimal paths in communication networks
- Particularly useful when network conditions can result in negative weights (e.g., certain routing protocols)
- **Key Applications**:
  - **Distance Vector Routing Protocols**:
    - RIP (Routing Information Protocol)
    - BGP (Border Gateway Protocol)


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