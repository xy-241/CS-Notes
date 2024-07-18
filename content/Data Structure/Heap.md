---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-07-17, 10:19
Last Date: 2024-07-18T12:24:59+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A [[Tree]] based structure that satisfies the [[#Heap Invariant]]

>[!important]
> Heap forms the classical underlying [[Data Structure]] for [[Priority Queue]].
> 
> There are many types of heaps we could use to implement a priority queue, such as [[#Binary Heap|binary heaps]], Fibonacci heaps, binomial heaps, and pairing heaps. However, we **usually use binary heaps due to their simplicity**.

### Heap Invariant
- Also known as **Heap Property**
- If node $A$ is a parent of node $B$, then $A$ is ordered with respect to $B$. This **parent-child ordering relationship** holds true for every pair of nodes within the [[Heap|heap]]
- In a max heap, the value of a **parent node** is **always greater than or equal** to the values of its **child nodes**. Conversely, in a min heap, the value of a parent node is **always less than or equal** to the values of its child nodes


### Binary Heap
- A [[Complete Binary Tree (完全二叉树)|complete binary tree]] that supports [[#Heap Invariant|heap invariant]]

## References
---
- [Priority Queue Introduction - YouTube](https://youtu.be/wptevk0bshY?si=bomLk1DsxWS5s3PI)
- [Priority Queue Inserting Elements - YouTube](https://youtu.be/QOJ-CmQiXko?si=yRoSwNNb1OWhnw1p)