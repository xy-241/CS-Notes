---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - hpc
  - OS
Creation Date: 2025-10-05, 23:20
Last Date: 2025-10-09T16:45:41+08:00
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

### Warp-Level Synchronization and Reduction

```cpp
__global__ void warpReduce(float *input, float *output) {
    float val = input[threadIdx.x];

    // Warp-level reduction (no __syncthreads needed)
    for (int offset = warpSize / 2; offset > 0; offset >>= 1) {
        val += __shfl_down_sync(0xffffffff, val, offset);
    }

    // Write result from lane 0 of each warp
    if ((threadIdx.x & 31) == 0)
        output[threadIdx.x >> 5] = val;
}
```

- `__shfl_down_sync()` is commonly used for efficient reductions within the same warp. Threads in a warp execute in **lockstep**, meaning they all run the same instruction at the same time, so no extra synchronization is needed.
- You **shouldn’t** put `__syncthreads()` inside the loop that uses `__shfl_down_sync()`. If other warps in the block don’t reach that barrier, the warp doing the shuffle will get stuck, causing a [[Deadlock (死锁)|deadlock]].
- `__syncthreads()` is only needed when **sharing data between warps** (e.g., through [[CUDA Memory#CUDA Memory Hierarchy|shared memory]]), not for communication within a single warp.