---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-10T23:12:00
Last Date: 2024-04-03T21:34:05+08:00
References: 
---
## Abstract
---
- Switching from one [[Process (进程)]]/[[Thread]] to another by making use of [[Process Control Block (PCB)]] to store/retrieve process/thread's state



## Process Context Switching
---
![[process_context_switching.png|500]]
### An expensive operation
- Compare to [[Latency Number#other computation operations]], there are 3 factors that make process context switching an expensive operation
	1. Saving & loading of [[Register]]
	2. Switching out [[Memory Page]] (More Expensive) - Not needed for [[#Thread Context Switching]], since all [[Thread]] of a [[Process (进程)]] share the same [[Process Control Block (PCB)]]
	3. Updating various [[Kernel]] [[Data Structure]]

## Thread Context Switching
---


