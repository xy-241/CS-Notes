---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-07-23T19:17:36+08:00
Last Date: 2024-06-11T17:54:40+08:00
References: 
---
## Abstract
---


| Binary in Gray Code | Decimal |
| ------------------- | ------- |
| $000$               | $0$     |
| $001$               | $1$     |
| $011$               | $2$     |
| $010$               | $3$     |
| $110$               | $4$     |
| $111$               | $5$     |
| $101$               | $6$     |
| $100$               | $7$     |


- Also known as **Reflected Binary Code**, **Unit Distance Code**, **Minimum Error Code**
- **Another way** of **representing binary number**, the [[Computer Data Representation#Bit String]] is considered as [[#Unweighted Code]]

>[!success] Reduced bit switching operation
> Only **one bit** is **changed** at any **adjacent pair**. 

>[!important]
> Can be used to generate [[Karnaugh Map]].

### Unweighted Code
- The position of the digit doesn't have value

## Reflect and Prefix
---
![[gray_code_reflect_prefix.svg]]

- A method used to generate [[Gray Code]] that **maps** to **decimal number**

>[!important]
> If we want to have the Gray code for **$n$ bit**, we need to first have the **$n-1$-bit** Gray code! This is because the $n$-bit Gray code is the **reflection** of the $n-1$-bit Gray code, with a **prefix $0$** for **first half** and **prefix $1$** for the **second half**, as shown in the diagram above.

## References
---
- [Gray Code Explained | Gray code to Binary and Binary to Gray code Conversion - YouTube](https://youtu.be/MsMkiTcc_w0?si=XiXhoSeMIdjoWnlt)
- [Gray Code - Friday Minis 162 - YouTube](https://youtu.be/jOCTDgmFlGs?t=78)