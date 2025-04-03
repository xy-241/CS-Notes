---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - java
Creation Date: 2023-10-09T08:54:00
Last Date: 2025-04-03T12:09:53+08:00
References:
  - "Mike: https://youtu.be/GazC3A4OQTE?si=NZgAiSYMoewpywwF"
  - "Abdul: https://youtu.be/XB4MIexjvY0?si=v5wN_1UZopp7E76u"
  - https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-03a72/dijkstra-s-6d0b2/#%E7%A7%92%E6%9D%80%E4%B8%89%E9%81%93%E9%A2%98%E7%9B%AE
---
## Abstract
---
- Used to find the shortest path from **any starting node** to all other nodes in a [[Graph]] - **Single Source Shortest Path** on a [[Graph#Weighted | Weighted Graph]] that is either [[Graph#Directed Graph]] or [[Graph#Undirected Graph]]
</br>

- Uses [[Priority Queue]] to always process the node with smallest current distance first ([[Greedy Algorithm]]):
  - Instead of checking all possible paths (which would be slow)
  - We greedily choose the currently shortest known path
  - This works because any path through unprocessed nodes must be longer (for positive edges)

- Uses [[Combinatorial Optimisation]] to build up shortest paths incrementally:
  - Starts with direct paths from source node
  - Gradually finds better paths by combining known paths with new edges
  - Updates distances whenever a shorter path is found (edge relaxation)

### Source Vertex
- The starting node from which we want to find shortest paths to all other nodes

### Edge Relaxation 
- Process of updating the shortest known distance to a node when a shorter path is found
- For positive-weight graphs:
  - Each node typically **needs only one relaxation** when it's first discovered
  - Priority Queue ensures we process shorter paths before longer ones
- For negative-weight graphs:
  - Multiple relaxations may be needed for the same node
  - Later paths through negative edges could be shorter than earlier direct paths

### Triangle Inequality
- For any three nodes A, B, and C in a graph, the shortest path distances found by Dijkstra's algorithm satisfy:
  - `d(A,B) ≤ d(A,C) + d(C,B)`
  - Where `d(X,Y)` represents the shortest path distance from X to Y found by Dijkstra's algorithm

>[!note] Key Insight
> This inequality holds because:
> - If there was a shorter path from A to B through C, Dijkstra's algorithm would have found it
> - The direct path from A to B is guaranteed to be no longer than any path that goes through C
> - This property is fundamental to why Dijkstra's algorithm works correctly for non-negative edge weights

>[!caution] Important Note
> The triangle inequality only holds for shortest path distances found by Dijkstra's algorithm
> - It does not hold for arbitrary paths in the graph
> - For example, if S->B is not the shortest path from S to B, then d(S,B) > d(S,C) + d(C,B) might be possible
> - This is why Dijkstra's algorithm must always find the actual shortest paths to maintain the triangle inequality

## Complexity Intuition
---
- Dijkstra's algorithm always performs two key operations:

1. **Process all vertices** (V extract-min operations)
   - Each vertex must be processed exactly once
   - This is necessary to guarantee we find the shortest path to every node
   - The cost of each extraction depends on the priority queue implementation

2. **Consider all edges** (up to E decrease-key operations)
   - Each edge may need to be relaxed (updated) if a shorter path is found
   - The number of relaxations is bounded by the number of edges
   - The cost of each relaxation **depends on the priority queue's decrease-key operation**

- **Total complexity = Cost of V vertex extractions + Cost of E edge relaxations**

>[!note] Key Insight
> Different priority queue implementations change the cost of these operations, not the number of operations performed. This explains why the time complexity varies based on the data structure used, while the algorithm's fundamental approach remains unchanged.

## Limitations and Common Misconceptions
---
>[!warning] Negating Weights for Longest Path
> A common misconception is that we can find the longest path by negating all edge weights and running Dijkstra's algorithm. This approach fails because:
> 
> **Greedy Property**: Dijkstra's algorithm relies on the greedy property that once a node is processed, we've found its shortest path. This property doesn't hold for longest paths
> 
> Instead, consider:
> - For DAGs: Use [[Topological Sort]] and dynamic programming
> - For general graphs: Use [[Bellman-Ford Algorithm]] with modified relaxation rules

## Examples
---
### Positive Edge Weights Example

![[positive_edges.svg]]

- When all edges have positive weights, each node is processed exactly once
- Once a node is polled from the Priority Queue, we have found its shortest path
- This is guaranteed because:
  1. Priority Queue processes nodes in order of increasing distance
  2. Any alternative path would involve additional positive edges, making it longer

### Negative Edge Weights Example

![[negative_edges.svg|500]]

Starting from node `a`:
1. Initial distances: a(0), b(∞), c(∞), d(∞)
2. Process a's edges:
   - a->b: Update b to -5 (shortest so far, b is marked as "processed")
   - a->c: Update c to 1
3. Process b (smallest distance):
   - No outgoing edges
4. Process c:
   - c->d: Update d to 2
5. Process d:
   - d->b: Update b to -8 (2 + -10)
6. Final distances: a(0), b(-8), c(1), d(2)


>[!important] Why Dijkstra's Assumption is violated?
> 1. Node b is processed early due to direct negative edge (a->b with -5)
> 2. Algorithm assumes b's shortest path is found (-5)
> 3. Discovers a shorter path (a->c->d->b = -8) and b was "processed" again

>[!question] Why it still works in this case?
> Despite b being "processed" early, our implementation still updates b's distance when we find a shorter path.
> 
> The code `if (distToNextNode < distTo[nextNodeID])` allows for multiple updates to the same node.
> 
> However, this is not guaranteed to work for all graphs with negative edges, especially:
> - Graphs with negative cycles where shortest paths are undefined 
> - More complex graphs where the order of processing affects the final result 
> - Cases where a negative edge later in the path could lead to missing even shorter paths

>[!caution] Negative Edge Limitation
> - Do not use Dijkstra's algorithm when graph contains negative edges
> - Consider using [[Bellman-Ford Algorithm]] instead for graphs with negative edges
> - Negative cycles (cycles with negative total weight) make shortest path undefined

## Graph Types and Applicability
---
### Supported Graph Types ✓ Yes
1. **Unweighted Trees**
   - All edges have the same weight (typically 1)
   - Trees have no cycles, so shortest path between any two vertices is the unique path connecting them
   - Algorithm will correctly find this path, relaxing each edge at most once

2. **Weighted Graphs with Non-negative Edge Weights**
   - Classic scenario where Dijkstra's algorithm is guaranteed to work correctly
   - Non-negative edge weights ensure that once a vertex is processed, its distance is final
   - Any alternative path would have to be at least as long
   - Each node is processed exactly once
   - Priority Queue processes nodes in order of increasing distance

### Unsupported Graph Types ✗ No
1. **Weighted Graphs with Negative Edge Weights**
   - Fails if graph contains negative edge weights
   - Greedy selection assumes adding edges can never decrease path length
   - This assumption is violated with negative weights
   - Nodes may require multiple edge relaxations as later paths could be shorter

2. **Weighted Graphs with Negative Weight Cycles**
   - Even without negative cycles, negative edge weights can cause incorrect results
   - Algorithm might prematurely mark a vertex as "visited" before discovering a shorter path through a negative edge
   - Consider using [[Bellman-Ford Algorithm]] instead for graphs with negative edges

>[!note] Summary
> Dijkstra's algorithm will always return the correct answer (relaxing each edge at most once) only for:
> - Unweighted trees
> - Weighted graphs with non-negative edge weights



## Java Code Templates
---
>[!code]- Construct Adjacency List
> **From Adjacency Matrix**
> ```bash
> # Init
> List < int[] > [] adjList = new ArrayList[n];
> for (int from = 0; from < n; from++) adjList[from] = new ArrayList < > ();
> 
> # Convert from Adjacency Matrix
> for (int from = 0; from < n; from++) {
>   int[] edges = adjMaxtrix[from];
>   for (int to = 0; to < edges.length; to++) {
>     int edgeWeight = edges[to];
>     if (edgeWeight == 0 || from == to) continue;
>     # Use this line to skip adding relationship between 2 nodes when there isn 't a valid relationship present
> 
>     adjList[from].add(new int[] {
>       to,
>       edgeWeight
>     });
>   }
> }
> ```


>[!code]- Main Algorithm
> ```java
> class State {
>   int id;
>   int distFromStart;
> 
>   public State(int id, int distFromStart) {
>     this.id = id;
>     this.distFromStart = distFromStart;
>   }
> }
> 
> int[] dijkstra(int start, List < int[] > [] graph) {
>   // DP Table (Integer.MAX_VALUE for minimization problems)
>   int[] distTo = new int[graph.length];
>   Arrays.fill(distTo, Integer.MAX_VALUE);
>   distTo[start] = 0;
> 
>   // Greedy (min heap for minimization problems)
>   PriorityQueue < State > pq = new PriorityQueue < > ((a, b) -> {
>     return a.distFromStart - b.distFromStart;
>   });
>   pq.offer(new State(start, 0));
> 
>   while (!pq.isEmpty()) {
>     State nodeState = pq.poll(); // Greedy approach: start from the smallest
>     int nodeID = nodeState.id;
>     int curDistFromStart = nodeState.distFromStart;
> 
>     // Skip when I already have a shorter path to reach the node
>     if (distTo[nodeID] < curDistFromStart) continue;
> 
>     for (int[] neighbor: graph[nodeID]) {
>       int nextNodeID = neighbor[0];
>       int distToNextNode = curDistFromStart + neighbor[1];
> 
>       if (distToNextNode < distTo[nextNodeID]) { // Edge Relaxation, update dp table
>         distTo[nextNodeID] = distToNextNode;
>         pq.offer(new State(nextNodeID, distToNextNode));
>       }
>     }
>   }
> 
>   return distTo;
> }
> ```



>[!code]- Debugging Codes
> Examine the node relationships of the adjacency list
> ```bash
> for (int i = 0; i < n; i++) {
>   List < int[] > n = adjList[i];
>   System.out.printf("Outward edges from node %d: \n", i);
>   for (int[] r: n) {
>     System.out.println(Arrays.toString(r));
>   }
>   System.out.println();
> }
> ```


>[!question] Leetcode questions
> - [Byte-dance Mock Test (Product Recommendation)](https://www.jdoodle.com/ia/O7d)




## References
---
- [3.6 Dijkstra Algorithm - Single Source Shortest Path - Greedy Method - YouTube](https://youtu.be/XB4MIexjvY0?si=n8EUlCv87qIwXAH5)