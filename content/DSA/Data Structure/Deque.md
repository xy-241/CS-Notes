---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-12-11T20:43:00+08:00
Last Date: 2023-12-11T20:43:00+08:00
References:
---
## Basics
---
>[!abstract] [[Stack (FILO)]] & [[Queue (FIFO)]] combined
>![[deque.png]]
>- [[Linear Data Structure]]
>- Aka [[Array]]/[[Linked List]] with limitations


>[!caution] 


%%>[!example] Use as
>1. Online ordering system%%

%%>[!example] [Use Cases](https://github.com/youngyangyang04/leetcode-master#栈与队列)%%


## Implementation
---

%%>[!note] Implementation wit[](Circular%20Array.md)]]
>
>- [Visual](https://www.hello-algo.com/chapter_stack_and_queue/queue/#2)
>- push() at the rear index
>- pop() & peek() at the head index%%

>[!note] Implementation with [[Double Linked List]]
>- [Visual](https://www.hello-algo.com/chapter_stack_and_queue/deque/#1)
>- We need [[Double Linked List]] in order to have the ability to pollLast() - delete from the rear. With [[Single Linked List]], we are unable to get the previous node, which means we cant update rear when we delete from the backl

### 2 implementation comparison
- Similar to [[Stack (FILO)#2 implementation comparison| Stack implementation comparison]]


## [[Abstract Data Type (ADT)]]
---
>[!success] O(1) to offerFirst() & offerLast()
>- basically push()

>[!success] O(1) to pollFirst() & pollLast()
>- basically pop()

>[!success] O(1) to peekFirst() & peekLast()