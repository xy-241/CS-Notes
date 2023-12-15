---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-13T19:06:12+08:00
Last Date: 2023-11-13T19:06:12+08:00
References:
---
>[!note] By far, the most common structure

>[!note] Consist of a collection of [[Procedures]], linked together into a single large executable binary program. Each [[Procedures]] in the system is free to call any other one

>[!note] The entire [[OS]] runs as a single program in kernel mode

>[!success] Being able to call any [[Procedures]] you want is very efficient
>>[!caution] But having thousands of [[Procedures]] that can call each other without restriction may also lead to a system that is unwieldy and difficult to understand


>[!caution] A crash in any of these [[Procedures]] will take down the entire [[OS]]

>[!example]
>- [[OS/MISC/UNIX vs Linux/Linux]]