---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2024-01-07, 17:59
Last Date: 2024-01-07T22:50:47+08:00
References: 
draft: 
---
## Abstract
---
- A space on a storage device (usually a [[Disk]]) that is used as part of the [[Virtual Memory]]
- When the physical [[Main Memory]] of a computer is fully utilized, the [[OS]] may transfer some data from the RAM to the swap space to free up physical memory for other tasks
- This allows the system to continue running applications and processes even when the physical RAM is insufficient

## Linux Commands
---
```bash title="Swap Space Usage"
free -h
```

## Terminologies
---
### Paging
- Also known as *Swapping*
- The process of swapping data between [[Main Memory]] and [[Swap Space]]