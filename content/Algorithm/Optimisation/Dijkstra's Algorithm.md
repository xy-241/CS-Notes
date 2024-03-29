---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - java
Creation Date: 2023-10-09T08:54:00
Last Date: 2024-03-05T12:35:09+08:00
References:
  - "Mike: https://youtu.be/GazC3A4OQTE?si=NZgAiSYMoewpywwF"
  - "Abdul: https://youtu.be/XB4MIexjvY0?si=v5wN_1UZopp7E76u"
  - https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-03a72/dijkstra-s-6d0b2/#%E7%A7%92%E6%9D%80%E4%B8%89%E9%81%93%E9%A2%98%E7%9B%AE
---
## Abstract
---
- Used to find the shortest path from **any starting node** to all other nodes in a [[Graph]] - **Single Source Shortest Path** on a [[Graph#Weighted | Weighted Graph]] that is either [[Graph#Directed Graph]] or [[Graph#Non-Directed Graph]]
</br>

- Use [[Greedy Algorithm]] to improve the computation performance via [[Priority Queue]]
- Use [[Dynamic Programming]] to obtain the shortest distance from the given node to all other nodes -> [[Combinatorial Optimisation]] via [[Dynamic Programming#DP Table|DP Table]]

>[!caution] Negative Edge
> May not work if there are negative [[Tree#Edge|Edge]] 


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

## Leetcode Question
---
- [Byte-dance Mock Test (Product Recommendation)](https://www.jdoodle.com/ia/O7d)


## Terminologies
---
### Source Vertex
- The starting node
### Edge Relaxation 
- Update path for already known nodes as soon as we find a shorter path to reach it 