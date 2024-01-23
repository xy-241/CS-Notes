---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-19T17:16:23+08:00
Last Date: 2024-01-07T18:07:53+08:00
References: 
---
# Abstract
---
- An abstraction that powers [[Address Space]]
- Mapping handled by [[Memory Management Unit (MMU)]]


## Benefits
---
### Handle Memory Fragmentation
- With [[Virtual Memory]], the [[Address Space]] can be broken down into sizes to fit inside fragmented [[Main Memory]]. The [[#Logical Address]] ensures a continuous memory block presented to [[Process (进程)]]
- Thus, handles the [[Memory Fragmentation]] issue

### Easier Resource Management
- With [[Virtual Memory]], [[Address Space]] is decoupled from the physical [[Main Memory]]
- The [[Memory Address]] for the process starts from 0
- Each [[Process (进程)]] has its own isolated [[Address Space]], each [[Process (进程)]] thinks it is the only one running inside the Main Memory


### Offers More Main Memory
- With [[Virtual Memory]], we can have [[Swap Space]] to provide extra '[[Main Memory]]' to the [[Process (进程)]] 
- But this can lead to [[Page Faults]]


## C Implementation
---
- [How to make memory read-only](https://youtu.be/AYSISa95oJE?si=3FJPQoTuLC5MHei8)

## Terminologies
---
### Logical Address
- Not bounded to physical [[Main Memory]]
- Used by application to access the main memory
- The upper bits used to refer to the [[Memory Page]]


## References
---
- [YouTube Reference](https://youtu.be/2quKyPnUShQ?si=1jc9zDESuSoje2XC)