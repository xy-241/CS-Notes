---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-08T20:42:55+08:00
Last Date: 2025-04-25T14:58:26+08:00
References: 
---
## Abstract
---
>[!info] Use Cases
> - When you only care about whether **a path exists**
> - When the graph might be cyclic (just need proper visited[] handling)
> - When you want a simple recursive implementation

>[!note] Complexity Analysis
> - Time Complexity: $O(V + E)$ (visit each node and edge once)
> - Space Complexity: $O(V)$ for visited and recursion stack

>[!success] Pros
> - Easy to write recursively
> - Works fine for [reachability](https://leetcode.com/problems/find-if-path-exists-in-graph/description/)
> - Low memory footprint

>[!warning] Cons
> - Might explore long wrong paths first
> - **Not guaranteed to find the shortest path**


>[!example] Practice Questions
>[206. Reverse Linked List](https://leetcode.cn/problems/reverse-linked-list/)
>
>[19. Remove Nth Node From End of List](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

## DFS with Backtracking
---
>[!info] Use Cases
> - When you need to explore **all possible paths/solutions**
> - When you must **undo decisions** to try other paths (e.g., unmark visited)
> - Classic in combinatorial search, puzzles, and path enumeration

>[!note] Complexity Analysis
> - Time Complexity: Worst-case $O(2^n)$ (explores all paths)

>[!success] Pros
> - Finds all paths, all solutions, all combinations
> - Works for grid problems, games, puzzle solving

>[!warning] Cons
> - **Overkill for reachability**
> - Can be very slow and even TLE if graph has cycles and large branching
> - Must be careful with revisiting nodes