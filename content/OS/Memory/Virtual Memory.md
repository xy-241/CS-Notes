---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-19T17:16:23+08:00
Last Date: 2024-06-22T16:42:36+08:00
References: 
---
## Abstract
---
![[virtual_memory.png|500]]

- An [[Abstraction|abstraction]] that maps [[#Virtual Address]] to [[Main Memory#Physical Address]]. The mapping is handled by [[Memory Management Unit (MMU)]]


>[!success] Handles memory fragmentation
> With [[#Virtual Address|virtual addressing]], the [[Kernel]] decouples data placement from the [[Main Memory]]. It is able to **break down** [[Address Space]] into **smaller sizes** and fit them inside **fragmented main memory**, thus solving the [[Memory Fragmentation]] issue.


>[!success] Use storage as part of the memory
> With **virtual addressing**, the **kernel** controls **memory mapping**. It can assign **virtual address** to point to the [[Flash Memory]], using it as [[Swap Space]] to store process data outside of main memory. However, accessing this data will result in a [[Page Fault]].


>[!code] Manipulating memory with C
> [Making memory read-only](https://youtu.be/AYSISa95oJE?si=3FJPQoTuLC5MHei8).

### Virtual Address
- Also known as **Logical Address**
- The addressing system for [[Virtual Memory]], not bounded to physical [[Main Memory]]
- The address that the [[Process (进程)]] "thinks" it is using





## References
---
- [What is virtual memory? – Gary explains - YouTube](https://www.youtube.com/watch?v=2quKyPnUShQ)