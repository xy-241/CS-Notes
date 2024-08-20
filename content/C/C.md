---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
Creation Date: 2023-12-22, 23:53
Last Date: 2024-08-17T14:54:27+08:00
References: 
draft: 
---
## Abstract
---

>[!important] Entry point function
> A C program must **have** a [[Function|function]] with the [[Function#Function Signature|function signature]] `int main()`. It is **the** standardised entry point, **ensuring** proper interaction with the operating system.


>[!question] What does `a = b = c = 3 + 6` mean?
> `9` assigned to variables `c`, `b` and `a`.
> 
> `c = 3 + 6` returns `9` which is assigned to `b`, then `b = 9` returns `9` which is assigned to `a`. `c = 3 + 6` returns `9` is known as **side effect**.

>[!attention] Remainder operation in C
> `10 % 4` gives `2`, `-10 % 4` gives `-2`. The **sign of the dividend is preserved**.

## C Terminology
---

| Terminology | Meaning                             |
| ----------- | ----------------------------------- |
| C Vector    | Basically [[Array#Dynamic Array]]   |
| C Structs   | Allow grouping of heterogenous data |

## C IO
---
>[!important] Read float
> `scanf("%f", &miles);` reads in a [[Floating-Point Encoding (浮点数编码)|float number]]. The value it returns is the total number of successfully matched and assigned input items.
> 
> `"%f"` is known as a [[c_format_string.png|format string]], `&miles` is known as a input list.

>[!important] Print float
> `printf("That equals %9.3f km.\n", kms);` prints a floating-point number to the screen, formatted to occupy a **minimal width** of 9 characters (including the decimal point and any padding spaces if the number is shorter). The number will be displayed with 3 decimal places of precision.
> 
> `"That equals %9.3f km.\n"` is known as a format string, `kms` is known as print list. `\n` is known as [[escape_sequence.png|escape sequence]] to format the string.




