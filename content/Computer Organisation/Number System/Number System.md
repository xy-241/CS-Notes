---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
  - c
Creation Date: 2023-12-17, 20:32
Last Date: 2024-08-17T16:57:57+08:00
References: 
---
## Abstract
---

| Decimal | Binary | Hexadecimal |
| ------- | ------ | ----------- |
| $0$     | $0000$ | $0$         |
| $1$     | $0001$ | $1$         |
| $2$     | $0010$ | $2$         |
| $3$     | $0011$ | $3$         |
| $4$     | $0100$ | $4$         |
| $5$     | $0101$ | $5$         |
| $6$     | $0110$ | $6$         |
| $7$     | $0111$ | $7$         |
| $8$     | $1000$ | $8$         |
| $9$     | $1001$ | $9$         |
| $10$    | $1010$ | $A$         |
| $11$    | $1011$ | $B$         |
| $12$    | $1100$ | $C$         |
| $13$    | $1101$ | $D$         |
| $14$    | $1110$ | $E$         |
| $15$    | $1111$ | $F$         |
>[important] Conversion between bases
> We convert from one base to decimal base, then from decimal base convert to the desired base.

### Whole Number Decimal to Binary
![[decimal_to_binary_1.png|300]]

- Keep diving by 2 until we get 0
- Then the binary form counts from **bottom to top**

>[!important]
> The idea applies to other bases; replace 2 with the corresponding [[#Radix|radix]].

### Fraction Decimal to Binary
![[decimal_to_binary_2.png]]

- Keep multiple by 2 until we get **1** or **infinite loop**
- Then the binary form counts from **top to bottom**

>[!important]
> The idea applies to other bases; replace 2 with the corresponding [[#Radix|radix]].

## Radix
---
$$
(a_k a_{k-1} ... a_1 a_0 . a_{-1} a_{-2} ... a_{-m})_n = 
a_k \cdot n^k + a_{k-1} \cdot n^{k-1} + ... + a_1 \cdot n^1 + a_0 \cdot n^0 
+ a_{-1} \cdot n^{-1} + a_{-2} \cdot n^{-2} + ... + a_{-m} \cdot n^{-m}
$$

- Also known as **Base**
- The **number of unique digits**, including zero, used to **represent numbers** within that system
- The formula above can be used to convert any base-R to a  decimal number

>[!important]
> Weights are represented in powers of the radix (R). In base-2, weights are expressed in terms of powers of 2, and in base-10, they are expressed in terms of powers of 10.

>[!important] Radix representation in C
> In C, by default, all numbers are interpreted as base-10 (decimal). To represent numbers in other bases, you can use specific prefixes:
> - Prefix `0` for octal (base-8) representation
> - Prefix `0x` or `0X` for hexadecimal (base-16) representation