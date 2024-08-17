---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
  - computer_organisation
Creation Date: 2024-08-17, 14:21
Last Date: 2024-08-17T14:52:41+08:00
References: 
draft: 
description: 
---
## Abstract
---
>[!important] Uninitialised variables
> Uninitialised variables in C contain **unknown values**, unlike [[Java]] which sets $0$ for uninitialised [[Datatype#Primitive Datatype]]!

>[!question] How to find the spaces used by a datatype?
> `sizeof(int)` returns the size of `int` in the current machine.

>[!important] Importance of explicit datatype
> C uses the [[Datatype|data type]] to determine the underlying [[Instruction|instruction]] to be generated. Different instructions are used to handle [[Floating-Point Encoding (浮点数编码)|floating-point numbers]] and [[Integer Encoding (数字编码)|integers]].


>[!question] What is char in C?
> Char is basically a 8-bit integer, but usually used to hold a [[Character Encoding (字符编码）|character]] using [ascii table](https://www.ascii-code.com/).
> 
> **Everything in C is an number!**


>[!important] No boolean type in ANSI C!
> `0` is used to represent `false`, any other value is used to represent `true`.


## C Mixed-type Arithmetic Operation
---
1. `10/4.0` will give us float `2.0`, but if we `int p = 10/4.0`, `p` will have a value of `2` which converts from float `2.0` to int `2`
2. `10 / 4.0` involves a float operand, so the result is the floating-point value `2.5`. If you assign this to an `int` variable like `int p = 10 / 4.0`, the fractional part is truncated, and `p` will store the integer value `2`.

### Type Casting in C
1. `float p = (float) 6 / 4` will result in `p = 1.5`. The `(float)` explicitly converts the integer `6` to a float before the division occurs. This ensures that floating-point division is performed, yielding a floating-point result
2. `float p = (float) (6 / 4)` will result in `p = 1.0`. The expression within the parentheses `(6 / 4)` is evaluated first. Since both operands are integers, integer division is performed, resulting in `1`. This integer value is then converted to a float using the `(float)` cast.