---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-12-11T23:00:51+08:00
Last Date: 2023-12-24T16:30:56+08:00
References: 
---
## Abstract
---
- Also known as *Quantums*
- The duration an [[Process Scheduler]] allows a [[Process]] to run before [[Preemption]]


## Problem with Small Timeslice
---
- [[Context Switch]] is [[Context Switch#An expensive operation]]
- So we usually have a [[#Minimum Granularity]] to ensure it is still worth to perform Context Switch on an overall performance perspective
- It also means the [[#Target Latency]] is exceeded when there is enough [[Process]] for Minimum Granularity to take effect - Process will seem laggy on user side, so rebooting to clear some Process will make computer seems faster


## Terminologies
---
### Minimum Granularity
- A lower bound to the [[Timeslice]]
- [[Linux]] is 0.75ms

### Target Latency
- The ideal longest time for a [[Process]] to respond
- Time it takes for a different process to resume execution after [[Preemption]]
- [[Linux]] is 6ms