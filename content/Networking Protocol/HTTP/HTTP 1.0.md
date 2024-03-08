---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:25:11+08:00
Last Date: 2024-03-08T21:30:49+08:00
References: 
---
## Abstract
---
- The legacy HTTP protocol standard

>[!caution] High Overhead
> ![[HTTP 1.0.png|500]]
> 
> Each exchange of resource requires a new [[TCP Connection]] which takes a few network trips to establish. Moreover, [[TCP]] is a [[Network Protocol#Stateful Network Protocol]] which means it takes CPU and RAM resources to maintain each TCP Connection. We will also suffer from multiple [[TCP#TCP Slow Start]] when we need to make network exchange of multiple resources.

