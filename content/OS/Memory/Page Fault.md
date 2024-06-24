---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-06-24T21:43:50+08:00
References: 
---
## Abstract
---
- Page fault happens when a [[Virtual Memory#Virtual Address]] is **not mapped** to a [[Main Memory#Memory Frames]] in the [[Page Table]]. Essentially, the actual data within the [[Memory Page]] **isn't found** in the [[Main Memory]]. The [[CPU]] can only start working on the task after obtaining the **data** from the **main memory**

## Minor Page Fault
---
- The [[Memory Page]] exists in [[Virtual Memory]] but needs to be transferred from secondary storage ([[Flash Memory]] or [[Hard Disk]]) into [[Main Memory]]. This process, known as [[Swap Space#Paging]], is typically fast


## Major Page Fault
---
- The [[Memory Page]] is not in [[Virtual Memory]] at all. The [[Kernel]] must find free space in [[Main Memory]], allocate the [[Main Memory#Memory Frames]], and update the [[Page Table]]. This is usually caused by [[#Lazy Allocation]], and results in slower access times


### Lazy Memory Allocation
- Not allocating [[Main Memory#Memory Frames]] until it is actually needed

>[!question] Why we want lazy allocation?
> By delaying the actual allocation, we **speed up startup time** & **eliminate allocation** entirely **if it isn't used**.

>[!caution]
> Lazy allocation can lead to **slower execution speed** caused by [[Page Fault#Major Page Fault]].
> 
> It also increases the risk of **runtime allocation errors**, making the application more likely to crash during execution.
