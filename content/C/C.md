---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
Creation Date: 2023-12-22, 23:53
Last Date: 2024-08-15T23:01:42+08:00
References: 
draft: 
---
## Abstract
---

>[!important] Entry point function
> A C program must **have** a [[Function|function]] with the [[Function#Function Signature|function signature]] `int main()`. It is **the** standardised entry point, **ensuring** proper interaction with the operating system.

>[!important] Uninitialised variables
> Uninitialised variables in C contain **unknown values**, unlike [[Java]] which sets $0$ for uninitialised [[Datatype#Primitive Datatype]]!

>[!important] Importance of explicit datatype
> C uses the [[Datatype|data type]] to determine the underlying [[Instruction|instruction]] to be generated. Different instructions are used to handle [[Floating-Point Encoding (浮点数编码)|floating-point numbers]] and [[Integer Encoding (数字编码)|integers]].

>[!question] What is char in C?
> Char is basically a 8-bit integer, but usually used to hold a [[Character Encoding (字符编码）|character]] using [ascii table](https://www.ascii-code.com/).
> 
> **Everything in C is an number!**

>[!question] How to find the spaces used by a datatype?
> `sizeof(int)` returns the size of `int` in the current machine.

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

