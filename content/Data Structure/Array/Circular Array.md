---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-29T13:56:03+08:00
Last Date: 2024-03-05T10:38:47+08:00
References: 
---
## Abstract
---
- Connect the start and end of the [[Array]] to form a loop
- With taking remainder from ``frontIndex % arrayCapacity``, we are able to implement circular array on an array. Take a look at [Visual](https://www.hello-algo.com/chapter_stack_and_queue/queue/#2) for better understanding
- Used to implement [[Queue (FIFO)#Implementation| Queue]]

### Front Index
- A variable to keep track the index for the start of the circular array

### Rear Index
- A variable to keep track the index of the slot after the last element of the circular array
- Can be obtained with ``frontIndex + arraySize``


