---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-07-15, 18:48
Last Date: 2024-07-15T18:53:52+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[page_table_mapping.png|500]]

- Stands for **T**ranslation **L**ookaside **B**uffer
- Part of [[MMU]] that **caches** the [[Page Table#Page Table Entry|page table entries]]

>[!question] Why do we need TLB?
> ![[mmu_tlb.png|300]]
> 
> The [[Page Table|page table]] resides in [[Main Memory|main memory]], and accessing it is [[Latency Number|slow]]. The Translation Lookaside Buffer (TLB) is a component of the CPU's memory management unit (MMU). By **caching recently used** page table entries, the TLB **eliminates** the **need for frequent memory accesses**, **significantly improving the speed** of obtaining [[Main Memory#Physical Address|physical addresses]].


## References
---
- [Virtual Memory: 10 Making Virtual Memory Fast - YouTube](https://youtu.be/uyrSn3qbZ8U?si=nVqSkrmcM5xFXDZE)
- [Virtual Memory: 11 TLB Example - YouTube](https://youtu.be/95QpHJX55bM?si=RiNmJnO9Q6gQ9NNw)