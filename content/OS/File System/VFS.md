---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2025-05-18, 21:22
Last Date: 2025-08-11T18:19:49+08:00
References: 
draft: 
description: VFS is a kernel abstraction that provides a consistent interface for file operations across different filesystems and storage types. It handles mounting, path resolution, and routes system calls to the right driver using function pointers. Tools like FUSE simplify custom filesystem development in user space.
---
## Abstract
---
- Virtual File System is an abstraction layer in the [[Kernel]] that provides **uniform interface** to interact with [[File|files]], regardless of actual [[File System|file system]] or storage medium(SSD and network etc)

>[!important] Uniform interface 
> VFS exposes a consistent set of file operations like `open()`, `read()`, `write()` and `close()` to [[User Space|user space]], hiding the differences between file system.
> 
> **Mounting support**: VFS lets you mount a FAT32 USB stick onto a system running ext4. Internally, VFS routes the [[System Call (系统调用)|system calls]] to the correct file system driver.

## File Access Mechanism 
---

![[vfs.png|600]]

1. [[User Space]]: Application calls `open()`
2. **System Call Interface**: Transitions to [[Privilege Level#Kernel Mode|kernel mode]]
3. **VFS Layer** (get inode number):
	- Parses and validates the path
	- Traverses directories to locate the [[File|file]] (translate the pathname to an inode number)
4. **Filesystem Specific Operations** (get inode structure):
	- Relevant [[filesystem driver]] handles the request (each filesystem stores data differently)
	- Finds [[Inode|inode]] for the file
5. **Inode Cache Entry Creation** (if inode not found):
	- Reads inode from disk and adds to kernel's **inode cache** (vnode table)
	- Initialises with appropriate **function pointers**
6. **File Table Entry Creation**:
	- Allocates new entry in **open file table**
	- Sets initial file position (`0` or `EOF` for `O_APPEND` since need to to add from the back of the file)
	- Sets reference count to `1`
7. **File Descriptor Allocation**:
	- Finds lowest unused FD in **process file descriptor table**
	- Points it to the new file table entry
8. Returns file descriptor to user space


>[!important] Function pointers 
> Point to **filesystem-specific implementations** of various operations. 
> 
> When a [[File System|filesystem]] is mounted, it registers these functions with the [[VFS]]. As files are accessed, their inode entries are populated with pointers to the appropriate functions. 

>[!important] Adding kernel-level support for new storage mediums is challenging!
> Implementing custom filesystem drivers requires writing low-level C code to define **specialised data structures** and **function pointers** within the kernel's VFS layer.
> 
> That is why we have [[FUSE]] which shifts implementation to user space, allowing developers to create filesystem interfaces using high-level languages and familiar libraries rather than modifying kernel code.

