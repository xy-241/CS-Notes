---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T20:17:38+08:00
Last Date: 2024-04-05T18:21:28+08:00
References: 
---
## Abstract
---
![[page_table.png|400]]

- Maintains mappings between [[Virtual Memory#Virtual Address]] and the [[Main Memory#Physical Address]]


## Page Table Mapping
---
![[page_table_mapping.png|500]]

- The above diagram assumes the [[Memory Page]] and the [[Main Memory#Memory Frames]] are `4kb`. The [[Memory Management Unit (MMU)#Translation Lookaside Buffer]] is part of [[Memory Management Unit (MMU)]] that handles the mapping
- As you can see, the value in the mapping ignores the last 12 [[Computer Data Representation#Bit]] which is known as the **page offset**. The **same memory page number** share the same memory frame number
	