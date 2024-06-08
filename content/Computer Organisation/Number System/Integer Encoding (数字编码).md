---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-08, 21:54
Last Date: 2024-06-08T20:19:10+08:00
References: 
---
## Abstract
---
- Integer encoding is the process of **representing decimal integers** in the **form of zeros and ones**
- There are 3 integer encoding variants; [[#Sign-and-Magnitude (原码)]], [[#1's Complement (反码)]] and [[#2's Complement (补码)]], computer uses the **2's Complement** to store integer, because it solves the flaws of [[#Sign-and-Magnitude (原码)]] and [[#1's Complement (反码)]]
- Below is a **4-bits** integer encoding under the 3 variants

| Decimal | Signed Magnitude | One's Complement | Two's Complement |
| ------- | ---------------- | ---------------- | ---------------- |
| $+7$    | $0111$           | $0111$           | $0111$           |
| $+6$    | $0110$           | $0110$           | $0110$           |
| $+5$    | $0101$           | $0101$           | $0101$           |
| $+4$    | $0100$           | $0100$           | $0100$           |
| $+3$    | $0011$           | $0011$           | $0011$           |
| $+2$    | $0010$           | $0010$           | $0010$           |
| $+1$    | $0001$           | $0001$           | $0001$           |
| $+0$    | $0000$           | $0000$           | $0000$           |
| $-0$    | $1000$           | $1111$           | $0000$           |
| $-1$    | $1001$           | $1110$           | $1111$           |
| $-2$    | $1010$           | $1101$           | $1110$           |
| $-3$    | $1011$           | $1100$           | $1101$           |
| $-4$    | $1100$           | $1011$           | $1100$           |
| $-5$    | $1101$           | $1010$           | $1011$           |
| $-6$    | $1110$           | $1001$           | $1010$           |
| $-7$    | $1111$           | $1000$           | $1001$           |
| $-8$    | -                | -                | $1000$           |

>[!important]
> For the three integer encoding variants, the **encodings** for **positive integer** are **exactly the same**.

## Sign-and-Magnitude (原码)
---

| Positive Decimal | Signed Magnitude | Negative Decimal | Signed Magnitude |
| ---------------- | ---------------- | ---------------- | ---------------- |
| $+0$             | $0000$           | $-0$             | $1000$           |
| $+1$             | $0001$           | $-1$             | $1001$           |
| $+2$             | $0010$           | $-2$             | $1010$           |
| $+3$             | $0011$           | $-3$             | $1011$           |
| $+4$             | $0100$           | $-4$             | $1100$           |
| $+5$             | $0101$           | $-5$             | $1101$           |
| $+6$             | $0110$           | $-6$             | $1110$           |
| $+7$             | $0111$           | $-7$             | $1111$           |

- **Integer encoding** of **positive** and **negative decimal integers** with the help of [[#Sign Bit]]
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

| Decimal | Signed Magnitude | One's Complement |
| ------- | ---------------- | ---------------- |
| $+0$    | $0000$           | $0000$           |
| $-0$    | $1000$           | $1111$           |
| $-1$    | $1001$           | $1110$           |
| $-2$    | $1010$           | $1101$           |
| $-3$    | $1011$           | $1100$           |
| $-4$    | $1100$           | $1011$           |
| $-5$    | $1101$           | $1010$           |
| $-6$    | $1110$           | $1001$           |
| $-7$    | $1111$           | $1000$           |

- Basically same as the [[#Sign-and-Magnitude (原码)]], but for **negative decimal integers**,  **all bits** in the integer encoding are **inverted** **except the [[#Sign Bit]]**



>[!success] Reuse adder for subtraction
> ![[1s_complement.png|400]]
>
> We re-can use [[Adder]] [[Logic Gates]], without the need to build a subtraction logic gates.

>[!caution] Mathematically wrong definition of 0
> We have `+0` (when all bits are 0) & `-0`(when all bits are 1) under this encoding, this can be solved by [[#2's Complement (补码)]].
## 2's Complement (补码)
---

| Decimal | One's Complement | Two's Complement |
| ------- | ---------------- | ---------------- |
| $+0$    | $0000$           | $0000$           |
| $-0$    | $1111$           | $0000$           |
| $-1$    | $1110$           | $1111$           |
| $-2$    | $1101$           | $1110$           |
| $-3$    | $1100$           | $1101$           |
| $-4$    | $1011$           | $1100$           |
| $-5$    | $1010$           | $1011$           |
| $-6$    | $1001$           | $1010$           |
| $-7$    | $1000$           | $1001$           |
| $-8$    | -                | $1000$           |


- This builds on top of [[#1's Complement (反码)]], the only difference being to **add $1$** to the **1's complement (反码) integer encoding** for **negative numbers**



>[!success] Mathematically correct definition of Zero
> The integer encoding for $+0$ and $-0$ is $0000$, thus **eliminating** the need to have two different integer encodings for $0$.

>[!question] How do we convert from 2's complement to decimal value
> The decimal value = the **negative decimal value** of  [[#Sign Bit]] + the **positive sum** of the [[#Magnitude Bit]].
> 
> ![[2's Complement.png|400]]

## Integer Overflow
---
- When a value is out of the range that the [[Datatype]] can hold

>[!important] Check for Integer Overflow
> If the **sign** of the two operand is the **same**, and the **sign of the result** is **different**. Then we have an **[[Integer (整数)]] overflow**.  
> 
> How can the sum of two positive integer result in a negative number, and how the sum of two negative integer result in a positive number?
> 
> The **sum** of a **negative** and **positive** integer **guaranteed** **no integer overflow**.



## Reference 
---
- [Sign-and-Magnitude Addition and Subtraction](https://www.youtube.com/watch?v=sJXTo3EZoxM)
- [Hello-Algo](https://www.hello-algo.com/chapter_data_structure/number_encoding/#331)