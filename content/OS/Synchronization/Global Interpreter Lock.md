---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
  - OS
Creation Date: 2025-03-16, 17:24
Last Date: 2025-03-16T17:27:14+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Prevents multiple [[Thread|threads]] from executing Python bytecode simultaneously

>[!tool] Ways to get around 
> 1. Disable GIL (optional in newer versions)
> 2. Use [[Multi-processing|multiprocessing]] (separate [[Process (进程)|processes]] with their own GILs)
>    
> **Multiprocessing vs. Multithreading**
> - [[Multi-threading|Multithreading]]: Multiple threads **share memory** but limited by GIL
> - Multiprocessing: Multiple processes with separate memory spaces and separate GILs. We can enable communication with [[Inter-Process Communication]]