---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
  - bash
  - macos
Creation Date: 2023-07-26T17:21:48+08:00
Last Date: 2024-04-07T00:28:45+08:00
References: 
---
## Abstract
---
- A [[Data Structure]] with features that the [[Kernel]] uses to control how data is stored and retrieved on a storage device 
- Provides a way to organise [[File System Hierarchy#File Directory]] into folders, and to keep track of which [[File]] are stored where on the device



>[!code]- List the filesystem of attached block device
> **[[Linux Kernel]]**
> ```bash
> lsblk --fs
> ```
> 
> **MacOS**
> ```bash
> diskutil list
> ```

>[!code]- Manipulate Filesystem with `mkfs`
> Format a storage device to specific filesystem with `sudo mkfs -t <FILESYSTEM_TYPE> -f /dev/<STORAGE_NAME>`. 

>[!code]- Check the storage size of current directory recursively
> ```bash
> du -sh .
> ```
> - `-s` means summary
> - `-h` means human-readable

>[!tip] Disk re-sizing
> You can refer to [Increase the size of a persistent disk | Google Cloud](https://cloud.google.com/compute/docs/disks/resize-persistent-disk?authuser=2) to play with re-sizing a file system.

### Mounted File System
- With ``mount`` [[System Call (系统调用)]], we are able to mount an isolated [[File System]] to another isolated File System

>[!caution] Always perform ``mount`` on empty file directory
>Otherwise, the [[File]] in the mounted Directory of the original File System can’t be accessed

>[!code]- List mounted file system 
> **Linux**
> ```bash
> df -Th
> ```

>[!code]- Mount a device to a directory
>```bash
>mount -t <filesystem_type> <path/to/device_file> <path/to/target_directory>
>```

>[!code]- Mounting automatically during boot time
> You can achieve this by editing the `/etc/fstab`. You can verify the configuration with `sudo mount -a`.


## Common File Systems
---
### APFS 
- **Apple File System**
- Created by Apple, used for macOS, iOS, iPadOS, tvOS, and watchOS
- We need to use [[FUSE]] to mount APFS on [[Linux Kernel]]. One common option is [sgan81/apfs-fuse](https://github.com/sgan81/apfs-fuse)

### Ext4 
- **Extended Filesystem 4**
- The default choice on many Linux distributions. Mature, stable, and offers good all-around performance
- Commonly used in [[Linux Kernel]]


### exFAT 
- **EXtended File Allocation Table**
- Windows standard filesystem, both macOS and [[Linux Kernel]] support
- Designed as a successor to FAT32, specifically for flash drives and other external storage. Handles large files and better cross-compatibility than FAT32

### ZFS 
- **Zettabyte File System**
- Originally from Solaris, known for extreme scalability, data integrity protection, and comprehensive features (snapshots, compression, volumes). Can be resource-intensive
- Commonly used in [[Linux Kernel]]






