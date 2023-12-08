---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-07-14T18:05:00
Last Date: 2023-12-08T21:33:51+08:00
References: 
---
## Abstract 
* For *negative number*, all bits are inverted except the [[Sign-and-Magnitude (原码)#Sign Bit|Sign Bit]] which is 1 when we need to perform the computation
* For *positive number*, all bits remind the same
* After the computation, we invert all bits except [[Sign-and-Magnitude (原码)#Sign Bit]] to obtain the final answer. We still read the answer in the format of [[Sign-and-Magnitude (原码)]]
![[1s_complement.png]]

## Benefits
### Reuse [[Logic Gates]]
- We re-can use [[Adder]] logic gates, without building extra logic circuit like a subtraction logic gates 

## Cons
### Mathematically wrong definition of 0
- We have `+0` (when all bits are 0) & `-0`(when all bits are 1) under this encoding, this can be solved by [[2's Complement (补码)]]