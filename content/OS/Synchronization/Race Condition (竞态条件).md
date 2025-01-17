---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-07T14:27:00
Last Date: 2025-01-18T00:11:36+08:00
References: 
---
## Abstract
---
- Situations where multiple [[Thread]] access the **same data** at the **same time** and **cause conflicts**

## Critical Section 
---
- A critical section is a **segment of a program’s code** where **shared resources**, such as variables, files, or devices, are accessed and modified, which may lead to [[Race Condition (竞态条件)|race conditions]]


>[!important]
> At any point of time, at most one [[Process (进程)]] can be in the critical section. 
> 
> Or **race conditions can occur in critical sections** due to the [[Concurrency (并发)|concurrent execution]] of [[Thread|threads]] that **access shared resources** without proper [[Synchronisation (同步)|synchronisation mechanisms]].


## References
---
- [The Critical-Section Problem - YouTube](https://youtu.be/UtEORPakw5Y?si=6WCIZth7eam3WGjg)