---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - java
Creation Date: 2023-10-09T08:54:00
Last Date: 2025-04-03T11:18:17+08:00
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

## Positive Edge Weights
---

![[positive_edges.svg]]

- When all edges have positive weights, each node is processed exactly once
- Once a node is polled from the Priority Queue, we have found its shortest path
- This is guaranteed because:
  1. Priority Queue processes nodes in order of increasing distance
  2. Any alternative path would involve additional positive edges, making it longer

## Negative Edge Weights
---
- Algorithm may fail to find shortest paths when negative edges exist
- Nodes may require multiple edge relaxations as later paths could be shorter

### Execution Example

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