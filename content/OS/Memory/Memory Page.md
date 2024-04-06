---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-04-06T20:20:09+08:00
References: 
---
## Abstract
---
- Depends on the [[OS]] & hardware architecture. Usually each page share a fixed size of `4kb`(check with `getconf PAGESIZE`)
- The `4kb` memory page is one contiguous space in the [[Main Memory]]


## Memory Page Size
---
- We need to find a fine balance overhead and flexibility when deciding the size of the [[Memory Page]]
- With more overhead, it comes with more flexibility, vice versa 
- When we want more flexibility, we should reduce the memory page size, so we can more freely to manipulate the [[Main Memory]] with [[Virtual Memory]]. But that means we more space for [[Page Table]] to manage mapping

>[!caution]
> If the memory page size is too big, this may leads to a lot of wasted memory space. For example, the memory page size is `10MB`, and my program needs `10.00001MB`. The [[Kernel]] will issue 2 memory page that are `10MB` each, this means `9.99999MB` is wasted. Imagine I have a lot of programs with `10.00001MB` in my computer, that means we waste almost half of the available main memory!

## Terminologies
---
### Page Number
- A number to identify a [[Memory Page]]