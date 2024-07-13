---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-07-12T16:36:28+08:00
References: 
---
## Abstract
---
- **Smallest unit** of **memory managed** by an [[OS]]


>[!important]
> The **size of a memory page** depends on the **OS** and **hardware architecture**. Usually, each page has a fixed size of `4 KB` (you can check this using the command `getconf PAGESIZE`).
> 
>  This `4 KB` memory page represents a **contiguous block** of space in the [[Main Memory]]. However, **two consecutive memory pages** are **not necessarily located** in **contiguous spaces** within the main memory.



### Page Number
- A number to identify a [[Memory Page]]

### Dirty Memory Page
- [[Memory Page]] that has been modified in the [[Main Memory]], and **needs to be written back** to **secondary storage** ([[Flash Memory]] or [[Hard Disk]]) to **ensure consistency** and **data integrity**

## Memory Page Size
---
- We need to find a fine balance overhead and flexibility when deciding the size of the [[Memory Page]]
- With more overhead, it comes with more flexibility, vice versa 
- When we want more flexibility, we should reduce the memory page size, so we can more freely to manipulate the [[Main Memory]] with [[Virtual Memory]]. But that means we more space for [[Page Table]] to manage mapping

>[!caution]
> If the memory page size is too big, this may leads to a lot of wasted memory space. For example, the memory page size is `10MB`, and my program needs `10.00001MB`. The [[Kernel]] will issue 2 memory page that are `10MB` each, this means `9.99999MB` is wasted. Imagine I have a lot of programs with `10.00001MB` in my computer, that means we waste almost half of the available main memory!
