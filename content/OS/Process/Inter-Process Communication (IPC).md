---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-16T10:11:53+08:00
Last Date: 2024-03-29T18:13:25+08:00
References: 
---
## Abstract
---
- Allow 2 isolated [[Process (进程)]] or multiple [[Thread]] in a single process to communicate with each other 
- The communication is essential to coordinate the activities among Processes/Threads that are cooperating to get some job done
</br>

- There are many ways to implement IPC, some are [[Pipe (管道)]], [[Message Queue (消息队列)]], [[Interrupts (中断)#Upcall]], [[#Socket]], [[Semaphore (信号量)]] and [[Shared Memory]]


## Socket
---
- **Bidirectional communication channels** that can be used by a lot of [[Process (进程)]] simultaneously - A process can accept **many connections** on the **same socket** and attend several [[Host#Client]] simultaneously
- There are 2 main types of socket - [[Unix Domain Socket]] & [[Network Domain Socket]]


|            | Network Domain Socket        | Unix Domain Socket                                                 |
| ---------- | ---------------------------- | ------------------------------------------------------------------ |
| Scope      | Network-wide communication   | Communication within the same machine                              |
| Addressing | IP Address + Port            | Filesystem path                                                    |
| Protocols  | TCP/IP (TCP, UDP, etc)       | Unix-specific IPC protocols                                        |
| Overhead   | Higher due to network layers | Lower, everything happens on the same machine, no network overhead |
| Security   | More exposed                 | More restricted with file permissions                              |
