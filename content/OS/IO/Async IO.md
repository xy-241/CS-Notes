---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-03-25, 19:56
Last Date: 2024-03-27T21:33:07+08:00
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




## References
---
- [Async I/O | Apache Flink](https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/dev/datastream/operators/asyncio/)
- [What is \`Asynchronous I/O\`?. at the first, we will talk about… | by Nader Medhat | Nerd For Tech | Medium](https://medium.com/nerd-for-tech/what-is-asynchronous-i-o-b37994359471)