---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-06T19:46:17+08:00
Last Date: 2024-01-18T18:25:57+08:00
References: 
description: Dive into the heart of your operating system and discover how kernels manage hardware, allocate resources, and keep your system running smoothly. Explore the trade-offs between microkernels and monolithic kernels, and learn about preemptive kernels that ensure a responsive user experience.
---
## Abstract
---
- Decides on hardware allocation and management with regard to software
</br>

- [[MacOS]]'s kernel is **XNU**
- [[Windows]]'s kernel is **NT Kernel**


## Kernel Architecture
---
### Micro Kernel Architecture 
- [[Kernel]] only handles critical part of the system. The rest runs in [[User Space]]
- Different kernel components communicate with each other via  [[Inter-Process Communication (IPC)]]
- Used by [[MINIX]]
![[microkernel.png]]

>[!success] So if one of in the kernel [[Process]] crashes, it doesn't crash the entire system 

>[!caution] Lower performance due to the overhead of communication between different modules


### Monolithic Kernel Architecture
- By far, the most common [[Kernel]] architecture, used by [[Linux]]
- The entire kernel runs as a single program in [[Privilege Level#Kernel Mode]]
- Consist of a collection of [[Procedures]], linked together into a single large executable binary program. Each Procedures in the system is free to call any other one

>[!success] Very efficient to have the ability to call any of the procedures

>[!caution]  But having thousands of Procedures that can call each other without restriction may also lead to a system that is unwieldy and difficult to understand

>[!caution] A crash in any of these Procedures will take down the entire Kernel

## Terminologies 
---
### Preemptive Kernel
- [[Kernel]] that can be [[Interrupts (中断) |interrupted]] and scheduled just like [[Process]] in the [[User Space]] 

>[!success] This prevents the Kernel from hogging the [[CPU]], and slow down user space process