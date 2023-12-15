---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-22T23:19:44
Last Date: 2023-12-15T11:23:00+08:00
References: 
---

## Abstract

---

- Hide the nitty gritty of [[IO Devices]]
- Present programmer a clean [[Abstraction]] of **device-independent** file
- Examples are Printers & Modems etc
- 2 parts - _Filename_ & [[Inode#Inode Number]], doesn't have any _metadata_ associated


>[!info] In [[Portable Operating System Interface (POSIX)]], **file permissions** are handled by **rwx bits**

## Terminologies

---

### Special File

- Make [[IO Devices]] look like [[File]], so we can reuse the same set of file [[System Call (系统调用)]] on O Devices
- By convention, kept in the `/dev` [[File System#File Directory]]
- 2 Types
    1.  [[Block Special Files]]
    2.  [[Character Special Files]]
