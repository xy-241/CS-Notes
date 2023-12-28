---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-10-22T23:19:44
Last Date: 2023-12-28T20:35:39+08:00
References: 
---

## Abstract

---

- Hide the nitty gritty of [[IO Device]]
- Present programmer a clean [[Abstraction (抽象)]] of **device-independent** file
- Examples are Printers & Modems etc
- 2 parts - _Filename_ & [[Inode#Inode Number]], doesn't have any _metadata_ associated


## File Permission
---
- In [[POSIX]], file permissions are handled by **rwx bits**

## Useful Commands
---
```bash
# Generate a hexdump from a binary file and display the output
xxd <BINARY_NAME.bin>
```
## Terminologies

---
### File Descriptor
- A small [[Integer (整数)]]
### Special File

- Make [[IO Device]] look like [[File]], so we can reuse the same set of file [[System Call (系统调用)]] on IO Devices
- By convention, kept in the `/dev` [[File System#Linux File System]]

**Block Special Files**
- Model [[IO Device]] that has a collection of *randomly addressable blocks* like like disk

**Character Special Files**
- Model [[IO Device]] that accept or output a *character stream* like keyboard

