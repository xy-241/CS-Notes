---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-29T14:24:00
Last Date: 2024-01-06T21:06:28+08:00
References: 
---
## Abstract
---
- A [[Multi-core Chip]] with thousands of tiny cores


## Benefits
---
### Optimised for Parallel Computing
- Look at the [[CPU#Core]] it has!
### Allows games to perform a ton of Linear Algebra in parallel
- We can calculate pixels in batches or parallel 
### Great for AI related work
- Allow training Deep Learning Models that perform tons Matrix Multiplication on dataset

## Cons
---
### Hard to program
- That is why [Nvidia's CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit) is good news. It allows us to program GPU, giving that flexibility into GPU

## Comparison with CPU
---
![[cpu vs gpu comparison.png|700]]

- [[CPU]] one core is way more power, and able to handle complication logics like [[Branching]]
- However, a lot of the real world application needs to run [[Instruction]] in a sequential manner
- GPU shines when we need [[High-performance Computing#Parallelism (并行性)]]

