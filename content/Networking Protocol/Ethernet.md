---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-09-25T00:01:00
Last Date: 2024-04-12T20:54:53+08:00
---
## Abstract
---
- A [[CSMA]]
- A [[Computer Network]] created with a single physical cable that connects multiple computers to enable intercommunication


## Ethernet Frame
---
![[ethernet_frame.png]]
![[ethernet_frame_efficiency.png]]

- Each Ethernet frame has 1518 [[Computer Data Representation#Byte]] and it comes with **20 bytes of external metadata** and **66 bytes of internal meta data**. So the actual data delivered is **94.41%**. That is why you don't get **full 1000Gbps** when running [[gigabit_actual_performance.png|network benchmark]], it isn't mainly due to data loss, it is mainly due to extra [[Bandwidth]] used for all the external and internal metadata


## References
---
- [【硬核】干掉光猫！宽带破千兆！保姆级教程！ - YouTube](https://youtu.be/ip77XqdPo1M?si=ZtiJgcxQqnLP0fvv)
