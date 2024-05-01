---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-09-03T16:14:54+08:00
Last Date: 2024-05-01T14:28:40+08:00
References: 
description: "Exploring POSIX: Featured offered by OS for programs"
---
## Abstract
---
- Stands for **Portable Operating System Interface**
- **A set of standards** designed by [IEEE](https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers) in the form of [[#POSIX Function]], specifying the interface between [[Kernel]] and [[OS System Program]]. Comes with a set of **automated conformance test** to check if a kernel is **POSIX-compatible**


>[!success] Write Once, Run (Mostly) Anywhere
> POSIX ensures **compatibility** and **portability** of applications across different [[Unix#Unix-like]] operating systems.
> 
> A POSIX-compliant application written using the POSIX function should be compatible across different POSIX-compliant operating systems. This massively **reduces the development effort** for **cross-platform** software.

>[!success] Guidance for kernel vendores
> Kernel vendors have a blueprint for the set of system calls that should ideally be implemented in their systems for better standardisation.

## POSIX Function
---

![[major_POSIX_system_calls.png|500]]

- [[POSIX]] has **about 100 functions**, some commonly used functions are shown above. Services offered by these functions **determine most** of what the **[[OS]] has to do**
- **Mapping** of POSIX functions onto [[System Call (系统调用)]] **isn't one-to-one**. The POSIX standard specifies a number of functions a [[Kernel]] must supply, but it doesn't specify whether they are system call, [[Library Call]] or something else
- However, most POSIX functions do invoke system calls, usually with one POSIX function mapping directly onto one system call, unless the POSIX functions are only minor variations of each other

>[!important]
> For Linux, it is the combination of [[Linux Kernel]] and [[Library Call#libc]] that provides the POSIX API. `libc` adds a decent amount of value - not every POSIX function is necessarily a system call, and for the ones that are, the kernel behaviour isn't always POSIX conforming.
> 
> So decoupling out some of the POSIX implementations into `libc`, we achieve a **faster** and **more POSIX-compliant** system. It is faster because we reduce the involvement of kernel, involving kernel is expensive! Great overhead introduced by [[Trap Interrupt (陷入)]] and [[Interrupt Handler]] etc.


## References
---
- [Modern OS - 1.6 System Calls](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf)