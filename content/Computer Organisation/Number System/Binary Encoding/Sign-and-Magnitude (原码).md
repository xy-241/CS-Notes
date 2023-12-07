---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-07-14T18:15:00
Last Date: 2023-12-07T00:25:41+08:00
References: 
---
## Abstract
- Represent positive and negative decimal integers in binary
- Divide the number of bits into 2 parts, one part for negative number, another part for positive number


## Cons
### Require extra [[Logic Gates]]
- The [[Adder]] logic cant be used for subtraction
- This can be avoided using [[1's Complement (反码)]] or [[2's Complement (补码)]]
![[signed magnitude representation.png]]


## Terminologies
### Sign Bit
- The first bit from left
- 0 denotes positive 
- 1 denotes negative


## Reference 
- [Hello-Algo](https://www.hello-algo.com/chapter_data_structure/number_encoding/#331)

