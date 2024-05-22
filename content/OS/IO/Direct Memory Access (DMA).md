---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-27T14:44:16+08:00
Last Date: 2024-05-22T16:20:13+08:00
References: 
---
## Abstract
---
* Chip that control the flow of bits between [[Main Memory]] and some [[Device Controller]] without constant [[CPU]] intervention, solves [[#Busy Waiting]]

## Zero Copy
---
![[zero_copy.png|500]]

- Zero copy means [[CPU]] does not perform the task of copying data from one memory area to another or in which unnecessary data copies are avoided
- [[Kernel]] handles copy process via [[Direct Memory Access (DMA)]] avoids copying between [[Kernel Space]] and [[User Space]]

## Terminologies
---
### Busy Waiting
* Has a big disadvantage of involving [[CPU]] keep polling until [[Device Controller]] retrieves data from [[IO Device]]