---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-28T20:24:00
Last Date: 2024-06-05T13:12:37+08:00
References: 
---
## Abstract
---
- Also known as **Spinning**
- A [[Process (进程)]] or [[Thread]] **repeatedly checks** a condition **without giving up** the [[CPU]] until the **condition is satisfied**

>[!success] Simple and efficient synchronisation mechanism
> Shines when **condition is expected to be met very quickly**. Like [[Process (进程)]] waiting for input from the keyboard.

>[!attention]
> Can waste [[Clock Oscillator#Clock Cycle]] if the condition **is not met quickly**. For example, a lot of CPU cycles is wasted when a process or thread tries to have a [[#Spinlock]] on an [[IO Device]], but another process or thread is using the [[Device Controller]] to retrieves a large amount of data from IO device. 


## Spinlock
---
- Also known as **自旋锁**
- A type of [[Busy Waiting]] specifically used as a **lock mechanism** where a [[Thread]] **repeatedly checks** and attempts to **acquire a lock** until it becomes available
- This is in contrast to [[Semaphore (信号量)]] or [[Mutex (互斥体)]], which releases the [[CPU]] and **allows other threads to run** while **waiting for the condition** to be met
- Usually used to protect short **critical sections** in a [[Kernel]] or [[Device Controller#Device Driver]]