---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-04-16, 12:48
Last Date: 2024-04-16T13:13:47+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A buffer serves as a **temporary storage area** that **consolidates multiple pieces of data** before they are read from or written to an [[OS/IO/IO Device|IO Device]]/[[Socket]] by the [[Kernel]]
- Reducing the negative impact of [[System Call (系统调用)]] overhead and smoothen the data flow

>[!success] Better performance
> This consolidation helps optimize data transfer by **minimizing the overhead** associated with individual data transfers which requires System Call, and can also help **smooth out disparities** in data transfer rates between different components of the system.

>[!example]
> IO Device Buffering
> - In java, `Scanner` has a worse performance than `BufferedReader`, in terms of reading in a file. 
> 
> [[Socket#Network Domain Socket]] Buffering
> 
> ![[network_socket_buffering.png|300]]
> - The white part of the progress indicates the data that is buffered. In this case, this data is basically part of the video that is ready to be watched without the need to fetch from the [[Host#Server]]. If we don't buffer and the data takes half a second to reach due to poor network connectivity, the user will feel the video isn't playing smoothly, bad user experience!
>