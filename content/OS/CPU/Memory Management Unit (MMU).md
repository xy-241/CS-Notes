---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T01:39:00
Last Date: 2024-04-06T20:07:25+08:00
---
## Abstract
---
![[memory_management_unit.png|500]]

- A hardware that takes in [[Virtual Memory#Virtual Address]] and converts it into [[Main Memory#Physical Address]] using [[Page Table]]. This is what powers [[Virtual Memory]]

>[!attention]
> A [[Page Fault]] is raised when MMU is unable to find a particular [[Memory Page]] in its page table



## Translation Lookaside Buffer
---
![[page_table_mapping.png|500]]

- Part of [[Memory Management Unit (MMU)]] that caches the mappings of [[Virtual Memory#Virtual Address]] and [[Main Memory#Physical Address]]

>[!success] Much faster than memory access
> ![[mmu_tlb.png|300]]
> 
> Translation Lookaside Buffer is a component of the [[CPU]], so the access speed is much faster than accessing the main memory where the [[Page Table]] is stored.