---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-08, 21:54
Last Date: 2024-09-11T21:59:19+08:00
References: 
---
## Abstract
---
- Integer encoding is the process of **representing decimal integers** in the **form of zeros and ones**, supporting both **positive** and **negative** **integer**
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

>[!important]
> $1010_2$ is a positive binary number, $-(1010_2)$ is a negative binary number. All the bits are [[#Magnitude Bit]], no [[#Sign Bit]].
> 
> $1010_{sm}$ is a negative binary number encoded using [[#Sign-and-Magnitude (原码)]].
> 
> $1010_{1s}$ is a negative binary number encoded using [[#1's Complement (反码)]].
> 
> $1010_{2s}$ is a negative binary number encoded using [[#2's Complement (补码)]].
> 
> >[!example] Examples
> > 
> > The 8-bit 2’s complement representation of $1010_2$ is $00001010_{2s}$.
> > 
> > The 8-bit 2’s complement representation of $-(11111111_2)$ is $00000001_{2s}$.
### Sign Bit
- $0$ denotes **positive** 
- $1$ denotes **negative**
- Usually the first bit from left, the **most significant bit (MSB)**
### Magnitude Bit
- Represent the magnitude (**absolute value**) of the integer in **standard binary representation**

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

- Sign-and-magnitude is a method for representing both **positive** and **negative integers** using a [[#Sign Bit]] and [[#Magnitude Bit|magnitude bits]]. The **most significant bit (MSB)** is reserved as the sign bit




>[!caution] Unable to performance subtraction with Adder
>![[sign_and_magnitude_substraction.svg|250]]
> 
> The [[Adder]] is **unable to perform subtraction** on sign-and-magnitude encoded integers, an **explicit** set of [[Logic Gates]] for substation is needed.  This can be avoided using [[#1's Complement (反码)]] or [[#2's Complement (补码)]].




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

- Basically same as the [[#Sign-and-Magnitude (原码)]], but for **negative decimal integers**, all [[#Magnitude Bit|magnitude bits]] are **inverted** 



>[!success] Reuse adder for subtraction
> ![[1's_complement_reuse_adder _for_subtraction.svg]]
>
> We can **reuse** [[Adder]] [[Logic Gates]] to perform subtraction without the need for dedicated subtraction logic gates.

>[!important] Obtaining 1s-complement
> We can obtain the two's complement, also known as the negative representation of a positive number, using the formula: $-x = 2^{n}- x - 1$.



>[!caution] Mathematically wrong definition of 0
> We have `+0` (when all bits are 0) & `-0`(when all bits are 1) under this encoding, this can be solved with [[#2's Complement (补码)]].

>[!tip] Trick to convert from 1's complement to decimal value
> The **decimal value** equals the **negative decimal value** of  [[#Sign Bit]] + the **positive sum** of the [[#Magnitude Bit|magnitude bits]]. 
> 
> The weight of the sign bit is $-2^{n-1} + 1$, where $n$ is the total number of bits the binary number has.

### 1s Complement in Addition and Subtraction
- For addition, we can simply perform standard binary addition
- For subtraction, we need to find the [[#1's Complement (反码)|1's complement]] of the number we want to subtract, and then perform standard binary addition

>[!question] What if there is a carry-out from the most significant bit (MSB)?
> Add `1` to the result.

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

![[2's_complement.svg]]


>[!success] Mathematically correct definition of Zero
> The integer encoding for both $+0$ and $-0$ is $0000$, thus **eliminating** two different integer encodings for $0$.

>[!important] Obtaining 2s-complement
> We can obtain the two's complement, also known as the negative representation of a positive number, using the formula: $-x = 2^{n}- x$.

>[!tip] Trick to convert from 2's complement to decimal value
> ![[2's_complement_to_integer_trick.svg|250]]
> 
> The **decimal value** equals the **negative decimal value** of  [[#Sign Bit]] + the **positive sum** of the [[#Magnitude Bit|magnitude bits]]. 
> 
> The weight of the sign bit is $-2^{n-1}$, where $n$ is the total number of bits the binary number has.

>[!tip] Trick to obtain 2's complement
> Start from the rightmost bit and move left. Write down each bit as it is until you encounter the first '1'. From that point onwards, invert all the remaining bits.

>[!important] Complement on fraction
> Given `0101.01`, the 2s complement is `1010.11`.


### 2s Complement in Addition and Subtraction
- For addition, we can simply perform standard binary addition
- For subtraction, we need to find the [[#2's Complement (补码)|2's complement]] of the number we want to subtract, and then perform standard binary addition

>[!question] What if there is a carry-out from the most significant bit (MSB)?
> Simply ignore it.

>[!seealso] A more hardware friendly way of detecting integer overflow
> Comparing the carry-in and carry-out of the most significant bit. **Integer overflow occurs if they are different.**
## Integer Overflow
---
- Occurs when a value is outside the range that the [[Datatype|datatype]] can hold

>[!question] How to check for integer vverflow
> If the [[#Sign Bit]] of the two operand is the **same**, and the **sign bit of the result** is **different**. Then we have an **[[Integer (整数)]] overflow**.  
> 
> How can the sum of two positive integer result in a negative number, and how the sum of two negative integer result in a positive number?
> 
> The **sum** of a **negative** and **positive** integer **guaranteed** **no integer overflow**.

## Excess Representation
---
- Another way to represent positive and negative numbers with binary
- A fixed bias (offset, excess) is subtracted from the represented value to get the actual value
- The range of value it can represent is $−B$ to $(2^n−1)−B$ where B is the bias

>[!example] Excess 3 with 4 bits
> The bias is 3 (in binary: `0011`). The number represented by binary `0000` would be $0−3=−3$, `0001` would represent −2, and so on.

>[!important]
> To get an evenly distributed number of positive and negative numbers, the excess we use for an n-bit number is $2^{n-1}$.

>[!question]- Given an 8-bit number in excess-100 representation. How many negative values are there in this number representation?
> $100$
## Reference 
---
- [Sign-and-Magnitude Addition and Subtraction](https://www.youtube.com/watch?v=sJXTo3EZoxM)
- [Hello-Algo](https://www.hello-algo.com/chapter_data_structure/number_encoding/#331)