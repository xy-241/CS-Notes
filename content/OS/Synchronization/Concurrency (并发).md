---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-02-22, 17:53
Last Date: 2024-04-06T21:31:51+08:00
References: 
draft: 
description: 
---
## Concurrency (并发)
---
- A way to run multiple [[Thread]] at the same time, instead of running one thread after another thread is done . Thus, improving the overall performance
- Can be achieved with multiple [[CPU#Core]]([[#Parallelism (并行性)]])  or [[Context Switch]] when there is only one core

>[!success] Resource utilisation
> Maximise the use of resources on hand and handle multiple requests or events.


### Time-Sharing
- A Implementation of [[Concurrency (并发)]]
- A specific implementation of [[Multi-tasking]] when resources are shared by **multiple users** at the **same time**, achieved with quick [[Context Switch]]
- All Time-sharing systems are [[Multi-programming]] systems
- Allow multiple remote users to run jobs on the same computer at the same time 

## Parallelism (并行性)
---
- A subset of [[Concurrency (并发)]], [[Thread]] run on its own [[CPU#Core]], so it is concurrency running on multiple resources