---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:38:44
Last Date: 2024-07-22T16:53:45+08:00
---
## Abstract
---
- Can be either [[Virtual Memory#Virtual Address]] or [[Main Memory#Physical Address]]
- For a k-bit address, the addressable space is 2^k
- Largest address possible is 2^k-1, because we count from 0

### Byte Addressing
- 1 [[Computer Data Representation#Byte]] for every [[Memory Address]]

### Word Addressing
- 1 [[Computer Data Representation#Word]] for every [[Memory Address]]

## Memory Addressing
---
- Methods used to access data stored

### Sequential Addressing
- Ordered access, time depends on position
- One example is tape storage

### Direct Addressing
- The data retrieval time depends on the current and target positions of the read/write head. Unlike [[#Sequential Addressing|sequential addressing]], the head can jump directly to the target location, bypassing everything in between.
- One example is [[Hard Disk]]

### Random Access Addressing
- Allows **direct access to any memory location** in **constant time**. This means a specific [[Memory Address|memory address]] can be **accessed instantly**, regardless of its position within the memory, exhibiting $O(1)$ time complexity. This contrasts with [[#Sequential Addressing|sequential access]], where memory must be accessed in order, or [[#Direct Addressing|direct addressing]], which requires jumping to a specific location
- One example is [[Main Memory#DRAM]]

### Associative Addressing
- **Content-based access method** where there is no specific [[Memory Address|memory address]] to expect the data. The storage system stores both the data and the address it originated from, **associating** a [[CPU Cache#Cache Line|tag in the cache]] with the corresponding location in the [[Main Memory|main memory]]
- One example is [[CPU Cache]] which is [[Main Memory#SRAM]]


## References
---
- [Ep 072: Memory Hierarchy Addressing Modes and SRAM versus DRAM Technology - YouTube](https://youtu.be/gitpEy-NLwk?si=-Vsr6qdQRzrqKBFh)

