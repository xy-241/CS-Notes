---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-03-05T10:46:36+08:00
References: 
---
## Abstract
---
![[stack.png|500]]

- [[Data Structure#Linear]]
- Basically [[Array]]/[[Linked List]] with limitations
- Elements are **First In Last Out (FILO)** and **Last In First Out (LIFO)**




>[!example]- Use Cases
> **Data Structure and Algorithm**
> - Convert [[Recursion]] to be interactive
> - Commonly used in parentheses questions
>
> **Operating System**
> - [[Address Space#Stack Segment]]
> - Navigation in the [[File System]] - the parent File System is at the top of the stack
> 
> **User Application**
> - Browser backward button, forward button needs another stack


### Time Complexity
- O(1) to Insert `push()`
- O(1) to Delete `pop()`
- O(1) to See the value on top of the stack  `peek()`
- O(n) to search for a value



## Implementation
---
### Implementation with Array
- [Visual](https://www.hello-algo.com/chapter_stack_and_queue/stack/#2)
- push(), pop() & peek() from the back
- Can use [[Dynamic Array (List)]], then the expansion is handled automatically

### Implementation with Linked List
- Implementation with [[Single Linked List]]
- [Visual](https://www.hello-algo.com/chapter_stack_and_queue/stack/#1)
- push(), pop() & peek() from the head node

### 2 implementation comparison
Both support Stack Operations without much difference

**Time Efficiency**
- [[Array]] has [[CPU Cache#Cache Locality]] to take advantage of [[CPU Cache]] for extreme fast access. However,  array has fixed size. If there isn't any space left in the array, new insertion needs to create a new array and transfer all elements to that new array, and the time complexity will be O(n)
- [[Linked List]] has to use extra time to perform pointer operation 
- Conclusion: Array has slightly better time efficiency, since expansion is a low frequency operation, while pointer operation occurs whenever there is an insertion operation. However, [[Linked List]] has more stable performance

**Space Efficiency**
- [[Array]] get a pre-defined [[Main Memory]] size, and each expansion is usually double the original size which may exceed the actual demand
- [[Linked List]] needs actual Main Memory to store the [[Memory Address]] of the next node
- Conclusion, we cant determine which uses more Main Memory, it depends on the use case. If we already know the total elements to store, Array is better, else Linked List may be maybe


