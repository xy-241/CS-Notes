---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-07-23T16:00:53+08:00
References: 
---
## Abstract
---
- A page fault occurs when a [[Memory Page|memory page]] is **not currently mapped** to a [[Main Memory#Memory Frames|memory frame]] in the [[Page Table|page table]]. This means that the **data from** the corresponding [[Memory Page|memory page]] can't be found in the [[Main Memory|main memory]]. The CPU can only proceed with the task after the required data is fetched from the main memory


## Minor Page Fault
---
- Also known as a **soft fault**
- The requested [[Memory Page|page]] is present in [[Main Memory|main memory]] but not currently accessible to the [[Process (进程)|process]]


>[!important]
> **Quick resolution:** Minor page faults are handled quickly by the [[Kernel|kernel]] with minimal impact on performance. Kernel just needs to update the [[Page Table|page table]] to map the page correctly.
> 
> **Common occurrence:** Minor page faults are a normal part of [[Virtual Memory|virtual memory management]] and occur frequently during program execution.



## Major Page Fault
---

![[minor_page_fault.png|500]]

- Also known as **hard page fault**
- The [[Page Table#Page Table Entry|page table entry]] exists in [[Page Table|page table]], but it points to the secondary storage ([[Flash Memory|flash memory]] or [[Hard Disk|hard disk]])


>[!question] How to handle?
> The corresponding data needs to be transferred from secondary storage into [[Main Memory|main memory]] for use by by the [[CPU]]. This process, known as [[Swap Space#Paging|paging]], causes a **significant performance slowdown**.



## Lazy Memory Allocation
---
- [[Main Memory#Memory Frames|Memory frames]] are not allocated until they are actually needed. Therefore, the [[Memory Page|memory page]] is not mapped to data in [[Main Memory|main memory]] or the secondary storage

>[!question] Why this will cause page fault?
> The [[Kernel|kernel]] must find free space in main memory, allocate memory frames, and update the [[Page Table|page table]]. This is often caused by demand [[Swap Space#Paging|paging]] (where pages are loaded only when needed) and can result in **slower access times**.
> 
> It also increases the risk of **runtime allocation errors**, making the application more likely to crash during execution.

>[!question] Why we want lazy allocation?
> By delaying the actual allocation, we **speed up startup time** & **eliminate allocation** entirely **if it isn't used**.



## References
---
- [Virtual Memory: 8 Page Faults - YouTube](https://youtu.be/bShqyf-hDfg?si=0bmEEXkbj3qOopIT)