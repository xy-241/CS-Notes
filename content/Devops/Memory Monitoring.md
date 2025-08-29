---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - os
  - devops
Creation Date: 2025-08-04, 18:15
Last Date: 2025-08-21T22:57:50+08:00
References:
draft:
description: Learn why MemAvailable from /proc/meminfo is the best metric for checking usable RAM on Linux systems, and why MemFree is misleading due to Linux's aggressive disk caching that intentionally keeps free memory low for optimal performance.
---
## Abstract
---
```sh
grep MemAvailable /proc/meminfo
```
- `MemAvailable`: **best single metric** to know how much RAM you can safely use. It is `MemFree` + some of [[#Memory Buffer]] + some of [[#Memory Cache]] and some other reclaimable 

>[!important] `MemFree` is misleading
> `MemFree` shows only completely unused memory. 
> 
> This value is usually **very low** on a healthy Linux system, and that’s **intentional**. Linux **aggressively caches** disk and file data in RAM to speed things up. 


## Memory Buffer 
---
- [[File System]] metadata cache

## Memory Cache 
---
- File content cache 

## Out of Memory
---
- This happens when systems run out of usable RAM and cant satisfy memory allocation requests, not even by killing [[#Memory Cache]] or [[Swap Space|swapping]]. At this point, [[Kernel]] is forced to kill one or more [[Process (进程)|processes]] to free up memory

>[!question] Who to kill?
> Kill the one with high memory usage, low priority and high `oom_score`.