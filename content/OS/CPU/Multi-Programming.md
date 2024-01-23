---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-11T19:15:28+08:00
Last Date: 2024-01-18T18:09:12+08:00
References: 
description: Unlock the power of multi-programming and supercharge your computer's performance!
---
## Abstract
---
- Ability of computer to store multiple program in [[Main Memory]] at the same time & switch between them quickly 
- Focus on improving the [[CPU]] utilisation since [[Process (进程)]] will be idle for a relative long time when interacting with [[OS/IO/IO Device|IO Device]]
</br>

- [[CPU]] switches rapidly from one Process to another
- Allow a user to run multiple programs at the same time with a single [[CPU]]
</br>

- **Not all Multi-Programming** systems are [[Multi-tasking]]
- More suitable for **CPU Bounded** tasks

## Benefits
---
### Full utilisation of Multi-core Chip
- Since there are multiple [[Process (进程)]] ready to run at the same time, we can distribute each process to each [[CPU#Core]] on the [[Multi-core Chip]]