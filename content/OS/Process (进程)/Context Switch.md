---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-10T23:12:00
Last Date: 2023-12-24T16:24:22+08:00
References: 
---
## Abstract
---
![[context switching.png|Process Context Switching]]
- Switching from one [[Process]]/[[Thread]] to another
- Make use of [[Process Control Block (PCB)]] to store/retrieve process/thread's state

## An expensive operation
---
Compare to [[Latency Number#other operations]]
1. Saving & loading of [[Register]]
2. Switching out [[Memory Pages]] (More Expensive) - Not needed for *Thread Context Switching*, since all [[Thread]] of a [[Process]] share the same [[Memory Address]]
3. Updating various [[Kernel]] [[Data Structure]]