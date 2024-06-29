---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2024-01-07, 17:59
Last Date: 2024-06-29T17:50:39+08:00
References: 
draft: 
---
## Abstract
---
- A swap space is an area on a **storage device** (usually a [[Hard Disk]] or [[Flash Memory]]) that is used as part of [[Virtual Memory]]. When the physical [[Main Memory]] of a computer is **fully utilised**, the [[Kernel]] may transfer some data from the main memory to the swap space to **free up physical memory for other tasks**. This allows the system to continue running applications and processes even when the **main memory is insufficient**



>[!code] Check for swap space usage on Linux
> `free -h`


### Paging
- Also known as **Swapping**
- The process of swapping data between [[Main Memory]] and [[Swap Space]]

## ZRAM
---
- ZRAM is a [[Kernel#Kernel Module]] that **compresses unused data** in [[Main Memory]] and moves it back to the Main Memory. We basically have [[Swap Space]] inside the main memory

>[!success] More memory!
> When data is compressed, it typically occupies **one-quarter of its original size**, **freeing the remaining three-quarters** for other applications to use.

>[!success] Speed
> [[#Paging]] is much faster since **everything happens inside the main memory**.

>[!attention]
> CPU has to **work harder** to compress and decompress the data. This also **increases power consumption**.



## References
---
- [Arch ZRAM](https://wiki.archlinux.org/title/Zram)
- [(INFO)What is zram and how does it work???](https://xdaforums.com/t/info-what-is-zram-and-how-does-it-work.2023568/)