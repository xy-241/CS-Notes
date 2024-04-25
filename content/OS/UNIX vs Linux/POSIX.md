---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-09-03T16:14:54+08:00
Last Date: 2024-04-25T17:09:54+08:00
References: 
description: "Exploring POSIX: A Standard Interface for Operating Systems"
---
## Abstract
---
- Stands for **Portable Operating System Interface**
- **A set of standards** designed by [IEEE](https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers) for [[Library Call]], specifying the interface between [[Kernel]] and [[OS System Program]]. Comes with a set of **automated conformance test** to check if a kernel is **POSIX-compatible**
- Has about 100 Library Call, but **not one-to-one mapped** to [[System Call (系统调用)]]. Below is a list of major POSIX system calls

![[major_POSIX_system_calls.png|500]]

>[!important]
> For Linux, it is the combination of [[Linux Kernel]] and [[Library Call#libc]] that provides the POSIX API. `libc` adds a decent amount of value - not every POSIX function is necessarily a system call, and for the ones that are, the kernel behaviour isn't always POSIX conforming.
> 
> So decoupling out some of the POSIX implementations into `libc`, we achieve a **faster** and **more POSIX-compliant** system.

>[!success] Write Once, Run (Mostly) Anywhere
> POSIX ensures **compatibility** and **portability** of applications across different [[Unix#Unix-like]] operating systems.
> 
> A POSIX-compliant application written using the standard system calls should be compatible across different POSIX-compliant operating systems. This massively **reduces the development effort** for **cross-platform** software.

>[!success] Guidance for kernel vendores
> Kernel vendors have a blueprint for the set of system calls that should ideally be implemented in their systems for better standardisation.

