---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-30T12:54:00
Last Date: 2024-06-06T23:18:27+08:00
References: 
---
## Abstract
---
![[queue.png|500]]
- [[Data Structure#Linear]], basically [[Array]] or [[Linked List]] with **limitation** that we can only **push new element in** from the **back** and **remove elements** from the **front**, follow a **first-in, first-out (FIFO)** principle.


### Time Complexity
- O(1) to offer() - push in an element
- O(1) to poll() - pop out an element
- O(1) to peek() - read the element that is the first to be pop out

## Implementation
---

>[!note] Implementation with Circular Array
> - [[Array#Circular Array]]
> - [Visual](https://www.hello-algo.com/chapter_stack_and_queue/queue/#2)
> - push() at the rear index
> - pop() & peek() at the head index

>[!note] Implementation with [[Linked List#Single Linked List]]
>- [Visual](https://www.hello-algo.com/chapter_stack_and_queue/queue/#1)
>- push() from tail node
>- pop() & peek() from the head node

- The difference in the 2 implementation is similar to [[Stack#2 implementation comparison| Stack implementation comparison]]




## Questions
---
- [Leetcode Questions](https://github.com/youngyangyang04/leetcode-master#栈与队列)

