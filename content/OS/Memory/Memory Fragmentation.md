---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T01:24:00
Last Date: 2024-01-03T15:37:02+08:00
---
## Abstract
---
![[memory_fragmentation.png|500]]
- Occurs when [[Main Memory]] is allocated and deallocated in a way that leaves small, unused blocks of memory scattered throughout the memory address space
- Can be handled with [[Virtual Memory]]

## Issues
---
### Reduced Memory Utilisation
- Difficult or impossible to allocate large blocks of memory, even if there is enough total free memory available
### Reduced Performance
- Programs may run slower if they have to spend more time searching for contiguous blocks of memory to allocate