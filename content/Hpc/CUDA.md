---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - hpc
  - OS
Creation Date: 2025-10-04, 14:09
Last Date: 2025-10-04T18:59:05+08:00
References:
draft:
description:
---
## Intro
---
- A CUDA program ends with `.cu`. It’s basically a C++ program but with some special parts that can run on the GPU instead of the CPU. The `.cu` file defines the main logic of your program and also decides which parts should run on the GPU.
- The CPU is called the **host**, and the GPU is called the **device**. In CUDA, you explicitly tell it which functions belong to the host and which to the device with a **specifier.** The ones that run on the GPU are called **kernels**.
- If a function doesn’t have any specifier, it defaults to `__host__`, meaning it runs on the CPU as normal C++ code.

>[!important] 2 kinds of GPU-related functions
> - `__global__`: runs **on the GPU**, but is **called from the CPU**. This is your main kernel.
> - `__device__`: runs **on the GPU**, and can only be **called by other GPU code** (not by the CPU).

## CUDA’s Execution Structure
---
- When we launch a function that’s meant to run on the GPU, CUDA sets up a logical structure called a **grid**. 
- The grid is made up of **thread blocks**, and each block contains multiple **[[Thread|threads]]** which are the actual workers that do the computation.
- Each block runs **independently**, usually on a GPU **Streaming Multiprocessor (SM)** (kind of like a core, but each SM can handle multiple blocks).

>[!code] CUDA’s built-in variables to understand this structure
> - `gridDim` → the dimension of the grid
> - `blockIdx` → which block this thread belongs to
> - `blockDim` → the dimension of one block
> - `threadIdx` → the position (ID) of this thread within its block

## Dimensions of Work
---
- Blocks can be **1D**, **2D**, or **3D**, depending on the problem we’re solving:
	- **1D block** → good for simple lists or arrays
	- **2D block** → great for images (rows × columns)
	- **3D block** → used for 3D volumes or cubes
- This dimensional flexibility helps map threads directly to data structures (like pixels or voxels) in a natural way.

## Defining Grid and Block Layout
---
```cpp
dim3 threadsPerBlock(4, 4, 4); // 64 threads per block
dim3 blocksPerGrid(8, 4);      // 32 blocks in total
```

- Each thread has its own mini coordinate system. `(x, y)` for 2D, `(x, y, z)` for 3D). These help CUDA automatically figure out which piece of data that thread should handle.

## Launching the Kernel
---
```cpp
kernel_name<<< Dg, Db, Ns, S >>>(arguments);
```

- `kernel_name` → the GPU function we’re executing
- `Dg` → grid dimension (`dim3`)
- `Db` → block dimension (`dim3`)
- `Ns` → optional shared memory size per block (in bytes)
- `S` → optional CUDA stream (acts like a command queue that allows overlapping of computation and data transfer)
- If you don’t specify `Ns` or `S`, CUDA just uses the defaults (`0` and the default stream).

## Thread Identification
---
```cpp
// Combine threadIdx and blockIdx to calculate a Global Index
int global_x = blockIdx.x * blockDim.x + threadIdx.x;
```

- Each thread knows its own position using built-in CUDA variables:
	- `threadIdx` → its position **within the block**
	- `blockIdx` → its block’s position **within the grid**
- This lets every thread figure out exactly which data element it should process.

## CUDA Compilation
---
- To compile CUDA code, we use the **`nvcc` compiler**, the NVIDIA’s CUDA compiler.
- Not all NVIDIA GPUs support the same features. Each GPU generation has a **Compute Capability (CC)** number, like `7.0`, `8.0`, or `9.0`.
- This number tells CUDA **what features or instructions the GPU supports**.

>[!important] Compile with the desired compute capability
> If you don’t tell CUDA which GPU to target, it may default to an older architecture. You can specify the target architecture explicitly using flags like:
> - `-arch=sm_70` → compile for GPU with **Compute Capability 7.0**
> - `-arch=native` → automatically match the GPU where `nvcc` is running

## Multi-Instance GPU
---
- a feature introduced on NVIDIA’s **A100** and **H100** GPUs, each instance behaves like a **separate GPU**:
- It lets you **split one physical GPU into multiple isolated “slices”**, so different users or jobs can safely share the same GPU **without interfering** with each other.