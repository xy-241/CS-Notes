---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-20T14:47:00
Last Date: 2024-10-17T17:00:11+08:00
References: 
---
## Abstract
---
- Stands for **Index Node**
- Essentially an identification number associated with a data structure that contains **metadata** about a piece of data (like a file or directory) stored on the [[File System]]
- This metadata includes information such as permissions, ownership, timestamps, and **pointers to the actual data blocks**, but it **does not include the data** itself or the name of the file or directory

>[!important] File deletion
> The **data cant be overridden** as long as the number of [[File System Link#Hard File System Link]] isn't `0`.

>[!code] Show content of the inode data structure
> `stat a`
### Inode Number
- To uniquely identify a [[File]]
```bash
# Obtian the inode number
ls -i
```


## Inode Exhaustion 
---
- We are unable to create new [[File System]] even if there is still space on [[Disk]]. Because we have no more [[Inode]] to record the metadata of the data piece on the Disk

>[!question] When can this happen and how can it be handled?
> This can happen when we have a lot of small files like **cache files**.
> 
> his problem can be avoided on [[File System#ZFS (Zettabyte File System)]] where Inode is allocated dynamically


>[!code] Check the total number inode available & used
> `df -i`
