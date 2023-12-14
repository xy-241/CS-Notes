---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-11T19:28:00
Last Date: 2023-12-12T22:56:21+08:00
References: 
---
## Abstract
---
- Also known as *Hyper-threading*
- A mechanism achieved with wither [[#Multi-threaded Chip]](true [[High-performance Computing#Parallelism (并行性)|Parallelism (并行性)]]) or quick [[Context Switch]]([[High-performance Computing#Concurrency (并发)|Concurrency (并发)]]) or *both*
- Doesn't offer true [[High-performance Computing#Parallelism (并行性)|Parallelism (并行性)]] on Single-Core [[CPU]] which only supports one [[Process]] running at a time
- Thread-switching time is reduced to [[Latency Number |nanosecond]]
- To users, [[CPU]] Speed is divided by the total number of [[Thread]] executing at the same time when multiple [[Thread]] sharing the same [[CPU#Core]]
- Performance is a *fine balance* between performance gains from each [[Thread]] and [[#Overhead of Creating Thread]]


## Benefits
---
### Improved Responsiveness
- Can continue to run other [[Thread]] while waiting for I/O operations to complete
- Run other [[Thread]] while one [[Thread]] is waiting
### Improved Performance
- When tasks are stateless, independent of each other & long waiting time incurs in the task

## Cons
---
### More likely to get [[Race Condition (竞态条件)]]
- Where there is a *shared resource*
### More likely to get [[Deadlock (死锁)]]
- Where there is a *shared resource*
### Overhead of Creating [[Thread]]

## Terminologies
---
### Thread Safety (线程安全)
- A piece of code that functions correctly during *simultaneous execution* by *multiple [[Thread]]* accessing the a *shared resource* without [[Race Condition (竞态条件)]] and [[Deadlock (死锁)]] etc

### Multi-threaded Chip
- [[Control Unit]], [[Registers]] & [[Pipeline]] are replicated
