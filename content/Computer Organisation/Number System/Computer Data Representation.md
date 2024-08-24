---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-17, 19:58
Last Date: 2024-08-17T16:03:29+08:00
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

>[!question] How many bits are required to represent a decimal number?
> Given $M$ is a decimal number, the number of bits required to represent it is the ceiling of log₂ M, which is represented with $\lceil \log_2 M \rceil$.

### Bit String
- A collection of 0s & 1s

## Byte
---
- A group of 8 [[#Bit]]
- The smallest unit a programming language uses to store the data and instruction

>[!question] KB vs KiB?
> `B` refers to **Byte**, the `K` refers to $10^3$ and `Ki` refers to $2^{10}$. So `1KB` is **$1000$  bytes** and `1KiB` is **$1024$ bytes**.
To find the number of bits needed to represent a decimal number \( N \):

### Calculating the Number of Bits to Represent a Decimal Number

To find the number of bits needed to represent a decimal number $N$:

1. **Use the formula**: 
   $$
   \text{Number of bits} = \lceil \log_2(N + 1) \rceil
   $$
   
2. **Example**: For $N = 150$:
   - Add 1: $150 + 1 = 151$
   - Calculate: $\log_2(151) \approx 7.238$
   - Round up: $\lceil 7.238 \rceil = 8$

Therefore, you need 8 bits to represent 150.



## Word
---
- The size of a word can vary depending on the [[Instruction Set Architecture (ISA)]]
- A single unit of transfer from the [[Main Memory]] to the [[CPU]] and within the CPU
- Common word sizes are 16 bits, 32 bits, or 64 bits
- typically a word in mips is 32 bits made up of $4 * 8 bytes$ which corresponds to the size of the register 


## Qubit
---
- Waiting to be explored