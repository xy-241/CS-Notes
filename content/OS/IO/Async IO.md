---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-03-25, 19:56
Last Date: 2024-03-26T13:49:13+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[async_io.png|500]]
- Short for **asynchronous input/output**
- A programming paradigm that allows [[OS/IO/IO Device#IO Operation]] to be performed [[Concurrency (并发)|concurrently]] with other tasks, without blocking the execution of the program, so the [[CPU]] can initiate **multiple other I/O operations** and continue executing other **CPU-bounded tasks** while **waiting for the results** 
- Powered by [[Interrupts (中断)#Upcall]]

>[!caution] Higher complexity
> Coding an excess of callback functions can get messy and becomes a nightmare for programmers attempting to analyze them. 
> 
> Syntactic features, such as **promises** and **async/await patterns**, have been introduced to streamline code syntax and ease the experience of reading it for programmers. Still, these features add a layer of complexity to the code.

## Even Loop
---
![[async_io_event_loop.png|500]]
1. [[Asynchronous Single Threading]] tells [[Kernel]] what [[OS/IO/IO Device#IO Operation|IO Device]] it wants to be done ( “please read from this socket” or “please write to this file”)
2. The kernel provides an **I/O handle** to the thread for **monitoring the request**
3. Kernel adds the request to a list of items to babysit.
4. The thread continues on with life, **periodically checking** the I/O handle for events.
5. **Kernel posts an event** to the **I/O handle** whenever something interesting happens - [[Interrupts (中断)#Upcall]]
6. **Thread** grabs each **event**, **processing it**, and checking for more events until the requested operation is complete

>[!success] Responsive
> Suitable for [[Process (进程)]] that need to respond to events, such as a graphical user interface (GUI) program.


## References
---
- [Async I/O | Apache Flink](https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/dev/datastream/operators/asyncio/)
- [What is \`Asynchronous I/O\`?. at the first, we will talk about… | by Nader Medhat | Nerd For Tech | Medium](https://medium.com/nerd-for-tech/what-is-asynchronous-i-o-b37994359471)