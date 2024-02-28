---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-20T14:47:00
Last Date: 2024-02-28T20:03:21+08:00
References: 
---
## Abstract
---
- Stands for **Index Node**
- Essentially an identification number associated with a data structure that contains metadata about a piece of data (like a file or directory) stored on the [[File System]]
- This metadata includes information such as permissions, ownership, timestamps, and pointers to the actual data blocks, but it **does not include the data** itself or the name of the file or directory

- In order to have data stored on the [[Flash Memory]], we must have an **Inode** associated with it, otherwise we will have [[#Inode Exhaustion]]

- We can list out the content of the data structure using `stat a`
- The **data cant be overridden** as long as the [[File System Link#Hard]] isn't 0

### Inode Number
- To uniquely identify a [[File]]
```bash
# Obtian the inode number
ls -i
```

## Inode Exhaustion 
---
- We are unable to create new [[File System]] even if there is still space on [[Disk]]. Because we have no more **inode** to maintain the metadata of the data piece on the Disk
- This can happen when we have a lot of small files like **cache files**
- This problem can be avoided on [[File System#ZFS (Zettabyte File System)]] where Inode is allocated dynamically

```bash
# Check the total number inode available & used
df -h
```