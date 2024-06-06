---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-12-11T20:43:00+08:00
Last Date: 2024-06-06T23:45:41+08:00
References: 
---
## Basics
---
![[deque.png|500]]

- A **double-ended** [[Queue]] (deque) allows you to **push and pop elements** from **both ends**


## Monotonic Queue
---
- [[Deque]] that ensures the elements in the [[Queue]] is either **increasing in value** or **decreasing in value**

>[!question] How does it work?
> If we are **adding an element** that is **larger** than the **element at the end** of the queue, and we want to ensure the values in the queue are **in decreasing order**, we will **pop elements from the back** until the **last element** of the queue is **larger** than the element we want to add.
> 
> This is also why we need to use a deque instead of a queue, as we **need to pop** elements from the **back**.

>[!question] How is this useful?
> Monotonic queues are commonly used in problems related to [[Dynamic Programming]], [[Two Pointers (双指针）#Sliding Window]] algorithms, and [[Combinatorial Optimisation]] tasks where you need to **efficiently find maximum or minimum values** over a **range of elements**.
> 
>  We can use monotonic queue to solve [Sliding Window Maximum](https://leetcode.cn/problems/sliding-window-maximum/) which requires us to find the **biggest element in a sliding window**.





