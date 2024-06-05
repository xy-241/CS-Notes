---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-16T09:30:00
Last Date: 2024-06-05T13:18:50+08:00
References: 
---
## Abstract
---
- **Coordination of execution** of multiple [[Process (进程)]] or [[Thread]] in a system to ensure that they **access shared resources** in a **controlled and predictable manner** 
- The table below lists some common synchronisation methods

| Synchronization Method              | Usage                                  | Advantages                       | Disadvantages                                | Example Use Case           |
| ----------------------------------- | -------------------------------------- | -------------------------------- | -------------------------------------------- | -------------------------- |
| [[Barrier (屏障)]]                    | Synchronise threads at **a point**     | Simple, ensures synchronisation  | Limited use cases                            | Parallel computing phases  |
| [[Condition Variable (条件变量)]]       | Wait for condition with mutex          | Handles complex conditions       | Complex, potential [[Race Condition (竞态条件)]] | Producer-consumer problems |
| [[Mutex (互斥体)]]                     | Protect shared data                    | Simple, effective                | Contention, potential [[Deadlock (死锁)]]      | Critical sections          |
| [[Semaphore (信号量)]]                 | Control access to resources            | Flexible, versatile              | Complex, potential errors                    | Resource pools             |
| [[Busy Waiting#Spinlock\|Spinlock]] | [[Busy Waiting]] for **short periods** | Low overhead for **short waits** | Inefficient for long waits                   | Low-level programming      |

