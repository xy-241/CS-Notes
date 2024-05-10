---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-17, 19:58
Last Date: 2024-05-10T19:39:55+08:00
References: 
---
## Abstract
---
- Provides standardised way to express measurements, allowing for easy comparison of values

## Bit
---
- Holds a value of `0` or `1`
</br>

- Let `n` be the number of bits we have, where `n>=1`
- With `n` bits, we can represent $2^{n}$ values
$$
2^{n}= 2^{n-1} + 2^{n-2} + \cdots + 2^{0}
$$

>[!example] Given 2 bits
>When `n` is $2$, `2^n = 4`, 4 values: `00`, `01`, `10`, `11` which are corresponding to 0,1,2,3.

### Maximum value of n bits
**Approach 1:** $2^{n} -1$

**Approach 2:** $2^{n-1} + \ldots + 2^0$


>[!example] Given 2 bit
>`n` is $2$
>- **Approach 1:** `2^2 - 1 = 3`
>- **Approach 2:** `2^1 + 2^0 = 3`


### Bit String
- A collection of 0s & 1s

## Byte
---
- A group of 8 [[#Bit]]
- The smallest unit a programming language uses to store the data and instruction

>[!question] KB vs KiB?
> `B` refers to **Byte**, the `K` refers to $10^3$ and `Ki` refers to $2^{10}$. So `1KB` is **$1000$  bytes** and `1KiB` is **$1024$ bytes**.

## Word
---
- The size of a word can vary depending on the [[Instruction Set Architecture (ISA)]]
- It typically represents the amount of data that the [[CPU]] processes in a single [[Operation]]
- Common word sizes are 16 bits, 32 bits, or 64 bits


## Qubit
---
- Waiting to be explored