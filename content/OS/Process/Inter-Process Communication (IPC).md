---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-16T10:11:53+08:00
Last Date: 2024-05-11T18:24:55+08:00
References: 
---
## Abstract
---
- Allow 2 isolated [[Process (进程)]] or multiple [[Thread]] in a single process to communicate with each other 
- The communication is essential to coordinate the activities among Processes/Threads that are cooperating to get some job done
</br>

- There are many ways to implement IPC, but there are 2 categories. Message Passing - [[Pipe (管道)]], [[Message Queue (消息队列)]], [[Interrupts (中断)#Upcall]], [[#Socket]] and [[Shared Memory]]
- We also [[Synchronisation (同步)]] methods utilised like [[Mutex (互斥体)]] and [[Semaphore (信号量)]] to ensure no [[Race Condition (竞态条件)]] from happening


