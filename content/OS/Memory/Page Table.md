---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T20:17:38+08:00
Last Date: 2024-07-18T17:30:48+08:00
References: 
---
## Abstract
---
![[page_table.png]]

- Maintains mappings between [[Memory Page]] and the [[Main Memory#Memory Frames]]. The mappings are stored inside the [[Main Memory]], we can use [[TLB]] to reduce the number of memory access since memory access is an [[Latency Number|expensive operation]]

>[!question] Why doesn't one virtual address simply map to one physical address?
> Because this would make our page table **too large**! We would need one entry in the page table to keep track of each individual address. With memory pages, we can have **one entry** to **keep track** of **4096 addresses** if the page size is `4KB`.

>[!important] Different process different page table
> Separate page tables allow us to **isolate [[Process (进程)|processes]]**, preventing them from accessing each other's data, while still providing the **flexibility for controlled data sharing** when necessary. For example, refer to the [[Linux Address Space#Virtual Memory in Linux|virtual memory implementation in Linux]].


### Page Table Entry
- A **mapping** of [[Memory Page|memory page]] and [[Main Memory#Memory Frames|memory frame]] in the [[Page Table|page table]]

## Page Table Address Translation
---
![[page_table_mapping.png|600]]

- The above diagram assumes the [[Memory Page]] and the [[Main Memory#Memory Frames]] are `4kb`. The [[TLB]] is part of [[MMU]] that handles the mapping
- As you can see, the value in the mapping ignores the last 12 [[Computer Data Representation#Bit]] which is known as the **page offset**. The **same memory page number** share the **same memory frame number**

## Multi-level Page Table
---
- For a 32-bit machine with 4kB ($2^{12}$) [[Memory Page|pages]], we need a total of **1M** ($2^{10+10}$) [[#Page Table Entry|PTEs]] to map all [[Virtual Memory#Virtual Address|virtual addresses]] to [[Main Memory#Physical Address|physical addresses]]. Each PTE is about **4 bytes**, so we need a total of **4MB of memory** for the [[Page Table|page table]]
- Each program needs it s own page table, so if we have **100 programs**, we need a total of **400MB** of [[Main Memory|main memory]] to store the pages table. And we can't place the pages table to [[Swap Space|swap space]]. If the page table **not in main memory**, we have **no way to access it to find it**
## References
---
- [Virtual Memory: 5 Page Tables - YouTube](https://youtu.be/KNUJhZCQZ9c?si=ILJ61VfLP9IjD2P4)
- [Virtual Memory: 6 Address Translation - YouTube](https://youtu.be/ZjKS1IbiGDA?si=DkiwIeRFOfI35dhv)
- [Virtual Memory: 7 Address Translation Example Walkthrough - YouTube](https://youtu.be/6neHHkI0Z0o?si=XwtYdajFVL3K4Mvx)
- [Virtual Memory: 12 Multi-level Page Tables - YouTube](https://youtu.be/Z4kSOv49GNc?si=8J1LRBVrmr1_A_Ar)