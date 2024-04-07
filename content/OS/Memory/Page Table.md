---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T20:17:38+08:00
Last Date: 2024-04-07T16:42:08+08:00
References: 
---
## Abstract
---
![[page_table.png|400]]

- Maintains mappings between [[Memory Page]] and the [[Main Memory#Memory Frames]]. The mappings are stored inside the [[Main Memory]], we can use [[Memory Management Unit (MMU)#Translation Lookaside Buffer]] to reduce the number of memory access since memory access is an [[Latency Number|expensive operation]]

>[!attention]
> Each [[Process (进程)]] has its own Page Table for better memory protection.


## Page Table Mapping
---
![[page_table_mapping.png|500]]

- The above diagram assumes the [[Memory Page]] and the [[Main Memory#Memory Frames]] are `4kb`. The [[Memory Management Unit (MMU)#Translation Lookaside Buffer]] is part of [[Memory Management Unit (MMU)]] that handles the mapping
- As you can see, the value in the mapping ignores the last 12 [[Computer Data Representation#Bit]] which is known as the **page offset**. The **same memory page number** share the **same memory frame number**
	