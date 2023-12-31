---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-03T16:14:00
Last Date: 2023-12-13T17:25:18+08:00
References: 
---
## Abstract
---
- 1 to 1 mapping
- Put the [[Thread]] entirely in [[Kernel Space]]
- [[Thread]] implementation inside [[Kernel]]
![[thread_implementation_in_kernel_space.png]]




## Pro
---
### Keep All Threads Busy
- If one thread in a process causes a [[Page Faults]], the [[Kernel]] can easily check to see if the process has any other runnable threads, and if so, run one of them while waiting for the required page to be brought in from the disk
- Or [[Kernel]] can get [[Thread]] from other [[Process]]


## Cons
---
### Resource Intense
- All calls that might block a [[Thread]] are implemented as [[System Call (系统调用)]], at considerably greater cost than a call to a [[User Thread#Runtime System]] procedure
- Relatively greater cost of creating and destroying [[Thread]] in the [[Kernel]]
>[!tip] Recycling threads
>- When a thread is destroyed, it is marked as not runnable, but its kernel data structures are not otherwise affected
>- When a new thread must be created, an old thread is reactivated, saving some overhead
>- Thread recycling is also possible for [[User Thread]], but since the thread-management overhead is much smaller, there is less incentive to do this