---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-29T14:24:00
Last Date: 2025-10-05T16:51:46+08:00
References:
---
## Abstract
---
- A [[Multi-core Chip]] with thousands of tiny cores

>[!success] Optimised for Parallel Computing
> Look at the number of cores it has!

>[!success] Game rendering
> So many cores allows us to perform a ton of linear algebra calculation for game graphic rendering.

>[!success] Great for training AI
> AI training involves a ton of Matrix Multiplication on dataset which can be done independently.

>[!caution] Hard to program
> That is why we have  [Nvidia's CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit) which utilises GPU's [[Concurrency (并发)#Parallelism (并行)|parallel computing]] for **general purpose computing**.

## Streaming Multiprocessor
---

![[streaming_multiprocessor.png|600]]

- A physical unit inside the [[GPU]]. Each SM has its own [[Register|register]], [[ALU]] and [[CPU Cache|share memory]] and [[CUDA#Wrap|warp]] schedulers. Can think of it as a [[CPU]]
- An SM can handle multiple [[CUDA#CUDA’s Execution Structure|blocks]] at the time as long as there are enough resources available to fit them


### CUDA Core

![[cuda_core.png|400]]

- A CUDA core is mainly responsible for [[Floating-Point Encoding (浮点数编码)|floating-point calculations]], but it’s not limited to that, it can also handle integer and logic operations. Or even tensor operations if Tensor Cores are available.
- In short, it’s a general-purpose compute unit inside the GPU that does most of the heavy lifting.

>[!important] Register access
> Each **thread** (not each core) gets its **own set of registers** from the SM’s [[Register#Register File|register file]]. All threads running inside the same SM share that giant register file, but each one gets its own slice of it.

### Tensor Core
- A **Tensor Core** is a specialized math engine inside the GPU, designed to perform **matrix multiplications extremely fast**. The kind of math AI models rely on.
- **CUDA Cores** are great at general-purpose arithmetic (like adding, subtracting, or multiplying single numbers), but **AI and deep learning** deal with **big grids of numbers (matrices)** instead of single values.
- So in a way, **Tensor Cores** act like a **SIMD engine** where one instruction can be applied to a large block of data at once, giving **insane compute throughput**. They were introduced after the AI boom, specifically to handle neural network math more efficiently.

>[!info] DLSS
> NVIDIA’s AI-based upscaling technology. It renders the game at a **lower resolution** (like 1440p instead of 4K), then uses a **neural network** to “fill in” the missing details, so it _looks_ like 4K but runs much faster.
> 
> The neural network used by DLSS is **trained by NVIDIA** (offline in their datacenters) and **executed on your GPU’s Tensor Cores** during gameplay. These models can be updated through driver or game updates. Tensor Cores are crucial here because **DLSS inference involves tons of matrix multiplications**, and that’s exactly what Tensor Cores are optimized for.

### Wrap Scheduler
- Inside the SM, it is like the teacher deciding which group of 32 students (a [[CUDA#Wrap|wrap]]) should work next.
- Each **warp** runs independently. They don’t wait for each other. While one warp might be waiting for data (like memory access), another warp can run to keep the SM busy.

## FLOPs of a GPU
---
> Determined by 3 things:
> 
> 1. The **number of CUDA cores**
> 
> 2. The **clock frequency** of each core
> 
> 3. **How many floating-point operations each core can perform per cycle**

>[!question] What is this one cycle multiple operations black magic?
> Some architectures can execute **multiple operations in one cycle** thanks to the [[Instruction#Fused Multiply-Add Instruction]].

>[!important] Importance of FLOPs
> ![[flops_use_case.gif|400]]
> 
> In computer graphics, almost everything can be represented using triangles. Rendering those graphics depends on the **x, y, z** coordinates of each triangle’s vertices, and these coordinates are stored as **floating-point numbers**.
> 
> Since rendering involves tons of floating-point operations, like matrix multiplications, lighting, and transformations. GPUs were designed to handle them efficiently.
> 
> Later, people realized that **AI computations** also involve massive amounts of independent floating-point operations (like multiplying matrices and adding results), which are very similar to what happens in graphics rendering.
> 
> So GPUs naturally shine in AI workloads too, because they’re built to perform **a huge number of floating-point calculations in parallel**, exactly what both graphics and deep learning need.

## Comparison with CPU
---
![[cpu vs gpu comparison.png|700]]

- [[CPU]] one core is way more power, and able to handle complication logics like [[Pipeline Branching]] and a lot of the real world application needs to run [[Instruction]] in a sequential manner
- GPU shines when we need [[Concurrency (并发)#Parallelism (并行性)]] and the workload doesn't depend on each other

