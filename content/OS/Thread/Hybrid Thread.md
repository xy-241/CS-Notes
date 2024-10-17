---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-28T16:43:00
Last Date: 2024-10-17T17:25:46+08:00
References: 
---
## Abstract
---
![[hybrid_thread_implementation.png|500]]

- **N to M mapping**.  "N" [[User Thread]] to "M" [[Kernel Thread]] called **"virtual processors"** or **"activations"**. This bridges the gap between [[Kernel Thread]] and [[User Thread]]. Each Kernel Thread has some set of User Threads that are taking turns to use it. This allows more flexible thread management at the application level without sacrificing all the benefits of kernel threads
- [[Kernel]] is only aware of the [[Kernel Thread]] and able to schedules those
- Programmer can determine how many [[Kernel Thread]]  to use and how many [[User Thread]] multiplex on each one

>[!success] Ultimate in flexibility
> Used by modern [[Kernel]]
