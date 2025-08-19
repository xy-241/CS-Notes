---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-20T14:47:00
Last Date: 2025-08-11T19:56:26+08:00
References: 
description: An inode is a Linux filesystem data structure that stores file metadata including permissions, ownership, timestamps, and disk block pointers, but not the filename itself. Understanding inodes is essential for Linux system administration, file recovery, and troubleshooting filesystem issues like inode exhaustion.
---
## Abstract
---
>[!summary]
> Every file in Linux has two parts: the data you see, and the **metadata** that describes it. The inode is where [[Linux Kernel|Linux]] [[File System|filesystems]] stores that metadata.

>[!question] What is inside?
> - File type (regular file, directory, symlink, etc.)
> - Permissions (rwx for user/group/other)
> - Owner (UID, GID)
> - Timestamps:
> 	- `atime` – last access time
> 	- `mtime` – last modification time
> 	- `ctime` – last inode modification time
> - Size (in bytes)
> - Link count (number of [[#Directory Entry|directory entries]] pointing to the inode)
> - [[#Inode Pointer to Data Blocks|Pointers to data blocks on disk]]

>[!question] What is not inside?
> File name & file path.
> 
> File names are stored in **directory entries**. That’s why you can have _two different file names pointing to the same inode_ ([[File System Link#Hard File System Link|hard links]]).


>[!code] Show inode attributes
> `stat <FILE_NAME>`

>[!code] Find all files sharing the same inode
> `find / -xdev -inum <INODE_NUMBER> 2>/dev/null`
> 
> Search the whole [[File System|file system]] wfor every filename that points to the specified inode number, but don't cross into other mounted filesystems, and hide any permission errors from the output.


### Inode Number
- To uniquely identify a [[Inode]]

>[!code] Obtian the inode number 
> `ls -i`

## Directory Entry
---
```
/dir1/fileA → inode #1234 → data blocks
/dir2/fileB → inode #1234 → same data blocks
```

- Directories are just **special files** that map filenames → [[#Inode Number|inode numbers]]

>[!important] File deletion
> The **data cant be overridden** as long as the number of [[File System Link#Hard File System Link]] isn't `0`.
> 
> Deleted files may be recoverable if inode and data blocks haven't been overwritten!

>[!important] Moving files
> Within same filesystem = instant (just updates directory entry). 
> 
> Cross-filesystem = must copy data.

## Inode Pointer to Data Blocks
---
- **Direct pointers**: Point directly to data blocks.
- **Indirect pointers**:
	- **Single indirect** → points to a block of more block addresses 
	- **Double indirect** → two levels 
	- **Triple indirect** → three levels 
- This supports both small files (few pointers) and large files (a lot of pointers needed)

## Inode Exhaustion 
---
- We are unable to create new [[File System]] even if there is still space on [[Disk]]. Because we have no more [[Inode]] to record the metadata of the data piece on the Disk

>[!question] When can this happen and how can it be handled?
> This can happen when we have a lot of small files like **cache files**.
> 
> This problem can be avoided on [[File System#ZFS (Zettabyte File System)]] where Inode is allocated dynamically.


>[!code] Check the total number inode available & used
> `df -i`
