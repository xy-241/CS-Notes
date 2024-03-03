---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - distributed_computing
Creation Date: 2023-08-03T12:47:00
Last Date: 2023-12-30T01:19:02+08:00
References: 
---
## Abstract
---
- Involving multiple [[Host]] agreeing on values
- Typically arises in the context of [[Replicated State Machine]]
- A fundamental problem in [[System Design#Fault Tolerance]] **Distributed Systems**


## Distributed Consensus Algorithms
---
- Typical types of these [[Algorithm]] make progress when majority of their [[Host]] is available
- Given 5 servers, if more than 2 is down, stop making progress & never return incorrect result