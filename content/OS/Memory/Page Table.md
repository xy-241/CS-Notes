---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T20:17:38+08:00
Last Date: 2024-07-19T14:10:44+08:00
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


>[!success] Solution: Add a Second-Level Page Table
>To **map the full 1M ($2^{20}$) physical addresses** of a **32-bit machine**, we can use a **two-level page table structure**. The first-level page table, with a size of $1024$ ($2^{10}$) entries, points to **$1024$ second-level page tables**, each also containing $1024$ ($2^{10}$) PTEs.
>
>The **second-level page tables** can be [[Swap Space#Paging|paged out]] to swap space when not in use, as they **can be located through the first-level table**, which is **always kept in main memory**.
>
>This approach **significantly reduces** the **minimum amount of page table data needed in memory** for each [[Process (进程)|process]]. It requires only **4kB for the first-level table and 4kB for one active second-level table (8kB total)** to **obtain a physical address**, a substantial improvement over the **4MB of main memory consumed** per application **when using a single-level page table**.


>[!question] How does virtual-to-physical address translation work?
>![[multi-level_page_table_address_translation.png|400]]
>
> 1. **First-Level Page Table Lookup:** The **first 10 bits** of the **virtual address** are used as an index to **locate** the corresponding **PTE in the first-level page table.**
> 2. **Page Table Entry (PTE) Retrieval:** The retrieved PTE contains the **physical address of the second-level page table** that holds the final translation.
> 3. **Second-Level Page Table Lookup:** The **next 10 bits** of the **virtual address** are used as an **index into this second-level page table**.
> 4. **Physical Address Retrieval:** The **PTE in the second-level page table** provides the **physical address of the desired data**.
## References
---
- [Virtual Memory: 5 Page Tables - YouTube](https://youtu.be/KNUJhZCQZ9c?si=ILJ61VfLP9IjD2P4)
- [Virtual Memory: 6 Address Translation - YouTube](https://youtu.be/ZjKS1IbiGDA?si=DkiwIeRFOfI35dhv)
- [Virtual Memory: 7 Address Translation Example Walkthrough - YouTube](https://youtu.be/6neHHkI0Z0o?si=XwtYdajFVL3K4Mvx)
- [Virtual Memory: 12 Multi-level Page Tables - YouTube](https://youtu.be/Z4kSOv49GNc?si=8J1LRBVrmr1_A_Ar)