---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - rust
  - java
  - cpp
Creation Date: 2024-01-13, 21:20
Last Date: 2024-10-17T17:33:30+08:00
References: 
draft: 
---
## Abstract
---
- Ensure a program get and only get expected data from [[Main Memory]] and [[Register]]

>[!important] Achieve memory safety = Achieve absence of undefined behaviour
>It can be perfectly safe to have a pointer to freed memory. The important thing is to **not use** that pointer again, like reading it or freeing it etc

### Poor Memory Safety
- [[Segmentation Fault]] that leads to a crash in the [[Process (进程)]] or worst - **write into other parts of the process**
- When hackers can write into other parts of the process, they can use malicious input to trick the program from doing unwanted things. [70% of reported security vulnerabilities](https://msrc.microsoft.com/blog/2019/07/a-proactive-approach-to-more-secure-code/) in low-level systems are caused by memory corruption. [Memory Safe Languages in Android 13 reduces vulnerabilities](https://security.googleblog.com/2022/12/memory-safe-languages-in-android-13.html)
- Backdoor that some hackers are taking advantages of, and many other [memory errors](https://en.wikipedia.org/wiki/Memory_safety#Types_of_memory_errors)

### Achieve Memory Safety
**Rust**
- Ensure [[Memory Safety]] at **compile time**, reducing potential runtime errors **without sacrificing speed**

**Java**
- Take care of memory management with a [[Garbage Collector]] during runtime, this comes with performance compromise 

**C++**
- Make use of [Smart Pointers](https://stackoverflow.com/questions/41616428/what-does-it-take-to-write-memory-safe-c-applications) to automate the memory management during runtime
- However, developers are still able to perform memory management directly. Developers need to follow best practices to minimise the chance of violating memory safety