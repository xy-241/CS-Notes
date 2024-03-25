---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-03-25, 19:56
Last Date: 2024-03-25T20:37:45+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[async_io.png|500]]
- Short for **asynchronous input/output**
- A programming paradigm that allows [[OS/IO/IO Device#IO Operation]] to be performed [[Concurrency (并发)|concurrently]] with other tasks, without blocking the execution of the program, so the [[CPU]] can initiate **multiple other I/O operations** and continue executing other **CPU-bounded tasks** while **waiting for the results** 

## Even Loop
---
![[async_io_event_loop.png|500]]
1. [[Asynchronous Single Threading]] tells [[Kernel]] what [[OS/IO/IO Device#IO Operation|IO Device]] it wants to be done ( “please read from this socket” or “please write to this file”)
2. The kernel provides an **I/O handle** to the thread for **monitoring the request**
3. Kernel adds the request to a list of items to babysit.
4. The thread continues on with life, **periodically checking** the I/O handle for events.
5. **Kernel posts an event** to the **I/O handle** whenever something interesting happens
6. **Thread** grabs each **event**, **processing it**, and checking for more events until the requested operation is complete



## References
---
- [Async I/O | Apache Flink](https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/dev/datastream/operators/asyncio/)
- [What is \`Asynchronous I/O\`?. at the first, we will talk about… | by Nader Medhat | Nerd For Tech | Medium](https://medium.com/nerd-for-tech/what-is-asynchronous-i-o-b37994359471)