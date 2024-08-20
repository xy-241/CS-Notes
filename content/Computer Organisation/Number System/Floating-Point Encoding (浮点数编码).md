---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-12T15:43:00
Last Date: 2024-08-18T16:59:10+08:00
References: 
---
   ## Abstract
---

![[IEEE 754 Floating-Point Rep.png|500]]

- Based on the [IEEE 754 Standard](https://en.wikipedia.org/wiki/IEEE_754)
- 32 bits in total 
- **Sign:** $0$ indicates a positive number, $1$ indicates a negative number
- **Exponent:** Comes with a bias of $- 127$, represented by all exponent bits set to 0. To obtain a positive exponent, set the 8th (most significant) bit to `1`, resulting in a value of `128`
- **Mantissa:** This represents the **fractional part of the number** after [[#Normalised Number|normalisation]]. The binary digits following the decimal point are included in the mantissa.

>[!question] Why make it so complicated?
> A more intuitive way to represent numbers with decimal points is to use **fixed-point**, where we allocate a certain number of bits for the whole number part and a certain number of bits for the fractional part. However, floating-point encoding allows us to use the same number of bits to represent **both very large and very small numbers, with high precision** thanks to the use of **exponent**.

>[!important] How Mantissa Precision Varies with Exponent
> ![[floating_point_as_an_approximation.png]]
> 
> The **mantissa** in IEEE 754 floating-point representation **determines the precision** of a number. Let's analyze how precision changes across different ranges:
> - **Range 1 to 2 ($2^0$ to $2^1$):** All 23 bits of the mantissa contribute to the precision after the decimal point.
> - **Range 2 to 4 ($2^1$ to $2^2$):** One bit is used to represent the whole number (2) before the decimal point, leaving 22 bits for precision after the decimal.
> - **Generalisation:** For every increase in the exponent by 1 (doubling the range), the precision after the decimal point decreases by a factor of 2. This is because one more bit is allocated to representing the whole number part.


>[!tip]
> To store large whole numbers, use the `long` data type. Floating-point options like `double` may introduce precision loss.
> 
> For improved readability, convert binary representations to hexadecimal. 
> 
> Here is an [Online Converter](https://www.h-schmidt.net/FloatConverter/IEEE754.html) to help visualising the floating-point encoding better.

>[!question] Why 0.1 + 0.2 = 0.30000000000000004?
> For numbers whose binary representation requires **infinite precision**, like the decimal number $0.1$, the binary equivalent is analogous to representing $\frac{1}{3}$ in decimal form. 
> 
> With limited precision (e.g., 32 bits), we inevitably lose some accuracy. This is why 0.1 + 0.2 in binary floating-point arithmetic does not strictly equal 0.3.


>[!tip] Converting from Decimal to Float (IEEE 754 Single Precision)
> ![[decimal_to_float.png|300]]
> 
> 1. Convert [[Number System#Decimal to Binary|Decimal to Binary]]
> 2. Convert the binary form to [[#Normalised Number|normalised form]]
> 3. Calculate the Exponent Field by adding the bias $127$ to the exponent & convert the sum to binary (8 bits)
> 4. Determine the Sign Bit, $0$ for positive, $1$ for negative
> 5. Assemble the Float remember 1 bit for sign , 8 bit for exponent and 23 bits for mantisa 
> 6. Convert to Hexadecimal by grouping the 32 bits into groups of 4, and convert each group to its hexadecimal equivalent

## Normalised Number
---

![[implicit_1.png|500]]

- In the context of [[Floating-Point Encoding (浮点数编码)]], a normalised number is one where the **leading digit** (the digit to the left of the decimal point) is **always** $1$. This $1$ is not explicitly stored **but is implicit**, thus one more bit for the mantissa for a **higher accuracy**


>[!important]
> ![[normal_number_range.png|500]]
>
> The range of real numbers between $0$ and the [[#Smallest Positive Normalised Number]] is not covered by normalised numbers, but by [[#Subnormal Number|subnormal numbers]]. 
> 
> The leading 1 is implicit in **normalised numbers when the exponent is not zero**. When the exponent is zero, we have a subnormal number, and the implicit leading 1 is no longer assumed.

### Smallest Positive Normalised Number
![[smallest_normalized_number.png]]

- One bit for *exponent* to differentiate from [[#Subnormal Number]]

### Biggest Positive Normalised Number
![[biggest_normalised_number.png]]

- All 1s for *exponent* means [[#Infinity]]



## Subnormal Number
---
- Also known as **Denormalised Number**
- Fill up the gap between 0 and the smallest [[#Normalised Number]]
- Without, we will get a 0 if the difference between 2 numbers is smaller than the smallest normalised number

 ![[importance_of_subnormal.png|500]]
 >[!caution] 
 > In non-debug mode, subnormal number maybe turned off for performance reasons, and this may lead to unexpected errors.
 
 
### Smallest Positive Subnormal Number
- The exponent bias is fixed at -126 when denormalised, and 0 is implicit instead of 1
![[smallest_denormalized_exponent.png]] 

### Biggest Positive Subnormal Number
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



## References 
---
- [Wait, so comparisons in floating point only just KINDA work? What DOES work?](https://youtu.be/Oo89kOv9pVk?si=noZ4DOmQWjy7uEsp)
- [Why Is This Happening?! - Floating-point rounding error](https://youtu.be/2gIxbTn7GSc?si=vEfOf70rThDTwYOj)
- [Hello Algo](https://www.hello-algo.com/chapter_data_structure/number_encoding/#332)
- [CS2100 Week 1 Lecture](https://www.comp.nus.edu.sg/~cs2100/2_resources/lectures.html)