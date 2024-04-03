---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - go
  - rust
Creation Date: 2024-04-03, 21:04
Last Date: 2024-04-03T21:18:51+08:00
References: 
draft: 
description: 
---
## Abstract
---
- **Automate** the process of freeing up memory occupied by **garbage objects**

>[!success] Simplify development
> Programmer is free from the **error-prone task**(for example forgetting to release memory can lead to [[Address Space#Memory leak]]) of manually releasing memory. 


>[!caution] Large latency spikes
> Garbage collector usually runs on a fixed interval. The garbage collector takes time to **identifying Garbage** & **Reclaiming Memory**, this can be resource demanding which introduces a **significant latency** to the application.
> 
> The diagram below shows the resources usage of Discord's “Read States” which was written in [[Go]]. The regular big spikes are caused by Go's garbage collector. They solve this issue by re-writing the application in [[Rust]], refer to this [article](https://discord.com/blog/why-discord-is-switching-from-go-to-rust) for more information.
> 
> ![[go_garbage_collector_latency.png]]