---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:09+08:00
Last Date: 2024-01-06T18:56:58+08:00
References: 
---
## Abstract
---

<img src="https://yoginsavani.com/wp-content/uploads/2023/05/Big-endian-and-Little-endian.png" width="500">

**Big-endian**
- We locate the most significant byte of the 32-bit integer at the byte with the lowest address in the memory (This is how we usually write numbers, from left to right)
- Dominant ordering in networking protocols due influence of the [[Internet Protocol (IP) Suite]]

***Small-endian***
- We locate the least significant byte of the data at the byte with the lowest address
- Dominant ordering in processor architecture, because it offers certain advantages in terms of memory access (we can confidently say that the first 2 bytes are 0-31bits)