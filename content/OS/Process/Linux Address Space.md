---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-07-14, 17:37
Last Date: 2024-07-14T18:20:50+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[linux_address_space.png|500]]

- The above diagram illustrates the [[Address Space]] of a [[Process (进程)]] under [[Linux Kernel]]

>[!question] What is the random offset for?
> The random offsets **enhance security**, as you never know exactly where a certain piece of data or code will be


## Virtual Memory in Linux
---
![[virtual_memory_in_linux.png|600]]

- Each [[Process (进程)|process]] receives its own [[Page Table|page table]], which manages the mapping of [[Memory Page|virtual memory pages]] to [[Main Memory#Memory Frames|physical memory frames]]
- The [[Kernel|kernel]] ensures that memory pages from different processes **map to the same physical frame** only when **data sharing** between those processes is **explicitly desired**


## References
---
- [Virtual Memory: 9 Memory Protection - YouTube](https://youtu.be/uDzXXnNy544?si=kxZ7_3_-nJirERTK)