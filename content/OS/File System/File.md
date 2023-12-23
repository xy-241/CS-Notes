---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-10-22T23:19:44
Last Date: 2023-12-21T15:50:57+08:00
References: 
---

## Abstract

---

- Hide the nitty gritty of [[IO Device]]
- Present programmer a clean [[Abstraction (抽象)]] of **device-independent** file
- Examples are Printers & Modems etc
- 2 parts - _Filename_ & [[Inode#Inode Number]], doesn't have any _metadata_ associated


>[!info] In [[Portable Operating System Interface (POSIX)]], **file permissions** are handled by **rwx bits**

## Useful Commands
---
```bash
# Generate a hexdump from a binary file and display the output
xxd <BINARY_NAME.bin>
```
## Terminologies

---

### Special File

- Make [[IO Device]] look like [[File]], so we can reuse the same set of file [[System Call (系统调用)]] on O Devices
- By convention, kept in the `/dev` [[File System#File Directory]]
- 2 Types
    1.  [[Block Special Files]]
    2.  [[Character Special Files]]
