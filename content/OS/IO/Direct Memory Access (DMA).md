---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-27T14:44:16+08:00
Last Date: 2024-12-01T15:07:33+08:00
References: 
description: DMA enables direct data transfer between memory and device controllers, avoiding CPU intervention and busy waiting. Zero copy minimises memory copies using system calls like sendfile(2), freeing the CPU for other tasks.
---
## Abstract
---
* Chip that control the flow of bits between [[Main Memory]] and some [[Device Controller]] without constant [[CPU]] intervention, avoids the potential **performance hit** from [[Busy Waiting]]


## Zero Copy
---
![[zero_copy_kafka.svg|500]]


- Zero copy means [[CPU]] does not perform the task of **copying data from one memory area to another** with the help of [[Direct Memory Access (DMA)|DMA]] or in which **unnecessary data copies are avoided**

>[!success] Benefits of zero copy
> The CPU is **consistently involved** in copying data between the **OS buffer** in [[Kernel Space|kernel space]] and the **Kafka buffer** in user space, and vice versa. Expensive [[Context Switch|context switching]] is also involved.
> 
> Using system calls like [`sendfile(2)`](https://man7.org/linux/man-pages/man2/sendfile.2.html), data is copied directly from the OS buffer to the NIC buffer.
> 
> Unlike `read` and `write`, which require transferring data to and from user space, copying with `sendfile` occurs entirely within kernel space. The actual data transfer is offloaded to the [[Direct Memory Access (DMA)|DMA]], freeing the CPU for other computational tasks. 
> 
> `sendfile` is particularly useful when the application in user space does not need to process the data, and the data is ready to be sent out via the NIC (Network Interface Card).




## References
---
- [System Design: Why is Kafka fast? - YouTube](https://youtu.be/UNUz1-msbOM?si=2nC4zt0WOb1CgR6P)
- [sendfile(2) - Linux manual page](https://man7.org/linux/man-pages/man2/sendfile.2.html)