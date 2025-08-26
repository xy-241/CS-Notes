---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - python
  - hacktron
Creation Date: 2023-11-11T19:17:00
Last Date: 2025-08-28T09:09:41+08:00
References:
description: Learn how event loops power asynchronous I/O in modern systems. Explore OS-level flow, single-threaded concurrency, Python’s asyncio, uvloop performance gains, and why mixing gevent with asyncio causes issues.
---
## Abstract
---
- An event loop is a **scheduler** used to achieve [[Async IO|async I/O]]. It manages I/O events and, once they are ready, dispatches the corresponding tasks (callbacks, coroutines, futures). While waiting for I/O, it can switch to and execute other tasks that are ready, ensuring efficient concurrency without blocking

>[!success] Responsive
> Suitable for [[Process (进程)]] that need to respond to events, such as a graphical user interface (GUI) program.

### Event Loop OS-level Flow
1. [[Event Loop|Event loop]] asks the [[Kernel|kernel]] to start an I/O operation (e.g., “read from this socket” or “write to this file”). This is a _non-blocking_ syscall (e.g., `epoll_ctl`, `kqueue`, `IOCP`)
2. The **kernel** gives back an **I/O handle / file descriptor** that can be _monitored_ for readiness (not data itself yet).
3. The kernel **tracks the I/O request internally**, basically babysits the device driver queue
4. Instead of the thread “periodically checking,” the thread calls a **multiplexing syscall** (like `epoll_wait`, `select`, `kqueue`, IOCP). This _blocks the thread efficiently_ until _any_ registered event becomes ready. So no busy-polling, it’s “sleep until kernel wakes me.”
5. When something happens (e.g., socket readable, file write complete), the **kernel notifies the event loop** and posts the event into the syscall’s result set. On some OSes this is via **[[Interrupts (中断)|interrupts]]/[[Interrupts (中断)#Upcall|upcalls]]** at the driver level, which bubble up to `epoll`/`kqueue`
6. The **event loop thread** collects these ready events and dispatches the corresponding callbacks, coroutines, or futures until completion



## Asynchronous Single Threading
---
![[async_io_event_loop.png|500]]
- Basically captures many of the benefits of [[Multi-threading]] without most of the risks of [[Race Condition (竞态条件)]] & [[Deadlock (死锁)]], because only one thread executes the event loop

>[!attention] No Parallelism
> There is only one single [[Thread]], so can't take advantage of [[Multi-core Chip]]. A **CPU Bounded** task can block the execution of the entire program, thus no [[Concurrency (并发)#Parallelism (并行性)]]


## Python Event Loop
---
- We run our async entrypoint inside an event loop with `asyncio.run(coro)`. On [[Linux Kernel|Linux]], asyncio’s default loop is `SelectorEventLoop`, which is mostly Python code using `epoll` via the `selectors` module (with C-accelerated Tasks/Futures in CPython)
- `uvloop` is a drop-in replacement written in Cython on top of libuv, so it has **much lower overhead for scheduling and I/O, and is typically faster for I/O-bound workloads**. [uvloop makes asyncio 2-4x faster](https://github.com/MagicStack/uvloop?tab=readme-ov-file#performance). [Guide](https://github.com/MagicStack/uvloop?tab=readme-ov-file#using-uvloop) on integrating into asyncio. It is used by [sglang](https://github.com/sgl-project/sglang/blob/main/python/pyproject.toml#L54-L55) which is a fast serving framework for large language models and vision language models

>[!important] Gevent
> Mixing **gevent** and **asyncio** is painful because they’re **separate [[Event Loop|event-loop runtimes]]**. Each wants to own the main thread’s scheduling, sockets/FD registrations, timers, and signal handlers. Gevent’s **monkey-patching** collides with asyncio’s expectations, causing **missed wakeups, stalls, or deadlocks** (not just “overhead”). For new code, **asyncio + uvloop** is the modern, fast, and well-supported path (structured concurrency, rich ecosystem, great perf for I/O).
> 
> **If you must combine:** isolate via **separate processes** (best) or a **dedicated thread without `monkey.patch_all()`**, and communicate over [[Inter-Process Communication|IPC]].

