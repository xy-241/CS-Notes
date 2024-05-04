---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-16T10:11:53+08:00
Last Date: 2024-05-04T20:08:55+08:00
References: 
---
## Abstract
---
- Allow 2 isolated [[Process (进程)]] or multiple [[Thread]] in a single process to communicate with each other 
- The communication is essential to coordinate the activities among Processes/Threads that are cooperating to get some job done
</br>

- There are many ways to implement IPC, but there are 2 categories. Message Passing - [[Pipe (管道)]], [[Message Queue (消息队列)]], [[Interrupts (中断)#Upcall]], [[#Socket]] and [[Shared Memory]]
- We also [[Synchronization (同步)]] methods utilised like [[Mutex (互斥体)]] and [[Semaphore (信号量)]] to ensure no [[Race Condition (竞态条件)]] from happening


## Socket
---
- **Bidirectional communication channels** that can be used by a lot of [[Process (进程)]] simultaneously - A process can accept **many connections** on the **same socket** and attend several [[Host#Client]] simultaneously
- There are 2 main types of socket - [[Unix Domain Socket]] & [[Network Domain Socket]]


|             | Network Domain Socket                                                  | Unix Domain Socket                                                   |
| ----------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Scope       | Network-wide communication                                             | Communication within the same machine                                |
| Addressing  | IP Address + [[Network Port]]                                          | Filesystem path to **socket file**                                   |
| Protocols   | TCP/IP (TCP, UDP, etc)                                                 | Unix-specific IPC protocols                                          |
| Overhead    | Higher due to network layers                                           | Lower, everything happens on the same machine, no network overhead   |
| Security    | More exposed, may accidentally expose the connection to public network | More restricted with file permissions & contained within the machine |
| Performance | Slow                                                                   | Fast                                                                 |
