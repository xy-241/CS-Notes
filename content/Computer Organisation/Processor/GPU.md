---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-29T14:24:00
Last Date: 2024-05-17T19:09:15+08:00
References: 
---
## Abstract
---
- A [[Multi-core Chip]] with thousands of tiny cores

>[!success] Optimised for Parallel Computing
> Look at the [[CPU#CPU Core]] it has!

>[!success] Game rendering
> So many cores allows us to perform a ton of linear algebra calculation for game graphic rendering.

>[!success] Great for training AI
> AI training involves a ton of Matrix Multiplication on dataset which can be done independently.

>[!caution] Hard to program
> That is why we have  [Nvidia's CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit) which utilises GPU's [[Concurrency (并发)#Parallelism (并行)|parallel computing]] for **general purpose computing**.


## Comparison with CPU
---
![[cpu vs gpu comparison.png|700]]

- [[CPU]] one core is way more power, and able to handle complication logics like [[Pipeline Branching]] and a lot of the real world application needs to run [[Instruction]] in a sequential manner
- GPU shines when we need [[Concurrency (并发)#Parallelism (并行性)]] and the workload doesn't depend on each other

