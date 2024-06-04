---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-11-19T16:36:00
Last Date: 2024-06-04T11:40:13+08:00
References: 
---
## Abstract
---
- 2 Main Components - [[ALU]],  [[Control Unit]]
- Fire the necessary components based on the given [[Instruction]]
- Start in [[Privilege Level#Kernel Mode |Kernel Mode]]. Before executing a program, the kernel initiates the switch to [[Privilege Level#User Mode |User Mode]]

>[!success] 
> Optimised for computation that requires **sequential execution**(one [[Instruction]] can only execute when another [[Instruction]] finishes), [[Pipeline Branching]] and logic.

>[!info] Understand the Intel/AMD CPU naming
> This [video](https://youtu.be/EVMLQV9tH6A?si=lqBgxcYwvPYD5BUx) explains the naming mechanism of Intel/AMD CPU pretty well.

>[!info] Chip Binning
> Chip manufacturing **isn't perfect**. A CPU manufactured with $10$ [[#CPU Core|CPU cores]] may only have 8 that are working. Chip Binning is the process of selling **chips with detects** as a **lower-tier CPUs** at a **lower cost** by **disabling the areas with defects**. This massively **improves** the **yield of a wafer** because it means that more dies can be utilised and sold.
> 
> The M4 chip comes with iPad Pro 2024, the more expensive version includes **one additional performance CPU** core and **8GB more [[Main Memory#DRAM]]**.


### CPU Core
- One single unit of [[CPU]] that executes [[Instruction]] independently from other **CPU cores**

### 32-bit CPU
- [[Register#Register Width]] that are **32** [[Computer Data Representation#Bit]] each
- The size of [[Memory Address]] is limited to 4GB. Because 32bits [[Register]] can only hold **4GB** different unique memory address, $2^{32} = 4294967296 =  4 * 1024 * 1024 * 1024$
- The [[Computer Data Representation#Word]] size is usually **4** [[Computer Data Representation#Byte]]

### 64-bit CPU
- [[Register#Register Width]] that are **64** [[Computer Data Representation#Bit]] each
- Doesn't have the 4GB [[Main Memory]] limitation in [[#32-bit CPU]]
- The [[Computer Data Representation#Word]] size is usually **8** [[Computer Data Representation#Byte]]

### CPU Scratch Area
- A small amount of high-speed memory that is used to store temporary data in the [[CPU]]. [[Register]] and [[CPU Cache]] are considered as CPU Scratch Area 


## Hyperthreading
---

![[hyperthreading.png|400]]

- **Hyperthreading technology** enables a single [[CPU]] to **handle multiple [[Thread]] simultaneously**. Thus, achieving [[Concurrency (并发)#Parallelism (并行)]] 
- This is achieved by duplicating the [[Register#Register File]] like [[Register#Program Counter]]. [[Pipeline Stages#Fetch]] and [[Pipeline Stages#Decode]] are also duplicated to allow for **simultaneous processing** of [[Instruction]] from multiple [[Thread]]. The rest like [[ALU]] is shared

>[!important]
> The performance gain from Hyperthreading is **minimal** when **one set of the fetch and decode** is smooth and **able to keep the ALU busy**. 
> 
> However, if one set of the fetch and decode is **not smooth** in the cases like [[Pipeline Flush]], the another set of fetch and decode can **keep the ALU busy**, thus **improving performance**.
> 
> The rule of thumb is that every [[CPU#CPU Core]] that supports hyperthreading has roughly an **additional $0.25$ CPU core performance**.




## References
---
- [What is Hyperthreading? - YouTube](https://www.youtube.com/watch?v=mSZpDF-zUoI)
- [Explainer: What is Chip Binning? | TechSpot](https://www.techspot.com/article/2039-chip-binning/)