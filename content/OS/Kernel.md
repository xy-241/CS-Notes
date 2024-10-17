---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-09-06T19:46:17+08:00
Last Date: 2024-10-17T16:40:37+08:00
References: 
description: Dive into the heart of your operating system and discover how kernels manage hardware, allocate resources, and keep your system running smoothly. Explore the trade-offs between microkernels and monolithic kernels, and learn about preemptive kernels that ensure a responsive user experience.
---
## Abstract
---
- An [[Abstraction#Abstraction Barrier]] between software and hardware 
- Resides inside the [[Kernel Space]]

>[!success] Loose Coupling
> Software doesn't need to know the complexity of hardware. It can use the hardware thought a standard interface called [[System Call (系统调用)]]

>[!info] Common Modern Kernels
> - [[MacOS]]'s kernel is **XNU**
> - [[Windows]]'s kernel is **NT Kernel**
> - [[Linux Kernel]]
### Preemptive Kernel
- [[Kernel]] that can be [[Interrupts (中断) |interrupted]] and scheduled just like [[Process (进程)]] in the [[User Space]] 

>[!success] Avoid Kernel Hogging
> Prevent kernel from hogging the [[CPU]] that slows down user space process

### Kernel Module
- Known as **Kernel Extension** in the context of MacOS and IOS
- Extend the functionality of the [[Kernel]]
- [[FUSE#FUSE Mechanism|FUSE]] is a kernel Module for example

>[!tip] Application of Kernel Module in Linux 
> The functionalities of the [[Linux Kernel]] is group into different Kernel Modules which can be either disabled, enabled or rendered toggle-able at compile-time
> 
> We also able to add/remove/disable Kernel Modules during runtime using the `modprobe` command

## Kernel Booting
---
1. Get configuration info from [[Computer Booting#BIOS]]
2. Check for missing [[Device Controller#Device Driver]]
3. Start up [[Init System]]
4. Initialise [[Page Table]]
5. Starts up [[OS System Program]]
6. [[OS]] is booted up and ready to be used by the [[User]]

## Kernel Architecture
---
### Micro Kernel Architecture 
![[microkernel.png|500]]
- [[Kernel]] only handles critical part of the system. The rest runs in [[User Space]]
- Different kernel components communicate with each other via  [[Inter-Process Communication (IPC)]]
- Used by [[MINIX]]

>[!success] Fault-tolerant
> If one of the kernel [[Process (进程)]] crashes, this doesn't crash the entire system 

>[!caution] Less Performant
> Due to the overhead of communication between different modules

>[!info] Components of Traditional Microkernel
> 1. [[Process Management]]
> 2. [[Main Memory]] Management 
> 3. [[Inter-Process Communication (IPC)]]
>    
> There are no [[Device Controller#Device Driver]] and [[File System]] etc



### Monolithic Kernel Architecture
- By far, the most common [[Kernel]] architecture, used by [[Linux Kernel]]
- The entire kernel runs as a single program in [[Privilege Level#Kernel Mode]]
- Consist of a collection of [[Procedures]], linked together into a single large executable binary program. Each Procedures in the system is free to call any other one

>[!success] Performant
> No much overhead to call any of the kernel procedures

>[!caution] Harder to Maintain
>  Thousands of procedures that can call each other without restriction may also lead to a system that is difficult to understand

>[!caution] Not So Fault-tolerant
> A crash in any of these Procedures will take down the entire Kernel

