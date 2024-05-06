---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-09-28T11:01:00
Last Date: 2024-05-05T18:59:40+08:00
---
## Abstract
---

![[osi_model.png|500]]

- A description of how the [[Internet]] works. It **breaks down** the functions involved in **sending data over the Internet** into **seven layers**. Each layer has some function that **prepares the data** to be sent over wires, cables, and radio waves **as a series of bits**

>[!important]
> OSI is an **abstract conceptualization** of the processes that make the Internet work, and interpreting and applying the model to the **real-world Internet** is sometimes a **subjective exercise**.
> 
> The OSI model is **useful for helping** people talk about **networking equipment** and [[Network Protocol]], determining which protocols are used by which software and hardware, and showing **roughly how the Internet works**. But it is **not a rigid step-by-step definition** of how Internet connections always function.


### OSI Application Layer
- Has access to all the [[Data]]
### OSI Transport Layer
- Only know 2 pieces of info - [[IP Address]] & [[Network Port]]
- It is pointless to look at the data, because it is just stream of [[Computer Data Representation#Bit]] and may be encrypted with [[TLS]]
## OSI Data Link Layer



## References
---
- [What is the network layer? | Network vs. Internet layer](https://www.cloudflare.com/en-gb/learning/network-layer/what-is-the-network-layer/)