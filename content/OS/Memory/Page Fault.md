---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-07-11T14:15:50+08:00
References: 
---
## Abstract
---
- A page fault occurs when a [[Memory Page|memory page]] is **not mapped** to a [[Main Memory#Memory Frames|memory frame]] in the [[Page Table|page table]]. This means that the **data from** the corresponding [[Memory Page|memory page]] is **not currently present** in the [[Main Memory|main memory]]. The CPU can only proceed with the task after the required data is fetched from the main memory

## Minor Page Fault
---

![[minor_page_fault.png|500]]

- The [[Page Table#Page Table Entry|page table entry]] exists in [[Page Table|page table]], but it points to the secondary storage ([[Flash Memory|flash memory]] or [[Hard Disk|hard disk]])
- The corresponding data needs to be transferred from secondary storage into [[Main Memory|main memory]] to be used by the [[CPU]]. This process, known as [[Swap Space#Paging|paging]], is a **significant performance hit**


## Major Page Fault
---
- The [[Memory Page]] is not in [[Virtual Memory]] at all. The [[Kernel]] must find free space in [[Main Memory]], allocate the [[Main Memory#Memory Frames]], and update the [[Page Table]]. This is usually caused by [[#Lazy Allocation]], and results in slower access times


### Lazy Memory Allocation
- Not allocating [[Main Memory#Memory Frames]] until it is actually needed

>[!question] Why we want lazy allocation?
> By delaying the actual allocation, we **speed up startup time** & **eliminate allocation** entirely **if it isn't used**.

>[!caution]
> Lazy allocation can lead to **slower execution speed** caused by [[Page Fault#Major Page Fault]].
> 
> It also increases the risk of **runtime allocation errors**, making the application more likely to crash during execution.
