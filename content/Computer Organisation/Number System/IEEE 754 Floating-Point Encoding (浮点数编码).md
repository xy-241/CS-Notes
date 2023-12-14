---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-12T15:43:00
Last Date: 2023-12-10T19:01:12+08:00
References: 
---
## Abstract
---
 - **sign** 0 for positive, 1 for negative
 - **exponent** by default -127 with all bits set to 0
 - **mantissa** takes the binary behind the decimal place after normalisation (the yellow circle part) 
 - Reliable precision is *7 decimal digits*
![[IEEE 754 Floating-Point Rep.png]]


## Approximation of Real Number
---
- mantissa gives the precision
![[floating_point_as_an_approximation.png]]
- From 1 to 2 (2^0-2^1), there are 23 bits of mantissa used for precision after decision point
- For 2 to 4 (2^1-2^2), there are 22 bits of mantissa used for precision after decision point, one of the bit is used to present the whole number before decimal point
- With every range of 2, the precision after the decimal point is reduced by 2
- Thus, the precision of the number after decimal point is getting worse as the number getting bigger


## Normalised Number
---
- The range of real numbers between 0 and smallest [[Normalised Number]] isn't covered, covered by [[#Subnormal Number (Denormalized Number)]]
![[normal_number_range.png]]
- The 1 is implicit when exponent isn't 0. When exponent is 0, we get [[#Subnormal Number (Denormalized Number)]]
![[implicit_1.png]]
### Smallest positive [[Normalised Number]]
- One bit for *exponent* to differentiate from [[#Subnormal Number (Denormalized Number)]]
![[smallest_normalized_number.png]]
### Biggest positive [[Normalised Number]]
- All 1s for *exponent* means [[#Infinity]]
![[biggest_normalised_number.png]]


## Subnormal Number (Denormalized Number)
---
- Fill up the gap between 0 and the smallest [[#Normalised Number]]
- Without, we will get a 0 if the difference between 2 numbers is smaller than the smallest [[#Normalised Number]]
 ![[importance_of_subnormal.png]]
 >[!caution] In non-debug mode, Subnormal Number maybe turned off for performance reasons, and this may lead to unexpected errors
### Smallest positive [[Subnormal Number (Denormalized Number)]]
- The exponent bias is fixed at -126 when denormalised, and 0 is implicit instead of 1
![[smallest_denormalized_exponent.png]] 

### Biggest [[Subnormal Number (Denormalized Number)]]
- [[#0]] when Mantissa bits are all 0
![[biggest_denormalized.png]]




## 3 Special Cases
---
### 0
- Both Exponent & Mantissa is 0
![[float_0.png]]

### Infinity
- Exponent is 255, but Mantissa is 0
![[float_inf.png]]

### NaN
- Exponent is 255 & Mantissa isn't 0
![[float_NaA.png]]

## Tips 
---
- When it comes to store a large whole number, use `long` to represent, because floating options like `double` may have precision loss issues
- Usually [[Converted to Hex format]] for better readability 
 - [Online Converter](https://www.h-schmidt.net/FloatConverter/IEEE754.html) to visualise better

## Side Notes
---
### Floating-point rounding error
- Binary representation that requires infinite precision 
- Decimal number like 0.1 in binary representation is like 1/3 in decimal presentation. With limited precision (32bits), we will lose some precision. That is why 0.1+0.2 in binary isn't strictly 0.3

## References 
---
1. [Hello Algo](https://www.hello-algo.com/chapter_data_structure/number_encoding/#332)
2. [CS2100 Week 1 Lecture](https://www.comp.nus.edu.sg/~cs2100/2_resources/lectures.html)
3. [SimonDev](https://www.youtube.com/watch?v=Oo89kOv9pVk)