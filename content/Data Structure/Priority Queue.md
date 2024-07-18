---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-07-17, 10:02
Last Date: 2024-07-18T11:56:33+08:00
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

## References
---
- [Priority Queue Introduction - YouTube](https://youtu.be/wptevk0bshY?si=bomLk1DsxWS5s3PI)