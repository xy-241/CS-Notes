---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-07-15, 18:48
Last Date: 2024-07-17T14:43:20+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[page_table_mapping.png|500]]

- Stands for **T**ranslation **L**ookaside **B**uffer
- Part of [[MMU]] that **caches** the [[Page Table#Page Table Entry|PTE]]

>[!important]
> **Super fast**
> - **Address translation** takes less than [[Latency Number|one clock cycle]], and [[CPU Cache#Cache Locality|cache locality]] helps keep **miss rates** to just a **few percent**.
>   
> **Super small**
> - Usually only contains $32$ or $64$ page table entries, while a [[Page Table|page table]] usually contains **1 million entries**.

>[!question] Why do we need TLB?
> ![[mmu_tlb.png|300]]
> 
> To retrieve data from [[Main Memory|main memory]], we first obtain the [[Main Memory#Physical Address|physical address]] from the page table, which also resides in main memory. We then use this physical address to access the data.
> 
> The TLB is a component of the CPU's MMU. By **caching recently used** page table entries, the TLB **eliminates** the **need for memory accesses**, **significantly improving the speed** of obtaining [[Main Memory#Physical Address|physical addresses]].

>[!question] How to make TLB bigger?
> **Make pages bigger**
> - Making [[Memory Page|memory pages]] **bigger** increases the reach of the TLB. 64 PTEs (Page Table Entries) of 4kB pages only cover 256kB of data, while 32 PTEs of 2MB pages cover 64MB of data.
> 
> **Add a second TLB**
> - This provides **larger capacity** but is **slower**. Most [[CPU|CPUs]] have a level 2 TLB that is about **8x larger** than the level 1 TLB, but also **twice as slow**.
> 
> **Use a dedicated hardware chip**
> - This is called "**hardware page walk**". The hardware assumes the page table is in a **special form in memory**, allowing it to retrieve data on a **TLB miss** without involving the [[Kernel|kernel]], which is much faster.

### iTLB
- [[TLB]] that caches [[Page Table#Page Table Entry|page table entries]] for [[Instruction]]

### dTLB
- [[TLB]] that caches [[Page Table#Page Table Entry|page table entries]] for data

## Data Retrieval Scenarios Involving a TLB
---

| No [[Page Fault]] | [[Page Table#Page Table Entry\|PTE]] in [[TLB]] | Performance                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ❌                 | ❌                                               | **Even more horrible performance**! It takes $20-1000$ [[Latency Number\|cycles]] to know the data is on [[Swap Space\|swap space]], and it takes about **80 million cycles** to get the data from the swap space.                                                                                                                                                                                  |
| ❌                 | ✅                                               | The **performance is horrible**. It takes **one clock cycle** to know the **data is on swap space**, but it takes about **80 million cycles** to retrieve the data from the swap space.<br><br>This is **unlikely to happen** because the TLB stores PTEs that have been **recently accessed**, and page faults typically occur for [[Memory Page\|memory pages]] that are **least recently used**. |
| ✅                 | ❌                                               | **Poor performance**, it takes $20-1000$ cycles to load the PTE from [[Main Memory\|main memory]]. The data is then retrieved from either main memory or the [[CPU Cache\|CPU cache]].                                                                                                                                                                                                              |
| ✅                 | ✅                                               | **Great performance**, taking **less than one clock cycle** for **address translation**. The data is then retrieved from the main memory or CPU cache.                                                                                                                                                                                                                                              |

## TLB Lifecycle: From Initialisation to Eviction
---
### TLB Initialisation

![[tlb_initilisation.png|600]]

- The [[TLB]] is empty at this stage, and all virtual-to-physical address translations will result in [[#TLB Miss]] initially.

### TLB Hit

![[tlb_hit.png|600]]

- This occurs when the [[CPU]] requests a virtual address translation, and the corresponding [[Page Table#Page Table Entry|PTE]] is found within the [[TLB]]
- It is the fastest type of address translation since it doesn't require accessing the [[Page Table|page table]] in [[Main Memory|main memory]]

### TLB Miss

![[tlb_miss.png|600]]

- This happens when the requested virtual address translation does not have a corresponding [[Page Table#Page Table Entry|PTE]] in the [[TLB]]
- The [[CPU]] needs to access the [[Page Table|page table]] in [[Main Memory|main memory]] to find the correct [[Main Memory#Physical Address|physical address]]
- This is slower than a [[#TLB Hit]] and can cause a performance penalty

### TLB Eviction

![[tlb_eviction.png|600]]

- Due to the limited size of the [[TLB]], it cannot hold all possible [[Page Table#Page Table Entry|PTEs]]
- When the TLB is full and [[#TLB Miss]] occurs, a new PTE needs to replace (or evict) an existing one to make room. The replacement policy (e.g., [[LRU|Least Recently Used]]) determines which entry gets evicted


## References
---
- [Virtual Memory: 10 Making Virtual Memory Fast - YouTube](https://youtu.be/uyrSn3qbZ8U?si=nVqSkrmcM5xFXDZE)
- [Virtual Memory: 11 TLB Example - YouTube](https://youtu.be/95QpHJX55bM?si=RiNmJnO9Q6gQ9NNw)