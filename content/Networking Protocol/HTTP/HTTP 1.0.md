---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:25:11+08:00
Last Date: 2024-10-16T20:22:32+08:00
References: 
---
## Abstract
---
- The legacy HTTP protocol standard

>[!caution] High Overhead
> ![[HTTP 1.0.png|400]]
> 
> Each resource exchange requires a [[TCP Connection|new TCP connection]], which takes **two network trips to establish**. Moreover, [[TCP]] is a [[Network Protocol#Stateful Network Protocol|stateful network protocol]], meaning it consumes CPU and RAM resources to maintain each connection. Additionally, we will experience **multiple instances of TCP slow start** when exchanging multiple resources over the network.

****