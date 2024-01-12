---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-07-26T17:21:48+08:00
Last Date: 2024-01-12T16:19:31+08:00
References: 
---
## Abstract
---
- Also known as *Directory Hierarchy*
- A method and [[Data Structure]] that the [[OS]] uses to control how data is stored and retrieved on a storage device 
- Provides a way to organise [[#File Directory]] into folders, and to keep track of which [[File]] are stored where on the device
- A File Directory where entries can be File or other File Directory

>[!info] Difference from [[Process Hierarchy]]
>- Can be very deep
>- May exist for years
>- Entries can be accessed by a wider group than just the owner


## Mounted File System
---
- With ``mount`` [[System Call (系统调用)]], we are able to mount an isolated [[File System]] to another isolated File System

>[!caution] Perform ``mount`` on empty [[File System#File Directory]]
>Otherwise, the [[File]] in the mounted Directory of the original File System can’t be accessed

## Linux File System
---
<img src="https://raw.githubusercontent.com/ByteByteGoHq/system-design-101/main/images/linux-file-systems.jpg" width="500">

### `/etc/profile.d`
-  Used for storing shell script files that are automatically sourced when a [[User|User]] logs into the system
- These scripts are used to set environment variables, customize the shell's behavior, and configure user-specific settings globally for all users

### `/src`
- Typically used to store data that is served by the system
- The name "srv" stands for "service" 
- Often used to store data related to various services running on the system, such as websites, FTP servers, and other network services

### `mkdir`

**`-p` flag** 
- Tells the `mkdir` command to create parent directories as needed 
- If you omit this option and the parent directory doesn't exist, you'll get an error

**`-m` flag**
- Used to set the mode (permissions) for the newly created directory
- `mkdir -pm 0755 /etc/vault.d`
## Terminologies 
---
### Pathname
- Specify the location of [[File]] in the [[File System]]
### Root Directory
- The top of the [[File System]]
### File Directory
- A way of grouping [[File]] together