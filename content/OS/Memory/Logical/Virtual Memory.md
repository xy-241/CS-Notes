---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-19T17:16:23+08:00
Last Date: 2023-12-25T20:06:34+08:00
References: 
---
## Abstract
---
- An abstraction that powers [[Address Space]] a [[Process]] use
- Address Space decoupled from the physical Main Memory
- Each [[Process]] thinks it is the only one running inside the [[Main Memory]]
- Mapping handled by [[Memory Management Unit (MMU)]]

## C Implementation
---
- [How to make memory read-only](https://youtu.be/AYSISa95oJE?si=3FJPQoTuLC5MHei8)

## Benefits
---
- Avoid [[Memory Fragmentation]] - the [[Address Space]] can be broken down into sizes to fit inside fragmented [[Main Memory]]. The [[#Virtual Address]] ensures a continuous memory block presented to [[Process]]
- Isolated [[Address Space]] 
- Used when a [[Process]] has more [[Address Space]] than [[Main Memory]] by placing them on [[disk]] and using main memory as a kind of cache for most heavily executed parts -> but this can lead to [[Page Faults]]


## Terminologies
---
### Logical Address
- Not bounded to physical [[Main Memory]]


## References
---
- [YouTube Reference](https://youtu.be/2quKyPnUShQ?si=1jc9zDESuSoje2XC)