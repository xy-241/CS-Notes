---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-19T17:16:23+08:00
Last Date: 2024-07-10T23:38:13+08:00
References: 
---
## Abstract
---
![[data_retrieval_during_process_execution.svg]]

- An [[Abstraction|abstraction]] that maps [[#Virtual Address]] to [[Main Memory#Physical Address]]. In layman's terms, virtual memory takes **program addresses** and **maps them** to **RAM addresses**. The mapping is known as [[Page Table]] which is handled by [[Memory Management Unit (MMU)]]

>[!important]
> The **mapping** gives us **flexibility** in how we use the physical [[Main Memory]].


>[!success] Handles memory fragmentation
> **Problem**: programs may **not be able to fit** into the main memory. A program **needs a block of main memory**, but we will have [[Memory Fragmentation]] issues **as we run and exit programs**.
>
>  **Virtual memory solution:** With [[#Virtual Address|virtual addressing]], the [[Kernel]] decouples data placement from the main memory. It is able to **break down** [[Address Space]] into **smaller sizes** and fit them inside **fragmented main memory**, thus solving the memory fragmentation issue.


>[!success] Creates the illusion of more memory
> **Problem:** Usually, for 32-bit [[Instruction Set Architecture (ISA)]], each [[Process (进程)]] is promised a 32-bit [[Address Space]], which is 4GB. It's **impossible** to **allocate 4GB** of main memory to **every process** or we just **don't have 4GB of main memory**. So, if a process tries to read from certain addresses, a **crash may occur**. The same idea applies to 64-bit ISA.
> 
> 
> **Virtual memory solution:** With **virtual addressing**, the **kernel** controls **memory mapping**. It can assign **virtual address** to point to the [[Flash Memory]], using it to store process data outside of main memory in the form of [[Swap Space]]. However, accessing this data will result in a [[Page Fault]] which is a **big performance hit**.



>[!success] Prevent programs writing over each other
> **Problem**: Since all processes are using the **same number of bits** to **find data** in the **main memory**, they can **freely read** and **write** to the data and [[Instruction]] of **other processes**.
>
> **Virtual memory solution:** Virtual memory promises each process its **own blank** [[Main Memory]]. The virtual memory **handles** the **underlying mapping** to the corresponding [[Main Memory#Physical Address]]. However, this means that **data sharing among programs** can be slightly **tricky**, the underlying mapping for each programs need to point to the same [[Main Memory#Physical Address]]. 

>[!code] Manipulating memory with C
> [Making memory read-only](https://youtu.be/AYSISa95oJE?si=3FJPQoTuLC5MHei8).

### Virtual Address
- Also known as **Logical Address**
- The addressing system for [[Virtual Memory]], not bounded to physical [[Main Memory]]

>[!important]
> The address that the [[Process (进程)]] sees and uses to retrieve data or [[Instruction]].



## References
---
- [What is virtual memory? – Gary explains - YouTube](https://www.youtube.com/watch?v=2quKyPnUShQ)
- [Virtual Memory: 1 Introduction - YouTube](https://youtu.be/qcBIvnQt0Bw?si=DbOUZcHSo_SNCk28)
- [Virtual Memory: 2 Three problems with Memory - YouTube](https://youtu.be/eSPFB-xF5iM?si=KGjqcclU942dRjrH)
- [Virtual Memory: 3 What is Virtual Memory? - YouTube](https://youtu.be/qlH4-oHnBb8?si=7DGCeuSMtTU3UW3w)