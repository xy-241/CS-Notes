---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2024-01-07, 17:59
Last Date: 2024-06-28T20:36:48+08:00
References: 
draft: 
---
## Abstract
---
- A swap space is an area on a **storage device** (usually a [[Hard Disk]] or [[Flash Memory]]) that is used as part of [[Virtual Memory]]. When the physical [[Main Memory]] of a computer is **fully utilised**, the [[Kernel]] may transfer some data from the main memory to the swap space to **free up physical memory for other tasks**. This allows the system to continue running applications and processes even when the **main memory is insufficient**



>[!code] Swap Space Usage
> `free -h`


### Paging
- Also known as **Swapping**
- The process of swapping data between [[Main Memory]] and [[Swap Space]]

## ZRAM
---
- ZRAM is a [[Kernel#Kernel Module]] that **compresses unused data** and moves it to the [[Main Memory]]. This is like having [[Swap Space]] in main memory. This frees up more RAM because the compressed data takes up about **1/4 of its original size**


>[!success] Speed
> [[#Paging]] is much faster given the [[CPU]] **isn't busy**.

>[!attention]
> CPU has to **work harder** to compress and decompress the data. This also **increases power consumption**.



## References
---
- [Arch ZRAM](https://wiki.archlinux.org/title/Zram)
- [(INFO)What is zram and how does it work???](https://xdaforums.com/t/info-what-is-zram-and-how-does-it-work.2023568/)