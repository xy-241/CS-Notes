---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-07-14T20:41:40+08:00
Last Date: 2024-07-22T16:25:09+08:00
References: 
---
## Abstract
---
- A **small-sized** type of volatile computer memory that provides **high-speed data access** to a [[CPU]]. **10-100 times faster** than accessing accessing data from [[Main Memory]]. Built with [[Main Memory#SRAM]]

>[!question] Differences between L1, L2, and L3 CPU Cache?
> **L1 Cache** is known as **primary cache**, runs at the **same speed** as the **CPU**.
> 
> **L2 Cache**, also called the **secondary cache**, is accessed if the CPU cannot find the data in L1 Cache. It can be up to [[Latency Number|10 times slower]] than L1 cache.
> 
> **L3 Cache** is known as **shared cache**, because it is shared between all the [[CPU#CPU Core|cores]] of the CPU. Accessed if data isn't found in L2 cache. L3 Cache is still twice as fast as [[Main Memory#DRAM]].

### Cache Line
* Ranging from 32 to 128 [[Computer Data Representation#Byte|bytes]]
* When the CPU fetches data into the cache, it brings in an entire cache line rather than the bytes currently being accessed. This is to take advantage of [[#Spacial Locality|spatial locality]]

>[!important]
> A [[CPU|processor]] uses the **lower bits** of a [[Main Memory#Physical Address|RAM address]] to **index the cache**. This allows a CPU cache with limited size to cover the entire main memory, as multiple physical addresses can be mapped to the same cache line.
> 
> However, this also means that multiple physical addresses share the same cache line. To **differentiate between these addresses**, each cache line contains an **address tag** that **identifies which physical address** is currently mapped to that line.

### Cache Hit
- When [[CPU Cache]]needed is in [[CPU Cache]]
- Takes about 2 [[Latency Number |clock cycles]]

### Cache Miss
- When the [[CPU]] requests data that is not found in the [[CPU Cache]]
- It requires fetching the data from the slower [[Main Memory]], incurring a higher access time compared to a [[#Cache Hit]]


## Cache Locality
---
![[cache_locality.gif]]
- Also known as **Locality of Reference**
- [[#Cache Line]] is transferred into [[CPU Cache]] when we obtain [[Instruction]] or [[Data]] from [[Main Memory]]
- If we are retrieving the same data or surrounding data. For the [[CPU]], instead of going to Main Memory to retrieve. It can obtain directly from the CPU Cache which is much faster (**10-100 times faster**)
</br>

- This contributes greatly to performance since [[Process (进程)]] usually only accesses a small portion of the [[Memory Address]] space within a small time interval 


### Temporal Locality
- Once an **[[Instruction]] executed** or a piece of **data is accessed**, the element **will be used again** soon

### Spacial Locality
- Once an **[[Instruction]] executed** or a piece of **data is accessed**, its **neighbours will also be accessed** soon

>[!important]
> Spacial Locality has a special **sub-category** called **sequential locality**, which **shines** in cases like executing a **for loop**.

### Average Memory Access Time
- Average memory access time = [[#Cache Hit|hit rate]] $\times$ hit time $+$ [[#Cache Miss|miss rate]] $\times$ miss penalty
- Miss rate is basically $1 -$ hit rate

>[!example]
> If the CPU cache hit time is `0.8 ns` and the [[Main Memory#DRAM|DRAM memory]] access time is `10 ns`, the **miss penalty** is $10 + 0.8$ = `10.8 ns`. To achieve an average memory access time of `1 ns`, we need a hit rate of $98\%$.
> 
> Here's how we calculate that:
> 
> Let $h$ be the hit rate. The formula for average memory access time (AMAT) is:
> 
> AMAT = (Hit Rate $\times$ Hit Time) $+$ (Miss Rate $\times$ Miss Penalty)
> 
> We want AMAT to be `1 ns`. Substituting the known values:
> 
> `1 ns` = ($h \times$ `0.8 ns`) $+ ((1 - h) \times$ `10.8 ns`) 
> 
> Solving for $h$:
> 
> - $1 = 0.8h + 10.8 - 10.8h$
> - $9.8 = 10h$
> - $h = 0.98$
> 
> Therefore, the required hit rate is $0.98$ or $98\%$.

## References 
---
- [Ep 073: Introduction to Cache Memory - YouTube](https://youtu.be/Bz49xnKBH_0?si=KvO_9Bw3fUl1SnJr)
- [What is a cache line actually? - Quora](https://www.quora.com/What-is-a-cache-line-actually)