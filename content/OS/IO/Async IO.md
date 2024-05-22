---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - js
Creation Date: 2024-03-25, 19:56
Last Date: 2024-05-22T16:08:19+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[async_io.png|500]]
- Short for **asynchronous input/output**
- A programming paradigm that allows [[OS/IO/IO Device#IO Operation]] to be performed [[Concurrency (并发)|concurrently]] with other tasks, without blocking the execution of the program, so the [[CPU]] can initiate **multiple other I/O operations** and continue executing other **CPU-bounded tasks** while **waiting for the results** 
- Powered by [[Asynchronous Thread]]

>[!caution] Higher complexity
> Coding an excess of callback functions can get messy and becomes a nightmare for programmers attempting to analyze them. 
> 
> Syntactic features, such as **promises** and **async/await patterns**, have been introduced to streamline code syntax and ease the experience of reading it for programmers. Still, these features add a layer of complexity to the code.

>[!bigbrain] Async IO in JS (Promise Execution)
> Refer to [JavaScript Visualized - Promise Execution - YouTube](https://youtu.be/Xs1EMmBLpn4?si=FrPtzcFJ3KTWVsb6)

## IO Uring
---
![[io_uring.png|500]]

- **High-performance** [[Async IO]] interface for the [[Linux Kernel]] that allows [[Process (进程)]] in [[User Space]] to make [[System Call (系统调用)]] without blocking the process

>[!important] Async IO
> Traditionally, the process in user space is blocked until it receives an IO completion signal form [[Kernel]]. But IO Uring introduces a [[Shared Memory]] between the User Space and [[Kernel Space]]. The process in user space is aware when the IO operation is completed without kernel sending back a completion signal. Thus, the process in user space can continue with its execution while the IO operation is in progress.

>[!caution]
> In June 2023, Google's security team reported that **60% of Linux kernel exploits** submitted to their bug bounty program in 2022 were **exploits of io_uring vulnerabilities**. As a result, io_uring was disabled for apps in Android, and disabled entirely in ChromeOS as well as Google servers.

## References
---
- [Async I/O | Apache Flink](https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/dev/datastream/operators/asyncio/)
- [What is \`Asynchronous I/O\`?. at the first, we will talk about… | by Nader Medhat | Nerd For Tech | Medium](https://medium.com/nerd-for-tech/what-is-asynchronous-i-o-b37994359471)
- [Why you should use io\_uring for network I/O | Red Hat Developer](https://developers.redhat.com/articles/2023/04/12/why-you-should-use-iouring-network-io)
- [io\_uring - Wikipedia](https://en.wikipedia.org/wiki/Io_uring#:~:text=In%20June%202023%2C%20Google's%20security,as%20well%20as%20Google%20servers.)