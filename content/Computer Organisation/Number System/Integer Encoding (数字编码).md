---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-08, 21:54
Last Date: 2024-06-06T19:59:30+08:00
References: 
---
## Abstract
---
- There are 3 variants; [[#Sign-and-Magnitude (原码)]], [[#1's Complement (反码)]] and [[#2's Complement (补码)]], computer uses the **2's Complement** to store integer, because it solves the flaws of [[#Sign-and-Magnitude (原码)]] and [[#1's Complement (反码)]]
- Below is a 4-bits **Integer Encoding** under the 3 variants
![[integer_encoding.png|400]]


## Sign-and-Magnitude (原码)
---
- Represent positive and negative decimal integers in binary with the help of [[#Sign Bit]]
- Divide the number of bits into 2 parts, one part for negative number, another part for positive number



>[!caution] Unable to performance subtraction with Adder
> ![[signed magnitude representation.png|300]]
> 
> The [[Adder]] is **unable to perform subtraction** on sign-and-magnitude encoded integers, an **explicit** [[Logic Gates]] for substation is needed.  This can be avoided using [[#1's Complement (反码)]] or [[#2's Complement (补码)]].


### Sign Bit
- The first bit from left
- $0$ denotes **positive** 
- $1$ denotes **negative**
### Magnitude Bit
- All the bits in the encoding except [[#Sign Bit]]

## 1's Complement (反码)
---
- For **negative number**, all bits are inverted except the [[#Sign Bit]] which is $1$ and **positive number** unchanged 
- We can invert all bits except [[#Sign Bit]] to obtain [[#Sign-and-Magnitude (原码)]]

![[1s_complement.png|400]]

>[!success] Reuse adder for subtraction
> We re-can use [[Adder]] [[Logic Gates]], without the need to build a subtraction logic gates.

>[!caution] Mathematically wrong definition of 0
> We have `+0` (when all bits are 0) & `-0`(when all bits are 1) under this encoding, this can be solved by [[#2's Complement (补码)]].
## 2's Complement (补码)
---
- This builds on top of [[#1's Complement (反码)]], the only difference is to add extra `1` to the *negative number* in [[#1's Complement (反码)]] to have **only 1 binary encoding** for **0**
- We can calculate the decimal value by taking the value [[#Sign Bit]] (negative) and perform addition with value of [[#Magnitude Bit]] (all are positive)

![[2's Complement.png|400]]

## Integer Overflow
---
- When a value is out of the range that the [[Datatype]] can hold

### Check for Integer Overflow
- If the sign of the two operand are the same, and the sign of the result is different. Then we have an **[[Integer (整数)]] overflow**
- Think about how can the sum of two positive integer result in a negative number
- And how the sum of two negative integer result in a positive number
- The sum of a negative and positive integer guaranteed no integer overflow  


## Reference 
---
- [Sign-and-Magnitude Addition and Subtraction](https://www.youtube.com/watch?v=sJXTo3EZoxM)
- [Hello-Algo](https://www.hello-algo.com/chapter_data_structure/number_encoding/#331)