---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-09-25T00:01:00
Last Date: 2024-07-25T22:56:08+08:00
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

>[!important] MTU Frame Size: Balancing Throughput and Latency
> For the Maximum Transmission Unit (MTU), we divide data into frames. If **latency requirements are low** and we want to **maximise [[Bandwidth#Network Throughput|data throughput]]**, **we use larger frames**. Larger frames mean more data per frame and **less relative overhead**, typically around 1500 bytes. Speed tests often use this approach.
> 
> However, if **low latency is crucial** for sending data as quickly as possible, we **opt for smaller frames**. This means accepting a **higher relative overhead** in exchange for sending smaller amounts of data more frequently, typically around 64 bytes. Games often use this approach, as real-time interaction is the top priority and the data sent (mostly user actions) is small.


## References
---
- [【硬核】干掉光猫！宽带破千兆！保姆级教程！ - YouTube](https://youtu.be/ip77XqdPo1M?si=ZtiJgcxQqnLP0fvv)
- [干货！一个视频搞懂软路由转发和加密的猫腻，用X86软路由平替硬路由需要什么CPU？ - YouTube](https://youtu.be/sCFPCtz7Tes?si=URdVsq8k1lP7j7k_)
