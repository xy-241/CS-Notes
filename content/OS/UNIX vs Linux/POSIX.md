---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-09-03T16:14:54+08:00
Last Date: 2024-02-16T15:18:53+08:00
References: 
description: "Exploring POSIX: A Standard Interface for Operating Systems"
---
## Abstract
---
- Stands for **Portable Operating System Interface**
- **A set of standards** designed by [IEEE](https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers) for [[Library Call]], specifying the interface between [[Kernel]] and [[OS System Program]]. This ensures compatibility and portability of applications across different Unix-like operating systems ([[Linux Kernel]], macOS, BSD, etc
</br>

- Implements a set of automated conformance test to check if a kernel is **POSIX-compatible**
</br>

- Defines Standard [[C]] operations, [[Multi-tasking]] and commands etc
- Has about 100 [[Library Call]], but not one-to-one mapping to [[System Call (系统调用)]]. Below is a list of major POSIX system calls
![[major_POSIX_system_calls.png|500]]


>[!success] Write Once, Run (Mostly) Anywhere
> A POSIX-compliant application written using the standard system calls should be source-code compatible across different POSIX-compliant operating systems. This massively r**educes the development effort** for **cross-platform** software.

>[!success] System Vendors Get Guidance 
> Operating system vendors have a blueprint for the set of system calls that should ideally be implemented in their systems for better standardization