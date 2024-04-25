---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-11T21:10:44
Last Date: 2024-04-25T17:29:27+08:00
References: 
---
## Abstract
---
- We cant directly make [[System Call (系统调用)]] in the same way that we call functions in a program, different [[Instruction Set Architecture (ISA)]] will have a different set of System Calls. So we have Library call that is built on top of system calls to abstract this complexity away from the application programmers.

>[!success] Abstraction
> Make it possible to make **System Call (系统调用)** from user program written in languages like Java and C via an **unified interface** like [[POSIX]] without considering the underlying ISA.

>[!tip]
> Library calls can be traced with `lstrace`.


>[!attention] Privilege Mode
>Doesn't switch to [[Privilege Level#Kernel Mode]], always runs in [[Privilege Level#User Mode]]



### Library Procedure
- The underlying codes that carry out [[Library Call]]

## libc
---
- Short for **C standard library**
- [[Library Call]] that is implemented in the form of standard C functions like `strcpy()` and [[POSIX]] functions (which may be [[System Call (系统调用)]]) like `getpid()`

>[!attention]
> Not all standard C functions are in `libc` - most math functions are in `libm`.

>[!tip]
> If you run a C binary and get an error like `-bash: ./<c binary>: No such file or directory`. It probably means you are missing the required libc, it can be [[#glibc]] or [[#musl libc]] etc. In Ubuntu, if the system is missing musl libc, we can install it using `sudo apt-get install musl`.
### glibc

![[glibc.png|500]]

- glibc (**GNU libc**) provides more than just [[#libc]], it also provides the `libm`, and other core libraries like `libpthread` in **separate files**
- For ubuntu, you can find all the glibc files under `/lib/x86_64-linux-gnu` and `/usr/lib/x86_64-linux-gnu`

### musl libc

![[musl_libc.png|500]]

- A lightweight implementation of [[#libc]] with `libpthread`, `libm`, `librt`, etc united into **one single file** `libc.so`
- For ubuntu, you can find all the musl libc files under `/lib/x86_64-linux-musl` and `/usr/lib/x86_64-linux-musl`

>[!quote]
> musl's efficiency is unparalleled in Linux libc implementations. Designed from the ground up for static linking, musl carefully avoids pulling in large amounts of code or data that the application will not use. Dynamic linking is also efficient; by integrating the entire standard library implementation, including threads, math, and even the dynamic linker itself into a single shared object, most of the startup time and memory overhead of dynamic linking have been eliminated.

>[!info]
> **musleabi** - targets systems using the standard ARM EABI (Embedded Application Binary Interface).
> 
> **musleabihf** - targets systems using the ARM EABI with hard-float support (hardware-accelerated floating-point operations).



## References
---
- [musl libc - Design Concepts](https://wiki.musl-libc.org/design-concepts#:~:text=Design%20Concepts-,Unified%20libc%2Flibpthread%2Fldso,is%20unified%20with%20libc.so.)
- [musl - Introduction](https://www.musl-libc.org/intro.html)
- [C standard library - Wikipedia](https://en.wikipedia.org/wiki/C_standard_library)
- [c - What is the role of libc(glibc) in our linux app? - Stack Overflow](https://stackoverflow.com/questions/11372872/what-is-the-role-of-libcglibc-in-our-linux-app)