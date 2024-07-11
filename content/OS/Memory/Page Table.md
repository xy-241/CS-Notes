---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T20:17:38+08:00
Last Date: 2024-07-11T13:59:53+08:00
References: 
---
## Abstract
---
![[page_table.png]]

- Maintains mappings between [[Memory Page]] and the [[Main Memory#Memory Frames]]. The mappings are stored inside the [[Main Memory]], we can use [[Memory Management Unit (MMU)#Translation Lookaside Buffer]] to reduce the number of memory access since memory access is an [[Latency Number|expensive operation]]

>[!question] Why doesn't one virtual address simply map to one physical address?
> Because this would make our page table **too large**! We would need one entry in the page table to keep track of each individual address. With memory pages, we can have **one entry** to **keep track** of **4096 addresses** if the page size is `4KB`.

>[!attention]
> Each [[Process (进程)]] has its own Page Table for better memory protection.

### Page Table Entry
- A **mapping** of [[Memory Page|memory page]] and [[Main Memory#Memory Frames|memory frame]] in the [[Page Table|page table]]

## Page Table Address Translation
---
![[page_table_mapping.png|600]]

- The above diagram assumes the [[Memory Page]] and the [[Main Memory#Memory Frames]] are `4kb`. The [[Memory Management Unit (MMU)#Translation Lookaside Buffer]] is part of [[Memory Management Unit (MMU)]] that handles the mapping
- As you can see, the value in the mapping ignores the last 12 [[Computer Data Representation#Bit]] which is known as the **page offset**. The **same memory page number** share the **same memory frame number**

## References
---
- [Virtual Memory: 5 Page Tables - YouTube](https://youtu.be/KNUJhZCQZ9c?si=ILJ61VfLP9IjD2P4)
- [Virtual Memory: 6 Address Translation - YouTube](https://youtu.be/ZjKS1IbiGDA?si=DkiwIeRFOfI35dhv)
- [Virtual Memory: 7 Address Translation Example Walkthrough - YouTube](https://youtu.be/6neHHkI0Z0o?si=XwtYdajFVL3K4Mvx)