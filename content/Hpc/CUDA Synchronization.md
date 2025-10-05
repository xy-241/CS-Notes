---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - hpc
  - OS
Creation Date: 2025-10-05, 23:20
Last Date: 2025-10-05T23:27:34+08:00
References:
draft:
description:
---
## Synchronization with CPU
---
```cpp
cudaDeviceSynchronize()
```

- [[Barrier (屏障)|Barrier]] that waits for all GPU threads to finish before moving on. Without this, the CPU might continue executing while the GPU is still running tasks in the background.

## CUDA Thread Synchronization
---
- For threads **within the same block (or across the device)** that access the **same memory**, we can ensure that only **one thread updates a memory location at a time** using atomic operations such as `atomicAdd()`, `atomicSub()`, or `atomicMax()`. 
- These guarantee **mutual exclusion**. No two threads can modify that variable simultaneously, preventing [[Race Condition (竞态条件)|race conditions]].

## CUDA Barrier Synchronization
---
- We can use `__syncthreads()` to make all threads **within the same [[CUDA#CUDA’s Execution Structure|block]]** wait until every other thread reaches that point.
- This ensures that all memory writes (especially to **shared memory**) are visible (Other threads can actually _see_ the new value that was written) before anyone continues.
- However, `__syncthreads()` only works **within a block**, there’s **no built-in barrier across multiple blocks**.
