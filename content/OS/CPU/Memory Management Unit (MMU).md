---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T01:39:00
Last Date: 2024-07-14T18:36:13+08:00
---
## Abstract
---

![[data_retrieval_during_process_execution.svg]]

- A hardware that takes in [[Virtual Memory#Virtual Address]] and translates it into a [[Main Memory#Physical Address]] using [[Page Table]]. This allows the [[CPU]] access data stored in [[Main Memory]] using virtual addresses. This **translation process** is what makes [[Virtual Memory]] possible

>[!attention]
> A [[Page Fault]] occurs when the Memory Management Unit (MMU) is unable to locate a specific [[Memory Page]] in its page table.



## Translation Lookaside Buffer
---
![[page_table_mapping.png|500]]

- Part of [[Memory Management Unit (MMU)]] that **caches** the [[Page Table#Page Table Entry|page table entries]]

>[!question] Why do we need Translation Lookaside Buffer?
> ![[mmu_tlb.png|300]]
> 
> The [[Page Table|page table]] resides in [[Main Memory|main memory]], and accessing it is [[Latency Number|slow]]. The Translation Lookaside Buffer (TLB) is a component of the CPU's memory management unit (MMU). By **caching recently used** page table entries, the TLB **eliminates** the **need for frequent memory accesses**, **significantly improving the speed** of obtaining [[Main Memory#Physical Address|physical addresses]].




## References
---
- [图解|什么是缺页错误Page Fault-CSDN博客](https://blog.csdn.net/g6U8W7p06dCO99fQ3/article/details/107240849)
- [Virtual Memory: 10 Making Virtual Memory Fast - YouTube](https://youtu.be/uyrSn3qbZ8U?si=TqOhXWXu4DczN9r7)