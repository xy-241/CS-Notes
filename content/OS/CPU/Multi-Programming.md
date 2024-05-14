---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-11T19:15:28+08:00
Last Date: 2024-05-02T17:15:06+08:00
References: 
description: Unlock the power of multi-programming and supercharge your computer's performance!
---
## Abstract
---
- Ability of computer to store multiple program in [[Main Memory]] at the same time & switch between them quickly with [[Context Switch]]


>[!important]
> **Not all Multi-Programming** systems are [[Concurrency (并发)#Multi-tasking]]. The focus is [[CPU]] utilisation. 

>[!success] Maximised resource usage
>When there are multiple [[Process (进程)]] ready to run at the same time, we can distribute each process to each [[CPU#CPU Core]] on the [[Multi-core Chip]]. When one process is blocked due to [[io_operation.png|IO operation]], the CPU can work another ready process.
