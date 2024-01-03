---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-18T20:46:09+08:00
Last Date: 2023-08-18T20:46:09+08:00
References:
---
![[endianness-2048x634.png]]

***Big-endian***
- we locate the most significant byte of the 32-bit integer at the byte with the lowest address in the memory (This is how we usually write numbers, from left to right)
- dominant ordering in networking protocols due influence of the [[Internet Protocol (IP) Suite]]

***Small-endian***
- we locate the least significant byte of the data at the byte with the lowest address
- dominant ordering in processor architecture, because it offers certain advantages in terms of memory access (we can confidently say that the first 2 bytes are 0-31bits)