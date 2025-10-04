---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - hpc
  - os
Creation Date: 2025-10-04, 18:27
Last Date: 2025-10-04T22:12:47+08:00
References:
draft:
description:
---
## Memory Allocation
---
```cpp
cudaMalloc(pointer to the memory pointer, number of bytes to allocate)
```

- Allocates memory on the GPU. The first argument is a pointer to your pointer so that the caller’s variable gets updated with the address of the allocated GPU memory.

```cpp
cudaMemcpy(destination, source, size, direction)
```

- Copies data between the CPU and GPU
- `cudaMemcpyHostToDevice`: from CPU → GPU
- `cudaMemcpyDeviceToHost`: from GPU → CPU

```cpp
cudaFree(pointer to gpu memory)
```

- frees the GPU memory previously allocated with `cudaMalloc()` to avoid [[Address Space#Memory leak|memory leaks]].

```cpp
__device__ int result[10];
```

- `result` array is stored directly in the GPU's **global memory**.
- It is not created per block, there is only one global copy shared by all blocks and threads

## CUDA Synchronization
---
```cpp
cudaDeviceSynchronize()
```

- [[Barrier (屏障)|Barrier]] that waits for all GPU threads to finish before moving on. Without this, the CPU might continue executing while the GPU is still running tasks in the background.


## CUDA Thread Indexing
---
- The cheatsheet below helps because computer memory is laid out linearly, while GPUs often model real-world problems like 2D images or 3D objects. Proper thread indexing ensures that this linear memory maps correctly to those multidimensional problems, preventing corrupted results and redundant computations.

![[CUDA-Thread-Indexing-Cheatsheet.pdf#page=2]]

```cpp
printf("Grid: (%d,%d,%d), Block: (%d,%d,%d), BlockIdx: (%d,%d,%d), ThreadIdx: (%d,%d,%d), globle index: %d\n",
	gridDim.x, gridDim.y, gridDim.z,
	blockDim.x, blockDim.y, blockDim.z,
	blockIdx.x, blockIdx.y, blockIdx.z,
	threadIdx.x, threadIdx.y, threadIdx.z,
	threadId);
```

- The above print code snippet is useful to observe which block and thread process what