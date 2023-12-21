---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-06T19:46:17+08:00
Last Date: 2023-12-21T15:35:59+08:00
References: 
---
## Abstract
---
- Decides on hardware allocation and management with regard to software


>[!example]
>- [[MacOs Setup | MacOs]]'s kernel is **XNU**
>- **Windows**'s kernel is **NT Kernel**


## 2 Type 
---
### Micro-kernel 
- [[Kernel]] only handles critical part of the system like [[Inter-Process Communication (IPC)]]. The rest runs in [[User Space]]
![[microkernel.png]]

>[!success] So one crash in the kernel [[Process]] doesn't crash the entire system 

>[!caution] Lower performance due to the overhead of communication between different modules

>[!example] 
>- [[MINIX]]

### Monolithic Kernel
- 🚧 WIP

## Terminologies 
---
### Preemptive Kernel
- [[Kernel]] that can be [[Interrupts (中断) |interrupted]] and scheduled just like [[Process]] in the [[User Space]] 

>[!success] This prevents the Kernel from hogging the [[CPU]], and slow down user space process