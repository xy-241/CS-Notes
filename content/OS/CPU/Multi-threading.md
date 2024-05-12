---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-11T19:28:00
Last Date: 2024-05-12T18:00:40+08:00
References: 
---
## Abstract
---
- A mechanism achieved with **multiple [[CPU#Core]]** or [[CPU#Multi-threaded CPU]]([[Concurrency (并发)#Parallelism (并行性)]]) or quick [[Context Switch]]([[Concurrency (并发)]]) or **both**
</br>

- Doesn't offer true Parallelism (并行性) on Single-Core [[CPU]] which only supports one [[Process (进程)]] running at a time
- Thread-switching time is reduced to [[Latency Number |nanosecond]] compared to process-switching
- To users, CPU Speed is divided by the total number of [[Thread]] executing at the same time when multiple [[Thread]] sharing the same [[CPU#Core]]
</br>

- Performance is a **fine balance** between performance gains from each [[Thread]] and Overhead of Creating Thread

>[!caution]
> 1. When there is a shared resource, we are likely to [[Race Condition (竞态条件)]] and [[Deadlock (死锁)]]
> 2. Overhead of creating [[Thread]] can be significant when we are having a lot, more threads means more [[Context Switch]]

>[!success] Improved Responsiveness
> Can continue to run other [[Thread]] while waiting for I/O operations to complete
> 
> Run other Thread while one Thread is **waiting**

>[!success] Improved Performance
> Huge amount of performance gain is guaranteed when tasks are **stateless**, **independent** of each other & **long waiting time** incurs in the task



## Thread Safety (线程安全)
---
- A piece of code that functions correctly when there is **simultaneous execution** of **multiple [[Thread]]**, adn all of them accessing the **same shared resource** 
- Free of [[Race Condition (竞态条件)]] and [[Deadlock (死锁)]] etc

