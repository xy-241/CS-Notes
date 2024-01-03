---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-01-03T15:44:20+08:00
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

## Terminologies
---
### Page Number
- A number to identify a [[Memory Page]]