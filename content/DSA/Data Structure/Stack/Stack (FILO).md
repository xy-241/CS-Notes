---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2023-10-07T16:38:28+08:00
References:
---
## Basics
---
>[!abstract] Basic Properties
>![[stack.png]]
>- [[Linear Data Structure]]
>- Aka [[Array]]/[[Linked List]] with limitations


>[!caution] Stack is more about the having the push(), pop() & peek() in O(1) on a particular data structure 


>[!example] Use as
>1. Navigation in the [[Directory]] - the parent [[Directory]] is at the top of the stack
>2. Convert [[Recursion]] to be interactive

>[!example] [Use Cases](https://github.com/youngyangyang04/leetcode-master#栈与队列
>- Commonly used in parentheses questions
>- Browser backward button, forward button needs another stack
>- [[Stack Segment]]

## Implementation
---

>[!note] Implementation with [[Array]]
>
>- [Visual](https://www.hello-algo.com/chapter_stack_and_queue/stack/#2)
>- push(), pop() & peek() from the back
>- Can use [[List]], then the expansion is handled automatically

>[!note] Implementation with [[Single Linked List]]
>- [Visual](https://www.hello-algo.com/chapter_stack_and_queue/stack/#1)
>- push(), pop() & peek() from the head node

### 2 implementation comparison
>[!note] Stack Operations
>- Both support without much difference

>[!note] Time Efficiency
>- [[Array]] has [[Cache Locality]] to take advantage of [[Cache]] for extreme fast access. But [[Array]] has fixed size, if there isn't any space, that particular insertion operation will be O(n)
>- [[Linked List]] has to use extra time to perform pointer operation 
>- Conclusion: [[Array]] has slightly better time efficiency, since expansion is a low frequency operation, while pointer operation occurs whenever there is an insertion operation. However, [[Linked List]] has more stable performance

>[!note] Space Efficiency
>- [[Array]] get a pre-defined [[Main Memory]] size, and each expansion is usually double the original size which may exceed the actual demand
>- [[Linked List]] needs actual [[Main Memory]] to store the [[Memory Address]] of the next node
>- Conclusion, we cant determine which uses more [[Main Memory]], it depends on the use case. If we already know the total elements to store, [[Array]] is better, else [[Linked List]] may be maybe

## [[Abstract Data Type (ADT)]]
---
>[!success] O(1) to push()

>[!success] O(1) to pop()

>[!success] O(1) to peek()


## Side Notes
---
>[!success]

>[!success] 

>[!success] 

>[!success] 