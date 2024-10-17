---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-20T20:41:44
Last Date: 2024-10-17T16:39:35+08:00
References: 
---
## Abstract
---
![[interrupt_vector_table.png|300]]
- Also known as **Interrupt Descriptor Table**
- Maps the interrupt number of [[System Call (系统调用)]] to [[Interrupt Handler#Interrupt Handler Pointer]]

>[!important]
> Stored in the [[Main Memory]] & registered with [[CPU]] by [[Kernel]]. It can only be configured from [[Privilege Level#Kernel Mode]].