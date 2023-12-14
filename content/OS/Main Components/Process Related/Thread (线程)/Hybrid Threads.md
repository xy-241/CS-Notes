---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-28T16:43:00
Last Date: 2023-12-13T17:29:20+08:00
References: 
---
## Abstract
---
- N to M mapping
- Put the [[Thread]] in both [[User Space]] &  [[Kernel Space]]
- Programmer can determine how many [[Kernel Threads]]  to use and how many [[User Thread]] multiplex on each one
- [[Kernel]] is aware of only the [[Kernel Threads]] and schedules those
- Each [[Kernel Threads]] has some set of [[User Thread]] that take turns using it
![[hybrid_thread_implementation.png]]


## Pros
---
### Ultimate in flexibility
- Used by modern [[OS]]