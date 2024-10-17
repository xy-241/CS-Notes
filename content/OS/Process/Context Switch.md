---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-10T23:12:00
Last Date: 2024-10-17T17:43:46+08:00
References: 
---
## Abstract
---
- The ability to instruct the [[CPU]] to switch the task it is working on, so that each task can take turns to run - this is what powers [[Concurrency (并发)#Multi-tasking]]
- Context switching relies on the [[Process Control Block (PCB)]] to store the **task state**, so when we resume the task, we don't have to start from scratch; we can continue the task as if it never stopped


|                                                     | Switching Speed | Memory Overhead | Isolation |
| --------------------------------------------------- | --------------- | --------------- | --------- |
| [[#Process Context Switch\|Process Context Switch]] | Slow            | High            | ✅         |
| [[#Thread Context Switch\|Thread Context Switch]]   | Fast            | Low             | ❌         |


## Process Context Switch
---
![[process_context_switching.png|500]]
### An expensive operation
- We not only need to save & load [[Register]], we also need to use an entirely different [[Process Control Block (PCB)]] which may require us to **switch out** [[Memory Page]] which is an expensive operation


## Thread Context Switch
---
![[thread_context_switching.png|500]]


>[!success] Low overhead
> The [[Address Space]] and [[thread_resources.png|per-process items]] are remain unchanged when [[Thread|threads]] are switched within the same [[Process (进程)]]. This avoids switching out the [[Memory Page]] which is an expensive operation.