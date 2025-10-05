---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - hpc
  - os
Creation Date: 2025-10-04, 18:27
Last Date: 2025-10-05T23:00:06+08:00
References:
draft:
description: Learn how CUDA memory allocation works with cudaMalloc, cudaMemcpy, and cudaFree. Understand GPU vs CPU memory, __device__ and __managed__ variables, Unified Memory trade-offs, synchronization using cudaDeviceSynchronize(), and the full CUDA memory hierarchy, from registers and shared memory to global, constant, and texture memory. Explained with clear examples and tables.
---
## Memory Allocation
---

```cpp
__device__ int result[10];
```

- `result` array is stored directly in the GPU's **global memory**.
- It is not created per block, there is only one global copy shared by all blocks and threads

```cpp
cudaFree(pointer to gpu memory)
```

- frees the GPU memory previously allocated with `cudaMalloc()` to avoid [[Address Space#Memory leak|memory leaks]].


### Dynamic Memory Allocation

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


### Static Memory Allocation

```cpp
__device__ int result;   // lives in GPU global memory

int start = 5;
cudaMemcpyToSymbol(result, &start, sizeof(start));
```

- This means: “Take the value `5` from the CPU variable `start` and store it inside the GPU’s global variable `result`.”
- `cudaMemcpyToSymbol()` and `cudaMemcpyFromSymbol()` are the special functions used to **move data between the CPU (host) and GPU global memory variables** (those declared with `__device__` or `__constant__`).

## CUDA Memory Management
---
- `__device__` basically tells CUDA to **allocate memory on the GPU’s VRAM (global memory)**.  The CPU **can’t directly access** this memory — it lives entirely on the device side.  So if you want to read or write it from the CPU, you must explicitly **copy data across** using `cudaMemcpy()`.
- To make life easier, CUDA provides Unified Memory, through `__managed__` or `cudaMallocManaged()`. This gives you a single variable or pointer that both CPU and GPU can “see”, so you can use it on either side without doing manual copies.
- But here’s the catch: under the hood, the data still lives in **two separate physical places** CPU RAM and GPU VRAM.  CUDA just **moves (or “pages”) the data automatically** when one side needs it. This automation is convenient but can cause **performance inefficiency**,  because you no longer control _when_ or _how often_ data gets transferred.

>[!tip] When Unified Memory is okay
> 1. You’re prototyping or learning CUDA.
> 2. Your program has small or infrequent data transfers.
> 3. The GPU and CPU share a fast interconnect.
> 4. You want code portability (same code can run on devices with or without discrete GPUs).




## CUDA Memory Hierarchy
---

| **Memory Type**                         | **Scope / Who Uses It**  | **Location (Hardware)**        | **Speed (Latency)**       | **Bandwidth (Example: H100)** | **Size (Typical)**             | **Access Type** | **Declared As**                               | **Notes / Analogy**                                                     |
| --------------------------------------- | ------------------------ | ------------------------------ | ------------------------- | ----------------------------- | ------------------------------ | --------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| **Registers (RMEM)**                    | Per Thread               | Inside each SM (SRAM)          | ⚡ ~1 cycle (fastest)      | ~124 TB/s                     | ~256 KB per SM (~33 MiB total) | R/W             | Compiler decides (local vars)                 | Thread’s private brain 🧠 — fastest but tiny.                           |
| **Shared Memory (SMEM)**                | Per Block                | Inside SM (SRAM)               | ⚡ ~20–30 cycles           | ~31 TB/s                      | ~256 KB per SM                 | R/W             | `__shared__ float x[];`                       | Whiteboard for threads in the same block 🧑‍🏫.                         |
| **L1 Cache**                            | Per SM                   | On-chip SRAM                   | ⚡ ~20–30 cycles           | ~31 TB/s                      | ~256 KB per SM                 | Auto            | Managed by hardware                           | Stores recent global loads. Merged with SMEM in modern GPUs.            |
| **Dynamic Shared Memory (DSMEM)**       | Per GPC (cluster of SMs) | On-chip SRAM                   | ⚡ ~30–40 cycles           | —                             | ~3.5 MiB total (example)       | R/W             | Configured at kernel launch                   | Shared scratchpad between nearby SMs.                                   |
| **L2 Cache**                            | Whole GPU                | On-chip SRAM                   | 🐢 ~200 cycles            | ~12–14 TB/s                   | ~50 MiB                        | Auto            | Managed by hardware                           | Shared among all SMs — like a GPU-wide cache.                           |
| **Local Memory**                        | Per Thread               | In global VRAM (off-chip DRAM) | 🐢 ~400–500 cycles        | ~3 TB/s                       | Depends (spilled vars)         | R/W             | `float x;` (auto-managed)                     | Pretends to be “local” but actually slow — used when registers run out. |
| **Global / Device Memory (VRAM / HBM)** | Whole GPU                | Off-chip DRAM                  | 🐌 ~500 cycles (slowest)  | ~3 TB/s                       | 40–80 GB                       | R/W             | `__device__ float x[];` or via `cudaMalloc()` | Warehouse of data 📦 — huge but slow to access.                         |
| **Constant Memory**                     | Whole GPU                | Cached in L1/L2                | ⚙️ ~1 cycle (when cached) | —                             | 64 KB limit                    | Read-only       | `__constant__ float x;`                       | For constants shared by all threads (like configs).                     |
| **Texture Memory**                      | Whole GPU                | Cached in special unit         | 🐢 slow (optimized reads) | —                             | —                              | Read-only       | `__texture__ float x;`                        | For images, 2D/3D spatial data — supports interpolation.                |

- **Registers** and **shared memory** = top-tier performance targets.
- **Global / constant / texture memory** = for large or read-only data. 
- **Good CUDA kernels** minimize trips to global memory.

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
