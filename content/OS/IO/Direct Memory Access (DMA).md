---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-27T14:44:16+08:00
Last Date: 2024-06-05T13:00:43+08:00
References: 
---
## Abstract
---
* Chip that control the flow of bits between [[Main Memory]] and some [[Device Controller]] without constant [[CPU]] intervention, avoids the potential **performance hit** from [[Busy Waiting]]


## Zero Copy
---
![[zero_copy_kafka.svg|500]]


- Zero copy means [[CPU]] does not perform the task of **copying data from one memory area to another** or in which **unnecessary data copies are avoided**
- The above diagram shows data is copied directly from the OS buffer to the NIC Buffer via [[System Call (系统调用)]] like [sendfile(2)](https://man7.org/linux/man-pages/man2/sendfile.2.html). This avoids copying data from the OS buffer to the Kafka buffer which is in the [[User Space]], and avoids making another system call to copy the data from Kafka buffer to the socket buffer, then eventually the NIC buffer

>[!success] CPU is free!
> The direct copying of data is handled by [[Direct Memory Access (DMA)]], so the CPU isn't involved and is free to work on other tasks!




## References
---
- [System Design: Why is Kafka fast? - YouTube](https://youtu.be/UNUz1-msbOM?si=2nC4zt0WOb1CgR6P)