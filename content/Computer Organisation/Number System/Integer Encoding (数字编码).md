---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-08, 21:54
Last Date: 2024-01-13T18:09:57+08:00
References: 
---
## Abstract
---
- There are [[#3 Variants]], computer use the [[#2's Complement (补码)]] variant to store integer
- Computers use [[#2's Complement (补码)]] to store the integers, since it solves the flaws in [[#Sign-and-Magnitude (原码)]] and [[#1's Complement (反码)]]
- Below is a 4-bits **Integer Encoding** under the [[#3 Variants]]
![[integer_encoding.png|400]]


## 3 Variants
---
### Sign-and-Magnitude (原码)
- Represent positive and negative decimal integers in binary with the help of [[#Sign Bit]]
- Divide the number of bits into 2 parts, one part for negative number, another part for positive number

![[signed magnitude representation.png|300]]
>[!caution] Require extra [[Logic Gates]]
>- The [[Adder]] logic gates cant be used for subtraction
>- This can be avoided using [[#1's Complement (反码)]] or [[#2's Complement (补码)]]
### 1's Complement (反码)
- For *negative number*, all bits are inverted except the [[#Sign Bit]] which is 1 and *positive number* unchanged 
- We can invert all bits except [[#Sign Bit]] to obtain [[#Sign-and-Magnitude (原码)]]

![[1s_complement.png|400]]

>[!success] Reuse [[Logic Gates]]
>- We re-can use [[Adder]] logic gates, without building extra logic circuit like a subtraction logic gates 

>[!caution] Mathematically wrong definition of 0
>- We have `+0` (when all bits are 0) & `-0`(when all bits are 1) under this encoding, this can be solved by [[#2's Complement (补码)]]
### 2's Complement (补码)
- This builds on top of [[#1's Complement (反码)]], the only difference is to add extra `1` to the *negative number* in [[#1's Complement (反码)]] to have **only 1 binary encoding** for **0**
- We can calculate the decimal value by taking the value [[#Sign Bit]] (negative) and perform addition with value of [[#Magnitude]] (all are positive)

![[2's Complement.png|400]]

## Integer Overflow
---
- When a value is out of the range that the [[Datatype]] can hold

### Check for Integer Overflow
- If the sign of the two operand are the same, and the sign of the result is different. Then we have an *[[Integer (整数)]] overflow*
- Think about how can the sum of two positive integer result in a negative number
- And how the sum of two negative integer result in a positive number
- The sum of a negative and positive integer guaranteed no integer overflow  

## Terminologies
---
### Sign Bit
- The first bit from left
- 0 denotes positive 
- 1 denotes negative
### Magnitude
- All the bits in the encoding except [[#Sign Bit]]


## Reference 
---
- [Sign-and-Magnitude Addition and Subtraction](https://www.youtube.com/watch?v=sJXTo3EZoxM)
- [Hello-Algo](https://www.hello-algo.com/chapter_data_structure/number_encoding/#331)