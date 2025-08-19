---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - os
Creation Date: 2025-08-16, 22:04
Last Date: 2025-08-16T22:09:47+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A protective operation by the [[Kernel|kernel]]. It happens where there are fatal errors that the kernel can't safely recover from
- The kernel protects the system by halting everything and can only be recovered with [[Computer Booting|reboot]]. This avoid the risk of data corruption when kernel running in an unstable state

>[!important] Root cause
> Usually triggered by serious bugs in kernel code, faulty [[Device Controller#Device Driver|drivers]], bad memory, or hardware issues.

>[!info]
> In Linux/Unix, you’ll see “Kernel panic: …” with debug info.
> 
> In macOS, you get the “You need to restart your computer” screen.
> 
> In Windows, the analogous thing is the **Stop Error (BSOD)**.