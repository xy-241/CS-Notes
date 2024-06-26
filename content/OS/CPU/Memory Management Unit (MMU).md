---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T01:39:00
Last Date: 2024-06-26T19:20:09+08:00
---
## Abstract
---
![[memory_management_unit.png|500]]

- A hardware that takes in [[Virtual Memory#Virtual Address]] and translates it into a [[Main Memory#Physical Address]] using [[Page Table]]. This allows the [[CPU]] access data stored in [[Main Memory]] using virtual addresses. This **translation process** is what makes [[Virtual Memory]] possible.

>[!attention]
> A [[Page Fault]] occurs when the Memory Management Unit (MMU) is unable to locate a specific [[Memory Page]] in its page table.



## Translation Lookaside Buffer
---
![[page_table_mapping.png|500]]

- Part of [[Memory Management Unit (MMU)]] that caches the **mappings** of [[Virtual Memory#Virtual Address]] to [[Main Memory#Physical Address]] in the [[CPU]]

>[!success] Much faster than accessing page table directly
> ![[mmu_tlb.png|300]]
> 
> The Translation Lookaside Buffer (TLB) is a component of the CPU's memory management unit (MMU). Its **access speed** is **significantly faster** than accessing the main memory where the [[Page Table]] is stored.

