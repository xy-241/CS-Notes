---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-07-17, 10:02
Last Date: 2024-07-20T17:23:25+08:00
References: 
draft: 
description: 
---
## Abstract
---
- An [[Abstract Data Type (ADT)]] that operates similarly to a standard [[Queue]], except each **element** inside the queue **has a certain priority**. This priority **determines** the **order** in which **elements are removed** from the priority queue.

>[!important]
> A priority queue **only supports comparable data**, meaning that data inserted **must** be able to **be ordered**, either from least to greatest or greatest to least. This allows us to **assign relative priorities** to each element.
> 
> Priority Queues are usually implemented with [[Heap|heaps]] since this gives them the **best possible time complexity**.

>[!question] When and Where is a Priority Queue Used?
> A priority queue is a versatile data structure used in various scenarios where elements need **to be processed** based on their **priority** rather than their **insertion order**. Some common applications include:
> 
> **[[Dijkstra's Algorithm]]:** Certain implementations of Dijkstra's shortest path algorithm use priority queues to efficiently **find the next closest node to the source**.
> 
> **Dynamic Fetching:** Whenever you need to dynamically fetch the **"next best"** or **"next worst"** element, a priority queue can be very useful. For example, in task scheduling, the **highest priority task would be fetched first**.
> 
> **Huffman Encoding:** This lossless data compression technique uses priority queues to **build the optimal encoding tree**.
> 
> **Best-First Search Algorithms:** Algorithms like A* Search use priority queues to **repeatedly select** the **most promising node** for **exploration** based on a **heuristic function**.
> 
> **[[Tree#Minimum Spanning Tree]] Algorithms:** Some algorithms for finding the minimum spanning tree, such as **Prim's algorithm**, utilise priority queues to **select the next [[Tree#Edge|edge]] with the minimum weight**.
> 
> As you can see, priority queues are used extensively in [[Graph|graph-related]] algorithms.

## Priority Queue Operations
---

| Operation                         | Description                                                   | Time Complexity (Average) | Time Complexity (Worst) |
| --------------------------------- | ------------------------------------------------------------- | ------------------------- | ----------------------- |
| `add(element)` / `offer(element)` | Inserts an element into the priority queue.                   | O(log n)                  | O(log n)                |
| `poll()`                          | Removes and returns the highest priority element.             | O(log n)                  | O(log n)                |
| `peek()`                          | Retrieves, but does not remove, the highest priority element. | O(1)                      | O(1)                    |
| `remove(element)`                 | Removes a specific element.                                   | O(n)                      | O(n)                    |
| `contains(element)`               | Checks if the queue contains a specific element.              | O(n)                      | O(n)                    |
| `size()`                          | Returns the number of elements in the queue.                  | O(1)                      | O(1)                    |
>[!important]
> We can optimise `remove(element)` and `contains(element)` to $O(log n)$ and $O(1)$, respectively, with the help of a [[Hash Map|hashmap]].
> 
> Refer to [this video](https://www.youtube.com/watch?v=eVq8CmoC1x8) for the implementation details.

>[!question] `add()` vs `offer()`?
> **`add()`:** If the queue is full, `add()` would throw an `IllegalStateException`.
> 
> **`offer()`:** If the queue is full, `offer()` would return `false`.
## Flipping Priority Queues: Min to Max and Back
---
- Programming languages usually come with either a min [[Priority Queue|priority queue]] or a max priority queue.

>[!question] How to have a max priority queue when the language only provides a min priority queue, and vice versa?
> **1. Negating the comparator value:**
> Since priority queues are comparable (they implement some sort of comparable interface, such as [[Java Comparison|Java's Comparator interface]]), we can simply **negate the comparison result**.
> 
> **2. Negating the elements:**
> Another way is to **negate the values before** we insert them into the priority queue and **negate them again** when they are taken out.


## References
---
- [Priority Queue Introduction - YouTube](https://youtu.be/wptevk0bshY?si=bomLk1DsxWS5s3PI)
- [Priority Queue Min Heaps and Max Heaps - YouTube](https://youtu.be/HCEr35qpawQ?si=BhHC1NhqzMsPtDFE)
- [Priority Queue Removing Elements - YouTube](https://www.youtube.com/watch?v=eVq8CmoC1x8)