---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-12-14T18:16:44+08:00
Last Date: 2023-12-14T19:29:22+08:00
References: 
---
## Abstract
---
- Hide the nitty gritty of [[IO Devices]]
- Present programmer a clean [[Abstraction]] of **device-independent** file 
- Examples are Printers & Modems etc
- 2 parts - *Filename* & [[Inode#Number]], doesn't have any *metadata* associated 
>[!info] In[[Portable Operating System Interface (POSIX)]], **file permissions** are handled by **rwx bits**

## Terminologies 
---
### Special File
- Make [[IO Devices]] look like [[File]], so we can reuse the same set of file [[System Call (系统调用)]] on O Devices
- By convention, kept in the ``/dev`` [[File System#File Directory]]
- 2 Types
	1. [[Block Special Files]]
	2. [[Character Special Files]]