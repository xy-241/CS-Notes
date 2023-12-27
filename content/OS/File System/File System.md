---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-07-26T17:21:48+08:00
Last Date: 2023-12-27T15:36:35+08:00
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


## Terminologies 
---
### Pathname
- Specify the location of [[File]] in the [[File System]]
### Root Directory
- The top of the [[File System]]
### File Directory
- A way of grouping [[File]] together