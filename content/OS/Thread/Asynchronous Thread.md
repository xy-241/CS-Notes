---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-11T19:17:00
Last Date: 2024-03-27T21:33:51+08:00
References: 
---
## Abstract
---
- Thread carries out other tasks if the current tasks require it to wait for **IO Operations** or **Network Operations** etc
- Goes back to the current task when the waiting ends - **Call back**
- However, the thread still get blocked when the task is **CPU Bounded**

### Even Loop
![[async_io_event_loop.png|500]]
1. [[Asynchronous Thread]] tells [[Kernel]] what [[OS/IO/IO Device#IO Operation|IO Device]] it wants to be done ( “please read from this socket” or “please write to this file”)
2. The kernel provides an **I/O handle** to the thread for **monitoring the request**
3. Kernel adds the request to a list of items to babysit.
4. The thread continues on with life, **periodically checking** the I/O handle for events.
5. **Kernel posts an event** to the **I/O handle** whenever something interesting happens via [[Interrupts (中断)#Upcall]] - **callback**
6. **Thread** grabs each **event**, **processing it**, and checking for more events until the requested operation is complete

>[!success] Responsive
> Suitable for [[Process (进程)]] that need to respond to events, such as a graphical user interface (GUI) program.

## Asynchronous Single Threading
---
- Basically takes the benefits of [[Multi-threading]] without the worry for [[Race Condition (竞态条件)]] & [[Deadlock (死锁)]], thanks to [[Asynchronous Thread]] 

>[!attention] No Parallelism
> There is only one single [[Thread]], so can't take advantage of [[Multi-core Chip]]. A **CPU Bounded** task can block the execution of the entire program, thus no [[Concurrency (并发)#Parallelism (并行性)]]