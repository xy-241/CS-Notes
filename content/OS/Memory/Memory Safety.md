---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-01-13, 21:20
Last Date: 2024-01-14T18:03:50+08:00
References: 
draft: 
---
## Abstract
---
- Ensure a program get and only get expected data from [[Main Memory]] and [[Register]]
- To achieve Memory Safety, we need to achieve the *absence* of *undefined behavior*
</br>

### Poor memory safety
- [[Segmentation Fault]]
-  Malicious input to trick the program from doing unwanted things. [70% of reported security vulnerabilities](https://msrc.microsoft.com/blog/2019/07/a-proactive-approach-to-more-secure-code/) in low-level systems are caused by memory corruption. [Memory Safe Languages in Android 13 reduces vulnerabilities](https://security.googleblog.com/2022/12/memory-safe-languages-in-android-13.html)
- Backdoor that some hackers are taking advantages of 
- And many other [memory errors](https://en.wikipedia.org/wiki/Memory_safety#Types_of_memory_errors)